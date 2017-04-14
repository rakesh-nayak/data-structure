class Node {
  constructor(){
    this.next = null;
    this.data = null;
  }
}

class SingleLinkList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insertAtBegin(value) {
    const node = new Node();
    node.data = value;

    let head = this.head;
    if(head === null) {
      this.head = node;
      this.length++;
      return;
    }

    while(head.next !== null) {
      head = head.next;
    }

    head.next = node;
    this.length++;
  }

  print() {
    let head = this.head;
    while(head.next !== null) {
      console.log(head.data);
      head = head.next;
    }
    console.log(head.data);
  }
}

const linklist = new SingleLinkList();
linklist.insertAtBegin(1);
linklist.insertAtBegin(2);
linklist.insertAtBegin(3);
linklist.print();
