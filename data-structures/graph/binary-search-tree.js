class NodeBST{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree{
  constructor(value){
    this.root = new NodeBST(value);
  }

  isEmpty(){
    let isEmpty = (!this.root);
    if(isEmpty)
      console.log("LinkedList is empty");
    return isEmpty;
  }

  insert(newValue){
    if(this.isEmpty()) return;
    const add = (value, node)=>{
      if(node === null){
        return new NodeBST(value);
      }
      if(value <= node.value){
        node.left = add(value, node.left)
      }
      if(value > node.value){
        node.right = add(value, node.right);  
      }
      return node;
    }
    this.root = add(newValue, this.root);
  }

  delete(target){
    const removeNode = (node, target)=>{
      if(node.value === target){
        //no child
        if(!node.left && !node.right){
          return null;
        }
        //one child
        if(node.left === null || node.right === null){
          if(node.left === null){
            node = node.right;
          }else{
            node = node.left;
          }
          return node;
        }
        
        //twochild
        let inOrderSuccessor = node.right;
        while(inOrderSuccessor.left){
          inOrderSuccessor = inOrderSuccessor.left;
        }

        node.value = inOrderSuccessor.value;
        node.right = removeNode(node.right, inOrderSuccessor.value); 
        return node;
      }else{
        if(target < node.value){
          node.left = removeNode(node.left, target);
        }else{
          node.right = removeNode(node.right, target)
        }
        return node;
      }
  
    }
    this.root = removeNode(this.root, target)
   
  }

  insertV2(newValue){
    if(this.isEmpty()) return;
    const add = (value, node)=>{
      if(value <= node.value){
        if(node.left === null){
          node.left = new NodeBST(value)
        }else{
          add(value, node.left);
        }
      }else{
        if(node.right === null){
          node.right = new NodeBST(value);
        }else{
          add(value, node.right);
        }
      }
    }
    add(newValue, this.root)
  }


  bfs(){
    if(this.isEmpty()) return;
    let queue = [this.root];
    while(queue.length){
      let currentNode = queue.shift();
      console.log(currentNode.value);
      if(currentNode.left) queue.push(currentNode.left);
      if(currentNode.right) queue.push(currentNode.right);
    }
  }

  dfs(){
    if(this.isEmpty()) return;
    const traverseDFS = (node) => {
      console.log(node.value)
      if(node.left) traverseDFS(node.left); 
      if(node.right) traverseDFS(node.right);
    }
    traverseDFS(this.root);
  }

  inOrderTraversal(){
    if(this.isEmpty()) return;
    const traverse = (node) => {
      if(node.left) traverse(node.left);
      console.log(node.value);
      if(node.right) traverse(node.right);
    }
    traverse(this.root);
  }

  preOrderTraversal(){
    if(this.isEmpty()) return;
    const traverse = (node) => {
      console.log(node.value);
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
    }
    traverse(this.root)
  }

   preOrderTraversal(){
    if(this.isEmpty()) return;
    const traverse = (node) => {      
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      console.log(node.value);
    }
    traverse(this.root)
  }

  findMin(){
    let current = this.root;
    while(current.left){
      current = current.left;
    }
    console.log(current.value)
  }

  findMax(){
    let current = this.root;
    while(current.right){
      current = current.right;
    }
    console.log(current.value)
  }
   

  findLongestHeight(){
    const traverseDFS = (node) => {
      let left = 0;
      let right = 0;
      if(node === null){
        return 0;
      }
      if(node.left){
        left = traverseDFS(node.left) + 1;
      } 
      if(node.right){
        right = traverseDFS(node.right) + 1;
      } 
      return Math.max(left,right);
    }
    let height = traverseDFS(this.root) + 1; 
    console.log(height);
  }
   //             8
    //        /         \
    //      4             12
    //    /   \         /    \
    //   2     6      10     14
    //  / \   / \    / \     / \
    // 1   3 5   7  9  11   13 15

  treeIncludes(targetValue){
    //can be implemented either dfs or bfs
    if(this.isEmpty()) return false;
    
    if(this.root.value === targetValue){
      return true;
    }
    const bfsIncludes = (node, targetValue) => {
      let queue = [node];
      while(queue.length){
        let current = queue.shift();
        if(current.value === targetValue){
          return true;
        }
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
      }
      return false;
    }
    let exists = bfsIncludes(this.root, targetValue);
    console.log(exists)
  }

  treeSum(){
    if(this.isEmpty()) return false;
    
    const bfsSum = (node) => {
      //queue
      let queue = [node];
      let sum = 0;
      while(queue.length){
        let current = queue.shift();
        sum += current.value;
        if(current.left) queue.push(current.left);
        if(current.right) queue.push(current.right);
      } 
      return sum;
    }

    let sum = bfsSum(this.root);
    console.log(sum);
  }

  maxPathSum(){
    if(this.isEmpty()) return false;
    const dfsSum = (node) => {
      let leftSum = 0;
      let rightSum = 0;
      if(node === null){
        return 0;
      }
      if(node.left){
        leftSum = dfsSum(node.left);
      } 
      if(node.right){
        rightSum = dfsSum(node.right);
      }
      return Math.max(leftSum, rightSum) + node.value;
    } 
    let sum = dfsSum(this.root);
    console.log(sum);
  }
}

    //             8
    //        /         \
    //      4             12
    //    /   \         /    \
    //   2     6      10     14
    //  / \   / \    / \     / \
    // 1   3 5   7  9  11   13 15

let bst = new BinarySearchTree(8);
[4, 12, 2, 6, 10, 14, 1, 3, 5, 7, 9, 11, 13, 15].forEach(val => bst.insertV2(val));
bst.treeSum();
