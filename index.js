
/*number1=122
number2=100

console.log(number1 + number2)
console.log(number1 - number2)
console.log(number1 * number2)
console.log(number1 / number2)
console.log(number1 % number2)

console.log(number1**2)
console.log(Math.round(123.09))
console.log(123.456433.toFixed(3))


console.log(!0) //true

== type
=== totalmente igual type and value
 null same as none, not getting the value
 undefine variables thar are not defined


console.log(number1>number2)
console.log(number1==number2)
console.log(number1!==number2)
console.log(number1<number2)

console.log(document.getElementById('1'))

console.log(document.querySelectorAll(".number"))
function func1(number){
    console.log(number)
}

func1=(number)=>{
    console.log(number)
}

console.log(numberButtons)

for(let i=0; i<numberButtons.length; i++){
    console.log(numberButtons[i])
}

for(const i of numberButtons){
    console.log(i)
}
numberButtons.forEach(number => console.log(number))
*/
let number1= null;
let number2= null;
operation=null;
let numberButtons= document.querySelectorAll(".number")
let screen= document.getElementById("screen")
let operatorButtons= document.querySelectorAll(".operator");


numberButtons.forEach( (number) => {
    number.addEventListener("click", () => {
        //console.log(number.innerHTML)
        //console.log(number.innerText)
       // number1= number.innerText
        if(number1)
        {
            number1=number1 + number.innerText

        }else{
            number1= number.innerText
        }
        //console.log(number1)
        screen.innerText= number1
    })

})

operatorButtons.forEach(operator => {
    operator.addEventListener("click", () => {
       if(operator.id !== "igual"){
        screen.innerText=0
        number2= number1
        number1= null
        operation= operator.id
       }else{

        if(operation == "add"){
            screen.innerText= parseInt(number2)+ parseInt(number1)
        }
        if(operation == "sub"){
            screen.innerText=parseInt(number2)- parseInt(number1)
        }
        if(operation == "mul"){
            screen.innerText=parseInt(number2)* parseInt(number1)
        }
        if(operation == "div"){
            screen.innerText=parseInt(number2) / parseInt(number1)
        }



       }

    })
})
