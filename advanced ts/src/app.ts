console.log('App.ts')

const btn = document.querySelector('#btn')
btn?.addEventListener('click', () => {
  console.log('Click')
})

let anyFlag
const globalVar = 'Message'

function logInfo(data: string, a?:number) {
    const message = 'String'
    console.log(data);
    anyFlag = true
    console.log(anyFlag);
}

logInfo("I'm log string")

function multiple(a: number, b:number): number{
    if(a && b){
        return a + b
    }
    return 0
}