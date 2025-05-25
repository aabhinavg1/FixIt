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

<Question
question="11).What does the mutable keyword do in a lambda?"
options={[ 'Makes the lambda const','Allows modifying captured variables by value', 'Enables move semantics', 'None of the above']}
answer="Allows modifying captured variables by value"
/>

<Question
question="12).How do you capture all variables by value in a lambda?"
options={['[=]', '[&]', '[*]', 'None of the above']}
answer="[=]"
/>

<Question
question="13).How do you capture all variables by reference in a lambda?"
options={['[=]', '[*]','[&]',  'None of the above']}
answer="[&]"
/>
<Question
question="14).How do you specify parameters in a lambda?"
options={[ '[a, b]', '{a, b}', 'None of the above','(int a, int b)']}
answer="(int a, int b)"
/>

<Question
question="15).Can lambda parameters have default arguments?"
options={[ 'No', 'Only in C++20','Yes, in C++14 and later', 'None of the above']}
answer="Yes, in C++14 and later"
/>
<Question
question="16).How do you explicitly specify a lambda's return type?"
options={[' -> int { return 42; } ' , ' int { return 42; }', ' : int { return 42; }', 'None of the above']}
answer=" -> int { return 42; }"
/>

<Question
question="17).What happens if a lambda has multiple return statements with different types?"
options={['Compiler error unless return type is specified', 'It deduces the common type', 'It always returns void', 'None of the above']}
answer="Compiler error unless return type is specified"
/>
<Question
question="18).How do you capture a specific variable by move?"
options={[ '[move var]', '[std::move(var)]','[var = std::move(var)]', 'None of the above']}
answer="[var = std::move(var)]"
/>

<Question
question="19).Can you capture class member variables directly in a lambda?"
options={[ 'Yes with [=]', 'No, must capture this','Yes with [&]', 'None of the above']}
answer="No, must capture this"
/>
<Question
question="20).When were generic lambdas introduced?"
options={[ 'C++11', 'C++17', 'None of the above','C++14']}
answer="C++14"
/>

<Question
question="21).What is a generic lambda?"
options={['Lambda with auto parameters', 'Lambda template', 'Lambda with variadic args', 'None of the above']}
answer="Lambda with auto parameters"
/>
<Question
question="22).Which STL algorithm commonly uses lambdas?"
options={['std::sort', 'std::malloc', 'std::cout', 'None of the above']}
answer="std::sort"
/>

<Question
question="23).Can lambda expressions be used as template arguments?"
options={['Yes', 'Only in C++20', 'No', 'None of the above']}
answer="No"
/>


<Question
question="24).Can lambdas be recursive?"
options={['Yes, with std::function', 'No', 'Only in C++20', 'None of the above']}
answer="Yes, with std::function"
/>

<Question
question="25).What is a lambda's closure type?"
options={[ 'std::function','Unique unnamed class type', 'std::lambda', 'None of the above']}
answer="Unique unnamed class type"
/>
<Question
question="26).Are lambdas typically optimized by compilers?"
options={['Yes, often inlined', 'No, they are slow', 'Only with -O3 flag', 'None of the above']}
answer="Yes, often inlined"
/>

<Question
question="27).When does a lambda allocate memory?"
options={['When capturing large objects by value', 'Always', 'Never', 'None of the above']}
answer="When capturing large objects by value"
/>
<Question
question="28).How do you capture class members in a lambda?"
options={[ '[self]','[this]', '[class]', 'None of the above']}
answer="[this]"
/>

<Question
question="29).Can lambdas be used as class members?"
options={['Yes, as std::function', 'No', 'Only static ones', 'None of the above']}
answer="Yes, as std::function"
/>
<Question
question="30).What is an immediately invoked lambda?"
options={['{}( )', ' ', 'lambda()', 'None of the above']}
answer="{}( )"
/>

<Question
question="31).How are lambdas shown in debuggers?"
options={['As compiler-generated class types', 'As "lambda"', 'As std::function', 'None of the above']}
answer="As compiler-generated class types"
/>

<Question
question="32).What can a lambda without captures convert to?"
options={[ 'std::string', 'int','Function pointer', 'None of the above']}
answer="Function pointer"
/>

<Question
question="33).Why can't lambdas with captures convert to function pointers?"
options={[ 'They are too big', 'Standard prohibits it', 'None of the above','They have state']}
answer="They have state"
/>
<Question
question="34).When were template lambdas introduced?"
options={['C++20', 'C++14', 'C++17', 'None of the above']}
answer="C++20"
/>

<Question
question="35).When was init-capture introduced for lambdas?"
options={['C++14', 'C++11', 'C++17', 'None of the above']}
answer="C++14"
/>

<Question
question="36).When were pack captures introduced in lambdas?"
options={['C++20', 'C++14', 'C++17', 'None of the above']}
answer="C++20"
/>

<Question
question="37).How do you initialize a captured variable in the capture clause?"
options={['[x = 42] { }', '[x(42)] { }', '[x{42}] { }', 'None of the above']}
answer="[x = 42] { }"
/>


<Question
question="38).Can lambdas have attributes?"
options={[ 'No','Yes, in C++23', 'Only certain attributes', 'None of the above']}
answer="Yes, in C++23"
/>

<Question
question="39).Where are attributes placed on lambdas?"
options={['Before capture clause', 'After parameters', 'Before return type', 'None of the above']}
answer="Before capture clause"
/>

<Question
question="40).What affects a lambda's size?"
options={['What it captures', 'Its parameters', 'Its return type', 'None of the above']}
answer="What it captures"
/>

<Question
question="41).What is sizeof for a captureless lambda?"
options={[ '0','1', '4', 'None of the above']}
answer="1"
/>

<Question
question="42).How can you overload a lambda function?"
options={['By using std::overloaded pattern', 'Using overload keyword', 'By default in C++20', 'None of the above']}
answer="By using std::overloaded pattern"
/>

<Question
question="43).Can two lambdas in the same scope have the same signature?"
options={[ 'No', 'Only if marked override', 'Yes, they have unique types','None of the above']}
answer="Yes, they have unique types"
/>

<Question
question="44).Is it safe to pass a lambda between threads?"
options={['Yes, if captures are thread-safe', 'No', 'Only with [=] capture', 'None of the above']}
answer="Yes, if captures are thread-safe"
/>

<Question
question="45).What happens if a lambda captures a local variable and is used in another thread?"
options={['Undefined behavior if variable goes out of scope', 'Automatic synchronization', 'Compiler error', 'None of the above']}
answer="Undefined behavior if variable goes out of scope"
/>

<Question
question="46).Can a lambda inherit from a class?"
options={['Yes', 'Only in C++20', 'No', 'None of the above']}
answer="No"
/>

<Question
question="47).Can a lambda be derived from?"
options={[ 'Yes','No', 'Only if marked final', 'None of the above']}
answer="No"
/>

<Question
question="48).Can a lambda have virtual methods?"
options={['No', 'Yes', 'Only if marked virtual', 'None of the above']}
answer="No"
/>

<Question
question="49).Can a lambda override a virtual function?"
options={['No', 'Yes', 'Only if signature matches exactly', 'None of the above']}
answer="No"
/>

<Question
question="50).Can lambdas be used in SFINAE contexts?"
options={[ 'No', 'Only in C++17', 'None of the above','Yes, in C++20']}
answer="Yes, in C++20"
/>
