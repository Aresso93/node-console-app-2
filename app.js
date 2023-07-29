const fs = require('fs');

const inputUrl = process.argv[2];
const outputUrl = process.argv[3];

let data = readFile(inputUrl);

if (data) {
  const rows = data.split(/\r?\n/);
  const result = transFormData(rows);

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

function transFormData(rows) {
  const header = rows.shift();
  console.log('header: ' + header + ' ' + typeof header);

  const headerArray = header.split(',');
  console.log('headerArray: ' + headerArray + ' ' + typeof headerArray);

  let students = [];

  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const rowArray = row.split(',');

    let student = {};

    console.log('rowArray: ' + rowArray[1] + ' ' + typeof rowArray);

    for (let j = 0; j < headerArray.length; j++) {
      const property = headerArray[j];
      const value = rowArray[j];

      student[property] = value;
    }

    students.push(student);
  }
  console.log(students);
  return JSON.stringify(students);
  
}




    //A1)tipizzare i valori nel json
    //A2)aggiungere un parametro alla applicazione che mi permette di indicare il carattere divisorio
    //A3)gestire la possibilità che nel csv ci siano degli spazi non voluti 

    //console.log('rows: ' + rows);


    


//FATTO

    //1) creare una costante 'header' con la prima riga che avrete tolto a rows
    //fare la funzione che toglie il primo elemento dall'array

    //FATTO

    //2) create una costante 'headerArray' splittando la stringa header sulle virgole;
    //un array di stringhe separate da virgole, quindi

    //FATTO

    //3) create un array temporaneo chiamato students (vuoto);

    //FATTO

    //4) ciclate sull'array rows;
        //4a) create una costante rowArray splittando la singola row sulle virgole;
        //4b) create un oggetto vuoto chiamato student;
        //4c) ciclate sull'headerArray;
            //4c1) per ogni elemento dell'headerArray aggiungo una proprietà all'oggetto student
                // student[headerArray[j]] = rowArray[j];
        //4d) aggiungo student a students
    //5) ritorno JSON.stringify di students