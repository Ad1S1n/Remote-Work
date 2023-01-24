function doGet (request) {
  var parameters = 4; // The number of columns in your spreadsheet.
  var sheetname = 'Sheet1'; // TODO: Change this to the name of the sheet you want to target.
  var doc = SpreadsheetApp.openById(PropertiesService.getScriptProperties().getProperty('key')); // NOTE: 'key' must be the same up here as it is down below in setup();
  var sheet = doc.getSheetByName(sheetname);
  var lastrow = sheet.getLastRow();
  var rows = []; // The array we're going to push our data to.

  // getRange(startRow, startColumn, endRow, endColumn) - getRange specifies the range of cells where you want to pull in data.
  var range = sheet.getRange(2, 1, lastrow, parameters); // Set the first value to 2 if you don't want to include first row of sheet data.
  var values = range.getValues();

  // Set up our data's structure
  for (var row in values) {
    rows.push([]);
    for (var col in values[row]) {
      rows[row].push(values[row][col]);
    }
  }
  //return all the data
  return ContentService.createTextOutput(JSON.stringify({ "data": rows, "error": false })).setMimeType(ContentService.MimeType.JSON);
}

function setup () {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  PropertiesService.getScriptProperties().setProperty('key', doc.getId());
}