function doGet() {
  return HtmlService.createHtmlOutputFromFile('index');
}

function calculateArea(radius) {
  var area = Math.PI * radius * radius;
  return area;
}
