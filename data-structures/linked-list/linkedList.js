class Node{
	constructor(value, next){
		this.value = value;
		this.next = next;
	}
}

class LinkedList{
	constructor(headValue){
		this.head = new Node(headValue, null);	
		this.count = 1;
	}

	add(newValue){
		//if LinkedList is empty
		if(this.isEmpty()){
			this.head = new Node(newValue, null);
			this.count = 1;
			return;
		}
		//add at the end
		let current = this.head;
		while(current.next !== null){
			current = current.next;
		}
		current.next = new Node(newValue, null);
		this.count++;
	}
	
	addAt(newValue, position){
		//position starts at index 1
		if(position === 1){
			let newNode = new Node(newValue);
			newNode.next = this.head;
			this.head = newNode;
			this.count = 1;
			return;
		}	

		//tail
		if(position > this.count){
			let current = this.head;
			let newNode = new Node(newValue)
			while(current.next !== null){
				current = current.next;
			}
			current.next = newNode;
			this.count++;
			return;
		}

		//middle [1,2,3,4]
		if(position > 1 && position <= this.count){
			let current = this.head;
			let prev;
			let c = 1;
			let newNode = new Node(newValue);
			while(c !== position){
				prev = current;
				current = current.next;
				c++;
			}
			prev.next = newNode;
			newNode.next = current.next;
			this.count++;
			return;
		}
	}

	printAll(){
		if(this.isEmpty()){
			console.log('LinkedList is empty');
			return;
		}
		let current = this.head;
		let c = 1
		do{
			console.log(current.value)
			current = current.next;
			c++;
		}while(c <= this.count)
	}

	 printFull(){
    if(this.isEmpty()){
      console.log("Double Linked List is empty");
      return;
    }
		let current = this.head;
		let c = 1
		do{
			console.log('\n');
			console.log(current.value);
			console.log(current.next);
			current = current.next;
			c++;
			console.log('\n');
		}while(c <= this.count);
   
  }

	deleteAt(position){
		//Empty list
		if(this.isEmpty()){
			console.log('List is Empty');
			return;
		}
		//head
		if(position === 1){
			this.head = this.head.next;
			this.count--;
			return;
		}
		//tail
		if(position >= this.count){
			let current = this.head;
			let prev;
			while(current.next !== null){
				prev = current;
				current = current.next;
			}
			prev.next = null;
			this.count--;
			return;
		}

		//middle[1,2,3,4]
		if(position > 1 && position < this.count){
			let current = this.head;
			let prev;
			let c = 1;
			while(c < position){
				prev = current;
				current = current.next;
				c++;
			}
			prev.next = current.next;
			this.count--;
			return;
		}	
	}
	
	search(targetValue){
		if(this.isEmpty()){
			console.log("Empty");
			return;
		}
		let current = this.head;
		let c = 1;
		while(current){
			if(current.value === targetValue){
				console.log("Found! at index: ", c);
				return;
			}
			current = current.next;
			c++;
		}
	}

	isEmpty(){
		let isEmpty = this.head? true : false;
		if(isEmpty)
			console.log("LinkedList is Empty!");
		return isEmpty;
	}
	
	isCircular(){
		if(this.head === null){
			console.log('LinkedList empty');
			return;
		}
		let slow = this.head;
		let fast = this.head;
		let isCircular = false;
		while(fast !== null){
			slow = slow.next;
			fast = fast.next.next;
			if(slow === fast){
				isCircular = true;
				break;
			}
		}
		console.log('isCircular: ', isCircular);
		return isCircular;
	}

	convertToCircular(){
		//traverse to tail
		//point tail to head
		if(this.isEmpty()){
			console.log("Empty");
			return;
		}
		let current = this.head;
		while(current.next !== null){
			current = current.next;
		}
		current.next = this.head;
	}

	findMiddle(){
		if(this.isEmpty()){
			console.log("Empty");
			return;
		}
		let slow = this.head;
		let fast = this.head;
		while(fast !== null){
			slow = slow.next;
			fast = fast.next.next;
			
		}
		console.log(slow.value);
		return slow.value;
	}

	rotateList(){
		if(this.isEmpty()){
			console.log('LinkedList is empty!');
			return;
		}
		//non circular list
		if(!this.isCircular()){
			let current = this.head;
			let prev = null;
			while(current){
				//reconfigure pointers
				let nextNode = current.next;
				current.next = prev 
				prev = current;
				current = nextNode;
			}
			this.head = prev;
		}
		

		//implement for circular
		
	}

	removeDuplicates(){
		if(this.isEmpty()){
			console.log("LinkedList is empty");
			return;
		}
		[1,2,2,2,3,4,5,6]
		let current = this.head;
		while(current && current.next){
			if(current.value === current.next.value){
				current.next = current.next.next;
				this.count--;
			}else{
				current = current.next;
			}
		}
	}
}

let l1 = new LinkedList(1);
[2,2,2,3,4,5,6].forEach(val => l1.add(val));
l1.removeDuplicates();
l1.printAll();