class NodeDbl{
  constructor(value){
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class DoubleLinkedList{
  constructor(initialValue){
    this.head = new NodeDbl(initialValue);
    this.count = 1;
  }

  printAll(){
    if(this.isEmpty()){
      console.log("Double Linked List is empty");
      return;
    }else{
      let current = this.head;
      while(current){
        console.log(current.value);
        current = current.next;
      }
    }
  }

  printFull(){
    if(this.isEmpty()){
      console.log("Double Linked List is empty");
      return;
    }else{
      let current = this.head;
      while(current){
        console.log('\n');
        console.log(current.prev);
        console.log(current.value);
        console.log(current.next);
        current = current.next;
        console.log('\n');
      }
    }
  }

  add(newValue){
    //empty dbllinkedlist
    if(this.isEmpty()){
      this.head = new NodeDbl(newValue);
      this.count = 0;
      return;
    }

    let current = this.head;
    while(current.next !== null){
      current = current.next;
    }
    let newNode = new NodeDbl(newValue);
    newNode.prev = current;
    current.next = newNode;
    this.count++; 
    return;
  }
  
  addAt(newValue, position){
    if(this.isEmpty()){
      this.head = new NodeDbl(newValue);
      this.count = 1;
      return;
    }
    //head
    if(position === 1){
      let newNode = new NodeDbl(newValue);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
      this.count++;
      return;
    }
    //middle
    if(position > 1 && position <= this.count){
      //traverse until the current position
      let current = this.head;
      let c = 1;
      while(c !== position){
        current = current.next;
        c++;
      }
      let newNode = new NodeDbl(newValue);
      let prevOfCurrent = current.prev;
      prevOfCurrent.next = newNode;
      newNode.prev = prevOfCurrent;
      newNode.next = current;
      current.prev = newNode;
      this.count++;
      return;
    }
    //tail
    if(position > this.count){
      //traverse till .next === null
      let current = this.head;
      while(current.next !== null){
        current = current.next; 
      }
      let newNode = new NodeDbl(newValue);
      current.next = newNode;
      newNode.prev = current;
      this.count++;
      return;
    }
  }

  deleteAt(position){
    if(this.isEmpty()){
      console.log("Double LinkedList is empty!")
      return;
    }
    if(position === 1){
      let newHead = this.head.next;
      newHead.prev = null;
      this.head = newHead;
      return;
    }
    
    //tail
    if(position === this.count){
      let current = this.head;
      let c = 1;
      while(c < position - 1){
        current = current.next;
        c++;
      }
      current.next = null;
      return;
    }

    if(position > 1 && position < this.count){
      let current = this.head;
      let c = 1;
      while(c < position){
        current = current.next;
        c++;
      }
      current.prev.next = current.next;
      current.next.prev = current.prev;
      return;
    }
  }

  search(key){
    if(this.isEmpty()){
      console.log("Double LinkedList is empty!")
      return;
    }
    let current = this.head;
    let c = 1
    while(current !== null){
      if(current.value === key){
        console.log('Found: ', key, " at index ", c);
        return;
      }
      current = current.next;
      c++;
    }
  }

  isEmpty(){
    if(this.head === null) return true;
    return false;
  }
}

let d1 = new DoubleLinkedList(1);
[2,3,4,5,6].forEach(val => d1.add(val));
[1,2,3,4,5,6].forEach(val => d1.search(val))
