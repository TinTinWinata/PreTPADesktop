import {Food} from "./food.js"

// console.log("hello world")
// console.error("Hai ini Error")

// var a = document.getElementById('text')
// a.innerHTML = "Test"

// a = "justine"
// console.log(a)

function test()
{
  document.write("<b>Test</b>")
}

function checkForm()
{
  // event.preventDefault()

  let foodName = document.getElementById('foodName').value
  // console.log(document.getElementById("foodName")).value
  let foodDesc = document.getElementById('foodDesc').value
  let foodStock = document.getElementById('foodStock').value
  let foodPrice = document.getElementById('foodPrice').value

  alert("Food name : " + foodName)
  alert("Food desc : " + foodDesc)
  // alert(foodName, foodDesc, foodStock, foodPrice)
  // return false;
}

// let foodForm = document.getElementById("foodForm")
// foodForm.addEventListener("submit", () => {alert("Justine Winata")})

// console.log(foodForm)
// foodForm.onsubmit = checkForm()
// foodForm.addEventListener("submit", checkForm())

// let arr = [1, 2, 3, 5]

// for (const i of arr) {
//   console.log(i)
// }

// for (const key in arr) {
//   console.log(key)
// }



let myFood2 = new Food("Sate Ayam", "Enak juga", 13, 20000)
console.log(myFood2) 
// let {foodDesc:desc, foodStock, foodPrice} = myFood2;
// Destructure
// console.log(desc)

// let text = {
//   "name":"Justine Winata",
//   "initial":"JT22-1"
// }

// let obj = JSON.parse(text)
// Parse -> from Web Server to Javascript object

// console.log(obj)

// let text2 = JSON.stringify(myFood2)
// Stringify -> from Javascript object to Json String

// console.log(text2)

// console.log(myFood2)
// console.log("1" + (1 + 1))

console.log("Starting...")

setTimeout(() => {
  console.log("Hi this a")
}, 1000);

const done = false

const isItDoneYet = new Promise((resolve, reject) => {
  if(done){
    const workDone = 'Here is the thing i built'
    resolve(workDone)
  }else{
    const why = 'Still working in something else'
    reject(why)
  }
})

isItDoneYet.then((data) =>{
  console.log(data)
}).catch((data) =>{
  console.log(data)
})


