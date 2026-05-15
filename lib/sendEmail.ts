import sgMail from "@sendgrid/mail";
import { marked } from "marked";

// Set SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export async function sendNewsEmail(content: string): Promise<void> {
  try {
    // Convert Markdown → HTML
    const formattedContent = marked.parse(content);

    const msg = {
      to: "vivekupasani10th@gmail.com",
      from: "vivekupasani984@gmail.com", // Must be verified in SendGrid
      subject: "Top 20 India News Today by Mr Khabri",
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#f4f4f4;padding:20px 0;">
    <tr>
      <td align="center">
        <table width="800" cellpadding="0" cellspacing="0" border="0" style="max-width:800px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 20px rgba(0,0,0,0.08);">
          
          <!-- Header -->
          <tr>
            <td style="background:#111827;padding:30px;text-align:center;">
              <h1 style="color:#ffffff;margin:0;font-size:32px;">
                🇮🇳 Mr Khabri
              </h1>
              <p style="color:#d1d5db;margin-top:8px;font-size:16px;">
                Top 20 India News Today
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px;">
              <div style="
                color:#1f2937;
                font-size:16px;
                line-height:1.8;
              ">
                ${formattedContent}
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f9fafb;padding:20px;text-align:center;font-size:14px;color:#6b7280;">
              Powered by Mr Khabri AI • Daily India News Digest
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
      `,
    };

    await sgMail.send(msg);

  } catch (error: any) {
    console.error("❌ SendGrid Error:", error.response?.body || error.message || error);
  }
}