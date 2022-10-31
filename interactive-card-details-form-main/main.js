const cardNumber = document.getElementById("digit");
const inputNumber = document.getElementById("cardNumberInput");

const cardName = document.getElementById("cardName");
const inputName = document.getElementById("nameInput");

const monthCard = document.getElementById("mmData");
const monthInput = document.getElementById("mm");

const yearCard = document.getElementById("yyData");
const yearInput = document.getElementById("yy");

const cvcCard = document.querySelector("backDigit");
const cvcInput = document.getElementById("num");

const submitBtn = document.getElementById("submitBtn");
const complete = document.getElementById("complete");
const continueBtn = document.getElementById("continueBtn");
const form = document.querySelector("form");

// validate number
inputNumber.addEventListener("input", ()=>{
  inputNum();
});

function inputNum(){
  for(let i = 0; i < 16; i++){
    if(inputNumber.value[i].match(/[\d]/g)){
      inputNumber.value = inputNumber.value;
    }else{
      inputNumber.value = "";
    }
  };
  let numberFormatted = inputNumber.value.match(/\d{1,4}/g);
  if(numberFormatted !== null){
    numberFormatted = numberFormatted.join(" ")
  };
  inputNumber.value = numberFormatted;
  cardNumber.innerHTML = numberFormatted;
}

// validate name

inputName.addEventListener("input", () =>{
  inputNam();
});

function inputNam(){
  for (let i = 0; i < inputName.value.length; i++){
    if(inputName.value[i].match(/[a-zA-Z]/g)){
      inputName.value = inputName.value;
      document.getElementById("error_message").style.visibility = "hidden";
    }else{
      inputName.value = "";
      document.getElementById("error_message").style.visibility = "visible";
    }
  }
 cardName.innerHTML = inputName.value; 
}

// validate month

monthInput.addEventListener("input", ()=>{
  monInput();
});

function monInput(){
  for(let i = 0; i <monthInput.value.length; i++){
    if(monthInput.value[i].match(/[\d]/g)){
      monthInput.value = monthInput.value;
    }else{
      monInput.value = "";
    }
  }

  monthCard.innerHTML = monthInput.value.substring(0,2);
}


// validate year

yearInput.addEventListener("input", ()=> {
  yrInput();
});

function yrInput(){
  for(let i = 0; i<yearInput.value.length; i++){
    if(yearInput.value[i].match(/[\d]/g)){
      yearInput.value = yearInput.value;
    }else{
      yearInput.value = "";
    }
  }

  yearCard.innerHTML = yearInput.value.substring(0,2);
}


// validate cvc
cvcInput.addEventListener("input", ()=>{
  cvInput();
});

function cvInput(){
  for(let i = 0; i<cvcInput.value.length; i++){
    if(yearInput.value[i].match(/[\d]/g)){
      yearInput.value = yearInput.value;
    }else{
      yearInput.value;
    }
  }

  yearCard.innerHTML = yearInput.value.substring(0,3);
}

submitBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  form.style.display = "none";
  complete.style.display = "flex";
})


continueBtn.addEventListener("click", (e)=>{
  e.preventDefault();
  form.style.display = "flex";
  complete.style.display = "none";


})
