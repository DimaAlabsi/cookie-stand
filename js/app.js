
'use strict';

let salesData = document.getElementById('salesData');


let h1 = document.createElement('h1');
salesData.appendChild(h1);
h1.textContent = 'SALES OF DATA';





// // Seattle	23	65	6.3
function randomNumber(min, mix) {
  min = Math.ceil(min);
  mix = Math.floor(mix);
  return Math.floor(Math.random() * (mix - min) + min);
}
const Seattle = {

  name: 'Seattle',
  min: 23,
  mix: 65,
  average: 6.3,
  total: 0,
  customerPerHour: [],
  cookiesSales: [],

  hours: [6 + 'am : ', 7 + 'am : ', 8 + ' am :', 9 + ' am :', 10 + ' am : ', 11 + ' am : ', 12 + ' pm : ', 13 + ' pm : ', 14 + ' pm : ', 15 + ' pm : ', 16 + ' pm : ', 17 + ' pm : ', 18 + ' pm : ', 19 + ' pm : '],

  getCookies: function () {

    for (let i = 0; i < this.hours.length; i++) {
      this.customerPerHour.push(randomNumber(this.min, this.mix));

      let randAvg = Math.ceil(this.customerPerHour[i] * this.average);


      this.cookiesSales.push(randAvg);
      //  console.log (this.cookiesSales);
      this.total += randAvg;
    }
  },




  // },


  render: function () {
    const articleElement = document.createElement('article');
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = this.name;
    salesData.appendChild(articleElement);


    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);


    for (let i = 0; i < this.hours.length; i++) {

      let liEle = document.createElement('li');
      liEle.textContent = `${this.hours[i]}  :  ${this.cookiesSales[i]} cookies `;
      ulElement.appendChild(liEle);

      console.log(this.cookiesSales);
    }

    let totalli = document.createElement('li');
    totalli.textContent = 'Total  : ' + this.total + 'cookies';
    ulElement.appendChild(totalli);
  }
};






Seattle.getCookies(23, 65);
Seattle.render();

// const Seattle = {
//   name:  'Sattle' ,
//   min : 23 ,
//   max : 65,
//   average : 6.3 ,

//   hours : [6 + 'am : ',7 +'am : ' ,8 +' am :',9 + ' am :',10 +' am : ',11 +' am : ',12 +' pm : ',13 +' pm : ',14 +' pm : ',15 +' pm : ',16 +' pm : ',17 +' pm : ',18 +' pm : ',19 +' pm : '],
//   gitAmountsOfCookiesForHour   : 0,
//   AmountsOfCookiesForHour : 0,
//   numberOfCustomersPerHour : function( min, max) {
//     this.gitAmountsOfCookiesForHour =
//     // min = Math.ceil(min);
//     // max = Math.floor(max);
//     // return Math.floor(Math.random() * (max - min) + min);

//    min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);



//   },

//   render: function(){
//     let articleElement = document.createElement('article');
//     salesData.appendChild(articleElement);
//     let NameOfPage8 = document.createElement('h1');
//     NameOfPage8.textContent = ('Salmon Cookies : Data Types');
//     articleElement.appendChild(NameOfPage8);
//     let nameOfList = document.createElement('p');

//     nameOfList.textContent = this.name;
//     articleElement.appendChild(nameOfList);



//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for (let i = 0; i< this.hours.length; i++){

//       this.AmountsOfCookiesForHour = Math.ceil(this.numberOfCustomersPerHour(23,56) * this.average) ;
//       let liElement = document.createElement('li');
//       liElement.textContent = this.hours[i] + this.AmountsOfCookiesForHour + ' cookies';
//       articleElement.appendChild(liElement);

//     }

//     // let liElement = document.createElement('li');
//     // liElement.textContent = 'total : ' + this.AmountsOfCookiesForHour ;
//     // ulElement.appendChild(liElement);
//   }
// };
// Seattle.render();
// Seattle.numberOfCustomersPerHour(23,65);







// // Tokyo	3	24	1.2
const Tokyo = {

  name: 'Tokyo',
  min: 3,
  mix: 24,
  average: 1.2,
  total: 0,
  customerPerHour: [],
  cookiesSales: [],

  hours: [6 + 'am : ', 7 + 'am : ', 8 + ' am :', 9 + ' am :', 10 + ' am : ', 11 + ' am : ', 12 + ' pm : ', 13 + ' pm : ', 14 + ' pm : ', 15 + ' pm : ', 16 + ' pm : ', 17 + ' pm : ', 18 + ' pm : ', 19 + ' pm : '],

  getCookies: function () {

    for (let i = 0; i < this.hours.length; i++) {
      this.customerPerHour.push(randomNumber(this.min, this.mix));

      let randAvg = Math.ceil(this.customerPerHour[i] * this.average);


      this.cookiesSales.push(randAvg);
      //  console.log (this.cookiesSales);
      this.total += randAvg;
    }
  },




  // },


  render: function () {
    const articleElement = document.createElement('article');
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = this.name;
    salesData.appendChild(articleElement);


    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);


    for (let i = 0; i < this.hours.length; i++) {

      let liEle = document.createElement('li');
      liEle.textContent = `${this.hours[i]}  :  ${this.cookiesSales[i]} cookies `;
      ulElement.appendChild(liEle);

      console.log(this.cookiesSales);
    }

    let totalli = document.createElement('li');
    totalli.textContent = 'Total  : ' + this.total + 'cookies';
    ulElement.appendChild(totalli);
  }
};






Tokyo.getCookies(3, 24);
Tokyo.render();


// const Tokyo = {
//   name:  'Tokyo' ,
//   min : 3,
//   max : 24,
//   average : 1.2,
//   nameOfPage : 'Salmon Cookies : Data Types',
//   total :0,
//   hours : [6 + 'am : ',7 +'am : ' ,8 +' am :',9 + ' am :',10 +' am : ',11 +' am : ',12 +' pm : ',13 +' pm : ',14 +' pm : ',15 +' pm : ',16 +' pm : ',17 +' pm : ',18 +' pm : ',19 +' pm : '],
//   gitAmountsOfCookiesForHour   : 0,
//   AmountsOfCookiesForHour : 0,
//   numberOfCustomersPerHour : function( min, max) {
//     this.gitAmountsOfCookiesForHour =
//     // min = Math.ceil(min);
//     // max = Math.floor(max);
//     // return Math.floor(Math.random() * (max - min) + min);

//    min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);



//   },

//   render: function(){
//     let articleElement = document.createElement('article');
//     salesData.appendChild(articleElement);


//     let nameOfList = document.createElement('p');

//     nameOfList.textContent = this.name;
//     articleElement.appendChild(nameOfList);



//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for (let i = 0; i< this.hours.length; i++){

//       this.AmountsOfCookiesForHour = Math.ceil (this.numberOfCustomersPerHour(3,24) * this.average );
//       let liElement = document.createElement('li');
//       liElement.textContent = this.hours[i] + this.AmountsOfCookiesForHour + ' cookies';
//       articleElement.appendChild(liElement);



//     }

//   }
// };
// Tokyo.render();
// Tokyo.numberOfCustomersPerHour(3,24);













// // Dubai	11	38	3.7
const Dubai = {

  name: 'Dubai',
  min: 11,
  mix: 38,
  average: 3.7,
  total: 0,
  customerPerHour: [],
  cookiesSales: [],

  hours: [6 + 'am : ', 7 + 'am : ', 8 + ' am :', 9 + ' am :', 10 + ' am : ', 11 + ' am : ', 12 + ' pm : ', 13 + ' pm : ', 14 + ' pm : ', 15 + ' pm : ', 16 + ' pm : ', 17 + ' pm : ', 18 + ' pm : ', 19 + ' pm : '],

  getCookies: function () {

    for (let i = 0; i < this.hours.length; i++) {
      this.customerPerHour.push(randomNumber(this.min, this.mix));

      let randAvg = Math.ceil(this.customerPerHour[i] * this.average);


      this.cookiesSales.push(randAvg);
      //  console.log (this.cookiesSales);
      this.total += randAvg;
    }
  },




  // },


  render: function () {
    const articleElement = document.createElement('article');
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = this.name;
    salesData.appendChild(articleElement);


    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);


    for (let i = 0; i < this.hours.length; i++) {

      let liEle = document.createElement('li');
      liEle.textContent = `${this.hours[i]}  :  ${this.cookiesSales[i]} cookies `;
      ulElement.appendChild(liEle);

      console.log(this.cookiesSales);
    }

    let totalli = document.createElement('li');
    totalli.textContent = 'Total  : ' + this.total + 'cookies';
    ulElement.appendChild(totalli);
  }
};






Dubai.getCookies(11, 38);
Dubai.render();


// const Dubai = {
//   name: 'Dubai' ,
//   min : 11,
//   max : 38,
//   average: 3.7,

//   hours : [6 + 'am : ',7 +'am : ' ,8 +' am :',9 + ' am :',10 +' am : ',11 +' am : ',12 +' pm : ',13 +' pm : ',14 +' pm : ',15 +' pm : ',16 +' pm : ',17 +' pm : ',18 +' pm : ',19 +' pm : '],
//   //   hours: [6,7,8,9,10,11,12,13,14,15,16,17,18,19],
//   gitAmountsOfCookiesForHour   : 0,
//   AmountsOfCookiesForHour : 0,
//   numberOfCustomersPerHour : function( min, max) {
//     this.gitAmountsOfCookiesForHour =
//     // min = Math.ceil(min);
//     // max = Math.floor(max);
//     // return Math.floor(Math.random() * (max - min) + min);

//    min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1) + min);



//   },

//   render: function(){
//     let articleElement = document.createElement('article');
//     salesData.appendChild(articleElement);


//     let nameOfList = document.createElement('p');

//     nameOfList.textContent = this.name;
//     articleElement.appendChild(nameOfList);



//     let ulElement = document.createElement('ul');
//     articleElement.appendChild(ulElement);
//     for (let i = 0; i< this.hours.length; i++){
//     //   this.numberOfCustomersPerHour(11,38);
//       this.AmountsOfCookiesForHour = Math.ceil(this.numberOfCustomersPerHour(3,24) * this.average) ;
//       let liElement = document.createElement('li');
//       liElement.textContent = this.hours[i] + this.AmountsOfCookiesForHour + ' cookies';
//       // ulElement.appendChild(liElement);
//       articleElement.appendChild(liElement);}

//   }
// };
// Dubai.render();
// Dubai.numberOfCustomersPerHour(11,38);





// // Paris	20	38	2.3
const Paris = {

  name: 'Paris',
  min: 20,
  mix: 38,
  average: 2.3,
  total: 0,
  customerPerHour: [],
  cookiesSales: [],

  hours: [6 + 'am : ', 7 + 'am : ', 8 + ' am :', 9 + ' am :', 10 + ' am : ', 11 + ' am : ', 12 + ' pm : ', 13 + ' pm : ', 14 + ' pm : ', 15 + ' pm : ', 16 + ' pm : ', 17 + ' pm : ', 18 + ' pm : ', 19 + ' pm : '],

  getCookies: function () {

    for (let i = 0; i < this.hours.length; i++) {
      this.customerPerHour.push(randomNumber(this.min, this.mix));

      let randAvg = Math.ceil(this.customerPerHour[i] * this.average);


      this.cookiesSales.push(randAvg);
      //  console.log (this.cookiesSales);
      this.total += randAvg;
    }
  },




  // },


  render: function () {
    const articleElement = document.createElement('article');
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = this.name;
    salesData.appendChild(articleElement);


    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);


    for (let i = 0; i < this.hours.length; i++) {

      let liEle = document.createElement('li');
      liEle.textContent = `${this.hours[i]}  :  ${this.cookiesSales[i]} cookies `;
      ulElement.appendChild(liEle);

      console.log(this.cookiesSales);
    }

    let totalli = document.createElement('li');
    totalli.textContent = 'Total  : ' + this.total + 'cookies';
    ulElement.appendChild(totalli);
  }
};






Paris.getCookies(20, 38);
Paris.render();








// Lima	2	16	4.6
function randomNumber(min, mix) {
  min = Math.ceil(min);
  mix = Math.floor(mix);
  return Math.floor(Math.random() * (mix - min) + min);
}
const Lima = {

  name: 'Lima',
  min: 2,
  mix: 16,
  average: 4.6,
  total: 0,
  customerPerHour: [],
  cookiesSales: [],

  hours: [6 + 'am : ', 7 + 'am : ', 8 + ' am :', 9 + ' am :', 10 + ' am : ', 11 + ' am : ', 12 + ' pm : ', 13 + ' pm : ', 14 + ' pm : ', 15 + ' pm : ', 16 + ' pm : ', 17 + ' pm : ', 18 + ' pm : ', 19 + ' pm : '],

  getCookies: function () {

    for (let i = 0; i < this.hours.length; i++) {
      this.customerPerHour.push(randomNumber(this.min, this.mix));

      let randAvg = Math.ceil(this.customerPerHour[i] * this.average);


      this.cookiesSales.push(randAvg);
      //  console.log (this.cookiesSales);
      this.total += randAvg;
    }
  },




  // },


  render: function () {
    const articleElement = document.createElement('article');
    const pElement = document.createElement('p');
    articleElement.appendChild(pElement);
    pElement.textContent = this.name;
    salesData.appendChild(articleElement);


    let ulElement = document.createElement('ul');
    articleElement.appendChild(ulElement);


    for (let i = 0; i < this.hours.length; i++) {

      let liEle = document.createElement('li');
      liEle.textContent = `${this.hours[i]}  :  ${this.cookiesSales[i]} cookies `;
      ulElement.appendChild(liEle);

      console.log(this.cookiesSales);
    }

    let totalli = document.createElement('li');
    totalli.textContent = 'Total  : ' + this.total + 'cookies';
    ulElement.appendChild(totalli);
  }
};






Lima.getCookies(2, 16);
Lima.render();




