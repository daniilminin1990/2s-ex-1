//1  Liza

/*
const {apple} = {apple: 56}

const multiply = apple * 76.43

const randomValue = multiply && "Valera" &&  "Liza"

/* Какое значение получит переменная randomValue ?



*/

// ---------------------------------

// 2 XXX -id: number , YYY - newPassword: string

/*
type UserType = {
    id: number
    userName: string
    email: string
    password: string
}

type ChangeUserPasswordTypeAT = {
    type: "CHANGE-USER-PASSWORD"
    payload: {
           XXX
           YYY
  }
}

export const userReducer =
    (state: UserType[], action: ChangeUserPasswordTypeAT): UserType[] => {
    switch (action.type) {
        case "CHANGE-USER-PASSWORD":
            return state.map(u =>
                 u.id === action.payload.id
                    ? {...u, password: action.payload.newPassword}
                    : u)
        default:
            return state
    }
}

//Какой код должен быть написан вместо XXX и YYY в типе //ChangeUserPasswordTypeAT, что бы редьюсер работал?
//В ответе напишите через пробел: XXX  YYY

*/

// 3 47.84 потому что stedent['name'] нет. Есть только student['Vladislav']
/*
const name = "Vladislav"

const student = {
    [name]: name
}

const number = student["name"]
    ? 42.17
    : 47.84

/*Какое значение получит переменная number?
*/

// ---------------------------------

//4 - action.type
/*

type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"
    payload: number
}

export const calculator = (state: number, action: ActionType) => {
    switch (ХХХ) {
         case "SUM":
             return state + action.payload
         case "SUB":
             return state - action.payload
         case "DIV":
             return state / action.payload
         default:
             return state
     }
}

//Что надо написать вместо ХХХ, чтобы функция calculator работала?

*/
//-----------------------------------

// 5 -- 10, потому что ActionType для MULT не описан в case
/*

type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
    payload: number
}

export const calculator = (state: number, action: ActionType): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        case "EXP":
            return state ** action.payload
        default:
            return state
    }
}

//Что вернёт такой вызов функции: calculator(10, {type: "MULT", payload: 2})?

 */

// -----------------------------

//? 6 Ответ  43, но не понятно. Причина в операторе ++, который стоит после category.scores
/*
category.scores++, это как category.scores = category.scores + 1
Т.е. для attention.scores : category.scores и только потом category.scores + 1.
А так как мы не ссылаемся, а сделали копию, то в результат сохранится предыдущее значение category.scores
*/

/*
const category = {
    name: "Marina",
    scores: 43
}

const attention = {
    ... category,  scores:  category.scores++
}


const scores  = attention.scores

// Какое значение получит переменная scores?
*/

//! 7 - не успел. Ответ EXP. Почему -- потому что нам нужно, чтобы result - 1 был равен 0. Т.е. result должен быть = 1, а это возможно только если 10**0 = 1. Поэтому EXP.
// Не может быть MULT, потому что result=10*0 = 0, а result - 1 = -1, а любое значение > или < 0 = true. Следовательно (!Boolean(0 - 1)) = (!true) = false
/*

type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"|"EXP"
    payload: number
}

export const calculator = (state: number, action: ActionType): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        case "MULT":
            return state * action.payload
        case "EXP":
            return state ** action.payload
        default:
            return state
    }
}
const result = calculator(10, {XXX, payload: 0})
if (!(result - 1)){
    console.log("IT-INCUBATOR")
}

//Что надо написать вместо XXX чтобы в консоли появилась строка "IT-INCUBATOR"?

*/


// ---------------------------------


// 8 - MULT
/*

type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"
    payload: number
}

export const calculator = (state: number, action: ActionType): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        default:
            return state
    }
}

//Обработка какого action.type не предусмотрена в функции calculator?

*/


// ------------------------------------------

//9 - type: "SUB"

/*

type ActionType = {
    type: "SUM"|"SUB"|"MULT"|"DIV"
    payload: number
}

export const calculator = (state: number, action: ActionType): number => {
    switch (action.type) {
        case "SUM":
            return state + action.payload
        case "SUB":
            return state - action.payload
        case "DIV":
            return state / action.payload
        case "MULT":
            return state * action.payload
        default:
            return state
    }
}

const result = calculator(10, {XXX, payload: 5})
console.log(result)
//Что надо написать вместо XXX, что бы переменная result содержала значение 5?

*/

// ------------------------------------------

//10 -- Liza -- result == 4, потому что 1 % 2 = 1; и 3 % 2 = 1, т.е. result = 1 + 3 = 4. Result - 4 = 0. Т.е. falsy, а если falsy, то Liza 

/* 
let result = 0

for(let i = 0; i < 5; i++){
    if(i % 2){
        result += i
    }
}

const studentName = (result - 4)
    ? "Valera"
    : "Liza"

/* Какое значение получит переменная studentName? 
*/