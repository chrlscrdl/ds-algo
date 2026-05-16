class DirectedGraph{
  constructor(){
    this.directedGraph = {
      a: ['b', 'c'],
      b: ['d', 'e'],
      c: ['f'],
      d: ['g'],
      e: ['g'],
      f: [],
      g: [],
      h: ['a']
    }
  }

  DFS(graph, startNode){
    let stack = [startNode];
    while(stack.length > 0){
      let current = stack.pop();
      console.log(current);
      for(let neighbor of graph[current]){
        stack.push(neighbor);
      }
    }
  }

  BFS(graph, startNode){
    console.log(startNode);
    for(let neighbor of graph[startNode]){
      directedGraphDFSRecursive(graph, neighbor);
    }
  }

  BFS(graph, startNode){
    let queue = [startNode];
    while(queue.length > 0){
      let current = queue.shift();
      console.log(current);
      for(let neighbor of graph[current]){
        queue.push(neighbor);
      }
    }
  }

  hasPath(source, destination){
    const searchDFS = (src, dst)=>{
      if(src === dst) return true;
      for(let neighbor of this.directedGraph[src]){
        if(searchDFS(neighbor, destination) === true){
          return true;
        }
      }
      return false;
    }

    let hasPathValue = searchDFS(source, destination);
    console.log(hasPathValue);
    return hasPathValue;
  }

}





//stack implementation





      //           a < - - -  h
      //         /   \
      //        /     \
      //       ↓       ↓
      //      b         c
      //     / \         \
      //    /   \         \
      //   ↓     ↓         ↓
      //  d       e        f
      //   \     /
      //    \   /
      //     ↓ ↓
      //      g

let dg = new DirectedGraph();

// dg.directedGraphDFS(directedGraph, 'a');
// console.log("\n");
// dg.directedGraphBFS(directedGraph, 'a');
// console.log("\n");
// dg.directedGraphDFSRecursive(directedGraph, 'a');
dg.hasPath('a','c');

