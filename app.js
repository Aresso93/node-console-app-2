const fs = require('fs');

const inputUrl = process.argv[2];

const outputUrl = process.argv[3];

let data = readFile(inputUrl);

if (data) {
    
    const result = transFormData(data)

    writeData(outputUrl, result);
}

console.log('riuscito');

function readFile(url){

    try {
        const data = fs.readFileSync(url, 'utf8');
        return data;
      } catch (err) {
        console.error(err.message);
        return null;
      }

}

function writeData(url, data){

    try {
        fs.writeFileSync(url, data);
        // file written successfully
      } catch (err) {
        console.error(err.message);
      }

}

function transFormData(){

    const rows = data.split(/\r?\n/);

    //1) creare una costante 'header' con la prima riga che avrete tolto a rows
    //fare la funzione che toglie il primo elemento dall'array

    //2) create una costante 'headerArray' splittando la stringa header sulle virgole;
    //un array di stringhe separate da virgole, quindi

    //3) create un array temporaneo chiamato students (vuoto);

    //4) ciclate sull'array rows
        //4a) create una costante rowArray splittando la singola row sulle virgole;
        //quindi un array di stringhe separate da virgole come al 2
        //4b) create un oggetto vuoto chiamato
        //4c) ciclate (ciclo dentro ciclo) sull'headerArray;
            //4c1) per ogni elemento dell'headerArray aggiungo una proprietà all'oggetto student
                //HINT: student[headerArray[j]] = rowArray[j]

        //4d) aggiungo student a students
    //5) ritorno JSON.stringify(students)

    //A1) tipizzare i valori nel JSON
    //A2) aggiungere un parametro alla applicazione che mi permette di indicare il carattere divisorio (, o ; o # o quello che vogliamo noi)
    //A3) gestire la possibilità che nel CSV ci siano degli spazi non voluti


    return JSON.stringify(rows);



}