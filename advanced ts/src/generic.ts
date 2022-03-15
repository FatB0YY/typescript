const cars: string[] = ['Ford', 'Audi']

// generic
const cars2: Array<string> = ['Ford', 'Audi']

const promise = new Promise<string>((resolve) => {
  setTimeout(() => {
    resolve('Promise resolved')
  }, 2000)
})

// const promise2: Promise<string> = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve('Promise resolved')
//     }, 2000)
// })

promise.then((data) => {
  console.log(data.toLowerCase().trim())
})

////////////////////////////////

function mergeObjects<T extends object, R extends object>(a: T, b: R): T & R {
  return Object.assign({}, a, b)
}

const merged = mergeObjects({ name: 'Rodion' }, { age: 26 })
const merged2 = mergeObjects({ name: 2 }, { age: '26' })
console.log(merged.name)
console.log(merged2.age)

// const merged3 = mergeObjects('aaa', 'bbb') error
// console.log(merged3)

////////////////////////////////

interface ILength {
  length: number
}

function withCount<T extends ILength>(value: T): { value: T; count: string } {
  return {
    value,
    count: `В этом объекте ${value.length} символов`,
  }
}
console.log(withCount('Привет TS'))
console.log(withCount(['I', 'am', 'array']))

////////////////////////////////

function getObjectValue<T extends object, R extends keyof T>(obj: T, key: R) {
  return obj[key]
}

const person = {
  name: 'Rodion',
  age: 26,
}
console.log(getObjectValue(person, 'name'))
// console.log(getObjectValue(person, 'job')); error

////////////////////////////////

class Collection<T extends number | string | boolean> {
  constructor(private _items: T[] = []) {}

  add(item: T) {
    this._items.push(item)
  }

  remove(item: T) {
    this._items = this._items.filter((i) => i !== item)
  }

  get items(): T[] {
    return this._items
  }
}

const strings = new Collection<string>(['I', 'am', 'strings'])
strings.add('!')
strings.remove('am')
console.log(strings.items)

const numbers = new Collection<number>([1, 2, 3])
numbers.add(4)
numbers.remove(2)
console.log(numbers.items)

// const objs = new Collection<object>([{ a: 1, b: 2 }])
// objs.remove({ b: 2 })
// console.log(objs.items)  error

////////////////////////////////

interface Car {
  model: string
  year: number
}

function createAndValidateCar(model: string, year: number): Car {
  const car: Partial<Car> = {}
  if (model.length > 3) {
    car.model = model
  }
  if (year > 2000) {
    car.year = year
  }
  return car as Car
}

////////////////////////////////

const cars3: Readonly<Array<string>> = ['Ford', 'Audi']
// cars3.shift() error

const ford: Readonly<Car> = {
    model: 'Ford',
    year: 2020
}
// ford.model = 'Ferrari' error