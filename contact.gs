/**
 * contact.gs — Google Apps Script for saranskumar.live contact form
 * Deploy as Web App: Execute as "Me", Access "Anyone"
 *
 * Sheet setup:
 *   Row 1 headers (exact, in this order):
 *   Timestamp | name | email | subject | message
 */

var TO_ADDRESS = "saranskumarwh@gmail.com";
var SHEET_NAME = "responses";

// ← Paste your Google Sheet ID here (the long string from the sheet URL)
var SHEET_ID = "YOUR_SHEET_ID_HERE";

// ─── Main POST handler ────────────────────────────────────────────────────────

function doPost(e) {
  try {
    var data = e.parameters; // URL-encoded form sends key:[] maps

    var name    = getField(data, "name");
    var email   = getField(data, "email");
    var subject = getField(data, "subject") || "Message from saranskumar.live";
    var message = getField(data, "message");

    // 1. Record to sheet (non-fatal — email still sends if this fails)
    try {
      recordToSheet({ name: name, email: email, subject: subject, message: message });
    } catch (sheetErr) {
      Logger.log("Sheet write failed: " + sheetErr);
    }

    // 2. Send notification email
    MailApp.sendEmail({
      to:      TO_ADDRESS,
      replyTo: email,
      subject: "[saranskumar.live] " + subject,
      htmlBody: buildEmailHtml(name, email, subject, message),
    });

    return jsonResponse({ result: "success" });

  } catch (err) {
    Logger.log(err);
    return jsonResponse({ result: "error", error: err.toString() });
  }
}

// ─── Sheet writer ─────────────────────────────────────────────────────────────

function recordToSheet(fields) {
  // Use getScriptLock() — getDocumentLock() doesn't work for standalone scripts
  var lock = LockService.getScriptLock();
  lock.waitLock(30000);

  try {
    var ss    = SpreadsheetApp.openById(SHEET_ID);
    var sheet = ss.getSheetByName(SHEET_NAME);

    // Create the sheet tab if it doesn't exist yet, then add headers
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(["Timestamp", "name", "email", "subject", "message"]);
    }

    sheet.appendRow([
      new Date(),
      fields.name,
      fields.email,
      fields.subject,
      fields.message,
    ]);
  } finally {
    lock.releaseLock();
  }
}

// ─── Email template ───────────────────────────────────────────────────────────

function buildEmailHtml(name, email, subject, message) {
  return [
    "<div style='font-family:sans-serif;max-width:600px'>",
    "  <h2 style='color:#262626;margin-bottom:4px'>" + htmlEscape(subject) + "</h2>",
    "  <p style='color:#666;font-size:13px;margin-top:0'>via saranskumar.live contact form</p>",
    "  <hr style='border:none;border-top:1px solid #e5e5e5;margin:16px 0'>",
    "  <table style='font-size:14px;border-collapse:collapse'>",
    "    <tr><td style='color:#888;padding:4px 12px 4px 0'>From</td>",
    "        <td>" + htmlEscape(name) + " &lt;" + htmlEscape(email) + "&gt;</td></tr>",
    "    <tr><td style='color:#888;padding:4px 12px 4px 0'>Subject</td>",
    "        <td>" + htmlEscape(subject) + "</td></tr>",
    "  </table>",
    "  <hr style='border:none;border-top:1px solid #e5e5e5;margin:16px 0'>",
    "  <div style='font-size:15px;line-height:1.6;white-space:pre-wrap'>",
             htmlEscape(message),
    "  </div>",
    "</div>",
  ].join("\n");
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

function getField(params, key) {
  var val = params[key];
  return val ? (Array.isArray(val) ? val[0] : val) : "";
}

function htmlEscape(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function jsonResponse(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}