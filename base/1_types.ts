const isFetching: boolean = true
let int: number = 42
// int = '' error
const float: number = 4.2
const num: number = 3e10
const msg: string = 'Hello TS'

const numberArray: number[] = [1, 1, 2, 3, 8, 13]
const numberArray2: Array<number> = [1, 1, 2, 3, 8, 13]
const numberArray3: Array<number | string> = [1, 1, '2', 3, 8, 13]

// Tuple
const contact: [string, number] = ['Name', 12345678]
const array: (number | string)[] = ['Name', 12345678]
const numberArray4: [number, string, ...boolean[]] = [1, '2', true, false, true]

// Any
let variable: any = 42
variable = '42'

// ====
function sayMyName(name: string): void {
  console.log('My name is', name)
}

function sayMyName2(name: string): string {
  return name
}

// Never
/*
    1. ф-ция возвращает нам ошибку и никогда не заканчивает свое выполнение
    2. либо когда она постоянно что-либо делает
*/
function throwError(msh: string): never {
  throw new Error(msg)
}

function infinity(): never{
    while(true){}
}

// -------------------------------------------------
// Type
type Login = string
const login: Login = 'admin'

type ID = string | number
const id1: ID = 1234
const id2: ID = '1234'

// null undefined
type SomeType = string | null | undefined

