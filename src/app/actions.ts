"use server";

import { contactSchema } from "@/lib/schemas/contact";
import { siteConfig } from "@/lib/data/site";

export interface ContactActionResult {
  success: boolean;
  error?: string;
}

export async function submitContactForm(
  values: unknown,
): Promise<ContactActionResult> {
  const parsed = contactSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, error: parsed.error.issues[0]?.message ?? "Invalid input" };
  }

  const { name, email, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    // No email provider configured yet — log server-side so the form is still
    // demonstrable end-to-end. Set RESEND_API_KEY to enable real delivery.
    console.warn(
      "[contact] RESEND_API_KEY not set — skipping email delivery.",
      { name, email, message },
    );
    return { success: true };
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `${siteConfig.name} Portfolio <onboarding@resend.dev>`,
        to: siteConfig.email,
        reply_to: email,
        subject: `New message from ${name}`,
        text: `From: ${name} <${email}>\n\n${message}`,
      }),
    });

    if (!response.ok) {
      throw new Error(`Resend responded with ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error("[contact] Failed to send email", error);
    return { success: false, error: "Something went wrong. Please try again or email me directly." };
  }
}
