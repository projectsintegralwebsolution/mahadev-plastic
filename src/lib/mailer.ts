import nodemailer from "nodemailer";
import { COMPANY_INFO } from "@/data/company";

export interface InquiryFormData {
  name: string;
  email: string;
  phone: string;
  product?: string;
  message: string;
}

export interface MailerResult {
  success: boolean;
  messageId?: string;
  details: {
    customer: string;
    owner: string;
    technical: string;
  };
}

// Create Nodemailer Transporter
export async function getTransporter() {
  const host = process.env.SMTP_HOST || "smtp.gmail.com";
  const port = parseInt(process.env.SMTP_PORT || "587", 10);
  const secure = process.env.SMTP_SECURE === "true";
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  // If credentials are provided, use standard authenticated SMTP transporter
  if (user && pass) {
    return nodemailer.createTransport({
      host,
      port,
      secure,
      auth: {
        user,
        pass,
      },
      connectionTimeout: 15000,
    });
  }

  // Fallback for development/testing: use instant local transporter
  console.log("ℹ️ [Mailer] No external SMTP credentials configured in .env. Using jsonTransport fallback for development...");
  return nodemailer.createTransport({
    jsonTransport: true,
  });
}

/**
 * Send Contact & Product Inquiry Emails to:
 * 1. Customer (Confirmation & Auto-Responder) -> data.email
 * 2. Website Owner (Lead Alert)              -> mahadevplastic2019@gmail.com
 * 3. Technical Partner (System Notification)  -> integralwebsolution@gmail.com
 */
export async function sendInquiryEmail(data: InquiryFormData): Promise<MailerResult> {
  const transporter = await getTransporter();

  const ownerEmail = process.env.OWNER_EMAIL || "mahadevplastic2019@gmail.com";
  const agencyEmail = process.env.ADMIN_NOTIFY_EMAIL || "integralwebsolution@gmail.com";
  const senderAddress = process.env.SMTP_USER || "mahadevplastic2019@gmail.com";
  const fromEmail = process.env.SMTP_FROM || `"Mahadev Plastic" <${senderAddress}>`;

  const submissionDate = new Date().toLocaleString("en-IN", {
    timeZone: "Asia/Kolkata",
    dateStyle: "full",
    timeStyle: "medium",
  });

  const productName = data.product?.trim() || "Acrylic Sheets";

  const customerHtml = generateCustomerEmailHtml(data, productName, submissionDate);
  const ownerHtml = generateOwnerLeadEmailHtml(data, productName, submissionDate);
  const technicalHtml = generateTechnicalAuditEmailHtml(data, productName, submissionDate);

  console.log(`📨 [Mailer] Dispatching 3 emails for inquiry from ${data.name} (${data.email}):`);
  console.log(`   1. Customer Confirmation    -> ${data.email}`);
  console.log(`   2. Website Owner Alert      -> ${ownerEmail}`);
  console.log(`   3. Technical Notification   -> ${agencyEmail}`);

  // Send all 3 emails in parallel with individual error resilience (Promise.allSettled)
  const [customerResult, ownerResult, agencyResult] = await Promise.allSettled([
    // 1. Email to Customer
    transporter.sendMail({
      from: fromEmail,
      to: data.email,
      replyTo: ownerEmail,
      subject: `Inquiry Confirmation - Mahadev Plastic | Acrylic Sheet Manufacturer [${productName}]`,
      html: customerHtml,
    }),

    // 2. Email to Website Owner (mahadevplastic2019@gmail.com)
    transporter.sendMail({
      from: fromEmail,
      to: ownerEmail,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `🔥 [New Inquiry Alert] ${productName} - Lead from ${data.name}`,
      html: ownerHtml,
    }),

    // 3. Email to Technical Agency (integralwebsolution@gmail.com)
    transporter.sendMail({
      from: fromEmail,
      to: agencyEmail,
      replyTo: `"${data.name}" <${data.email}>`,
      subject: `📋 [System Lead Audit] ${productName} - ${data.name} | Mahadev Plastic`,
      html: technicalHtml,
    }),
  ]);

  const resultsSummary = {
    customer: customerResult.status === "fulfilled" ? "sent" : `failed: ${(customerResult as PromiseRejectedResult).reason}`,
    owner: ownerResult.status === "fulfilled" ? "sent" : `failed: ${(ownerResult as PromiseRejectedResult).reason}`,
    technical: agencyResult.status === "fulfilled" ? "sent" : `failed: ${(agencyResult as PromiseRejectedResult).reason}`,
  };

  console.log("📬 [Mailer Results]:", resultsSummary);

  const primaryMessageId =
    ownerResult.status === "fulfilled" ? (ownerResult.value as any)?.messageId : undefined;

  return {
    success: ownerResult.status === "fulfilled" || customerResult.status === "fulfilled",
    messageId: primaryMessageId,
    details: resultsSummary,
  };
}

// ============================================================================
// HTML Email Templates (Designed with Mahadev Plastic Navy #0D1B5F & Gold #F4B400)
// ============================================================================

/**
 * 1. Customer Confirmation Email
 */
function generateCustomerEmailHtml(
  data: InquiryFormData,
  productName: string,
  submissionDate: string
): string {
  const escapedName = escapeHtml(data.name);
  const escapedEmail = escapeHtml(data.email);
  const escapedPhone = escapeHtml(data.phone);
  const escapedProduct = escapeHtml(productName);
  const escapedMessage = escapeHtml(data.message);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Inquiry Confirmation - Mahadev Plastic</title>
  <style>
    body { margin: 0; padding: 0; background-color: #F1F5F9; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B; -webkit-font-smoothing: antialiased; }
    table { border-collapse: collapse; }
    .wrapper { width: 100%; table-layout: fixed; background-color: #F1F5F9; padding: 32px 12px; }
    .main { background: #FFFFFF; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.06); border: 1px solid #E2E8F0; }
    .header { background: #0D1B5F; padding: 32px 30px 24px; text-align: center; border-bottom: 4px solid #F4B400; }
    .header h1 { color: #FFFFFF; margin: 0; font-size: 24px; font-weight: 800; letter-spacing: 0.5px; }
    .header p { color: #F4B400; margin: 6px 0 0; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; }
    .content { padding: 32px 30px; line-height: 1.6; }
    .badge { display: inline-block; background: #FEF9C3; color: #854D0E; border: 1px solid #FDE047; padding: 4px 14px; border-radius: 20px; font-size: 12px; font-weight: 700; margin-bottom: 20px; }
    .greeting { font-size: 18px; font-weight: 700; color: #0D1B5F; margin-bottom: 12px; }
    .summary-card { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px; margin: 24px 0; }
    .summary-title { font-size: 14px; font-weight: 700; color: #0D1B5F; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 14px; padding-bottom: 8px; border-bottom: 2px solid #F4B400; }
    .data-row { margin-bottom: 10px; font-size: 14px; }
    .data-label { color: #64748B; font-weight: 600; width: 140px; display: inline-block; }
    .data-value { color: #0F172A; font-weight: 600; }
    .msg-quote { background: #FFFFFF; border-left: 3px solid #F4B400; padding: 12px 14px; margin-top: 10px; font-size: 13.5px; color: #334155; border-radius: 0 6px 6px 0; border: 1px solid #E2E8F0; border-left-width: 3px; }
    .next-steps { background: #F0FDF4; border: 1px solid #BBF7D0; border-radius: 8px; padding: 16px 18px; margin: 24px 0; font-size: 13.5px; color: #166534; }
    .next-steps strong { color: #14532D; display: block; margin-bottom: 4px; font-size: 14px; }
    .cta-box { text-align: center; margin: 28px 0 10px; padding: 22px; background: #FFFBEB; border-radius: 10px; border: 1px solid #FDE68A; }
    .cta-btn-primary { display: inline-block; background: #0D1B5F; color: #FFFFFF !important; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 700; font-size: 13.5px; margin: 6px 4px; }
    .cta-btn-secondary { display: inline-block; background: #25D366; color: #FFFFFF !important; text-decoration: none; padding: 12px 24px; border-radius: 6px; font-weight: 700; font-size: 13.5px; margin: 6px 4px; }
    .footer { background: #0D1B5F; color: #CBD5E1; padding: 24px 30px; text-align: center; font-size: 12px; line-height: 1.6; border-top: 1px solid rgba(255,255,255,0.08); }
    .footer a { color: #F4B400; text-decoration: none; }
  </style>
</head>
<body>
  <div class="wrapper">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <div class="main">
            <!-- Header -->
            <div class="header">
              <h1>MAHADEV PLASTIC</h1>
              <p>Premier Acrylic Sheet Manufacturer in India &bull; Talasari, Maharashtra</p>
            </div>

            <!-- Content -->
            <div class="content">
              <span class="badge">&check; INQUIRY RECEIVED &amp; LOGGED</span>
              <div class="greeting">Dear ${escapedName},</div>
              <p style="margin: 0 0 14px; color: #334155; font-size: 15px;">
                Thank you for contacting <strong>Mahadev Plastic</strong>. We have successfully received your product inquiry regarding <strong>${escapedProduct}</strong>.
              </p>

              <!-- Summary Card -->
              <div class="summary-card">
                <div class="summary-title">Summary of Your Request</div>
                <div class="data-row"><span class="data-label">Product / Grade:</span> <span class="data-value" style="color: #0D1B5F;">${escapedProduct}</span></div>
                <div class="data-row"><span class="data-label">Your Name:</span> <span class="data-value">${escapedName}</span></div>
                <div class="data-row"><span class="data-label">Email Address:</span> <span class="data-value">${escapedEmail}</span></div>
                <div class="data-row"><span class="data-label">Phone Number:</span> <span class="data-value">${escapedPhone}</span></div>
                <div class="data-row"><span class="data-label">Logged On:</span> <span class="data-value">${submissionDate}</span></div>
                <div style="margin-top: 14px;">
                  <span class="data-label" style="display: block; margin-bottom: 6px;">Your Requirements / Specifications:</span>
                  <div class="msg-quote">${escapedMessage}</div>
                </div>
              </div>

              <!-- Next Steps -->
              <div class="next-steps">
                <strong>What Happens Next?</strong>
                Our technical sales and production engineering team in Talasari is reviewing your specifications. A dedicated sales manager will reach out with sheet availability, gauge tolerances, and direct wholesale factory pricing within <strong>2–4 business hours</strong>.
              </div>

              <!-- Direct Call / Urgent Assistance -->
              <div class="cta-box">
                <div style="font-size: 14.5px; font-weight: 700; color: #92400E;">Need Immediate Dispatch or Custom Cutting Assistance?</div>
                <div style="font-size: 12.5px; color: #78350F; margin-top: 4px; margin-bottom: 12px;">Our plant sales desk is active Monday through Sunday, 09:00 AM to 05:00 PM IST.</div>
                <div>
                  <a href="tel:${COMPANY_INFO.phoneRaw}" class="cta-btn-primary">&phone; Call Factory Desk: ${COMPANY_INFO.phone}</a>
                  <a href="https://wa.me/${COMPANY_INFO.phoneRaw}?text=Hello%20Mahadev%20Plastic,%20I%20have%20submitted%20an%20inquiry%20for%20${encodeURIComponent(productName)}" class="cta-btn-secondary">&#128172; WhatsApp Us</a>
                </div>
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              <strong>Mahadev Plastic - Manufacturing Plant &amp; Registered Office</strong><br>
              ${COMPANY_INFO.address.full}<br>
              Direct: <a href="tel:${COMPANY_INFO.phoneRaw}">${COMPANY_INFO.phone}</a> | Email: <a href="mailto:${COMPANY_INFO.email}">${COMPANY_INFO.email}</a><br>
              Official Website: <a href="https://mahadevplastic.com">https://mahadevplastic.com</a>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `;
}

/**
 * 2. Website Owner Notification Email (mahadevplastic2019@gmail.com)
 */
function generateOwnerLeadEmailHtml(
  data: InquiryFormData,
  productName: string,
  submissionDate: string
): string {
  const escapedName = escapeHtml(data.name);
  const escapedEmail = escapeHtml(data.email);
  const escapedPhone = escapeHtml(data.phone);
  const escapedProduct = escapeHtml(productName);
  const escapedMessage = escapeHtml(data.message);
  const cleanPhone = data.phone.replace(/[^0-9]/g, "");

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Website Lead - Mahadev Plastic</title>
  <style>
    body { margin: 0; padding: 0; background-color: #0F172A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B; }
    table { border-collapse: collapse; }
    .wrapper { width: 100%; table-layout: fixed; background-color: #0F172A; padding: 32px 12px; }
    .main { background: #FFFFFF; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
    .header { background: #0D1B5F; padding: 28px 30px; border-bottom: 4px solid #F4B400; text-align: left; }
    .header-tag { display: inline-block; background: #DC2626; color: #FFFFFF; font-size: 11px; font-weight: 800; letter-spacing: 1px; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; margin-bottom: 10px; }
    .header h1 { color: #FFFFFF; margin: 0; font-size: 21px; font-weight: 800; }
    .content { padding: 30px; }
    .lead-highlight { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 10px; padding: 20px; margin-bottom: 24px; }
    .table-lead { width: 100%; }
    .table-lead th { text-align: left; padding: 10px 0; color: #64748B; font-size: 13.5px; font-weight: 600; width: 35%; border-bottom: 1px solid #F1F5F9; }
    .table-lead td { padding: 10px 0; color: #0F172A; font-size: 14.5px; border-bottom: 1px solid #F1F5F9; }
    .category-pill { display: inline-block; background: #0D1B5F; color: #F4B400; font-weight: 700; font-size: 12.5px; padding: 4px 12px; border-radius: 4px; }
    .message-container { background: #FFFFFF; border: 2px solid #E2E8F0; border-radius: 8px; padding: 16px; margin: 16px 0 24px; font-size: 14px; line-height: 1.6; color: #1E293B; white-space: pre-wrap; font-family: monospace; }
    .action-row { text-align: center; margin: 24px 0 10px; }
    .btn-reply { display: inline-block; background: #0D1B5F; color: #FFFFFF !important; text-decoration: none; padding: 12px 20px; border-radius: 6px; font-weight: 700; font-size: 13.5px; margin: 4px 5px; }
    .btn-call { display: inline-block; background: #F4B400; color: #0D1B5F !important; text-decoration: none; padding: 12px 20px; border-radius: 6px; font-weight: 800; font-size: 13.5px; margin: 4px 5px; }
    .btn-whatsapp { display: inline-block; background: #25D366; color: #FFFFFF !important; text-decoration: none; padding: 12px 20px; border-radius: 6px; font-weight: 700; font-size: 13.5px; margin: 4px 5px; }
    .footer { background: #0D1B5F; color: #94A3B8; padding: 20px 30px; text-align: center; font-size: 12px; line-height: 1.6; border-top: 1px solid rgba(255,255,255,0.08); }
  </style>
</head>
<body>
  <div class="wrapper">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <div class="main">
            <!-- Header -->
            <div class="header">
              <span class="header-tag">&#128293; NEW WEBSITE INQUIRY LEAD</span>
              <h1>New Product Price Quote Request</h1>
              <p style="color: #94A3B8; font-size: 12px; margin: 6px 0 0;">Received through Mahadev Plastic Website Portal &bull; ${submissionDate}</p>
            </div>

            <!-- Content -->
            <div class="content">
              <!-- Lead Details Card -->
              <div class="lead-highlight">
                <table class="table-lead">
                  <tr>
                    <th>Customer Name</th>
                    <td><strong style="font-size: 16px; color: #0D1B5F;">${escapedName}</strong></td>
                  </tr>
                  <tr>
                    <th>Phone Number</th>
                    <td><a href="tel:${escapedPhone}" style="color: #0D1B5F; font-weight: 700; text-decoration: underline;">${escapedPhone}</a></td>
                  </tr>
                  <tr>
                    <th>Email Address</th>
                    <td><a href="mailto:${escapedEmail}" style="color: #0D1B5F; font-weight: 600; text-decoration: underline;">${escapedEmail}</a></td>
                  </tr>
                  <tr>
                    <th>Product Inquired</th>
                    <td><span class="category-pill">${escapedProduct}</span></td>
                  </tr>
                  <tr>
                    <th>Received Timestamp</th>
                    <td>${submissionDate}</td>
                  </tr>
                </table>
              </div>

              <!-- Message / Specification -->
              <div style="font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.5px;">Customer Inquiry Requirements:</div>
              <div class="message-container">${escapedMessage}</div>

              <!-- Action Buttons -->
              <div class="action-row">
                <a href="tel:${escapedPhone}" class="btn-call">&phone; Call Customer</a>
                <a href="mailto:${escapedEmail}?subject=Re: Mahadev Plastic Quote for ${encodeURIComponent(productName)}" class="btn-reply">&#9993; Reply via Email</a>
                ${cleanPhone ? `<a href="https://wa.me/${cleanPhone}?text=Hello%20${encodeURIComponent(data.name)},%20thank%20you%20for%20contacting%20Mahadev%20Plastic%20regarding%20${encodeURIComponent(productName)}." class="btn-whatsapp">&#128172; WhatsApp</a>` : ""}
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              This automated notification was generated by the Mahadev Plastic Node/Express Backend.<br>
              Recipient: <strong>mahadevplastic2019@gmail.com</strong> &bull; Portal: <a href="https://mahadevplastic.com" style="color: #F4B400; text-decoration: none;">mahadevplastic.com</a>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `;
}

/**
 * 3. Technical Partner / Agency Notification (integralwebsolution@gmail.com)
 */
function generateTechnicalAuditEmailHtml(
  data: InquiryFormData,
  productName: string,
  submissionDate: string
): string {
  const escapedName = escapeHtml(data.name);
  const escapedEmail = escapeHtml(data.email);
  const escapedPhone = escapeHtml(data.phone);
  const escapedProduct = escapeHtml(productName);
  const escapedMessage = escapeHtml(data.message);

  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Technical Notification - Integral Web Solution</title>
  <style>
    body { margin: 0; padding: 0; background-color: #0F172A; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #1E293B; }
    table { border-collapse: collapse; }
    .wrapper { width: 100%; table-layout: fixed; background-color: #0F172A; padding: 32px 12px; }
    .main { background: #FFFFFF; max-width: 600px; margin: 0 auto; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.3); }
    .header { background: #0D1B5F; padding: 26px 30px; border-bottom: 4px solid #3B82F6; text-align: left; }
    .header-tag { display: inline-block; background: #3B82F6; color: #FFFFFF; font-size: 10.5px; font-weight: 800; letter-spacing: 1px; padding: 4px 10px; border-radius: 4px; text-transform: uppercase; margin-bottom: 8px; }
    .header h1 { color: #FFFFFF; margin: 0; font-size: 20px; font-weight: 800; }
    .content { padding: 28px 30px; }
    .info-card { background: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 18px; margin-bottom: 20px; }
    .table-lead { width: 100%; }
    .table-lead th { text-align: left; padding: 8px 0; color: #64748B; font-size: 13px; font-weight: 600; width: 35%; border-bottom: 1px solid #F1F5F9; }
    .table-lead td { padding: 8px 0; color: #0F172A; font-size: 14px; border-bottom: 1px solid #F1F5F9; }
    .message-container { background: #FFFFFF; border: 1px solid #CBD5E1; border-radius: 6px; padding: 14px; margin: 12px 0 20px; font-size: 13.5px; line-height: 1.6; color: #1E293B; white-space: pre-wrap; font-family: monospace; }
    .footer { background: #0D1B5F; color: #94A3B8; padding: 18px 30px; text-align: center; font-size: 11px; line-height: 1.6; border-top: 1px solid rgba(255,255,255,0.08); }
  </style>
</head>
<body>
  <div class="wrapper">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
      <tr>
        <td align="center">
          <div class="main">
            <!-- Header -->
            <div class="header">
              <span class="header-tag">&#128203; TECHNICAL LEAD AUDIT &bull; INTEGRAL WEB SOLUTION</span>
              <h1>Lead Dispatch Audit: Mahadev Plastic</h1>
              <p style="color: #94A3B8; font-size: 12px; margin: 4px 0 0;">Server Timestamp: ${submissionDate}</p>
            </div>

            <!-- Content -->
            <div class="content">
              <div class="info-card">
                <table class="table-lead">
                  <tr>
                    <th>Client / Brand</th>
                    <td><strong>Mahadev Plastic</strong> (mahadevplastic.com)</td>
                  </tr>
                  <tr>
                    <th>Customer Name</th>
                    <td>${escapedName}</td>
                  </tr>
                  <tr>
                    <th>Customer Email</th>
                    <td><a href="mailto:${escapedEmail}" style="color: #2563EB;">${escapedEmail}</a></td>
                  </tr>
                  <tr>
                    <th>Customer Phone</th>
                    <td><a href="tel:${escapedPhone}" style="color: #2563EB;">${escapedPhone}</a></td>
                  </tr>
                  <tr>
                    <th>Product / Category</th>
                    <td><strong>${escapedProduct}</strong></td>
                  </tr>
                  <tr>
                    <th>Owner Alert Status</th>
                    <td>Dispatched to <strong>mahadevplastic2019@gmail.com</strong></td>
                  </tr>
                </table>
              </div>

              <div style="font-size: 12.5px; font-weight: 700; color: #475569; text-transform: uppercase;">Lead Payload:</div>
              <div class="message-container">${escapedMessage}</div>

              <div style="font-size: 12px; color: #64748B; background: #EFF6FF; border: 1px solid #BFDBFE; border-radius: 6px; padding: 10px 14px;">
                &check; Lead delivery successfully registered by Node/Express Backend. Automated monitoring by Integral Web Solution.
              </div>
            </div>

            <!-- Footer -->
            <div class="footer">
              Integral Web Solution &bull; Technical Support &amp; Maintenance for Mahadev Plastic<br>
              Recipient: <strong>integralwebsolution@gmail.com</strong>
            </div>
          </div>
        </td>
      </tr>
    </table>
  </div>
</body>
</html>
  `;
}

function escapeHtml(str: string): string {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
