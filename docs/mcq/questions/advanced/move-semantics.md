import { Question } from '../../Question';

# Move Semantics and Rvalue References

<Question
  question="1).What is move semantics in C++?"
  options={['Transferring ownership of resources without copying', 'Moving data between containers', 'Copying resources from one object to another', 'None of the above']}
  answer="Transferring ownership of resources without copying"
/>
<Question
  question="2).Which of the following is used to enable move semantics?"
  options={['Rvalue references', 'Copy constructor', 'Assignment operator', 'None of the above']}
  answer="Rvalue references"
/>
<Question
  question="3).What is an rvalue reference in C++?"
  options={['A reference to a temporary object', 'A reference to a constant object', 'A reference to a global object', 'None of the above']}
  answer="A reference to a temporary object"
/>
<Question
  question="4).What does the 'std::move()' function do?"
  options={['It casts an lvalue to an rvalue reference', 'It moves the data from one object to another', 'It creates a copy of the object', 'None of the above']}
  answer="It casts an lvalue to an rvalue reference"
/>
<Question
  question="5).What is the benefit of move semantics?"
  options={['Avoids expensive deep copies', 'Increases memory usage', 'Slows down the program', 'None of the above']}
  answer="Avoids expensive deep copies"
/>
<Question
  question="6).Can an rvalue reference bind to an lvalue?"
  options={['No', 'Yes', 'Only for constants', 'None of the above']}
  answer="No"
/>
<Question
  question="7).What is the role of move constructor?"
  options={['Transfers ownership of resources from one object to another', 'Copies resources from one object to another', 'Deletes resources', 'None of the above']}
  answer="Transfers ownership of resources from one object to another"
/>
<Question
  question="8).Can a class have both a move constructor and a copy constructor?"
  options={['Yes', 'No', 'Only one can exist', 'None of the above']}
  answer="Yes"
/>
<Question
  question="9).What is an example of a case where move semantics should be used?"
  options={['Returning a large object from a function', 'Passing an object to a function by reference', 'Passing an object to a function by value', 'None of the above']}
  answer="Returning a large object from a function"
/>
<Question
  question="10).What happens if a move constructor is not defined?"
  options={['The compiler will use the copy constructor instead', 'The program will throw an error', 'The program will crash', 'None of the above']}
  answer="The compiler will use the copy constructor instead"
/>
