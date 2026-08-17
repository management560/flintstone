
const ADMIN_EMAIL = 'info@flinstonetrading.com';
const SHEET_NAME = 'Form Responses';

function doPost(e) {
  try {
    const payload = e && e.parameter ? e.parameter : {};
    const data = {
      Timestamp: new Date().toISOString(),
      Name: payload.name || '',
      Email: payload.email || '',
      Company: payload.company || '',
      Message: payload.message || ''
    };

    const sheet = getOrCreateSheet();
    sheet.appendRow([
      data.Timestamp,
      data.Name,
      data.Email,
      data.Company,
      data.Message
    ]);

    const subject = 'New enquiry from ' + data.Name;
    const body = [
      'You have received a new enquiry.',
      '',
      'Name: ' + data.Name,
      'Email: ' + data.Email,
      'Company: ' + data.Company,
      'Message: ' + data.Message,
      '',
      'Submitted at: ' + data.Timestamp
    ].join('\n');

    MailApp.sendEmail({
      to: ADMIN_EMAIL,
      subject: subject,
      body: body,
      replyTo: data.Email || ADMIN_EMAIL
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    console.error('Form submission failed:', error);

    return ContentService
      .createTextOutput(JSON.stringify({ status: 'error', message: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function getOrCreateSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Company', 'Message']);
  }

  if (sheet.getLastRow() === 0) {
    sheet.appendRow(['Timestamp', 'Name', 'Email', 'Company', 'Message']);
  }

  return sheet;
}
