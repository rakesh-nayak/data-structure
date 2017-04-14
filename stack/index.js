export default class Stack {
  constructor() {
    let top = 0;
    let dataStore = [];
    this.push = (el) => {
      dataStore[top++] = el;
    }
    this.pop = () => {
      return dataStore[--top];
    }
    this.peek = () => {
      return dataStore[top-1];
    }
    this.length = () => {
      return top;
    }
    this.clear = () => {
      top = 0;
    }
  }
}

// const s = new Stack();
// s.push(10);
// s.push(20);
// s.push(30);
// s.push(40);
// console.log(s.peek());
// s.pop();
// console.log(s.length());
