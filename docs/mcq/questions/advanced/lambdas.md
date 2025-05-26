---
id: lambdas
title: Lambda Functions
description: |
  Lambda functions are a powerful feature in modern programming, providing a concise way to define anonymous functions. This guide explores how to use lambda functions, capture variables from the surrounding scope, and pass them as arguments to other functions. Learn about lambda expressions, syntax, and the flexibility they offer in functional programming and other paradigms.
keywords:
  - Lambda Functions
  - Anonymous Functions
  - Functional Programming
  - Lambda Expressions
  - Function Objects
  - Closures
  - Variable Capture
  - Higher-Order Functions
  - Functional Techniques
  - Lambda Syntax
  - Lambda Parameters
  - Immutable and Mutable Captures
  - Lambda in Algorithms
  - Lambda Expressions in Programming
  - Functional Programming Techniques

tags:
  - Lambda Functions
  - Anonymous Functions
  - Functional Programming
  - Lambda Expressions
  - Closures
  - Variable Capture
  - Higher-Order Functions
  - Function Objects
  - Immutable Captures
  - Mutable Captures
  - Lambda Syntax
  - Functional Programming Techniques
  - Lambda Parameters

---
import AdBanner from '@site/src/components/AdBanner';
import { Question } from '../../Question';

# Lambda Functions

<Question
  question="1).What is a lambda function in C++?"
  options={['A function defined inline', 'A function that returns a lambda expression', 'A function with a fixed signature', 'None of the above']}
  answer="A function defined inline"
/>
<Question
  question="2).Which of the following is the correct syntax for a simple lambda function?"
  options={['[] { // code }', '[int a] { // code }', '[a] { // code }', 'None of the above']}
  answer="[] { // code }"
/>
<Question
  question="3).What does the '[]' in a lambda function denote?"
  options={['Capture clause', 'Return type', 'Argument list', 'None of the above']}
  answer="Capture clause"
/>
<Question
  question="4).What is the purpose of the 'auto' keyword in lambda functions?"
  options={['To automatically deduce the return type', 'To automatically deduce the arguments', 'To capture all variables by reference', 'None of the above']}
  answer="To automatically deduce the return type"
/>
<Question
  question="5).How do you capture a variable by reference in a lambda?"
  options={['[&a] { // code }', '[a] { // code }', '[] { // code }', 'None of the above']}
  answer="[&a] { // code }"
/>
<Question
  question="6).Can lambda functions accept parameters?"
  options={['Yes', 'No', 'Only for return types', 'None of the above']}
  answer="Yes"
/>
<Question
  question="7).What is the return type of a lambda function if not specified?"
  options={['auto', 'void', 'int', 'Depends on the body of the function']}
  answer="Depends on the body of the function"
/>
<Question
  question="8).Can lambda functions be assigned to variables?"
  options={['Yes', 'No', 'Only for const variables', 'Only for functions']}
  answer="Yes"
/>
<Question
  question="9).How do you call a lambda function?"
  options={['By using the variable it is assigned to', 'By using the function name', 'By using the capture clause', 'None of the above']}
  answer="By using the variable it is assigned to"
/>
<Question
  question="10).Can lambda functions be used with STL algorithms?"
  options={['Yes', 'No', 'Only with specific algorithms', 'None of the above']}
  answer="Yes"
/>

<div>
<AdBanner />
</div>

<Question
question="11).What does the mutable keyword do in a lambda function?"
options={['Makes the lambda thread-safe', 'Allows modifying captured variables by value', 'Forces the lambda to return a value', 'None of the above']}
answer="Allows modifying captured variables by value"
/>

<Question
question="12).How can you explicitly specify the return type of a lambda?"
options={['[]() int { return 42; }', '[]() => int { return 42; }', '[]() -> int { return 42; }', 'None of the above']}
answer="[]() -> int { return 42; }"
/>

<Question
question="13).What happens if a lambda captures a variable by value and modifies it without mutable?"
options={['The variable is modified externally', 'Compilation error', 'Undefined behavior', 'None of the above']}
answer="Compilation error"
/>

<Question
question="14).Which of the following captures all local variables by reference?"
options={['[=]', '[&]', '[*]', 'None of the above']}
answer="[&]"
/>

<Question
question="15).What is the type of a lambda function?"
options={['std::function', 'A unique, unnamed closure type', 'void(*)()', 'None of the above']}
answer="A unique, unnamed closure type"
/>

<Question
question="16).How can you store a lambda in an std::function?"
options={['function f = []{};', 'std::function<void()> f = []{};', 'auto f = []{};', 'None of the above']}
answer="std::function<void()> f = []{};"
/>

<Question
question="17).What does [this] capture in a lambda inside a class?"
options={['Only class members', 'The current object by reference', 'The current object by value', 'None of the above']}
answer="The current object by reference"
/>

<Question
question="18).Can a lambda function be recursive?"
options={['No, lambdas cannot call themselves', 'Only if marked constexpr', 'Yes, using std::function or auto with a capture', 'None of the above']}
answer="Yes, using std::function or auto with a capture"
/>

<Question
question="19).What is the default capture mode if none is specified?"
options={['All by reference', 'No captures', 'All by value', 'None of the above']}
answer="No captures"
/>

<Question
question="20).Can lambda functions be constexpr?"
options={['No, lambdas are runtime-only', 'Only if they capture no variables', 'Yes, if they meet constexpr requirements', 'None of the above']}
answer="Yes, if they meet constexpr requirements"
/>

<div>
<AdBanner />
</div>

<Question
question="21).How do you pass a lambda as a function argument?"
options={['Only by pointer', 'By template parameter or std::function', 'Only by reference', 'None of the above']}
answer="By template parameter or std::function"
/>

<Question
question="22).What does [=, &x] mean in a lambda capture?"
options={['Invalid syntax', 'Capture all by value except x by reference', 'Capture all by reference except x by value', 'None of the above']}
answer="Capture all by value except x by reference"
/>

<Question
question="23).Can a lambda function have a default argument?"
options={['Only in C++20', 'No', 'Yes', 'None of the above']}
answer="Yes"
/>

<Question
question="24).What is a generic lambda (introduced in C++14)?"
options={['A templated lambda', 'A lambda returning auto', 'A lambda with auto parameters', 'None of the above']}
answer="A lambda with auto parameters"
/>

<Question
question="25).How do you capture a move-only object (like std::unique_ptr) in a lambda?"
options={['[&var]', '[var]', '[var = std::move(var)]', 'None of the above']}
answer="[var = std::move(var)]"
/>

<Question
question="26).Can lambda functions be used in constexpr contexts in C++17 and later?"
options={['Only if they don’t capture anything', 'No', 'Yes', 'None of the above']}
answer="Yes"
/>

<Question
question="27).What is the lifetime of a captured reference in a lambda?"
options={['Same as the lambda object', 'Same as the referenced object', 'Only until the lambda is called', 'None of the above']}
answer="Same as the referenced object"
/>

<Question
question="28).Can a lambda be a coroutine (C++20)?"
options={['Only with std::generator', 'No', 'Yes', 'None of the above']}
answer="Yes"
/>

<Question
question="29).What is the difference between std::function and a lambda?"
options={['std::function cannot store lambdas', 'std::function is a type-erased wrapper; lambda has a unique type', 'Lambdas are slower', 'None of the above']}
answer="std::function is a type-erased wrapper; lambda has a unique type"
/>

<Question
question="30).How do you capture a parameter pack in a lambda (C++20)?"
options={['[args...]', '[...args = std::move(args)]', '[&args...]', 'None of the above']}
answer="[...args = std::move(args)]"
/>

<div>
<AdBanner />
</div>

<Question
question="31).Can a lambda be noexcept?"
options={['Only if it captures nothing', 'No', 'Yes', 'None of the above']}
answer="Yes"
/>

<Question
question="32).What happens if a lambda captures a local variable that goes out of scope?"
options={['The variable is copied automatically', 'Undefined behavior if accessed', 'The lambda becomes invalid', 'None of the above']}
answer="Undefined behavior if accessed"
/>

<Question
question="33).Can a lambda be consteval (C++20)?"
options={['Only if it is constexpr', 'Yes', 'No', 'None of the above']}
answer="No"
/>

<Question
question="34).How do you forward-capture a variable in a lambda?"
options={['[&&var]', '[var = std::forward<T>(var)]', '[var&]', 'None of the above']}
answer="[var = std::forward<T>(var)]"
/>

<Question
question="35).Can a lambda be used as a comparator in std::sort?"
options={['Only if it is stateless', 'No', 'Yes', 'None of the above']}
answer="Yes"
/>

<Question
question="36).What is the advantage of using a lambda over a function pointer?"
options={['Faster execution', 'Can capture state and context', 'Smaller binary size', 'None of the above']}
answer="Can capture state and context"
/>

<Question
question="37).Can a lambda be volatile?"
options={['Only if it is mutable', 'Yes', 'No', 'None of the above']}
answer="No"
/>

<Question
question="38).How do you write a templated lambda (C++20)?"
options={['[T]() { }', '[]<typename T>(T arg) { }', 'template<typename T> []() { }', 'None of the above']}
answer="[]<typename T>(T arg) { }"
/>
<Question
question="39).Can a lambda be static?"
options={['Only in global scope', 'No', 'Yes', 'None of the above']}
answer="No"
/>

<Question
question="40).What is the difference between [=] and [&]?"
options={['No difference', '[=] is for const lambdas; [&] is for mutable', '[=] captures by value; [&] captures by reference', 'None of the above']}
answer="[=] captures by value; [&] captures by reference"
/>

<div>
<AdBanner />
</div>

<Question
question="41).What does [x = 5] in a lambda capture mean?"
options={['Captures x by reference with default value 5', 'Initializes a new variable x with value 5', 'Compilation error', 'None of the above']}
answer="Initializes a new variable x with value 5"
/>

<Question
question="42).Can a lambda function be declared static inside a class?"
options={['Yes, but only if it captures nothing', 'No, lambdas are always non-static', 'Only in C++20', 'None of the above']}
answer="No, lambdas are always non-static"
/>

<Question
question="43).What happens if a lambda captures a global variable?"
options={['It must use [&]', 'It cannot capture globals', 'Globals are accessible without capturing', 'None of the above']}
answer="Globals are accessible without capturing"
/>

<Question
question="44).How do you write a lambda that takes no parameters?"
options={['[]() { }', '[] { }', '[void] { }', 'None of the above']}
answer="[] { }"
/>

<Question
question="45).What is the effect of [=, this] in C++20?"
options={['Deprecated (redundant capture)', 'Captures this explicitly and others by value', 'Syntax error', 'None of the above']}
answer="Deprecated (redundant capture)"
/>

<Question
question="46).Can a lambda be used as a template argument?"
options={['Only in C++20', 'No', 'Yes, if it is stateless', 'None of the above']}
answer="Yes, if it is stateless"
/>

<Question
question="47).What does [&, x] mean in a lambda capture?"
options={['Captures x by value, others by reference', 'Syntax error', 'Captures x by reference, others by value', 'None of the above']}
answer="Captures x by value, others by reference"
/>

<Question
question="48).Can a lambda be defined inside a constexpr function?"
options={['No', 'Only in C++17 and later', 'Yes, even in C++11', 'None of the above']}
answer="Yes, even in C++11"
/>

<Question
question="49).What is the output of auto f = [](int x) { return x * 2; }; std::cout << f(3);?"
options={['6', 'Compilation error', '0', 'None of the above']}
answer="6"
/>

<Question
question="50).How do you capture this by value in C++20?"
options={['[*this]', '[this]', '[=, this]', 'None of the above']}
answer="[*this]"
/>

<div>
<AdBanner />
</div>