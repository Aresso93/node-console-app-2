const fs = require('fs');
//const transformFromCSVToJSON = require('./json-converter');
//const transformFromJSONToCSV = require('./csv-converter')

const inputUrl = process.argv[2];
const splittedInputUrl = inputUrl.split('.');
const ext = splittedInputUrl[splittedInputUrl.length - 1]  
//questa è l'estensione, ovvero la stringa dell'input splittata all'ultimo punto. Poi abbiamo preso l'ultimo elemento di quell'array, per questo il -1

let transformFunction;

if (ext.toLowerCase().includes('json')) {
  
  transformFunction = require('./csv-converter')

  //checkiamo che nessuno abbia scritto l'estensione maiuscola per sbaglio
} else if (ext.toLowerCase().includes('csv')){  

  transformFunction = require('./json-converter');

} else {

  console.log('Estensione non valida. Non posso convertire i file ' + ext);
  process.exit();

}

const outputUrl = process.argv[3];

let divider = process.argv[4];
if (divider === undefined) {
  divider = ',';
}



console.log(divider);

let data = readFile(inputUrl);

if (data) {

  const result = transformFunction(data, divider);

  writeData(outputUrl, result);
}

function readFile(url) {
  try {
    const data = fs.readFileSync(url, 'utf8');
    return data;
  } catch (err) {
    console.error(err.message);
    return null;
  }
}

function writeData(url, data) {
  try {
    fs.writeFileSync(url, data);
  } catch (err) {
    console.error(err.message);
  }
}


