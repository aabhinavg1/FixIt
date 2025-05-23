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
import { Question } from '../../Question';

# STL: Standard Template Library

<Question
  question="1).What does STL stand for in C++?"
  options={['Standard Template Library', 'Standard Type Library', 'Standard Test Library', 'None of the above']}
  answer="Standard Template Library"
/>
<Question
  question="2).Which of the following is NOT a component of the C++ STL?"
  options={['Containers', 'Algorithms', 'Iterators', 'Memory Management']}
  answer="Memory Management"
/>
<Question
  question="3).Which header file is required for using the vector container in STL?"
  options={['<vector>', '<iostream>', '<algorithm>', '<list>']}
  answer="<vector>"
/>
<Question
  question="4).What type of container is std::vector?"
  options={['Sequence container', 'Associative container', 'Container adapter', 'None of the above']}
  answer="Sequence container"
/>
<Question
  question="5).Which STL container is best for fast insertion and deletion from both ends?"
  options={['std::list', 'std::vector', 'std::deque', 'std::map']}
  answer="std::deque"
/>
<Question
  question="6).Which STL algorithm is used to find an element in a container?"
  options={['find()', 'search()', 'locate()', 'find_element()']}
  answer="find()"
/>
<Question
  question="7).Which of the following STL containers is used for key-value pairs?"
  options={['std::map', 'std::list', 'std::deque', 'std::vector']}
  answer="std::map"
/>
<Question
  question="8).What does the std::sort() function do in STL?"
  options={['Sorts the elements of a container', 'Reverses the container', 'Finds the maximum element', 'None of the above']}
  answer="Sorts the elements of a container"
/>
<Question
  question="9).Which function is used to remove an element from a vector in STL?"
  options={['erase()', 'remove()', 'pop_back()', 'delete()']}
  answer="erase()"
/>
<Question
  question="10).Which container type is the fastest for random access?"
  options={['std::vector', 'std::list', 'std::deque', 'std::map']}
  answer="std::vector"
/>

<Question
  question="11). Which container maintains sorted order automatically?"
  options={['std::set', 'std::vector', 'std::stack', 'std::queue']}
  answer="std::set"
/>
<Question
  question="12). What is the time complexity of accessing an element in std::vector by index?"
  options={['O(1)', 'O(log n)', 'O(n)', 'O(n log n)']}
  answer="O(1)"
/>
<Question
  question="13). Which container supports LIFO (Last In First Out)?"
  options={['std::stack', 'std::queue', 'std::list', 'std::set']}
  answer="std::stack"
/>
<Question
  question="14). Which container supports FIFO (First In First Out)?"
  options={['std::queue', 'std::stack', 'std::map', 'std::vector']}
  answer="std::queue"
/>
<Question
  question="15). What is the default underlying container for std::stack?"
  options={['std::deque', 'std::list', 'std::vector', 'std::queue']}
  answer="std::deque"
/>
<Question
  question="16). What does the 'auto' keyword help with in STL?"
  options={['Type inference', 'Auto memory management', 'Auto compilation', 'None of the above']}
  answer="Type inference"
/>
<Question
  question="17). Which algorithm counts the number of occurrences of a value?"
  options={['count()', 'find()', 'accumulate()', 'search()']}
  answer="count()"
/>
<Question
  question="18). What header file is needed for std::set?"
  options={['<set>', '<map>', '<unordered_set>', '<iostream>']}
  answer="<set>"
/>
<Question
  question="19). Which container allows duplicate keys?"
  options={['std::multimap', 'std::map', 'std::set', 'std::unordered_map']}
  answer="std::multimap"
/>
<Question
  question="20). What does std::unique() do?"
  options={['Removes consecutive duplicates', 'Sorts the container', 'Erases all elements', 'Finds unique keys']}
  answer="Removes consecutive duplicates"
/>

<Question
  question="21). Which of these is not a sequence container?"
  options={['std::stack', 'std::vector', 'std::deque', 'std::list']}
  answer="std::stack"
/>
<Question
  question="22). Which iterator category allows random access?"
  options={['Random Access Iterator', 'Bidirectional Iterator', 'Input Iterator', 'Forward Iterator']}
  answer="Random Access Iterator"
/>
<Question
  question="23). Which algorithm returns true if all elements meet a condition?"
  options={['all_of()', 'any_of()', 'none_of()', 'count_if()']}
  answer="all_of()"
/>
<Question
  question="24). What does std::accumulate() do?"
  options={['Sums values in a range', 'Sorts values', 'Finds max value', 'Removes duplicates']}
  answer="Sums values in a range"
/>
<Question
  question="25). Which container does not allow duplicate elements?"
  options={['std::set', 'std::multiset', 'std::vector', 'std::list']}
  answer="std::set"
/>
<Question
  question="26). Which STL container is unordered?"
  options={['std::unordered_map', 'std::map', 'std::set', 'std::multiset']}
  answer="std::unordered_map"
/>
<Question
  question="27). What is required for std::sort() to work?"
  options={['Random access iterators', 'Bidirectional iterators', 'Forward iterators', 'None']}
  answer="Random access iterators"
/>
<Question
  question="28). Which function checks if a container is empty?"
  options={['empty()', 'is_empty()', 'size() == 0', 'None']}
  answer="empty()"
/>
<Question
  question="29). Which method returns the size of a container?"
  options={['size()', 'length()', 'count()', 'capacity()']}
  answer="size()"
/>
<Question
  question="30). What does push_back() do in std::vector?"
  options={['Adds element at end', 'Adds at front', 'Removes last', 'Reverses vector']}
  answer="Adds element at end"
/>

<Question
  question="31). What type of container is std::priority_queue?"
  options={['Container adapter', 'Sequence container', 'Associative container', 'None']}
  answer="Container adapter"
/>
<Question
  question="32). What is the time complexity of inserting into std::map?"
  options={['O(log n)', 'O(1)', 'O(n)', 'O(n log n)']}
  answer="O(log n)"
/>
<Question
  question="33). Which STL algorithm finds the first mismatch between two ranges?"
  options={['mismatch()', 'find()', 'adjacent_find()', 'equal()']}
  answer="mismatch()"
/>
<Question
  question="34). Which of these containers provides stable sorting?"
  options={['std::list::sort()', 'std::sort()', 'std::set', 'std::vector']}
  answer="std::list::sort()"
/>
<Question
  question="35). Which container does not support random access?"
  options={['std::list', 'std::vector', 'std::deque', 'std::array']}
  answer="std::list"
/>
<Question
  question="36). Which algorithm is used to copy elements to another container?"
  options={['copy()', 'duplicate()', 'assign()', 'copy_to()']}
  answer="copy()"
/>
<Question
  question="37). Which container is usually implemented as a red-black tree?"
  options={['std::map', 'std::deque', 'std::vector', 'std::unordered_map']}
  answer="std::map"
/>
<Question
  question="38). What is the use of emplace_back()?"
  options={['Construct and insert at end', 'Remove from end', 'Insert at front', 'Sort vector']}
  answer="Construct and insert at end"
/>
<Question
  question="39). Which is true about std::unordered_map?"
  options={['Average O(1) lookup', 'Maintains order', 'No key-value storage', 'Allows duplicates']}
  answer="Average O(1) lookup"
/>
<Question
  question="40). Which header file includes most STL algorithms?"
  options={['<algorithm>', '<vector>', '<map>', '<utility>']}
  answer="<algorithm>"
/>

<Question
  question="41). Which container is best for fast lookup by key?"
  options={['std::map', 'std::vector', 'std::deque', 'std::list']}
  answer="std::map"
/>
<Question
  question="42). Which adapter container uses heap structure internally?"
  options={['std::priority_queue', 'std::stack', 'std::list', 'std::vector']}
  answer="std::priority_queue"
/>
<Question
  question="43). Which algorithm reverses a range?"
  options={['reverse()', 'rotate()', 'flip()', 'invert()']}
  answer="reverse()"
/>
<Question
  question="44). What does std::advance() do?"
  options={['Moves iterator forward by n', 'Sorts range', 'Reverses range', 'Removes element']}
  answer="Moves iterator forward by n"
/>
<Question
  question="45). Which container should be used for frequent insertions at the beginning?"
  options={['std::deque', 'std::vector', 'std::array', 'std::map']}
  answer="std::deque"
/>
<Question
  question="46). Which of the following is a smart pointer in STL?"
  options={['std::shared_ptr', 'std::vector', 'std::list', 'std::pair']}
  answer="std::shared_ptr"
/>
<Question
  question="47). What is the use of std::pair?"
  options={['Stores two related values', 'Sorts elements', 'Removes duplicates', 'None']}
  answer="Stores two related values"
/>
<Question
  question="48). What is returned by std::find_if()?"
  options={['Iterator to first match', 'True or false', 'Count', 'None']}
  answer="Iterator to first match"
/>
<Question
  question="49). Which STL component provides generic operations on ranges?"
  options={['Algorithms', 'Containers', 'Iterators', 'Adapters']}
  answer="Algorithms"
/>
<Question
  question="50). Which is the correct header for using std::pair?"
  options={['<utility>', '<pair>', '<tuple>', '<functional>']}
  answer="<utility>"
/>
