// global variables
const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
// const branchesNames = ['Seattle', 'Tokyo', 'Dubi', 'Paris', 'Lima'];
// global functions

// Code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}



let Seattle = {
  name : 'Seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  sumOfCookies: 0,
  randCoust: [],
  amountsOfCookiesPerHour: [],
  getName : function(){
    return this.name;
  },
  generateCoustPerHoure: function (listLength) {
    let randNum = 0;
    for (let i = 0; i < listLength; i++) {
      randNum = getRandomIntInclusive(this.min, this.max);
      this.randCoust.push(randNum);
    }
    console.log(`randCoust: ${this.randCoust}`);
  },

  setAmountsOfCookies: function () {
    for (let i = 0; i < this.randCoust.length; i++) {
      this.amountsOfCookiesPerHour.push(Math.floor(this.randCoust[i] * this.avg));
    }
    console.log(`amountsOfCookiesPerHour: ${this.amountsOfCookiesPerHour}`);
  },

  getAmountsOfCookiesPerHour: function () {
    return this.amountsOfCookiesPerHour;
  },

  setSumOfCookies: function () {
    for (let i = 0; i < this.amountsOfCookiesPerHour.length ; i++) {
      this.sumOfCookies += this.amountsOfCookiesPerHour[i];
    }
    console.log(`sumOfCookies: ${this.sumOfCookies}`);
  },

  getSumOfCookies: function () {
    console.log(this.amountsOfCookiesPerHour);
    return this.sumOfCookies;
  }
};


let Tokyo = {
  name : 'Tokyo',
  min: 3,
  max: 24,
  avg: 1.2,
  sumOfCookies: 0,
  randCoust: [],
  amountsOfCookiesPerHour: [],
  getName : function(){
    return this.name;
  },
  generateCoustPerHoure: function (listLength) {
    let randNum = 0;
    for (let i = 0; i < listLength; i++) {
      randNum = getRandomIntInclusive(this.min, this.max);
      this.randCoust.push(randNum);
    }
  },

  setAmountsOfCookies: function () {
    for (let i = 0; i < this.randCoust.length; i++) {
      this.amountsOfCookiesPerHour.push(Math.floor(this.randCoust[i] * this.avg));
    }
  },

  getAmountsOfCookiesPerHour: function () {
    return this.amountsOfCookiesPerHour;
  },

  setSumOfCookies: function () {
    for (let i = 0; i < this.amountsOfCookiesPerHour.length ; i++) {
      this.sumOfCookies += this.amountsOfCookiesPerHour[i];
    }
  },

  getSumOfCookies: function () {
    console.log(this.amountsOfCookiesPerHour);
    return this.sumOfCookies;
  }
};


let Dubai = {
  name : 'Dubai',
  min: 11,
  max: 38,
  avg: 3.7,
  sumOfCookies: 0,
  randCoust: [],
  amountsOfCookiesPerHour: [],
  getName : function(){
    return this.name;
  },
  generateCoustPerHoure: function (listLength) {
    let randNum = 0;
    for (let i = 0; i < listLength; i++) {
      randNum = getRandomIntInclusive(this.min, this.max);
      this.randCoust.push(randNum);
    }
  },

  setAmountsOfCookies: function () {
    for (let i = 0; i < this.randCoust.length; i++) {
      this.amountsOfCookiesPerHour.push(Math.floor(this.randCoust[i] * this.avg));
    }
  },

  getAmountsOfCookiesPerHour: function () {
    return this.amountsOfCookiesPerHour;
  },

  setSumOfCookies: function () {
    for (let i = 0; i < this.amountsOfCookiesPerHour.length ; i++) {
      this.sumOfCookies += this.amountsOfCookiesPerHour[i];
    }
  },

  getSumOfCookies: function () {
    console.log(this.amountsOfCookiesPerHour);
    return this.sumOfCookies;
  }
};


let Paris = {
  name : 'Paris',
  min: 20,
  max: 38,
  avg: 2.3,
  sumOfCookies: 0,
  randCoust: [],
  amountsOfCookiesPerHour: [],
  getName : function(){
    return this.name;
  },
  generateCoustPerHoure: function (listLength) {
    let randNum = 0;
    for (let i = 0; i < listLength; i++) {
      randNum = getRandomIntInclusive(this.min, this.max);
      this.randCoust.push(randNum);
    }
  },

  setAmountsOfCookies: function () {
    for (let i = 0; i < this.randCoust.length; i++) {
      this.amountsOfCookiesPerHour.push(Math.floor(this.randCoust[i] * this.avg));
    }
  },

  getAmountsOfCookiesPerHour: function () {
    return this.amountsOfCookiesPerHour;
  },

  setSumOfCookies: function () {
    for (let i = 0; i < this.amountsOfCookiesPerHour.length ; i++) {
      this.sumOfCookies += this.amountsOfCookiesPerHour[i];
    }
  },

  getSumOfCookies: function () {
    console.log(this.amountsOfCookiesPerHour);
    return this.sumOfCookies;
  }
};


let Lima = {
  name :'Lima',
  min: 2,
  max: 16,
  avg: 4.6,
  sumOfCookies: 0,
  randCoust: [],
  amountsOfCookiesPerHour: [],
  getName : function(){
    return this.name;
  },
  generateCoustPerHoure: function (listLength) {
    let randNum = 0;
    for (let i = 0; i < listLength; i++) {
      randNum = getRandomIntInclusive(this.min, this.max);
      this.randCoust.push(randNum);
    }
  },

  setAmountsOfCookies: function () {
    for (let i = 0; i < this.randCoust.length; i++) {
      this.amountsOfCookiesPerHour.push(Math.floor(this.randCoust[i] * this.avg));
    }
  },

  getAmountsOfCookiesPerHour: function () {
    return this.amountsOfCookiesPerHour;
  },

  setSumOfCookies: function () {
    for (let i = 0; i < this.amountsOfCookiesPerHour.length ; i++) {
      this.sumOfCookies += this.amountsOfCookiesPerHour[i];
    }
  },

  getSumOfCookies: function () {
    console.log(this.amountsOfCookiesPerHour);
    return this.sumOfCookies;
  },
};




const branchesObjects = [Seattle, Tokyo, Dubai, Paris, Lima];
const infoCards = document.querySelectorAll('.salmon-cookies__info-card');

for(let i = 0; i < branchesObjects.length; i++){
  let branchesObject = branchesObjects[i];
  branchesObject.generateCoustPerHoure(hours.length);
  branchesObject.setAmountsOfCookies();
  branchesObject.setSumOfCookies();
  let infoCardHeading = document.createElement('h2');
  let infoCardList = document.createElement('ul');
  infoCardHeading.classList.add('info-card__heading');
  infoCardList.classList.add('info-card__items');
  infoCardHeading.textContent = branchesObject.name;
  infoCards[i].appendChild(infoCardHeading);
  infoCards[i].appendChild(infoCardList);
  for(let j = 0; j <= hours.length; j++){
    let infoCardItem = document.createElement('li');
    infoCardItem.classList.add('info-card__item');
    if(j !== hours.length){
      infoCardItem.textContent = `${hours[j]}: ${branchesObject.getAmountsOfCookiesPerHour()[j]} cookies`;
    }else{
      infoCardItem.textContent = `Total: ${branchesObject.getSumOfCookies()} cookies`;
    }
    infoCardList.appendChild(infoCardItem);
  }
}


