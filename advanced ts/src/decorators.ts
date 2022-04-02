function Log(constructor: Function) {
  // constructor это сам класс, мы не создавали никаких инстансов
  console.log(constructor)
}

function Log2(target: any, propName: string | Symbol) {
  // сам класс
  console.log(target)
  // name
  console.log(propName)
}

function Log3(
  target: any,
  propName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  // обычный объект, в нем описаны св-ва данного метода (configurable enumerable writable)
  console.log(descriptor)
  // сам класс
  console.log(target)
  // name
  console.log(propName)
}

@Log
class Component1 {
  @Log2
  name: string

  @Log3
  get componentName() {
    return this.name
  }

  constructor(name: string) {
    this.name = name
  }

  @Log3
  logName(): void {
    console.log(`Component Name: ${this.name}`)
  }
}

/////////////////////////////////////////////////

interface IComponentDecorator {
  selector: string
  template: string
}

function Component(config: IComponentDecorator) {
  return function <T extends { new (...args: any): object }>(Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args)
        const el = document.querySelector(config.selector)!
        el.innerHTML = config.template
      }
    }
  }
}

@Component({
  selector: '#card',
  template: `
    <div class="card">
      <div class="content">
        <span class="card-title">Card Component</span>
      </div>
    </div>
  `,
})
class CardComponent {
  constructor(public name: string) {}

  logName(): void {
    console.log(`Component Name: ${this.name}`)
  }
}

const card = new CardComponent('My Card Component')
const btn2 = document.querySelector('#btn')
btn2?.addEventListener('click', card.logName.bind(card))
