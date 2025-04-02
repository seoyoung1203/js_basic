// let myHeading = document.querySelector('h1')
// myHeading.textContent = 'Hello World'

// 변수 선언
// var myVariable //시작 글자는 소문자 다음 대문자
// 값 할당
// myVariable = 10
// 변수 선언 + 할당
var myVariable = 10

// console.log(myVariable) // 파이썬 문법의 print문과 유사

// ES6이전
var myV1 = 1
// ES6 이후
let myV2 = 2
const myV3 =3

myV1 = 10
var myV1 = 100

// let 변수는 재선언 x
myV2 = 20
// var myV2 = 200

// const 변수는 재할당 x -> 상수값을 쓸때 사용(변하지 않는), 재선언 x
// myV3 = 30 
// const myV3 = 300

// let a = 'bob'
// let b = 10
// let c = true
// let d = [1, 2, 3]
// let e = {
//     'apple' : '사과',
// }

// // console.log(a, b, c, d, e)

// // console.log(1+2)
// // console.log("Hello" + "World")

let varA = '10'
let varB = 10

console.log(varA == varB) // 데이터의 값만 비교. 10이니까 동일 !
console.log(varA === varB) // 데이터의 차이까지 함께 비교
console.log(varA !== varB)

//Array
let myArray = []
myArray.push('hello')
myArray.push('world')

console.log(myArray)

//Object
let myObject ={
    'apple': '사과',
}
console.log(myObject.apple) //>사과

myObject.grape = '포도'
console.log(myObject.grape)

//조건문
let iceCream = 'chocolate'
// if (특정 조건식) {if문 안쪽 블럭}
if (iceCream === 'chocolate') {
    console.log('I love chocolate')
} else if (iceCream == 'vanila') {
    console.log('vanila')
} else {
    console.log('aooooaw')
}

// 반복문
console.log('---while---')
let i = 0
while (i < 5) {
    console.log(i)
    // i = i + 1 (파이썬 문법)
    i++
}

console.log('---for1---')
for (let i =0 ; i<5 ; i++ ) {
    console.log(i)
}


let arrayA = ['a', 'b', 'c']
console.log('---for2---')
for(let i = 0 ; i < arrayA.length ; i++) {
    console.log(arrayA[i])
}

console.log('---for in---')
for (let index in arrayA) {
    console.log(index)
} //인덱스

console.log('---for of---')
for (let item of arrayA) {
    console.log(item)
} //실제 값 출력

console.log('---forEach---')
arrayA.forEach(function(item, index, array){
    console.log(item, index, array)
})

//함수
// def func():

function multiply(num1, num2) {
    let result = num1 * num2
    return result
}

// console.log(multiply(2, 3))

//함수표현식
let multiply2 =function(num1, num2) {
    return num1 * num2
}
console.log(multiply2(3, 4))

//화살표함수
let multiply3 = (num1, num2) => {
    return num1 * num2
}
// console.log(multiply3(2, 5))

//화살표함수 생략1
// {}안에 코드가 return 하는 문장 하나만 있다면
// {}와 return 생략 가능
let multiply4 = (num1, num2) => num1 * num2
console.log(multiply4(3, 4))

//화살표함수 생략2
//() 안에 매개변수가 하나만 있다면
// ()를 생략 가능
let cube = num => num ** 3
console.log(cube(10))

//이벤트(onclick 방식)
// document.querySelector('html').onclick = function (){
//     alert('hello!!')
// } //html 태그를 가진 모든 영역에 onclick이라는 함수 >> arert 실행하는 역할

// 이벤트(이벤트리스너 방식)
let myH1 = document.querySelector('h1')
// <element>.addEventListener(무슨 일이 일어났을때, 무슨 행동을 할지)
myH1.addEventListener('click', function(e){
    alert('hihi')
    console.log(e)
    console.log(e.clientX, e.clientY)
})


let myImg = document.querySelector('img')
myImg.addEventListener('click', function(){
    let src = myImg.getAttribute('src')

    if (src === 'images/dog.image.png'){
        myImg.setAttribute('src', images/firefox-icon.png)
    } else {
        myImg.setAttribute('src', 'images/dog.image.png')
    }
})

let myInput = document.querySelector('input')
myInput.addEventListener('keydown', function(e){
    // console.log(e)
    console.log(myInput,value)
})

// 비동기
// console.log('hi')
// setTimeout(function(){console.log ('1234')}, 1000)
// console.log('bye')

//request
const URL = 'https://jsonplaceholder.typicode.com/todos/1'

// 비동기 처리 방법 1 (promise)

let response = fetch(URL)
.then(response => response.json())
.then(json => console.log(json))

// 비동기 처리 방법 2()
async function fetchTodo(url){
    let res = await fetch(url)
    let result = await res.json()
    console.log(result)
}
console.log(fetchTodo(URL))

let liArray = document.querySelectorAll('li')
// console.log(liArray)
liArray.forEach(function(item){
    item.addEventListener('click', function(e){
        console.log(e)
    })
})