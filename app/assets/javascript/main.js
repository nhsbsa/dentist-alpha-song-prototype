//////////////////////////////
// CONTRACT
//////////////////////////////

const filterContractExpand = document.getElementById('expand-contract-filters');
const filterContractClose = document.getElementById('close-contract-filters');
const filterContractContainer = document.getElementById('filter-contract-container');
const filterContractButton = document.getElementById('apply-contract-button');
const filterContractClear = document.getElementById('clear-contract-filters');
const contractOne = document.getElementById('contract-filter-1');
const contractTwo = document.getElementById('contract-filter-2');
const contractThree = document.getElementById('contract-filter-3');

function filterContractExpandFunction(item) { 
  if(item == 'expand') {
    filterContractExpand.style.display = 'none';
    filterContractClose.style.display = 'block';
    filterContractContainer.style.display = 'block';
  } else {
    filterContractExpand.style.display = 'block';
    filterContractClose.style.display = 'none';
    filterContractContainer.style.display = 'none';
  }
}

function contractClearFilterText(item) { 
  if(item == 'filtersActive') {
    filterContractClear.style.display = 'block';
    contractOne.style.display = 'none';
    contractTwo.style.display = 'none';
    contractThree.style.display = 'none';
  } else {
    filterContractClear.style.display = 'none';
    contractOne.style.display = 'table-row';
    contractTwo.style.display = 'table-row';
    contractThree.style.display = 'table-row';
    document.getElementById("contract-active-filter").checked = false;
    document.getElementById("contract-completed-filter").checked = false;
    document.getElementById("contract-error-filter").checked = false;
    document.getElementById("contract-type-filter").selectedIndex = 0;
    document.getElementById("provider-filter").selectedIndex = 0;
  }
}
if (filterContractExpand){
  filterContractExpand.addEventListener('click', ()=>{
    filterContractExpandFunction('expand');
  });
}

if(filterContractClose) {
  filterContractClose.addEventListener('click', ()=>{
    filterContractExpandFunction();
  });
}

if(filterContractButton) {
  filterContractButton.addEventListener('click', ()=>{
    contractClearFilterText('filtersActive');
  });
}


if(filterContractClear) {
  filterContractClear.addEventListener('click', ()=>{
    contractClearFilterText();
  });
}

/// ADD SERVICE

const serviceAddBtn = document.getElementById('service-add');
const deleteServiceBtn = document.getElementById('delete-service');
const deleteServiceBtnTwo = document.getElementById('delete-service-2');
const servicePageOne = document.getElementById('service-page-1');
const servicePageTwo = document.getElementById('service-page-2');
let hasService = localStorage['hasService'];

if(serviceAddBtn) {
  serviceAddBtn.addEventListener('click', ()=>{
    localStorage['hasService'] = 'Yes';
  });
}

if(deleteServiceBtn) {
  deleteServiceBtn.addEventListener('click', ()=>{
    localStorage['hasService'] = 'No';
    location.reload();
  });
}

if(deleteServiceBtnTwo) {
  deleteServiceBtnTwo.addEventListener('click', ()=>{
    localStorage['hasService'] = 'No';
    location.reload();
  });
}

console.log("On load service: ", hasService);

/// ADD LOCATION

const locationAddBtn = document.getElementById('location-add');
const deleteLocationBtn = document.getElementById('delete-location');
const locationPageOne = document.getElementById('location-page-1');
const locationPageTwo = document.getElementById('location-page-2');
let hasLocation = localStorage['hasLocation'];

if(locationAddBtn) {
  locationAddBtn.addEventListener('click', ()=>{
    localStorage['hasLocation'] = 'Yes';
  });
}

if(deleteLocationBtn) {
  deleteLocationBtn.addEventListener('click', ()=>{
    localStorage['hasLocation'] = 'No';
    location.reload();
  });
}

console.log("On load location: ", hasLocation);

/// ADD PERFORMER

const performerAddBtn = document.getElementById('performer-add');
const deletePerformerBtn = document.getElementById('delete-performer');
const performerPageOne = document.getElementById('performer-page-1');
const performerPageTwo = document.getElementById('performer-page-2');
const addNpeBtn = document.getElementById('add-npe-npee-btn');
const deleteNpeBtn = document.getElementById('delete-npe-npee-btn');
const npeTableRow = document.getElementById('npe-npee-row');
let hasPerformer = localStorage['hasPerformer'];

if(performerAddBtn) {
  performerAddBtn.addEventListener('click', ()=>{
    localStorage['hasPerformer'] = 'Yes';
  });
}

if(deletePerformerBtn) {
  deletePerformerBtn.addEventListener('click', ()=>{
    localStorage['hasPerformer'] = 'No';
    location.reload();
  });
}

if(addNpeBtn) {
  addNpeBtn.addEventListener('click', ()=>{
    npeTableRow.style.display = 'table-row';
  });
}

if(deleteNpeBtn) {
  deleteNpeBtn.addEventListener('click', ()=>{
    npeTableRow.style.display = 'none';
    // location.reload();
  });
}

console.log("On load performer: ", hasPerformer);

/// ADD PERFORMER ACTIVITY

const activityAddBtn = document.getElementById('performer-activity-add');
const deleteActivityBtn = document.getElementById('delete-activity');
const activityPageOne = document.getElementById('activity-page-1');
const activityPageTwo = document.getElementById('activity-page-2');
let hasActivity = localStorage['hasActivity'];

if(activityAddBtn) {
  activityAddBtn.addEventListener('click', ()=>{
    localStorage['hasActivity'] = 'Yes';
  });
}

if(deleteActivityBtn) {
  deleteActivityBtn.addEventListener('click', ()=>{
    localStorage['hasActivity'] = 'No';
    location.reload();
  });
}

console.log("On load activity: ", hasActivity);

/// ARR

const arrDeclaration = document.getElementById('arr-declaration');
const arrAcceptBtn = document.getElementById('arr-accept-btn');

function validate() {
  if (arrDeclaration.checked) {
    arrAcceptBtn.disabled = false;
  } else {
    arrAcceptBtn.disabled = true;
  }
}

if(arrDeclaration) {
  arrDeclaration.addEventListener('click', ()=>{
    validate()
  });
}

/// ON PAGE LOAD

window.onload = function() {
  if(hasService == "Yes") {
    console.log("I LOADED WITH A SERVICE");
    servicePageOne.style.display = 'none';
    servicePageTwo.style.display = 'block';
  } else {
    console.log("I LOADED WITHOUT A SERVICE");
    servicePageOne.style.display = 'block';
    servicePageTwo.style.display = 'none';
  };
  if(hasLocation == "Yes") {
    console.log("I LOADED WITH A LOCATION");
    locationPageOne.style.display = 'none';
    locationPageTwo.style.display = 'block';
  } else {
    console.log("I LOADED WITHOUT A LOCATION");
    locationPageOne.style.display = 'block';
    locationPageTwo.style.display = 'none';
  };
  if(hasPerformer == "Yes") {
    console.log("I LOADED WITH A PERFORMER");
    performerPageOne.style.display = 'none';
    performerPageTwo.style.display = 'block';
  } else {
    console.log("I LOADED WITHOUT A PERFORMER");
    performerPageOne.style.display = 'block';
    performerPageTwo.style.display = 'none';
  };
  if(hasActivity == "Yes") {
    console.log("I LOADED WITH A ACTIVITY");
    activityPageOne.style.display = 'none';
    activityPageTwo.style.display = 'block';
  } else {
    console.log("I LOADED WITHOUT A ACTIVITY");
    activityPageOne.style.display = 'block';
    activityPageTwo.style.display = 'none';
  };
};
