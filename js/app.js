
'use strict';


let salesData = document.getElementById('salesData');


let h1 = document.createElement('h1');
salesData.appendChild(h1);
h1.textContent = 'SALES OF DATA';

let table = document.createElement('table');
salesData.appendChild(table);


function Data(name, min, mix, average, total, customerPerHour, cookiesSales) {

  this.name = name;
  this.min = min;
  this.mix = mix;
  this.average = average;
  this.total = total;
  this.customerPerHour = customerPerHour;
  this.cookiesSales = cookiesSales;

}


let Seattle = new Data('seattle', 23, 65, 6.3, 0, [], []);

let Tokyo = new Data('Tokyo', 3, 24, 1.2, 0, [], []);

// // Dubai	11	38	3.7
let Dubai = new Data('Dubai', 11, 38, 3.7, 0, [], []);
// // Paris	20	38	2.3

let Paris = new Data('Paris', 20, 38, 2.3, 0, [], []);

// // Lima	2	16	4.6

let Lima = new Data('Lima', 2, 16, 4.6, 0, [], []);

let hours = ['6am ', '7am', '8am', '9am', '10am', '11am', '12pm', '13pm', '14pm', '15am', '16pm', '17pm', '18am', '19pm'];


let locationArr = [Seattle, Tokyo, Dubai, Paris, Lima];
console.log(locationArr);



function randomNumber(min, mix) {
  min = Math.ceil(min);
  mix = Math.floor(mix);
  return Math.floor(Math.random() * (mix - min) + min);
}


Data.prototype.getCookies = function () {

  for (let i = 0; i < hours.length; i++) {
    this.customerPerHour.push(randomNumber(this.min, this.mix));

    let randAvg = Math.ceil(this.customerPerHour[i] * this.average);


    this.cookiesSales.push(randAvg);
    console.log(this.cookiesSales);
    this.total += randAvg;
  }
};







Data.prototype.render = function () {
  let hourtr = document.createElement('tr');
  table.appendChild(hourtr);
  let hourtd = document.createElement('td');
  hourtd.textContent= this.name;
  hourtr.appendChild(hourtd);
  for (let index = 0; index < hours.length; index++) {
    let hourtd2 = document.createElement('td');
  hourtd2.textContent= this.cookiesSales[index];
  hourtr.appendChild(hourtd2);
    
  }
  let totaltd = document.createElement('td');
  totaltd.textContent = this.total;
  
  hourtr.appendChild(totaltd);



};


function hourarr() {
  let tr2 = document.createElement('tr');
  let thempty = document.createElement('th');
  tr2.appendChild(thempty);
  thempty.textContent= '  ';
  

 
  table.appendChild(tr2);
  for (let i = 0; i < hours.length; i++) {
    let hourtr2 = document.createElement('th');
    hourtr2.textContent = hours[i];
    tr2.appendChild(hourtr2);
  }
  let thDialyTotal = document.createElement('th');
  tr2.appendChild(thDialyTotal);
  thDialyTotal.textContent= '  Location Dialy Total';
}


hourarr();





















Seattle.getCookies(23, 65);
Seattle.render();

Tokyo.getCookies(3, 24);
Tokyo.render();

Dubai.getCookies(11, 38);
Dubai.render();

Paris.getCookies(20, 38);
Paris.render();


Lima.getCookies(2, 16);
Lima.render();











