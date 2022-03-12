class Typescript {
  version: string

  constructor(version: string) {
    this.version = version
  }

  info(name: string) {
    return `[${name}]: Typescript verison is ${this.version}`
  }
}

// class Car {
//   // хорошая практика
//   readonly model: string
//   readonly numberOfWheels: number = 4

//   constructor(theModel: string) {
//     // можем перезаписать только внутри конструктора
//     this.model = theModel
//   }
// }

// то же самое
class Car {
  readonly numberOfWheels: number = 4

  constructor(readonly model: string) {}
}

// ================================= модификаторы
class Animal {
  // доступны в Animal и для всех ребенков
  protected voice: string = ''
  //
  public color: string = 'black'

  // доступно только в Animal
  private go(): void {
    console.log('Go')
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice
  }
}

const cat = new Cat()
cat.setVoice('test')
cat.color
// cat.voice error

// ================================= абстрактные классы
abstract class Component {
  abstract render(): void
  abstract info(): string
}

class AppComponent extends Component {
  render(): void {
    console.log('Component on render')
  }

  info(): string {
    return 'This is info'
  }
}

