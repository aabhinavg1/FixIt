---
id: vectors
title: Vectors and Dynamic Arrays Multiple Choice Questions (MCQs)
description: |
  Test your knowledge of vectors and dynamic arrays with this set of Multiple Choice Questions (MCQs). Learn how vectors provide dynamic resizing of arrays, manage memory automatically, and offer various functions to manipulate and access data. Understand how dynamic arrays work and how they differ from static arrays, offering flexibility in memory management.
keywords:
  - Vectors
  - Dynamic Arrays
  - C++ Vectors
  - Dynamic Memory Allocation
  - Memory Management
  - Array vs Vector
  - Dynamic Array Operations
  - Vector Operations
  - C++ Array Functions
  - C++ Vector Functions
  - Array Resizing
  - Dynamic Array Size
  - C++ Containers
  - Vector Memory Management
  - C++ Memory Management
  - Vector vs Array
  - Vectors MCQs
  - Dynamic Arrays MCQs

tags:
  - Vectors
  - Dynamic Arrays
  - C++ Vectors
  - Dynamic Memory Allocation
  - Memory Management
  - Vector Operations
  - Array Resizing
  - C++ Arrays
  - Dynamic Array Functions
  - C++ Containers
  - Vector Functions
  - C++ Memory Management
  - Vectors MCQs
  - Dynamic Arrays MCQs

---
import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';

# Vectors and Dynamic Arrays

<Question
  question="1).What is the main advantage of using a vector in C++ over an array?"
  options={['Dynamic resizing', 'Fixed size', 'Faster access time', 'None of the above']}
  answer="Dynamic resizing"
/>
<Question
  question="2).Which of the following methods adds an element to the end of a vector?"
  options={['push_back()', 'append()', 'insert()', 'add()']}
  answer="push_back()"
/>
<Question
  question="3).How can you initialize a vector with predefined values?"
  options={['vector<int> v(5, 10);', 'vector<int> v = {10, 20, 30};', 'vector<int> v(5);', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="4).What does the 'resize' method of a vector do?"
  options={['Changes the size of the vector', 'Sorts the vector', 'Removes all elements', 'None of the above']}
  answer="Changes the size of the vector"
/>
<Question
  question="5).Which of the following is a drawback of using vectors?"
  options={['Increased memory consumption', 'Slow resizing performance', 'No random access', 'None of the above']}
  answer="Increased memory consumption"
/>
<Question
  question="6).Can a vector hold elements of different data types?"
  options={['Yes, by using void pointers', 'No', 'Yes, by using a template', 'None of the above']}
  answer="No"
/>
<Question
  question="7).What is the time complexity of accessing an element in a vector?"
  options={['O(1)', 'O(n)', 'O(log n)', 'O(n^2)']}
  answer="O(1)"
/>
<Question
  question="8).How do you remove the last element from a vector?"
  options={['pop_back()', 'erase()', 'remove()', 'delete()']}
  answer="pop_back()"
/>
<Question
  question="9).Which operation is NOT supported by a vector?"
  options={['Accessing elements by index', 'Inserting elements in the middle', 'Random access to elements', 'None of the above']}
  answer="Inserting elements in the middle"
/>
<Question
  question="10).What is the capacity of a vector?"
  options={['The number of elements it can currently hold', 'The maximum number of elements it can ever hold', 'The amount of memory allocated for the vector', 'None of the above']}
  answer="The amount of memory allocated for the vector"
/>

<div>
<AdBanner />
</div>

<Question
  question="11). What does the vector::clear() function do?"
  options={['Removes all elements', 'Deletes the vector', 'Sets all elements to 0', 'Frees memory']}
  answer="Removes all elements"
/>
<Question
  question="12). Which function returns the number of elements in a vector?"
  options={['size()', 'length()', 'count()', 'capacity()']}
  answer="size()"
/>
<Question
  question="13). How do you check if a vector is empty?"
  options={['empty()', 'isEmpty()', 'length() == 0', 'None of the above']}
  answer="empty()"
/>
<Question
  question="14). Which header file is needed for using std::vector?"
  options={['<vector>', '<iostream>', '<list>', '<array>']}
  answer="<vector>"
/>
<Question
  question="15). What happens when a vector exceeds its current capacity?"
  options={['It allocates more memory', 'It throws an exception', 'It stops inserting', 'It wraps around']}
  answer="It allocates more memory"
/>
<Question
  question="16). Which function is used to reduce the capacity of a vector to its size?"
  options={['shrink_to_fit()', 'resize()', 'reduce()', 'compact()']}
  answer="shrink_to_fit()"
/>
<Question
  question="17). How can you access the first element of a vector?"
  options={['v.front()', 'v[0]', '*v.begin()', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="18). What is the difference between size() and capacity()?"
  options={['size is elements used; capacity is memory allocated', 'They are the same', 'capacity is always larger', 'size is memory used']}
  answer="size is elements used; capacity is memory allocated"
/>
<Question
  question="19). Can vector::erase() be used to remove a range of elements?"
  options={['Yes', 'No', 'Only one element', 'Only from the end']}
  answer="Yes"
/>
<Question
  question="20). What will happen if you access an out-of-bound index in a vector using operator[]?"
  options={['Undefined behavior', 'Throws an exception', 'Returns null', 'Returns 0']}
  answer="Undefined behavior"
/>

<div>
<AdBanner />
</div>

<Question
  question="21). What is the default value of elements in a vector of int when initialized with vector<int> v(5);?"
  options={['0', '1', 'Undefined', 'Compilation Error']}
  answer="0"
/>
<Question
  question="22). Which member function returns an iterator to the beginning of the vector?"
  options={['begin()', 'start()', 'front()', 'get()']}
  answer="begin()"
/>
<Question
  question="23). What does the vector::at(index) function do?"
  options={['Returns element with bounds checking', 'Returns last element', 'Returns vector size', 'Removes element']}
  answer="Returns element with bounds checking"
/>
<Question
  question="24). What is returned by vector::end()?"
  options={['Iterator to one past the last element', 'Last element', 'First element', 'None']}
  answer="Iterator to one past the last element"
/>
<Question
  question="25). Which is safer to access elements: operator[] or at()?"
  options={['at()', 'operator[]', 'Both are same', 'None']}
  answer="at()"
/>
<Question
  question="26). How do you reverse a vector?"
  options={['reverse(v.begin(), v.end())', 'v.reverse()', 'v.invert()', 'None']}
  answer="reverse(v.begin(), v.end())"
/>
<Question
  question="27). What is the result of v.front() when v is empty?"
  options={['Undefined behavior', 'Throws an exception', 'Returns NULL', 'Returns 0']}
  answer="Undefined behavior"
/>
<Question
  question="28). What kind of iterator is used with vectors?"
  options={['Random access iterator', 'Bidirectional iterator', 'Forward iterator', 'Input iterator']}
  answer="Random access iterator"
/>
<Question
  question="29). What does emplace_back() do?"
  options={['Constructs and appends an element', 'Deletes an element', 'Reverses vector', 'Clears the vector']}
  answer="Constructs and appends an element"
/>
<Question
  question="30). Which function can be used to copy one vector to another?"
  options={['= operator', 'assign()', 'copy()', 'Both A and B']}
  answer="Both A and B"
/>

<div>
<AdBanner />
</div>

<Question
  question="31). What does v.capacity() return after calling v.reserve(100)?"
  options={['At least 100', 'Exactly 100', 'Size of vector', '0']}
  answer="At least 100"
/>
<Question
  question="32). Can std::vector store user-defined types like structs or classes?"
  options={['Yes', 'No', 'Only POD types', 'Only built-in types']}
  answer="Yes"
/>
<Question
  question="33). Which of the following functions can modify a vector in-place?"
  options={['push_back()', 'emplace_back()', 'erase()', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="34). How to iterate over a vector using range-based for loop?"
  options={['for(auto x : v)', 'foreach(x in v)', 'for(x : v)', 'loop(v)']}
  answer="for(auto x : v)"
/>
<Question
  question="35). What does vector::assign() do?"
  options={['Replaces all elements', 'Adds one element', 'Deletes vector', 'Finds an element']}
  answer="Replaces all elements"
/>
<Question
  question="36). What is the worst-case time complexity of push_back()?"
  options={['O(1) amortized', 'O(n)', 'O(log n)', 'O(n^2)']}
  answer="O(1) amortized"
/>
<Question
  question="37). How do you remove all elements from a vector?"
  options={['clear()', 'erase(begin(), end())', 'assign(0)', 'Both A and B']}
  answer="Both A and B"
/>
<Question
  question="38). What does the expression v.erase(v.begin(), v.begin()+2) do?"
  options={['Removes first two elements', 'Clears vector', 'Throws error', 'None']}
  answer="Removes first two elements"
/>
<Question
  question="39). How do you insert an element at the beginning of a vector?"
  options={['v.insert(v.begin(), element)', 'v.push_front()', 'v[0] = element', 'v.addFirst()']}
  answer="v.insert(v.begin(), element)"
/>
<Question
  question="40). Can you pass a vector by reference to a function?"
  options={['Yes', 'No', 'Only with const', 'Only with pointers']}
  answer="Yes"
/>

<div>
<AdBanner />
</div>

<Question
  question="41). Which of the following is NOT a valid way to declare a vector?"
  options={['vector<int> v;', 'vector v<int>;', 'vector<int> v(10);', 'vector<int> v = {1,2,3};']}
  answer="vector v<int>;"
/>
<Question
  question="42). What is the difference between vector::insert() and emplace()?"
  options={['emplace constructs in-place', 'insert is slower', 'emplace is more efficient', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="43). What will be the value of size after calling v.resize(10) on an empty vector?"
  options={['10', '0', 'Depends on the compiler', 'Undefined']}
  answer="10"
/>
<Question
  question="44). Can you create a 2D vector in C++?"
  options={['Yes', 'No', 'Only with arrays', 'Only in C++11']}
  answer="Yes"
/>
<Question
  question="45). What does v.empty() return when v has no elements?"
  options={['true', 'false', '0', 'undefined']}
  answer="true"
/>
<Question
  question="46). Which operation is most costly in a vector?"
  options={['Insert at beginning', 'Insert at end', 'Access by index', 'Size retrieval']}
  answer="Insert at beginning"
/>
<Question
  question="47). How do you get a constant iterator to the beginning of a vector?"
  options={['cbegin()', 'begin()', 'const_iterator()', 'start()']}
  answer="cbegin()"
/>
<Question
  question="48). How can you copy elements from one vector to another?"
  options={['std::copy()', 'assign()', '= operator', 'All of the above']}
  answer="All of the above"
/>
<Question
  question="49). Which member function reduces the number of elements but not the capacity?"
  options={['resize()', 'clear()', 'shrink_to_fit()', 'erase()']}
  answer="resize()"
/>
<Question
  question="50). Which of the following is true about vector and memory allocation?"
  options={['It reallocates memory on capacity overflow', 'It always allocates fixed size', 'It never reallocates', 'None']}
  answer="It reallocates memory on capacity overflow"
/>

<div>
<AdBanner />
</div>