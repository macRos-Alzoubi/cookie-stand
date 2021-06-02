const hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
const tableElement = document.createElement('table');
const objectsList = [];
let rendered = 0;

tableElement.classList.add('salmon-cookies-info__table');



// Code from https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
const getRandomIntInclusive = function(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

const renderHeader = function(){
  if(rendered < 2){
    const rowElement = document.createElement('tr');
    for(let i = 0; i < hours.length + 2; i++){
      let tableHeadElement = document.createElement('th');

      if(i === 0)
        tableHeadElement.textContent = 'Branch Location';
      else if(i <= hours.length)
        tableHeadElement.textContent = hours[i - 1];
      else
        tableHeadElement.textContent = 'Daily Location Total';

      rowElement.appendChild(tableHeadElement);
    }

    tableElement.appendChild(rowElement);
    rendered++;
  }
};

const renderFooter = function(){
  const rowElement = document.createElement('tr');
  let grandSum = 0;
  for(let i =0; i < hours.length + 2; i++){
    let tableHeadElement = document.createElement('th');
    if(i === 0)
      tableHeadElement.textContent = 'Totals';
    else if(i <= hours.length){
      let sum = 0;
      for(let j = 0; j < objectsList.length; j++){
        sum += objectsList[j].cookiesPerHour[i - 1];
      }
      tableHeadElement.textContent = sum;
      grandSum += sum;
    }else
      tableHeadElement.textContent = grandSum;

    rowElement.appendChild(tableHeadElement);
  }
  if(rendered < 2){
    tableElement.appendChild(rowElement);
    rendered++;
  }else{
    const totalRow = document.querySelector('tr:last-child');
    tableElement.insertBefore(rowElement,totalRow);
    tableElement.removeChild(tableElement.lastChild);
  }
};

function SalmonCookies(branchName, minCustomer, maxCustomer, avgOfCookies){
  this.branchName = branchName;
  this.minCustomer = minCustomer;
  this.maxCustomer = maxCustomer;
  this.avgOfCookies = avgOfCookies;
  this.randCoust = [];
  this.cookiesPerHour = [];
  this.cookiesSum = 0;

  this.generCostPerHour();
  this.setCookiesPerHour();
  this.setCookiesSum();
  objectsList.push(this);

}



SalmonCookies.prototype.generCostPerHour = function(){
  for (let i = 0; i < hours.length; i++)
    this.randCoust.push(getRandomIntInclusive(this.minCustomer, this.maxCustomer));
};

SalmonCookies.prototype.setCookiesPerHour = function(){
  for (let i = 0; i < this.randCoust.length; i++)
    this.cookiesPerHour.push(Math.floor(this.randCoust[i] * this.avgOfCookies));
};

SalmonCookies.prototype.getCookiesPerHour = function(){
  return this.cookiesPerHour;
};

SalmonCookies.prototype.setCookiesSum = function(){
  for(let i = 0; i < this.cookiesPerHour.length; i++)
    this.cookiesSum += this.cookiesPerHour[i];
};

SalmonCookies.prototype.getCookiesSum = function(){
  return this.cookiesSum;
};

SalmonCookies.prototype.render = function(){
  const rowElement = document.createElement('tr');
  for(let i = 0; i < hours.length + 2; i++){
    let tableDataElement = document.createElement('td');

    if(i === 0)
      tableDataElement.textContent = this.branchName;
    else if(i <= hours.length)
      tableDataElement.textContent = this.getCookiesPerHour()[i - 1];
    else
      tableDataElement.textContent = this.getCookiesSum();

    rowElement.appendChild(tableDataElement);
  }

  const lastRow = tableElement.lastChild;
  const lastRowFirstHead = document.querySelector('tr:last-child th');
  if(lastRowFirstHead.textContent=== 'Totals'){
    tableElement.insertBefore(rowElement, lastRow);
  }else
    tableElement.appendChild(rowElement);
};


const tableParent = document.querySelector('.salmon-cookies-info');
tableParent.appendChild(tableElement);

document.querySelector('.form').addEventListener('submit', function(event){
  event.preventDefault();
  const target = event.target;

  const locName = target.standLocation.value;
  const minCustomer = parseInt(target.minCustomer.value);
  const maxCustomer = parseInt(target.maxCustomer.value);
  const avgCookiesPH = parseInt(target.avgCookiesPerHour.value);

  if(locName !== '' && !isNaN(minCustomer) && !isNaN(maxCustomer) && !isNaN(avgCookiesPH)){
    const cookieObj = new SalmonCookies(locName, minCustomer, maxCustomer, avgCookiesPH);

    renderHeader();
    cookieObj.render();
    renderFooter();

  }


  target.reset();
});
