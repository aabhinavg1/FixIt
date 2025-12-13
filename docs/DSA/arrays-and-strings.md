---
title: "Arrays & Strings"
description: "Master the fundamentals of arrays and strings in programming. Learn operations, memory layout, common pitfalls, interview tricks, and practice problems with explanations in C++, Java, and Python."
keywords:
  - Arrays
  - Strings
  - Array Data Structure
  - String Data Structure
  - Character Arrays
  - Dynamic Arrays
  - Two Dimensional Arrays
  - Sliding Window
  - String Manipulation
  - Array Operations
  - Searching in Arrays
  - Sorting Arrays
  - Subarrays
  - Substrings
  - Pattern Matching
  - String Algorithms
  - DSA Arrays
  - DSA Strings
  - Array Interview Questions
  - String Interview Questions
  - Array C++

tags:
  - Arrays
  - Strings
  - Data Structures
  - Array Operations
  - String Algorithms
  - Interview Preparation
  - Coding
  - DSA
  - Programming Basics
  - Algorithm Techniques


---

  <div>  
    <DSA_Book_Recommendation />  
  </div>  
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import DSA_Book_Recommendation from './DSA_Book_Recommendation.js';
import AdBanner from '@site/src/components/AdBanner';


# Arrays & Strings — The Backbone of Coding 🧩  
Understanding arrays and strings is like knowing the alphabet before writing essays. They form the foundation of almost every algorithm — searching, sorting, two pointers, sliding window, recursion, DP… everything!

This guide will help you master them with clarity, humor, and real interview-level depth.  
Grab your chai ☕ — let's begin.

---

<div>
<AdBanner />
</div>


## Why Arrays & Strings Matter

Arrays and Strings form the backbone of almost every data structure and algorithm problem. If DSA were a building, these two would be the foundation on which everything else is constructed.

Here’s why they are so important:

* They store data in contiguous memory, making them extremely fast and cache-friendly.
* They provide **O(1) random access**, allowing instant element retrieval without searching.
* They enable several high-performance algorithmic patterns used in interviews:

  * Two Pointers – efficient for pairing, reversing, comparing, and merging
  * Sliding Window – ideal for optimized subarray and substring problems
  * Prefix Sum – supports quick and powerful range queries
  * Kadane’s Algorithm – the standard solution for maximum subarray problems
  * Hashing Techniques – essential for anagrams, frequency counting, substring matching, and more

In technical interviews, a large portion of questions revolve around these two topics. In fact, **nearly half of typical DSA interview problems are built on Arrays and Strings**.

Mastering them is not just helpful—it is critical for strong problem-solving and interview success.



## 🧵 Table of Contents
- [1. Arrays](#arrays)
  - Types of Arrays
  - Array Memory Layout
  - Common Operations
  - Time & Space Complexity
- [2. Strings](#strings)
  - Mutable vs Immutable Strings
  - Common String Operations
  - Substrings vs Subsequence
  - Pattern Matching Basics
- [3. Combined Tricks](#arrays--strings-together)
- [4. Practice Problems]

---

<div>
<AdBanner />
</div>



## 1. Arrays

Arrays are one of the most fundamental data structures in computer science. They store elements of the **same data type** in a **contiguous block of memory**, which allows extremely efficient access and manipulation.

### 1.1 Key Characteristics

* **Contiguous memory allocation:** All elements are placed next to each other in memory.
* **Fixed size:** The size is defined at creation and cannot be changed.
* **Indexed access:** Elements can be accessed directly using their index in **O(1)** time.
* **Homogeneous elements:** Every element has the same data type.

### 1.2 Advantages

* **Fast random access**
  Accessing `arr[i]` takes constant time because the address is computed directly using base address + index.

* **Cache-friendly**
  Contiguous memory improves locality, making operations like iteration very efficient.

* **Simple to use**
  Arrays are straightforward and supported in all programming languages.

### 1.3 Limitations

* **Fixed size**
  Once created, the size cannot be changed (in low-level languages like C/C++).
  Growing the array requires creating a new array and copying data.

* **Expensive insertions/deletions**
  Inserting or deleting at the beginning or middle requires shifting elements, leading to **O(n)** time.

* **Homogeneous data only**
  You cannot mix different data types in a single array.

### 1.4 Common Operations and Time Complexity

| Operation                  | Description             | Time Complexity |
| -------------------------- | ----------------------- | --------------- |
| Access                     | Get element by index    | O(1)            |
| Update                     | Modify an element       | O(1)            |
| Search (unsorted)          | Check if element exists | O(n)            |
| Search (sorted)            | Binary search possible  | O(log n)        |
| Insert at end (with space) | Add element             | O(1)            |
| Insert at beginning/middle | Shift elements          | O(n)            |
| Delete at index            | Shift elements          | O(n)            |

### 1.5 Memory Layout Formula

To compute the address of an element:

```cpp
Address(arr[i]) = Base_Address + (i * Size_of_each_element)
```

This is why accessing any index is extremely fast.

### 1.6 Example Code


<Tabs>
  <TabItem value="cpp" label="C++">

```cpp
#include <iostream>
using namespace std;

int main() {
    int arr[5] = {10, 20, 30, 40, 50};
    
    // Accessing elements
    cout << "Element at index 2: " << arr[2] << endl;

    // Updating value
    arr[2] = 100;

    // Traversing array
    for(int i = 0; i < 5; i++) {
        cout << arr[i] << " ";
    }
}
````

  </TabItem>

  <TabItem value="python" label="Python">

```python
arr = [10, 20, 30, 40, 50]

print("Element at index 2:", arr[2])

arr[2] = 100

for x in arr:
    print(x, end=" ")
```

  </TabItem>

  <TabItem value="java" label="Java">

```javascript
public class Main {
    public static void main(String[] args) {
        int[] arr = {10, 20, 30, 40, 50};

        System.out.println("Element at index 2: " + arr[2]);

        arr[2] = 100;

        for (int x : arr) {
            System.out.print(x + " ");
        }
    }
}
```

  </TabItem>
</Tabs>


### Types of Arrays

Arrays can be broadly classified into **static** and **dynamic arrays**, depending on whether their size is fixed or resizable.

#### 1. Static Arrays

* **Fixed size:** The number of elements is determined at the time of declaration and cannot be changed.
* **Contiguous memory allocation:** Elements are stored sequentially, which allows fast access using indices.
* **Fast access:** Accessing any element by index is **O(1)**.

**Example in C++:**

```cpp
int arr[5] = {1, 2, 3, 4, 5};
```

**Use cases:** Useful when the number of elements is known in advance, such as storing fixed configuration data or pre-defined lookup tables.


#### 2. Dynamic Arrays

* **Resizable:** Can grow or shrink at runtime as elements are added or removed.
* **Flexible memory usage:** Allocated on the heap, often with underlying mechanisms to handle resizing efficiently.
* **Slightly slower than static arrays** for access due to potential overhead, but more flexible.

**Examples in different languages:**

* **C++:** `vector<int>`
* **Java:** `ArrayList<Integer>`
* **Python:** `list` (dynamic by default)

**Example in C++:**

```cpp
#include <vector>
#include <iostream>
using namespace std;

int main() {
    vector<int> nums;
    nums.push_back(10);
    nums.push_back(20);
    nums.push_back(30);

    for(int num : nums)
        cout << num << " ";
}
```

**Use cases:** Dynamic arrays are ideal when the size of data is unknown in advance, such as reading user input, storing results from computations, or implementing stacks and queues.


<div>
<AdBanner />
</div>


### Array Memory Layout

Arrays store elements in contiguous memory, allowing direct computation of each element’s address. The memory address of an element at index `i` is given by:

```cpp
address(arr[i]) = base_address + i * size_of(datatype)
```

This contiguous allocation ensures that array access is **O(1)**, providing efficient and fast retrieval of elements by index. This property is fundamental for the high performance of arrays in various programming tasks.


<div>
<AdBanner />
</div>


Here is the enhanced, clearer, and more structured version of your **Common Array Operations** section — still clean, professional, and without emojis:

---

## Common Array Operations

### Insert at End

| Operation     | Time Complexity                            |
| ------------- | ------------------------------------------ |
| Static array  | Not possible once capacity is full         |
| Dynamic array | O(1) amortized (may reallocate internally) |

### Insert at Middle

Inserting at any position other than the end requires shifting all elements to the right to create space.
**Time Complexity: O(n)**

### Delete an Element

Deleting an element from any position requires shifting elements to fill the gap.
**Time Complexity: O(n)**

### Search

* **Linear Search:** Scans each element sequentially.
  **Time Complexity: O(n)**
* **Binary Search (only for sorted arrays):** Repeatedly divides the search interval in half.
  **Time Complexity: O(log n)**

---

If you want, I can also write similar sections for **Strings**, **Two-Pointer Techniques**, **Sliding Window**, or create a full combined article.

<div>
<AdBanner />
</div>


## 🧪 Examples of Basic Array Manipulation

### 👉 Traversing an array

<Tabs>
<TabItem value="cpp" label="C++">

```cpp
for(int i = 0; i < n; i++) {
    cout << arr[i] << " ";
}
```

</TabItem>
<TabItem value="py" label="Python">

```python
for x in arr:
    print(x, end=" ")
```

</TabItem>
<TabItem value="java" label="Java">

```java
for(int x : arr){
    System.out.print(x + " ");
}
```

</TabItem>
</Tabs>

---

<div>
<AdBanner />
</div>


## ⭐ Common Interview Patterns from Arrays

### 1️⃣ Two Pointer Technique

Used when array is **sorted** or when working with **pair problems**.

Example use-cases:

* Sum equals K
* Removing duplicates
* Move zeroes

---

### 2️⃣ Sliding Window

Used for:

* Longest substring
* Subarray with sum K
* Max/Min window problems

Example pattern:

```python
while right < n:
    window += arr[right]

    while window is invalid:
        window -= arr[left]
        left += 1

    right += 1
```

---

### 3️⃣ Prefix Sum

Powerful for:

* Range sum queries
* Equilibrium index
* Subarrays divisible by k

---

<div>
<AdBanner />
</div>




# 2. Strings

A string is a sequence of characters stored in a contiguous block of memory, similar to an array. However, strings come with additional rules and behaviors depending on the programming language. Most languages treat strings as immutable objects, meaning their contents cannot be directly altered; instead, any modification creates a new string. This design provides safety but may impact performance in operations like concatenation or repeated modifications. In lower-level languages such as C or C++, strings behave more like character arrays and can be modified directly.


## Mutable vs Immutable Strings

| Language | String Behavior                                                 |
| -------- | --------------------------------------------------------------- |
| C++      | Mutable (strings can be changed in-place)                       |
| Python   | Immutable (any modification creates a new string)               |
| Java     | Immutable (`String`), Mutable (`StringBuilder`, `StringBuffer`) |

### Why Immutability Matters

* **Safety:** Prevents accidental modification of data shared across different parts of a program.
* **Thread-Safety:** Immutable objects can be safely shared between threads without synchronization.
* **Efficient Hashing:** Since the content cannot change, immutable strings work reliably as keys in hash-based structures like dictionaries or hash maps.

### Example (Python / Java Behavior)

```python
s = "hello"
s += "world"   # Creates a new string internally each time
```

Even though it looks like the same string is being updated, a **new string object** is actually created during each modification.



## Common String Operations

### Accessing Characters

Accessing individual characters works similarly to arrays. Most languages provide constant-time indexing.

**C++ Example**

```cpp
char c = s[i];
```

### Substring Extraction

Substring operations allow you to extract a portion of the string without modifying the original.

**Python Example**

```python
s[2:5]   # characters from index 2 to 4
```

### Concatenation

Joining two or more strings together.
However, repeated concatenation can be inefficient because immutable strings create new copies each time.

* **Java:** Prefer `StringBuilder` or `StringBuffer` for efficient concatenation
* **Python:** For many concatenations, prefer `"".join()` or use a list

---

<div>
<AdBanner />
</div>



## Substring vs Subsequence

### Substring

A **substring** is a part of a string where all characters occur **contiguously** and in the **same order** as the original string.
It represents a *continuous block* of characters.

**Key points:**

* Must be continuous
* Order is preserved
* Total substrings of a string of length *n* = **n(n+1)/2**

**Example:**
In `"xabcd"`, `"abc"` and `"bcd"` are substrings.
`"acd"` is **not** a substring because the characters are not adjacent.

---

### Subsequence

A **subsequence** is formed by selecting characters from the string while maintaining **relative order**, but **continuity is not required**.
Characters may be skipped.

**Key points:**

* Not required to be continuous
* Order must be preserved
* Total subsequences of length *n* = **2ⁿ**

**Example:**
In `"abcd"`:

* `"acd"`, `"ad"`, `"bd"` → subsequences
* `"ca"` → not a subsequence (order changes)

---

### Quick Difference Table

| Feature    | Substring            | Subsequence         |
| ---------- | -------------------- | ------------------- |
| Continuity | Required             | Not required        |
| Order      | Must be preserved    | Must be preserved   |
| Count      | n(n+1)/2             | 2ⁿ                  |
| Example    | `"abc"` in `"xabcd"` | `"acd"` in `"abcd"` |



## 🧠 String Pattern Techniques

### 1️⃣ Two Pointers

Used in:

* Palindrome check
* Removing extra spaces
* Reverse words

### 2️⃣ Sliding Window

Used in:

* Longest substring without repeating
* Anagram checking
* Maximum repeating window

### 3️⃣ Hashing

Used in:

* Detecting duplicates
* Rabin-Karp pattern matching
* Anagram groups

---

<div>
<AdBanner />
</div>

# 3. Interview Questions


<details>
<summary>

**What is the difference between an array and a linked list?**

</summary>

**Answer:**

* **Array:**

  * Contiguous memory
  * O(1) random access
  * Fixed size (static arrays)
* **Linked List:**

  * Non-contiguous memory
  * O(n) access time
  * Dynamic size

Arrays are better for indexing; linked lists are better for insert/delete in the middle.

</details>



<details>
<summary>

**How do you find the maximum element in an array?**

</summary>

**Answer:**

```cpp
int maxElement(int arr[], int n) {
    int mx = arr[0];
    for(int i = 1; i < n; i++)
        mx = max(mx, arr[i]);
    return mx;
}
```

Time Complexity: **O(n)**
Space: **O(1)**

</details>



<details>
<summary>

**How do you reverse an array using the two-pointer technique?**

</summary>

**Answer:**

```cpp
void reverseArray(int arr[], int n) {
    int l = 0, r = n - 1;
    while(l < r) {
        swap(arr[l], arr[r]);
        l++; r--;
    }
}
```

Time Complexity: **O(n)**
Space: **O(1)**

</details>



<details>
<summary>

**How do you remove duplicates from a sorted array?**

</summary>

**Answer:**
Use the two-pointer method.

```cpp
int removeDuplicates(int arr[], int n) {
    int j = 1;
    for(int i = 1; i < n; i++)
        if(arr[i] != arr[j-1])
            arr[j++] = arr[i];
    return j;
}
```

Returns the length of the unique array.
Time: **O(n)**

</details>



<details>
<summary>

**How do you check if a string is a palindrome?**

</summary>

**Answer:**

```cpp
bool isPalindrome(string s) {
    int l = 0, r = s.size() - 1;
    while(l < r)
        if(s[l++] != s[r--]) return false;
    return true;
}
```

Uses **two pointers**.
Time: **O(n)**

</details>



<details>
<summary>

**How do you find the longest substring without repeating characters?**

</summary>

**Answer:**
Use the **sliding window + hashing**.

```cpp
int longestUniqueSubstring(string s) {
    vector<int> last(256, -1);
    int start = 0, ans = 0;

    for(int i = 0; i < s.size(); i++) {
        if(last[s[i]] >= start)
            start = last[s[i]] + 1;
        last[s[i]] = i;
        ans = max(ans, i - start + 1);
    }
    return ans;
}
```

Time: **O(n)**

</details>



<details>
<summary>

**How do you compare two strings efficiently?**

</summary>

**Answer:**

* Compare lengths
* Then compare characters
* Or use hashing for large texts (Rabin–Karp)

In C++:

```cpp
if (s1 == s2) ...
```

Time: **O(n)**

</details>



<details>
<summary>

**How do you find the frequency of characters in a string?**

</summary>

**Answer:**

```cpp
vector<int> freq(256, 0);
for(char c : s) freq[c]++;
```

Useful for:

* Anagram check
* Duplicate detection
* Pattern matching

</details>



<details>
<summary>

**How do you extract a substring from a string?**

</summary>

**Answer (C++):**

```cpp
string sub = s.substr(l, r - l + 1);
```

**Answer (Python):**

```python
sub = s[l:r+1]
```

Operation runs in **O(k)** where *k* is substring length.

</details>



<details>
<summary>

**How do you convert a string to an integer?**

</summary>

**Answer:**

* C++ → `stoi(s)`
* Python → `int(s)`
* Java → `Integer.parseInt(s)`

Be careful with invalid inputs → may throw exceptions.

</details>

---

##  Read More Article

- [Getting Started](https://compilersutra.com/docs/DSA/)
- [Mathematical Foundation](https://compilersutra.com/docs/DSA/)
- [Introduction to DSA](https://compilersutra.com/docs/DSA)
- [Bit Manipulation Technique](https://compilersutra.com/docs/DSA/Bit_Manipulation_Technique)

### 📚 Complexity Analysis & Big-O Notation  
- [Big-O Notation Cheat Sheet](https://www.bigocheatsheet.com/) – A quick reference for algorithm complexities.  
- [Big-O Notation Explained](https://www.geeksforgeeks.org/analysis-algorithms-big-o-analysis//) – A detailed guide on Big-O with examples.  
- [Computational Complexity (MIT OpenCourseWare)](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-045j-automata-computability-and-complexity-spring-2011/) – A deeper dive into algorithm complexity.  

### 🔍 Algorithm Analysis & Optimization  
- [Sorting Algorithm Complexities](https://www.geeksforgeeks.org/time-complexities-of-all-sorting-algorithms/) – Time complexities of various sorting algorithms.  
- [Amortized Analysis Explained](https://www.geeksforgeeks.org/introduction-to-amortized-analysis/) – Understanding amortized complexity for data structures.  

### 🛠 Tools for Profiling & Complexity Analysis  
- [Profiling Python Code with cProfile](https://docs.python.org/3/library/profile.html) – Official Python documentation for `cProfile`.  
- [Valgrind (Performance Analysis)](http://valgrind.org/) – A powerful tool for analyzing C/C++ program execution.  j
### 🎥 Video Courses  
- [Algorithm Complexity (MIT Lecture)](https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-006-introduction-to-algorithms-fall-2011/) – MIT's free algorithms course.  
- [Time Complexity & Big-O Notation (Khan Academy)](https://www.khanacademy.org/computing/computer-science/algorithms#time-complexity-analysis) – Beginner-friendly video tutorials.  
- [Stanford Algorithms Course (Coursera)](https://www.coursera.org/specializations/algorithms) – A comprehensive introduction to algorithms and complexity.  

---





