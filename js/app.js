
'use strict';


let salesData = document.getElementById('salesData');


let cookiesForm = document.getElementById('cookiesForm');


let h1 = document.createElement('h1');
salesData.appendChild(h1);
h1.textContent = 'SALES OF DATA';

let table = document.createElement('table');
salesData.appendChild(table);

let all = [];
function Data(name, min, mix, average, total, customerPerHour, cookiesSales) {

  this.name = name;
  this.min = min;
  this.mix = mix;
  this.average = average;
  this.total = total;
  this.customerPerHour = customerPerHour;
  this.cookiesSales = cookiesSales;
  all.push(this);
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



Data.prototype.randomNumber = function () {
  this.min = Math.ceil(this.min);
  this.mix = Math.floor(this.mix);
  return Math.floor(Math.random() * (this.mix - this.min) + this.min);
};



Data.prototype.getCookies = function () {

  for (let i = 0; i < hours.length; i++) {
    this.customerPerHour.push(this.randomNumber(this.min, this.mix));

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
  hourtd.textContent = this.name;
  hourtr.appendChild(hourtd);
  for (let index = 0; index < hours.length; index++) {
    let hourtd2 = document.createElement('td');
    hourtd2.textContent = this.cookiesSales[index];
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
  thempty.textContent = '  ';
  table.appendChild(tr2);



  for (let i = 0; i < hours.length; i++) {
    let hourtr2 = document.createElement('th');
    hourtr2.textContent = hours[i];
    tr2.appendChild(hourtr2);
  }


  let thDialyTotal = document.createElement('th');
  tr2.appendChild(thDialyTotal);
  thDialyTotal.textContent = '  Location Dialy Total';
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
tableFooter();

cookiesForm.addEventListener('submit', submitlistner);


function submitlistner(eventNewStore) {
  eventNewStore.preventDefault();
  let storeLocation = eventNewStore.target.location.value;
  let min = eventNewStore.target.min.value;
  let max = eventNewStore.target.max.value;
  let avg = eventNewStore.target.average.value;
  

  if (max < min) {
    alert('Maximum number must be greater than minimum number ');
  }
  else {
    let newStore = new Data(storeLocation, min, max, avg, 0, [], []);

   



    newStore.getCookies();
    newStore.render();









  }

  console.log(eventNewStore);


}
function tableFooter() {
  let trFooter = document.createElement('tr');
  table.appendChild(trFooter);

  let ttotal = document.createElement('th');
  ttotal.textContent = ('Total');
  trFooter.appendChild(ttotal);

  for (let i = 0; i < hours.length; i++) {


    let dailyTtotal = 0;
    for (let j = 0; j < all.length; j++) {

      dailyTtotal += all[j].cookiesSales[i];
      console.log(dailyTtotal);

    }
    let thhelemnt = document.createElement('th');
    thhelemnt.textContent = dailyTtotal;
    trFooter.appendChild(thhelemnt);
  }
  let totalOfTotal = 0;
  for (let j = 0; j < all.length; j++) {

    totalOfTotal += all[j].total;
  }
  let thhhElement = document.createElement('th');
  thhhElement.textContent = totalOfTotal;
  trFooter.appendChild(thhhElement);

}


