let jours = ['MO','TU','WE','TH','FR','SA','SU']

// zone d'affichage du calendrier
let calendarSection = document.getElementById('calendarSection')


let date = new Date()

let day = date.getDay()
let dated = date.getDate()
let month = date.getMonth() + 1
let year = date.getFullYear()

let currentDate = `${day}-${dated}-${month}-${year}`;
console.log(currentDate); 

console.log('----------------------------------------------')


function getDay(date) { 
    let day = date.getDay();
    if (day == 0) day = 7; 
    return day - 1;
  }


  function createCalendar(year, month) {

    let mon = month - 1;
    let date = new Date(year, mon);

    let table = '<table><tr><th>MO</th><th>TU</th><th>WE</th><th>TH</th><th>FR</th><th>SA</th><th>SU</th></tr><tr>';

    for (let i = 0; i < getDay(date); i++) {
      table += '<td></td>';
    }

    while (date.getMonth() == mon) {
      table += '<td>' + date.getDate() + '</td>';

      if (getDay(date) % 7 == 6) {
        table += '</tr><tr>';
      }

      // passage au jour suivant
      date.setDate(date.getDate() + 1);
    }

    
    if (getDay(date) != 0) {
      for (let i = getDay(date); i < 7; i++) {
        table += '<td></td>';
      }
    }

    table += '</tr></table>';

    calendarSection.innerHTML = table;
  }


  // obtention de la date courant
  function getDay(date) {
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
  }

  // appelle de la fonction
  createCalendar(2012, 9);