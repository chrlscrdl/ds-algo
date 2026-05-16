# Data Structures & Algorithms

> Personal study notes and implementations compiled while preparing for technical interviews. Topics are added incrementally as I learn them.

## Algorithms

### Recursion
- **Factorial** — recursive and iterative implementations

### Searching
- **Linear Search** — O(n) sequential scan
- **Binary Search** — O(log n) iterative and recursive implementations

### Sliding Window
- **Maximum Sum** (`maximumSum.js`) — fixed-size window; finds max sum of a subarray of size k
- **Longest Sub Array** (`longestSubArray.js`) — dynamic window; finds longest subarray with sum less than s

### Sorting
- **Bubble Sort** — two implementations (flag-based and nested loop)
- **Selection Sort** — finds minimum and swaps into position
- **Insertion Sort**

## Data Structures

### Graph
- **Directed Graph** (`directedGraph.js`) — DFS and BFS traversal
- **Undirected Graph** (`undirectedGraph.js`)
  - `hasPath` — BFS path check between two nodes
  - `hasPathRecursive` — DFS recursive path check
  - `connectedComponentsCount` / `connectedComponentsCountV2` — count isolated components
  - `largestComponent` / `largestComponentV2` — find the largest connected component
  - `shortestPath` — BFS shortest path between two nodes
  - `islandCount` — count islands in a 2D grid
  - `minimumIsland` — find the smallest island in a 2D grid
- **Binary Search Tree** (`binary-search-tree.js`) — insert, search, traversal

### Linked List
- **Singly Linked List** (`linkedList.js`) — add, addAt, and more
- **Doubly Linked List** (`doubleLinkedList.js`)

## Usage

Run any file with Node.js:

```bash
node data-structures/graph/undirectedGraph.js
node algorithms/sorting/sorting.js
```
