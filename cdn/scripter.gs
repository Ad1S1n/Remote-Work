function doGet(e){
  const strOutput = JSON.stringify(getSheetInfo());
  Logger.log(strOutput)
  return ContentService.createTextOutput(strOutput).setMimeType(ContentService.MimeType.JSON);
}

function getSheetInfo() {
  const id = '1R1ZDu74Etfsx4M8dTTBGDrevYIoFnZSt45AeEQ7dZ_0'
  const ss = SpreadsheetApp.openById(id);
  const sheet = ss.getSheetByName('live-Grid view')
  const range = sheet.getDataRange();
  const data = range.getValues()
  data.forEach(row =>{
  })
  return data
}