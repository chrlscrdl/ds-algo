

class UndirectedGraph{
  constructor(){
   this.edges = [
      // Component 1 (CYCLIC): i-j-l-k-i forms a cycle
      ['i', 'j'],
      ['k', 'i'],
      ['m', 'k'],
      ['k', 'l'],
      ['j', 'l'],  // This edge creates the cycle!
      
      // Component 2: simple connection
      ['o', 'n'],
      
      // Component 3: linear connection
      ['p', 'q'],
      ['q', 'r']
    ]
    this.adjencyList = this.convertEdgeToList(this.edges);
  }

  convertEdgeToList(edges){
    let adjencyList = {};
    for(let edge of edges){
      let [a, b] = edge;
      if(!adjencyList[a]) adjencyList[a] = [];
      if(!adjencyList[b]) adjencyList[b] = []
      adjencyList[a].push(b);
      adjencyList[b].push(a);
    }
    return adjencyList;
  }

  hasPath(src, dst){
    //implement using bfs
    let queue = [src];
    let visitedNodes = new Set([src])
    while(queue.length){
      let current = queue.shift();
      if(current === dst){
        console.log('true')
        return true;                 
      }
      for(let neighbor of this.adjencyList[current]){
        if(!visitedNodes.has(neighbor)){
          queue.push(neighbor);
          visitedNodes.add(neighbor);
        } 
      }
    }
    console.log('false');
    return false;
  }

  hasPathRecursive(source, destination){
    let visitedNodes = new Set([]);

    const hasPath = (src, dst, visitedNodes) => {
      if(visitedNodes.has(src)) return false;
      if(src === dst) return true;
      visitedNodes.add(src);
      for(let neighbor of this.adjencyList[src]){
        if(hasPath(neighbor, dst, visitedNodes)) return true;
      }
      return false;
    }

    let value = hasPath(source, destination, visitedNodes);
    console.log(value);
    return value;
  }


  connectedComponentsCount(){
    let nodes = Object.keys(this.adjencyList);
    let visitedNodes = new Set();
    let componentCount = 0;

    const traverse = (src) => {
      for(let neighbor of this.adjencyList[src]){
        if(!visitedNodes.has(neighbor)){
          visitedNodes.add(neighbor);
          traverse(neighbor);
        }
      }
    }

    for(let node of nodes){
      if(visitedNodes.has(node)) continue; 
      componentCount++;
      visitedNodes.add(node);
      traverse(node);
    }
    console.log(componentCount);
    return componentCount;
  }

   connectedComponentsCountV2(){
    let nodes = Object.keys(this.adjencyList);
    let visitedNodes = new Set();
    let componentCount = 0;

    const explore = (src) => {
      if(visitedNodes.has(src)) return false;
      visitedNodes.add(src);
      for(let neighbor of this.adjencyList[src]){
        if(!visitedNodes.has(neighbor)){
          explore(neighbor);
        }
      }
      return true;
    }

    for(let node of nodes){
      if(explore(node) === true){
        console.log(node);
        componentCount++;
      } 
    }
    console.log(componentCount);
    return componentCount;
  }

  largestComponent(){
    let nodes = Object.keys(this.adjencyList);
    let visitedNodes = new Set();
    let currentSize = 0;
    let largestSize = 0;
    const explore = (node) => {
      if(visitedNodes.has(node)) return;
      visitedNodes.add(node);
      currentSize++;      
      for(let neighbor of this.adjencyList[node]){
        explore(neighbor);
      }      
    }
    
    for(let node of nodes){
      currentSize = 0;
      explore(node);
      console.log(largestSize, currentSize)
      largestSize = Math.max(largestSize, currentSize);
    }

    console.log(largestSize);



  }

  largestComponentV2(){
    let nodes = Object.keys(this.adjencyList);
    let visitedNodes = new Set();
    let largestSize = 0;
    const explore = (node) => {
      if(visitedNodes.has(node)) return 0;
      visitedNodes.add(node);     
      let size = 1;
      for(let neighbor of this.adjencyList[node]){
        size += explore(neighbor);
      }      
      return size;
    }
  
    for(let node of nodes){
      let size = explore(node);
      largestSize = Math.max(largestSize, size);
    }
    console.log(largestSize);
  }

  shortestPath(start, end){
    let queue = [[start, 0]];
    let visitedNodes = new Set([start]);
    while(queue.length){
      let [node, distance] = queue.shift();
      if(node === end) return distance;
      for(let neighbor of this.adjencyList[node]){
        if(!visitedNodes.has(neighbor)){
          visitedNodes.add(neighbor);
          queue.push([neighbor, distance + 1]);
        }
      }
    }
  }


// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];

  islandCount(grid){
    
    //grid is an array of arrays

    let visitedNodes = new Set();
    let count = 0;
    
    const dfs = (row, col, grid) => {
      const rowInbounds = 0 <= row && row < grid.length;
      const colInbounds = 0 <= col && col < grid[0].length;
      
      if(!rowInbounds || !colInbounds) return false;
      if(grid[row][col] === 'W') return false;  

      let pos = `${row}-${col}`
      if(visitedNodes.has(pos)) return false;
      visitedNodes.add(pos);
      dfs(row - 1, col, grid);
      dfs(row + 1, col, grid);
      dfs(row, col - 1, grid);
      dfs(row, col + 1, grid);
      return true;
    }


    for(let row = 0; row < grid.length; row++){
      for(let col = 0; col < grid[row].length; col++){
        if(dfs(row, col, grid) === true){
          count++;
        }
      }
    }
    console.log(count);
    return count;
  }

  minimumIsland(grid){
    const visitedNodes = new Set();
    let minimum = 100;
    
    const dfs = (row, col, grid) => {
      const rowInBounds = 0 <= row && row < grid.length;
      const colInbounds = 0 <= col && col < grid[0].length;
      if(!rowInBounds || !colInbounds) return 0;
     
      if(grid[row][col] === 'W') return 0;  

      let pos = `${row}-${col}`;
      if(visitedNodes.has(pos)) return 0;
      visitedNodes.add(pos);

      let size = 1;
      size += dfs(row - 1, col, grid);
      size += dfs(row + 1, col, grid);
      size += dfs(row, col - 1, grid);
      size += dfs(row, col + 1, grid);
      return size;
    }

    for(let row = 0; row < grid.length; row++){
      for(let col = 0; col < grid[0].length; col++){
        const size = dfs(row, col, grid);
        if(size > 0 && size < minimum){
          minimum = size;
        }
      }
    }
    console.log(minimum)
  }
}



let ug = new UndirectedGraph();

const grid = [
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'W', 'W'],
  ['W', 'L', 'W', 'L', 'W'],
  ['W', 'L', 'W', 'L', 'W'],
  ['L', 'W', 'W', 'L', 'L'],
  ['L', 'L', 'W', 'W', 'W'],
];

ug.minimumIsland(grid);

//Sample Graphs

//Graph 1 cyclic and multiple components
// Component 1 (CYCLIC - 5 nodes):

//         j --------
//         |         |
//         i         l
//         |         |
//         k ------- 
//         |
//         m

// Component 2 (2 nodes):

//         o ----- n


// Component 3 (3 nodes):

//         p ----- q ----- r


//Graph 2 simple

  // i: [ 'j', 'k' ],
  // j: [ 'i' ],
  // k: [ 'i', 'm', 'l' ],
  // m: [ 'k' ],
  // l: [ 'k' ],
  // o: [ 'n' ],
  // n: [ 'o' 

// [
//   'i', 'j', 'k',
//   'm', 'l', 'o',
//   'n'
// ]

  //    j
  //    |
  //    i
  //    |
  //    k --- m
  //    |
  //    l

  // o --- n


// const grid = [
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'L', 'W', 'W', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['W', 'W', 'W', 'L', 'W'],
//   ['L', 'W', 'W', 'L', 'L'],
//   ['L', 'L', 'W', 'W', 'W'],
// ];