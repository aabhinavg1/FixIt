---
title: "Non-Linear Data Structures"
description: "Explore non-linear data structures like trees and graphs with detailed examples in C++, Java, and Python. Learn their applications, types, and when to use them in real-world problems and coding interviews."
keywords:
- Non-Linear Data Structures
- Trees
- Binary Tree
- Binary Search Tree
- AVL Tree
- Heap
- Trie
- Graph
- DFS
- BFS
- Tree Traversal
- Graph Representation
- Adjacency Matrix
- Adjacency List
- DSA for Interviews
- Algorithm Design
- Competitive Programming
- Graph Algorithms
- Minimum Spanning Tree
- Shortest Path
- Dijkstra
- Kruskal
- Prim
- A\* Algorithm
- Topological Sort
- Dynamic Graph
- Recursion in Trees
- Real-World Applications

tags:

- Non-Linear DSA
- Trees
- Graphs
- Algorithms
- DSA
- C++
- Java
- Python
- Interview Prep
- Coding Challenges
- Data Structures
---


<div>  
    <DSA_Book_Recommendation />  
</div>


import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DSA_Book_Recommendation from './DSA_Book_Recommendation.js';
import AdBanner from '@site/src/components/AdBanner';


<div>
    <AdBanner />
</div>


## Table of Contents

1. [Introduction](#introduction)
2. [What are Non-Linear Data Structures?](#what-are-non-linear-data-structures)
3. [Types of Non-Linear Data Structures](#types-of-non-linear-data-structures)

   * [Trees](#1-trees)
   * [Graphs](#2-graphs)
4. [Applications of Non-Linear Structures](#applications-of-non-linear-structures)
5. [Traversal and Searching Techniques](#traversal-and-searching-techniques)
6. [Choosing the Right Structure](#choosing-the-right-structure)
7. [Complexity Comparison](#complexity-comparison)
8. [Interview Questions](#interview-questions)
9. [Further Reading](#further-reading)

## Introduction

**Non-Linear Data Structures (NLDS)** are data structures where elements are not arranged sequentially. They are essential for solving complex problems involving hierarchical or networked relationships.

They allow more efficient organization and retrieval of data in scenarios where linear structures fall short.


<div>
    <AdBanner />
</div>


## What are Non-Linear Data Structures?

Unlike arrays, stacks, and queues, **non-linear data structures** store data in a hierarchical or interconnected form. The most common non-linear structures are:

* Trees
* Graphs

They are often used in real-world applications like database indexing, AI, compiler design, and networking.


<div>
    <AdBanner />
</div>


## Types of Non-Linear Data Structures

### 1. Trees

A **tree** is a hierarchical data structure with a root node and sub-nodes forming a parent-child relationship.

#### Types of Trees:

Trees are fundamental data structures in computer science that represent hierarchical relationships. They consist of nodes connected by edges, with one node designated as the root. Various types of trees serve different purposes depending on their structure and properties. Here are some commonly used types of trees:

- **Binary Tree:**
A Binary Tree is a tree data structure where each node has at most two children, typically referred to as the left and right child. Binary trees are widely used because of their simple structure and are the foundation for more complex trees like binary search trees and heaps. Traversing a binary tree can be done in several ways such as preorder, inorder, and postorder traversal.

- **Binary Search Tree (BST):**
A Binary Search Tree is a special type of binary tree that maintains an ordered structure. For each node, all elements in the left subtree are less than the node, and all elements in the right subtree are greater. This property allows efficient searching, insertion, and deletion operations, typically with an average time complexity of O(log n).

- **AVL Tree:**
The AVL Tree is a self-balancing binary search tree. It maintains a balance factor for every node (the difference in height between left and right subtrees) and ensures that this factor stays between -1 and 1. This balance guarantees that the tree remains approximately balanced after insertions and deletions, providing consistent O(log n) search times.

- **Heap:**
A Heap is a complete binary tree that satisfies the heap property: in a max-heap, every parent node is greater than or equal to its children, whereas in a min-heap, every parent node is less than or equal to its children. Heaps are commonly used to implement priority queues and are essential in algorithms like heapsort.

- **Trie:**
A Trie, or prefix tree, is a specialized tree used primarily for storing strings. Each node represents a character, and the path from the root to a node spells out a prefix of the stored strings. Tries enable fast prefix-based searches, autocomplete, and dictionary implementations.

<Tabs>
<TabItem value="C++" label="C++">
```cpp
struct Node {
  int data;
  Node* left;
  Node* right;
};
```
</TabItem>
<TabItem value="Java" label="Java">
```java
class Node {
  int data;
  Node left, right;
}
```
</TabItem>
<TabItem value="Python" label="Python">
```python
class Node:
    def __init__(self, data):
        self.data = data
        self.left = None
        self.right = None
```
</TabItem>
</Tabs>



<div>
    <AdBanner />
</div>



#### Tree Traversals:
Tree traversal refers to visiting all nodes in a tree in a specific order. It is essential for many operations like searching, sorting, and evaluating expressions. Below are the main types of tree traversals with visual explanations.

Consider this binary tree as an example:

```mathematica
        A
       / \
      B   C
     / \   \
    D   E   F
```

1. **Inorder Traversal (Left → Root → Right)**:
- *Process:* Visit left subtree → Visit root → Visit right subtree.

- *Order for example tree:* D → B → E → A → C → F

- *Diagram Traversal Path:*
```javascript
Step 1: D (leftmost)
Step 2: B (parent of D and E)
Step 3: E (right child of B)
Step 4: A (root)
Step 5: C (right child of A)
Step 6: F (right child of C)
```

2. **Preorder Traversal (Root → Left → Right):**
- *Process:* Visit root → Visit left subtree → Visit right subtree.

- *Order for example tree:* A → B → D → E → C → F

- *Diagram Traversal Path:*

```javascript
Step 1: A (root)
Step 2: B (left child)
Step 3: D (left child of B)
Step 4: E (right child of B)
Step 5: C (right child of A)
Step 6: F (right child of C)
```

3. **Postorder Traversal (Left → Right → Root)**
- *Process:* Visit left subtree → Visit right subtree → Visit root.

- *Order for example tree:* D → E → B → F → C → A

- *Diagram Traversal Path:*

```javascript
Step 1: D (leftmost)
Step 2: E (right sibling of D)
Step 3: B (parent of D and E)
Step 4: F (right child of C)
Step 5: C (right child of A)
Step 6: A (root)
```


<div>
    <AdBanner />
</div>



### 2. Graphs

A **graph** is a non-linear data structure consisting of a set of nodes **(vertices)** and a set of edges that connect pairs of nodes. Graphs are widely used in computer science for modeling networks like social connections, roads, computer networks, etc.

#### Types of Graphs
- ***Directed Graph (Digraph)***: Edges have direction. For example, a link from A to B doesn’t imply a link from B to A.

- ***Undirected Graph***: Edges have no direction; A connected to B implies B is also connected to A.

- ***Weighted Graph***: Each edge carries a weight/cost (e.g., distance, time).

- ***Unweighted Graph***: All edges are treated as equal (no weights).

- ***Cyclic vs. Acyclic Graphs***: Cyclic graphs contain cycles; acyclic graphs do not.

- ***Connected vs. Disconnected Graphs***: In a connected graph, there's a path between every pair of vertices.



<div>
    <AdBanner />
</div>



#### Representations:

**1. Adjacency Matrix**

- A 2D matrix of size `V x V`, where V is the number of vertices.

- If there is an edge between vertex `i` and `j`, matrix[i][j] = 1 or weight.

- Efficient for dense graphs, but uses more space.
<Tabs>
<TabItem value="C++" label="C++">

```cpp
#include <iostream>
using namespace std;

int main() {
    int V = 4;  // Number of vertices
    int adjMatrix[4][4] = {0};  // Initialize with 0s

    // Example edges (undirected)
    int edges[][2] = {
        {0, 1}, {0, 2}, {1, 2}, {2, 3}
    };

    // Fill the matrix
    for (auto& edge : edges) {
        int u = edge[0];
        int v = edge[1];
        adjMatrix[u][v] = 1;
        adjMatrix[v][u] = 1; // remove if directed
    }

    // Print the matrix
    cout << "Adjacency Matrix:\n";
    for (int i = 0; i < V; ++i) {
        for (int j = 0; j < V; ++j) {
            cout << adjMatrix[i][j] << " ";
        }
        cout << "\n";
    }

    return 0;
}

```
</TabItem>
<TabItem value="Python" label="Python">

```python
# Number of vertices
V = 4

# Initialize a VxV matrix with 0s
adj_matrix = [[0 for _ in range(V)] for _ in range(V)]

# Example edges (undirected graph)
edges = [(0, 1), (0, 2), (1, 2), (2, 3)]

# Fill the matrix
for u, v in edges:
    adj_matrix[u][v] = 1
    adj_matrix[v][u] = 1  # remove if directed

# Print matrix
for row in adj_matrix:
    print(row)

```
</TabItem>
<TabItem value="Java" label="Java">

```javascript
public class AdjacencyMatrix {
    public static void main(String[] args) {
        int V = 4;
        int[][] adjMatrix = new int[V][V];

        // Example edges (undirected)
        int[][] edges = {
            {0, 1}, {0, 2}, {1, 2}, {2, 3}
        };

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            adjMatrix[u][v] = 1;
            adjMatrix[v][u] = 1; // remove if directed
        }

        // Print matrix
        for (int i = 0; i < V; i++) {
            for (int j = 0; j < V; j++) {
                System.out.print(adjMatrix[i][j] + " ");
            }
            System.out.println();
        }
    }
}

```

</TabItem>

</Tabs>



<div>
    <AdBanner />
</div>



**2. Adjacency List**

- Each vertex maintains a list of its adjacent vertices.

- More space-efficient for sparse graphs.

<Tabs>
<TabItem value="C++" label="C++">

```cpp
#include <iostream>
#include <vector>
using namespace std;

int main() {
    int V = 4;
    vector<vector<int>> adjList(V); // Vector of vectors

    // Example edges
    vector<pair<int, int>> edges = {
        {0, 1}, {0, 2}, {1, 2}, {2, 3}
    };

    // Fill the list
    for (auto& edge : edges) {
        int u = edge.first;
        int v = edge.second;
        adjList[u].push_back(v);
        adjList[v].push_back(u); // remove if directed
    }

    // Print the adjacency list
    cout << "Adjacency List:\n";
    for (int i = 0; i < V; ++i) {
        cout << i << ": ";
        for (int neighbor : adjList[i]) {
            cout << neighbor << " ";
        }
        cout << "\n";
    }

    return 0;
}

```
</TabItem>
<TabItem value="Python" label="Python">

```python
# Number of vertices
V = 4

# Initialize adjacency list
adj_list = [[] for _ in range(V)]

# Example edges
edges = [(0, 1), (0, 2), (1, 2), (2, 3)]

# Fill the list
for u, v in edges:
    adj_list[u].append(v)
    adj_list[v].append(u)  # remove if directed

# Print list
for i in range(V):
    print(f"{i}: {adj_list[i]}")

```
</TabItem>
<TabItem value="Java" label="Java">

```javascript
import java.util.*;

public class AdjacencyList {
    public static void main(String[] args) {
        int V = 4;
        List<List<Integer>> adjList = new ArrayList<>();

        // Initialize list
        for (int i = 0; i < V; i++) {
            adjList.add(new ArrayList<>());
        }

        // Example edges
        int[][] edges = {
            {0, 1}, {0, 2}, {1, 2}, {2, 3}
        };

        for (int[] edge : edges) {
            int u = edge[0];
            int v = edge[1];
            adjList.get(u).add(v);
            adjList.get(v).add(u); // remove if directed
        }

        // Print list
        for (int i = 0; i < V; i++) {
            System.out.println(i + ": " + adjList.get(i));
        }
    }
}


```

</TabItem>

</Tabs>



<div>
    <AdBanner />
</div>



#### Traversal:

Graph traversal is a fundamental operation in graph theory that involves visiting all the vertices of a graph in a systematic manner. The two most common traversal techniques are **Depth-First Search (DFS)** and **Breadth-First Search (BFS)**. These algorithms help in exploring graph structures, detecting cycles, and finding paths between nodes.

**DFS** explores as far as possible along each branch before backtracking. It's often implemented using recursion or a stack. DFS is useful in scenarios like topological sorting and solving puzzles with only one solution path.

**BFS**, on the other hand, explores all neighbors at the present depth before moving on to nodes at the next level. It uses a queue and is ideal for finding the shortest path in unweighted graphs.

Both methods can be applied to **directed** or **undirected**, and **weighted** or **unweighted** graphs. Choosing between them depends on the problem's requirements and the graph's structure.

<Tabs>
  <TabItem value="Python" label="Python">

```python
from collections import deque

def bfs(graph, start):
    visited = set()
    queue = deque([start])
    while queue:
        vertex = queue.popleft()
        if vertex not in visited:
            print(vertex)
            visited.add(vertex)
            queue.extend(set(graph[vertex]) - visited)

def dfs(graph, start, visited=None):
    if visited is None:
        visited = set()
    print(start)
    visited.add(start)
    for neighbor in graph[start]:
        if neighbor not in visited:
            dfs(graph, neighbor, visited)
```

  </TabItem>
  <TabItem value="Java" label="Java">

```java
import java.util.*;

public class GraphTraversal {
    public void bfs(Map<Integer, List<Integer>> graph, int start) {
        Set<Integer> visited = new HashSet<>();
        Queue<Integer> queue = new LinkedList<>();
        queue.add(start);

        while (!queue.isEmpty()) {
            int vertex = queue.poll();
            if (!visited.contains(vertex)) {
                System.out.println(vertex);
                visited.add(vertex);
                queue.addAll(graph.get(vertex));
            }
        }
    }

    public void dfs(Map<Integer, List<Integer>> graph, int vertex, Set<Integer> visited) {
        visited.add(vertex);
        System.out.println(vertex);
        for (int neighbor : graph.get(vertex)) {
            if (!visited.contains(neighbor)) {
                dfs(graph, neighbor, visited);
            }
        }
    }
}
```

  </TabItem>
  <TabItem value="C++" label="C++">

```cpp
#include <iostream>
#include <vector>
#include <queue>
#include <set>
using namespace std;

void bfs(vector<vector<int>>& graph, int start) {
    set<int> visited;
    queue<int> q;
    q.push(start);

    while (!q.empty()) {
        int vertex = q.front();
        q.pop();
        if (visited.find(vertex) == visited.end()) {
            cout << vertex << " ";
            visited.insert(vertex);
            for (int neighbor : graph[vertex]) {
                if (visited.find(neighbor) == visited.end()) {
                    q.push(neighbor);
                }
            }
        }
    }
}

void dfs(vector<vector<int>>& graph, int vertex, set<int>& visited) {
    visited.insert(vertex);
    cout << vertex << " ";
    for (int neighbor : graph[vertex]) {
        if (visited.find(neighbor) == visited.end()) {
            dfs(graph, neighbor, visited);
        }
    }
}
```

  </TabItem>
</Tabs>



<div>
    <AdBanner />
</div>



#### Algorithms:

Graph algorithms play a crucial role in solving many real-world problems involving networks, paths, and dependencies. Among the most widely used are Dijkstra’s algorithm, Kruskal’s and Prim’s algorithms, and Topological Sort.

- **Dijkstra’s algorithm** is designed to find the shortest path between a starting node and all other nodes in a weighted graph with non-negative edge weights. It uses a greedy approach to progressively select the closest unvisited node and update distances efficiently, making it ideal for navigation and routing problems.

- For constructing a **Minimum Spanning Tree (MST)** — a subset of edges connecting all vertices with minimal total weight and no cycles — two popular algorithms are Kruskal’s and Prim’s. Kruskal’s algorithm sorts all edges by weight and adds them one by one, avoiding cycles through union-find data structures. Prim’s algorithm grows the MST by starting from an arbitrary node and repeatedly adding the cheapest edge connecting the tree to a new vertex.

- **Topological Sort** applies specifically to Directed Acyclic Graphs (DAGs). It produces a linear ordering of vertices such that for every directed edge from node A to node B, A comes before B. This is particularly useful for scheduling tasks, resolving dependencies, and compiling code.

Together, these algorithms form foundational tools for graph analysis and optimization across various domains.

<Tabs>
<TabItem value="C++" label="C++">
```cpp
vector<vector<int>> adjList(n);
adjList[0].push_back(1);  // edge 0 → 1
```
</TabItem>
<TabItem value="Java" label="Java">
```java
List<List<Integer>> adjList = new ArrayList<>();
adjList.get(0).add(1);
```
</TabItem>
<TabItem value="Python" label="Python">
```python
adj_list = [[] for _ in range(n)]
adj_list[0].append(1)
```
</TabItem>
</Tabs>



<div>
    <AdBanner />
</div>



## Applications of Non-Linear Structures

* **Trees**:

  * File systems
  * Binary search (BST)
  * Expression parsing
  * Auto-complete (Trie)

* **Graphs**:

  * Social networks
  * Navigation systems (GPS)
  * Web crawlers
  * Networking and communication


<div>
    <AdBanner />
</div>


## Traversal and Searching Techniques

| Structure | Techniques                  |
| --------- | --------------------------- |
| Tree      | DFS, BFS, Inorder, Preorder |
| Graph     | DFS, BFS, Dijkstra, A\*     |

Use traversal methods to explore or process each node/vertex systematically.

## Choosing the Right Structure

| Requirement               | Use This        |
| ------------------------- | --------------- |
| Hierarchical data         | Tree            |
| Networked relationships   | Graph           |
| Fast search (sorted data) | Binary Tree/BST |
| Prefix-based lookup       | Trie            |

## Complexity Comparison

| Operation     | Tree          | Graph    |
| ------------- | ------------- | -------- |
| Search        | O(log n)–O(n) | O(V + E) |
| Insert/Delete | O(log n)      | O(1)     |
| Traversal     | O(n)          | O(V + E) |

*V = number of vertices, E = number of edges*


<div>
    <AdBanner />
</div>


## Interview Questions

<details>
<summary>

**What is a binary search tree?**

</summary>

A binary tree where left child < root < right child. It allows fast searching and sorting.

</details>

<details>
<summary>

**What is the difference between BFS and DFS?**

</summary>
**BFS** explores level by level (queue), while **DFS** explores deep paths first (stack/recursion).
</details>

<details>
<summary>

**What is a graph cycle?**

</summary>
A path that starts and ends at the same node, forming a loop.
</details>

<details>
<summary>

**What is a priority queue?**

</summary>
A data structure that removes elements based on priority rather than order of arrival.
</details>

<details>
<summary>

**When is a Trie used?**

</summary>
A Trie is useful for searching words by prefix, like in autocomplete features.
</details>

## Further Reading

* [GeeksforGeeks: Trees](https://www.geeksforgeeks.org/binary-tree-data-structure/)
* [GeeksforGeeks: Graphs](https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/)
* [MIT OpenCourseWare: Graph Theory](https://ocw.mit.edu/)
* [CompilerSutra Non-Linear DSA Module](https://compilersutra.com/docs/DSA/non-linear-structures)

<Tabs>
  <TabItem value="docs" label="📚 Documentation">
    - [CompilerSutra Home](https://compilersutra.com)
    - [DSA Overview](https://compilersutra.com/docs/DSA/)
    - [Tree Details](https://compilersutra.com/docs/DSA/tree)
    - [Graph Concepts](https://compilersutra.com/docs/DSA/graph)
  </TabItem>
  <TabItem value="tutorials" label="📖 Tutorials">
    - [Trie and Prefix Search](https://compilersutra.com/docs/DSA/trie)
    - [DFS vs BFS](https://compilersutra.com/docs/DSA/graph-search)
    - [Dijkstra and MST](https://compilersutra.com/docs/DSA/graph-algorithms)
  </TabItem>
  <TabItem value="projects" label="🛠️ Projects">
    - [Graph Visualizer](https://compilersutra.com/projects/graph-visualizer)
    - [Syntax Tree Parser](https://compilersutra.com/projects/tree-parser)
  </TabItem>
</Tabs>



<div>
    <AdBanner />
</div>

