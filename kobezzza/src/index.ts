function deprecated(target: any, key: any, desc: any) {
  // const fn = target[key]
  // напрямую
  const fn = desc.value
  return {
    ...desc,
    value: function () {
      console.log('fn is deprecated')
      return fn.apply(this, arguments)
    },
  }
}

function once(target: any, key: any, desc: any) {
  const NULL = {}
  let result = NULL

  // ссылка нашу исходную ф-цию
  //const fn = target[key]

  const fn = desc.value

  return {
    ...desc,
    value: function () {
      if (result === NULL) {
        result = fn.apply(this, arguments)
      }
      return result
    },
  }
}

class Foo {
  @once
  @deprecated
  foo(): number {
    return Math.random()
  }
}

const foo = new Foo()
// одно и тоже знач
console.log(foo.foo())
console.log(foo.foo())
console.log(foo.foo())

///////////////

class Bla {
  bar: string = '121'
  foo(): number {
    return 1
  }
}

function getBla(a: Bla){

}
