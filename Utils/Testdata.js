const XLSX = require('xlsx');
const PATH = require("path");
const path = require('path/win32');
const { fileURLToPath } = require('url');

function Testdata(sheetName)
 {
 
    const workbook = XLSX.readfile(path.join(__dirname,"D:\Playwright\Playwright TestData\Demo_webshop.xlsx")); 
    const sheet = workbook.Sheet[sheetname]; 
    // Correct key: Sheets, not Sheet
    const jsonData = XLSX.utils.sheet_to_json(worksheet);
    return jsonData; // Correct utility fu
 }