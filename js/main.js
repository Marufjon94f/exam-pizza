// Calling elements from index html**********************************************************************************************************************************

var elForm = document.querySelector(".js-form");
var elSelect = elForm.querySelector(".js-select");
var elDiv = elForm.querySelector(".js-input-box");
var elToppings = elForm.querySelector(".js-toppings");
var elBreadDiv = document.querySelector(".bread");
var elHeightDiv = document.querySelector(".height");
var elBreadP = elBreadDiv.querySelector(".js-bread");
var elHeight = elHeightDiv.querySelector(".js-height");
var elToppingsDiv = document.querySelector(".toppings");
var elToppingsList = elToppingsDiv.querySelector(".js-toppings_list");
var elAddDiv = document.querySelector(".js-additionals");
var elAddP = elAddDiv.querySelector(".add-p");
var elAdditionalList =document.querySelector(".js-add_list")
var elButton = document.querySelector(".js-button")


//task 1 ************************************************************************************************************************************************************
var choiceOFPizza = ["Yupqa", "Norm", "Qalin"];

for (var i = 0; i < choiceOFPizza.length; i++) {
  var elCreateOption = document.createElement("option");


  // function for task 1 

elBreadP.textContent = elSelect.value;
var function1 = function (e) {
  e.preventDefault();

   elBreadP.textContent = elSelect.value;

};
elSelect.addEventListener("change", function1);
  elSelect.appendChild(elCreateOption);
  elCreateOption.value = choiceOFPizza[i];
  elCreateOption.textContent = choiceOFPizza[i];
}

//task 2 *************************************************************************************************************************************************************

var sizeOfPizza = ["25sm", "30sm", "35sm"];
for (var i = 0; i < sizeOfPizza.length; i++) {
  var elCreatelabel = document.createElement("label");
  var elCreateSpan = document.createElement("span");
  var elCreateInput = document.createElement("input");

 

  elCreateInput.setAttribute("class", "input-radio");
  
  elCreateInput.type = "radio";
  elCreateInput.name = "radio-btn";
  elCreateInput.id = i;
  elCreateInput.value = sizeOfPizza[i] ;
  elCreateSpan.textContent = sizeOfPizza[i];

  //function for task2

var function2 = function (e){
  e.preventDefault();

 elHeight.textContent = this.value;
    
};

elCreateInput.addEventListener("change", function2);

elDiv.appendChild(elCreatelabel);
elCreatelabel.appendChild(elCreateInput);
elCreatelabel.appendChild(elCreateSpan);
}

//task3***********************************************************************************************************************************************************

var toppings = [
  "Pomidor",
  "Kurka go'shti",
  "Zaytun",
  "Tuzlangan bodring",
  "Qo'ziqorin",
  "Qazi",
];

var toppingsSecond = [];

for (var i = 0; i < toppings.length; i++) {
  var elCreateToppingLabel = document.createElement("label");
  var elCreateToppingInput = document.createElement("input");
  var elCreateToppingSpan = document.createElement("span");
  // var elCreateToppingsLi = document.createElement("li");

  

  elCreateToppingInput.id = i;
  elCreateToppingInput.type = "checkbox";
  // elCreateToppingInput.required = true;
  elCreateToppingInput.value = toppings[i] ;
  elCreateToppingSpan.textContent = toppings[i];
  elCreateToppingSpan.className = "flash"
  elCreateToppingInput.className = "input-flash"
  
  elCreateToppingLabel.appendChild(elCreateToppingInput);
  elCreateToppingLabel.appendChild(elCreateToppingSpan);
  elToppings.appendChild(elCreateToppingLabel);
  //function for task 3 
  
     
   
    
    elCreateToppingInput.addEventListener("change", function(){

      if(toppingsSecond.includes(this.value)){
        var flash = toppingsSecond.indexOf(this.value);
        toppingsSecond.splice(flash, 1);
      }else {
        toppingsSecond.push(this.value);
      }


   
      elToppingsList.textContent ="";
       
    // toppingsSecond.push(this.value);
    

    for (var l = 0; l < toppingsSecond.length; l++) {

      var elCreateToppingsLi = document.createElement("li");
    
      elCreateToppingsLi.textContent =  toppingsSecond[l];
    
      elToppingsList.appendChild(elCreateToppingsLi);
    }
    });
};

  


// Task4***********************************************************************************************************************************************************

var add = ["Achchiq", "Sosiskali"];

var addResult = [];

for(var f = 0; f<add.length; f++){

  var elCreateAddInput = document.createElement("input")
  var elCreateAddLabel = document.createElement("label");
  var elCreateAddSpan = document.createElement("span");
  
  // elCreateAddInput.id = f;
  elCreateAddInput.type = "checkbox";
  // elCreateAddInput.required = true;
  elCreateAddInput.value = add[f];
  elCreateAddSpan.textContent = add[f];

  elCreateAddLabel.appendChild(elCreateAddInput);
  elCreateAddLabel.appendChild(elCreateAddSpan);
  elAddDiv.appendChild(elCreateAddLabel);
 

  elCreateAddInput.addEventListener("change", function(){
    
    if(addResult.includes(this.value)){
      var hero = addResult.indexOf(this.value);
      addResult.splice(hero, 1);
    }else {
      addResult.push(this.value);
    }
    
    elAdditionalList.innerHTML = null;

    

for(var t = 0; t < addResult.length; t++){

  var elCreateAddLi = document.createElement("li");

  elCreateAddLi.textContent = addResult[t];

  elAdditionalList.appendChild(elCreateAddLi);
};

console.log(elCreateAddLi);
  });


}





