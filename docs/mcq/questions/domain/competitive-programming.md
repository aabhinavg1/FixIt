---
title: competative programming
description: 
  This guide explores the use of C++ for implementing a wide range of algorithms, from basic sorting and searching to advanced graph, dynamic programming, and greedy techniques. Understand how the Standard Template Library (STL) supports algorithm development and boosts performance. Ideal for coding interview prep, competitive programming, and building a strong foundation in problem-solving using C++.
keywords:
  - Algorithms in C++
  - C++ STL Algorithms
  - C++ Sorting Algorithms
  - C++ Searching Algorithms
  - Graph Algorithms in C++
  - Dynamic Programming in C++
  - C++ Greedy Algorithms
  - C++ Backtracking
  - Recursion in C++
  - C++ Competitive Programming
  - C++ Interview Prep
  - Algorithm Design in C++
  - Time Complexity in C++
  - C++ Problem Solving
  - STL Functions
  - Binary Search C++
  - Merge Sort C++
  - Dijkstra Algorithm C++
  - C++ Algorithm Techniques

tags:
  - C++ Algorithms
  - STL Algorithms
  - Sorting and Searching
  - Graph Algorithms
  - Dynamic Programming
  - Greedy Algorithms
  - Backtracking
  - Recursion
  - C++ STL
  - Competitive Programming
  - C++ Problem Solving
  - Time and Space Complexity
  - C++ Interview Preparation
  - Algorithm Optimization
  - Data Structures and Algorithms
  - Binary Search
  - C++ Coding Challenges
  - Algorithm Techniques

---


import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';



<Question
  question="1). Time Complexity: What is the time complexity of finding the maximum element in a balanced binary search tree?"
  options={['O(1)', 'O(log n)', 'O(n)', 'O(n log n)']}
  answer="O(log n)"
/>

<Question
  question="2). What is the output of the following C++ code?"
  code={`#include <bits/stdc++.h>
using namespace std;
int main() {
    vector<int> v = {1,2,3,4,5};
    cout << *lower_bound(v.begin(), v.end(), 3);
}`}
  options={['2', '3', '4', 'undefined']}
  answer="3"
/>

<Question
  question="3). Which of the following sorting algorithms has the best average case time complexity?"
  options={['Merge Sort', 'Quick Sort', 'Heap Sort', 'Bubble Sort']}
  answer="Merge Sort"
/>

<Question
  question="4). What is the output of the following C++ code?"
  code={`#include <bits/stdc++.h>
using namespace std;
int main() {
    int x = 5;
    int *p = &x;
    *p = 10;
    cout << x;
}`}
  options={['5', '10', 'Garbage', 'Error']}
  answer="10"
/>

<Question
  question="5). In competitive programming, why is unordered_map sometimes slower than map?"
  options={['Hash collisions', 'Tree balancing', 'Memory fragmentation', 'Compiler optimization']}
  answer="Hash collisions"
/>

<Question
  question="6). What is the worst-case time complexity of QuickSort?"
  options={['O(n log n)', 'O(n²)', 'O(log n)', 'O(n)']}
  answer="O(n²)"
/>

<Question
  question="7). What will be the output of the following code?"
  code={`#include <bits/stdc++.h>
using namespace std;
int main() {
    string s = "abc";
    do {
        cout << s << " ";
    } while(next_permutation(s.begin(), s.end()));
}`}
  options={['abc acb bac bca cab cba', 'abc acb bac bca cab', 'abc bac cab', 'Random order']}
  answer="abc acb bac bca cab cba"
/>

<Question
  question="8). What is the space complexity of recursive Fibonacci implementation?"
  options={['O(1)', 'O(n)', 'O(log n)', 'O(n²)']}
  answer="O(n)"
/>

<Question
  question="9). Which STL container guarantees O(1) access time for random elements?"
  options={['vector', 'list', 'set', 'map']}
  answer="vector"
/>

<Question
  question="10). What is the output of this code?"
  code={`#include <bits/stdc++.h>
using namespace std;
int main() {
    set<int> s = {1,2,3,4};
    cout << *s.lower_bound(3);
}`}
  options={['2', '3', '4', 'Error']}
  answer="3"
/>

<Question
  question="11). Which algorithm is best for finding shortest paths in a graph with negative weights?"
  options={['Dijkstra', 'Bellman-Ford', 'Floyd-Warshall', 'DFS']}
  answer="Bellman-Ford"
/>

<Question
  question="12). What is the output of this C++ program?"
  code={`#include <bits/stdc++.h>
using namespace std;
int main() {
    int n = 10;
    cout << __builtin_popcount(n);
}`}
  options={['1', '2', '3', '4']}
  answer="2"
/>

<Question
  question="13). What is the worst-case complexity of building a heap with n elements?"
  options={['O(n)', 'O(n log n)', 'O(log n)', 'O(n²)']}
  answer="O(n)"
/>

<Question
  question="14). Which data structure is most suitable for LRU Cache implementation?"
  options={['Queue + Set', 'Deque + HashMap', 'Stack + Vector', 'Tree + Map']}
  answer="Deque + HashMap"
/>

<Question
  question="15). What is the output of this code?"
  code={`#include <bits/stdc++.h>
using namespace std;
int main() {
    int arr[] = {1,2,3,4};
    cout << accumulate(arr, arr+4, 0);
}`}
  options={['4', '6', '10', 'Error']}
  answer="10"
/>

<Question
  question="16). Which of the following is NOT a property of dynamic programming?"
  options={['Optimal substructure', 'Greedy choice', 'Overlapping subproblems', 'Memoization']}
  answer="Greedy choice"
/>

<Question
  question="17). What will this C++ code output?"
  code={`#include <bits/stdc++.h>
using namespace std;
int main() {
    int x = 5;
    cout << (x << 1);
}`}
  options={['5', '10', '20', 'Error']}
  answer="10"
/>

<Question
  question="18). What is the expected time complexity of searching in a balanced BST?"
  options={['O(1)', 'O(log n)', 'O(n)', 'O(n log n)']}
  answer="O(log n)"
/>

<Question
  question="19). Which algorithm is most efficient for finding strongly connected components in a graph?"
  options={['Prim’s', 'Kruskal’s', 'Kosaraju’s', 'BFS']}
  answer="Kosaraju’s"
/>

<Question
  question="20). What is the output of this code?"
  code={`#include <bits/stdc++.h>
using namespace std;
int main() {
    vector<int> v = {5,2,9,1};
    sort(v.begin(), v.end(), greater<int>());
    for(int x : v) cout << x << " ";
}`}
  options={['1 2 5 9', '9 5 2 1', '5 2 9 1', 'Random order']}
  answer="9 5 2 1"
/>
