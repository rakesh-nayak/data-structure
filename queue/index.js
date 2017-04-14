export default class Queue {
  constructor() {
    let dataStore = [];
    this.enqueue = (el) => {
      dataStore.push(el);
    };
    this.dequeue = () => {
      return dataStore.shift();
    };
    this.front = () => {
      return dataStore[0];
    };
    this.back = () => {
      return dataStore[dataStore.length - 1];
    };
    this.isEmpty = () => {
      return !dataStore.length;
    };
    this.toString = () => {
      var retStr = "";
      for (var i = 0; i < dataStore.length; ++i) {
        retStr += dataStore[i] + "\n";
      }
      return retStr;
    }
  }
}
//
// const print = (msg) => console.log(msg);
//
// var q = new Queue();
// q.enqueue("Meredith");
// q.enqueue("Cynthia");
// q.enqueue("Jennifer");
//
// print(q.toString());
// q.dequeue();
// print(q.toString());
// print("Front of queue: " + q.front());
// print("Back of queue: " + q.back());
