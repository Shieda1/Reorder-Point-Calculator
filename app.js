// https://www.omnicalculator.com/other/reorder-point

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const reorderpointRadio = document.getElementById('reorderpointRadio');
const basicstockRadio = document.getElementById('basicstockRadio');
const safetystockRadio = document.getElementById('safetystockRadio');
const leadtimeRadio = document.getElementById('leadtimeRadio');
const unitsalesRadio = document.getElementById('unitsalesRadio');

let reorderpoint;
let basicstock = v1;
let safetystock = v2;
let leadtime = v3;
let unitsales = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

reorderpointRadio.addEventListener('click', function() {
  variable1.textContent = 'Basic stock';
  variable2.textContent = 'Safety stock';
  variable3.textContent = 'Lead time';
  variable4.textContent = 'Unit sales';
  basicstock = v1;
  safetystock = v2;
  leadtime = v3;
  unitsales = v4;
  result.textContent = '';
});

basicstockRadio.addEventListener('click', function() {
  variable1.textContent = 'Reorder point';
  variable2.textContent = 'Safety stock';
  variable3.textContent = 'Lead time';
  variable4.textContent = 'Unit sales';
  reorderpoint = v1;
  safetystock = v2;
  leadtime = v3;
  unitsales = v4;
  result.textContent = '';
});

safetystockRadio.addEventListener('click', function() {
  variable1.textContent = 'Reorder point';
  variable2.textContent = 'Basic stock';
  variable3.textContent = 'Lead time';
  variable4.textContent = 'Unit sales';
  reorderpoint = v1;
  basicstock = v2;
  leadtime = v3;
  unitsales = v4;
  result.textContent = '';
});

leadtimeRadio.addEventListener('click', function() {
  variable1.textContent = 'Reorder point';
  variable2.textContent = 'Basic stock';
  variable3.textContent = 'Safety stock';
  variable4.textContent = 'Unit sales';
  reorderpoint = v1;
  basicstock = v2;
  safetystock = v3;
  unitsales = v4;
  result.textContent = '';
});

unitsalesRadio.addEventListener('click', function() {
  variable1.textContent = 'Reorder point';
  variable2.textContent = 'Basic stock';
  variable3.textContent = 'Safety stock';
  variable4.textContent = 'Lead time';
  reorderpoint = v1;
  basicstock = v2;
  safetystock = v3;
  leadtime = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(reorderpointRadio.checked)
    result.textContent = `Reorder point = ${computereorderpoint().toFixed(2)}`;

  else if(basicstockRadio.checked)
    result.textContent = `Basic stock = ${computebasicstock().toFixed(2)}`;

  else if(safetystockRadio.checked)
    result.textContent = `Safety stock = ${computesafetystock().toFixed(2)}`;

  else if(leadtimeRadio.checked)
    result.textContent = `Lead time = ${computeleadtime().toFixed(2)}`;

  else if(unitsalesRadio.checked)
    result.textContent = `Unit sales = ${computeunitsales().toFixed(2)}`;
})

// calculation

// reorderpoint = (safetystock + basicstock + leadtime) * unitsales

function computereorderpoint() {
  return (Number(safetystock.value) + Number(basicstock.value) + Number(leadtime.value)) * Number(unitsales.value);
}

function computebasicstock() {
  return (Number(reorderpoint.value) / Number(unitsales.value)) - Number(safetystock.value) - Number(leadtime.value);
}

function computesafetystock() {
  return (Number(reorderpoint.value) / Number(unitsales.value)) - Number(basicstock.value) - Number(leadtime.value);
}

function computeleadtime() {
  return (Number(reorderpoint.value) / Number(unitsales.value)) - Number(basicstock.value) - Number(safetystock.value);
}

function computeunitsales() {
  return Number(reorderpoint.value) / (Number(safetystock.value) + Number(basicstock.value) + Number(leadtime.value));
}