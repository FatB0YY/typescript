interface Rect {
  // только для чтения
  readonly id: string
  // необяз
  color?: string
  size: {
    width: number
    height: number
  }
}

const rect1: Rect = {
  id: '1234',
  size: {
    width: 120,
    height: 120,
  },
  color: 'ccc',
}
rect1.color = 'fff'
// rect1.id = '2' error

const rect3 = {} as Rect
const rect4 = <Rect>{}

// ===============================
// Наследование interface

interface RectWithArea extends Rect {
  getArea: () => number
}

const rect5: RectWithArea = {
  id: '123',
  size: {
    width: 10,
    height: 10,
  },
  getArea(): number {
    return this.size.width * this.size.height
  },
}

// ===============================
interface IClock {
  time: Date
  setTime(date: Date): void
}

class Clock implements IClock {
  time: Date = new Date()
  setTime(date: Date): void {
    this.time = date
  }
}

// ===============================
// большое кол динамических ключей
interface Styles {
  [key: string]: string
}

const css: Styles = {
  border: '1px solid black',
  marginTop: '2px',
  borderRadius: '5px',
}
