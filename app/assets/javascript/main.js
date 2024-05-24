/// ARR

const declaration = document.getElementById('declaration');
const declarationConfirm = document.getElementById('declaration-confirm');
const arrCorrectYes = document.getElementById('arr-correct-yes');
const arrCorrectNo = document.getElementById('arr-correct-no');
const arrReason1 = document.getElementById('arr-reason-1');
const arrReason2 = document.getElementById('arr-reason-2');
const arrProposed = document.getElementById('arr-proposed');
const arrReasonQ = document.getElementById('arr-reason-q');
const arrProposedQ = document.getElementById('arr-proposed-q');
const arrAdditionalQ = document.getElementById('arr-additional-q');
const arrAcceptBtn = document.getElementById('arr-accept-btn');

if(arrCorrectYes) {
  arrCorrectYes.addEventListener('click', ()=>{
    if(arrCorrectYes.checked) {
      declaration.style.display = 'block';
      arrReasonQ.style.display = 'none';
      arrProposedQ.style.display = 'none';
      arrAdditionalQ.style.display = 'none';
    }
  });
}

if(declarationConfirm) {
  declarationConfirm.addEventListener('click', ()=>{
    if(declarationConfirm.checked) {
      arrAcceptBtn.disabled = false;
    }
  });
}

if(arrCorrectNo) {
  arrCorrectNo.addEventListener('click', ()=>{
    if(arrCorrectNo.checked) {
      declaration.style.display = 'none';
      arrAcceptBtn.disabled = true;
      arrReasonQ.style.display = 'block';
    }
  });
}

if(arrReason1) {
  arrReason1.addEventListener('click', ()=>{
    if(arrCorrectNo.checked) {
      arrProposedQ.style.display = 'block';
      arrAdditionalQ.style.display = 'block';
      arrAcceptBtn.disabled = false;
    }
  });
}
