---
id: stl
title: "STL: Standard Template Library Multiple Choice Questions (MCQs)"
description: "Test your understanding of the Standard Template Library (STL) in this set of Multiple Choice Questions (MCQs). This guide covers various components of STL including containers, iterators, algorithms, and function objects. Understand how to efficiently use data structures such as vectors, maps, and sets, as well as how STL provides powerful algorithms for sorting, searching, and modifying data."

keywords:
  - STL
  - Standard Template Library
  - C++ Containers
  - C++ Iterators
  - C++ Algorithms
  - C++ Function Objects
  - C++ Vectors
  - C++ Maps
  - C++ Sets
  - C++ Lists
  - C++ Stacks
  - C++ Queues
  - C++ Pair
  - C++ Algorithm Functions
  - STL Containers MCQs
  - STL Iterators MCQs
  - STL Algorithms MCQs
  - STL Function Objects MCQs

tags:
  - STL
  - Standard Template Library
  - C++ Containers
  - C++ Iterators
  - C++ Algorithms
  - C++ Function Objects
  - Vectors
  - Maps
  - Sets
  - Lists
  - Stacks
  - Queues
  - Pair
  - Algorithm Functions
  - STL MCQs
  - C++ Data Structures
  - STL Concepts

---
import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';

# STL: Standard Template Library

<Question
  question="1). What is the default underlying container for std::stack?"
  options={['std::vector', 'std::deque', 'std::queue', 'std::list']}
  answer="std::deque"
/>
<Question
  question="2). Which container does not provide random access iterators?"
  options={['std::list', 'std::deque', 'std::array', 'std::vector']}
  answer="std::list"
/>
<Question
  question="3). Which of the following is an associative container?"
  options={['std::deque', 'std::map', 'std::array', 'std::vector']}
  answer="std::map"
/>
<Question
  question="4). What is the time complexity of std::unordered_map lookup?"
  options={['O(log n)', 'O(n)', 'O(1)', 'O(n log n)']}
  answer="O(1)"
/>
<Question
  question="5). Which of the following allows duplicate keys?"
  options={['std::set', 'std::multimap', 'std::map', 'std::unordered_set']}
  answer="std::multimap"
/>
<Question
  question="6). Which container stores elements in a key-value pair and is ordered?"
  options={['std::multiset', 'std::unordered_map', 'std::map', 'std::vector']}
  answer="std::map"
/>
<Question
  question="7). What does std::vector::capacity() return?"
  options={['Number of elements', 'Allocated storage size', 'Free space', 'Max allowed size']}
  answer="Allocated storage size"
/>
<Question
  question="8). Which of these is a container adapter?"
  options={['std::deque', 'std::array', 'std::queue', 'std::set']}
  answer="std::queue"
/>
<Question
  question="9). Which STL container uses a hash table?"
  options={['std::unordered_map', 'std::stack', 'std::vector', 'std::map']}
  answer="std::unordered_map"
/>
<Question
  question="10). Which algorithm searches for a value in a range?"
  options={['lookup()', 'find()', 'search()', 'locate()']}
  answer="find()"
/>

<div>
<AdBanner />
</div>

<Question
  question="11). What header file is needed for std::vector?"
  options={['<list>', '<vector>', '<deque>', '<array>']}
  answer="<vector>"
/>
<Question
  question="12). What type of iterator does std::vector support?"
  options={['Bidirectional Iterator', 'Random Access Iterator', 'Forward Iterator', 'Input Iterator']}
  answer="Random Access Iterator"
/>
<Question
  question="13). Which container is best for LIFO operations?"
  options={['std::map', 'std::stack', 'std::queue', 'std::set']}
  answer="std::stack"
/>
<Question
  question="14). What is the default container for std::queue?"
  options={['std::deque', 'std::vector', 'std::map', 'std::list']}
  answer="std::deque"
/>
<Question
  question="15). Which of the following is not an STL algorithm?"
  options={['sort()', 'reverse()', 'count()', 'connect()']}
  answer="connect()"
/>
<Question
  question="16). Which method inserts at the beginning of std::list?"
  options={['push_back()', 'insert()', 'push_front()', 'emplace()']}
  answer="push_front()"
/>
<Question
  question="17). Which of these provides constant time insertion/removal at both ends?"
  options={['std::vector', 'std::deque', 'std::array', 'std::set']}
  answer="std::deque"
/>
<Question
  question="18). Which container is sorted automatically?"
  options={['std::queue', 'std::vector', 'std::list', 'std::set']}
  answer="std::set"
/>
<Question
  question="19). Which function removes consecutive duplicates in a range?"
  options={['unique()', 'filter()', 'remove()', 'erase()']}
  answer="unique()"
/>
<Question
  question="20). Which header defines std::array?"
  options={['<map>', '<array>', '<vector>', '<utility>']}
  answer="<array>"
/>

<div>
<AdBanner />
</div>

<Question
  question="21). Which of these is not a sequence container?"
  options={['std::stack', 'std::deque', 'std::list', 'std::vector']}
  answer="std::stack"
/>
<Question
  question="22). Which iterator category allows random access?"
  options={['Bidirectional Iterator', 'Input Iterator', 'Random Access Iterator', 'Forward Iterator']}
  answer="Random Access Iterator"
/>
<Question
  question="23). Which algorithm returns true if all elements meet a condition?"
  options={['none_of()', 'all_of()', 'count_if()', 'any_of()']}
  answer="all_of()"
/>
<Question
  question="24). What does std::accumulate() do?"
  options={['Finds max value', 'Sorts values', 'Sums values in a range', 'Removes duplicates']}
  answer="Sums values in a range"
/>
<Question
  question="25). Which container does not allow duplicate elements?"
  options={['std::list', 'std::vector', 'std::set', 'std::multiset']}
  answer="std::set"
/>
<Question
  question="26). Which STL container is unordered?"
  options={['std::unordered_map', 'std::multiset', 'std::set', 'std::map']}
  answer="std::unordered_map"
/>
<Question
  question="27). What is required for std::sort() to work?"
  options={['Random access iterators', 'Bidirectional iterators', 'Forward iterators', 'None']}
  answer="Random access iterators"
/>
<Question
  question="28). Which function checks if a container is empty?"
  options={['empty()', 'is_empty()', 'None', 'size() == 0']}
  answer="empty()"
/>
<Question
  question="29). Which method returns the size of a container?"
  options={['count()', 'size()', 'length()', 'capacity()']}
  answer="size()"
/>
<Question
  question="30). What does push_back() do in std::vector?"
  options={['Adds at front', 'Adds element at end', 'Reverses vector', 'Removes last']}
  answer="Adds element at end"
/>

<div>
<AdBanner />
</div>

<Question
  question="31). Which container is best for LIFO operations?"
  options={['std::stack', 'std::queue', 'std::map', 'std::set']}
  answer="std::stack"
/>
<Question
  question="32). Which STL container uses a hash table?"
  options={['std::unordered_map', 'std::stack', 'std::map', 'std::vector']}
  answer="std::unordered_map"
/>
<Question
  question="33). What is the time complexity of std::unordered_map lookup?"
  options={['O(log n)', 'O(1)', 'O(n)', 'O(n log n)']}
  answer="O(1)"
/>
<Question
  question="34). Which of the following allows duplicate keys?"
  options={['std::map', 'std::set', 'std::multimap', 'std::unordered_set']}
  answer="std::multimap"
/>
<Question
  question="35). What is the default container for std::queue?"
  options={['std::deque', 'std::list', 'std::map', 'std::vector']}
  answer="std::deque"
/>
<Question
  question="36). Which of the following is not an STL algorithm?"
  options={['connect()', 'reverse()', 'count()', 'sort()']}
  answer="connect()"
/>
<Question
  question="37). Which method inserts at the beginning of std::list?"
  options={['push_front()', 'emplace()', 'insert()', 'push_back()']}
  answer="push_front()"
/>
<Question
  question="38). Which of these provides constant time insertion/removal at both ends?"
  options={['std::array', 'std::deque', 'std::vector', 'std::set']}
  answer="std::deque"
/>
<Question
  question="39). Which container is sorted automatically?"
  options={['std::list', 'std::queue', 'std::set', 'std::vector']}
  answer="std::set"
/>
<Question
  question="40). Which function removes consecutive duplicates in a range?"
  options={['erase()', 'unique()', 'remove()', 'filter()']}
  answer="unique()"
/>

<div>
<AdBanner />
</div>

<Question
  question="41). Which header defines std::array?"
  options={['<vector>', '<array>', '<map>', '<utility>']}
  answer="<array>"
/>
<Question
  question="42). What header file is needed for std::vector?"
  options={['<array>', '<vector>', '<deque>', '<list>']}
  answer="<vector>"
/>
<Question
  question="43). Which type of iterator does std::vector support?"
  options={['Input Iterator', 'Bidirectional Iterator', 'Random Access Iterator', 'Forward Iterator']}
  answer="Random Access Iterator"
/>
<Question
  question="44). Which container stores elements in a key-value pair and is ordered?"
  options={['std::unordered_map', 'std::map', 'std::vector', 'std::multiset']}
  answer="std::map"
/>
<Question
  question="45). Which container does not provide random access iterators?"
  options={['std::array', 'std::list', 'std::vector', 'std::deque']}
  answer="std::list"
/>
<Question
  question="46). What is the default underlying container for std::stack?"
  options={['std::list', 'std::vector', 'std::queue', 'std::deque']}
  answer="std::deque"
/>
<Question
  question="47). Which of these is a container adapter?"
  options={['std::deque', 'std::queue', 'std::set', 'std::array']}
  answer="std::queue"
/>
<Question
  question="48). What does std::vector::capacity() return?"
  options={['Max allowed size', 'Number of elements', 'Allocated storage size', 'Free space']}
  answer="Allocated storage size"
/>
<Question
  question="49). Which algorithm searches for a value in a range?"
  options={['search()', 'find()', 'lookup()', 'locate()']}
  answer="find()"
/>
<Question
  question="50). Which container adapter follows FIFO order?"
  options={['std::stack', 'std::priority_queue', 'std::list', 'std::queue']}
  answer="std::queue"
/>

<div>
<AdBanner />
</div>