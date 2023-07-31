function transformFromCSVToJSON(data, divider) {
    const rows = data.split(/\r?\n/);
    const header = rows.shift();
    const headerArray = header.split(divider);
    let students = [];
  
    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
  
      // Skip empty or whitespace-only rows
      if (!row.trim()) {
        continue;
      }
  
      const rowArray = row.split(divider);
      let student = {};
  
      for (let j = 0; j < headerArray.length; j++) {
        const property = headerArray[j];
        let value = rowArray[j];
  
        let trimmedValue = value.trim();
        const convertedValue = typeParse(trimmedValue);

  
        student[property] = convertedValue;
      }
  
      students.push(student);
    }
  
    return JSON.stringify(students, null, 4);
  }
  
  
  function typeParse(str) {
    if (str === "true") {
        return true;
    } if (str === "false") {
        return false;
    }
    const number = parseFloat(str);

    if (isNaN(number)) {
        return str;
    } else {
      return number;
    }
  }

module.exports = transformFromCSVToJSON;