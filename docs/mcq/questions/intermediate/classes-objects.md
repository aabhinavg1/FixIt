import { Question } from '../../Question';

# Classes and Objects

<Question
  question="1).What is a class in C++?"
  options={['A user-defined data type', 'A built-in data type', 'A predefined function', 'None of the above']}
  answer="A user-defined data type"
/>
<Question
  question="2).How do you create an object of a class in C++?"
  options={['className obj;', 'obj className;', 'object className;', 'None of the above']}
  answer="className obj;"
/>
<Question
  question="3).Which access specifier allows members to be accessed outside the class?"
  options={['private', 'protected', 'public', 'None of the above']}
  answer="public"
/>
<Question
  question="4).Which of the following defines a constructor in a class?"
  code={`class Example {
  public:
    Example() { }
};`}
  options={['Correct syntax', 'Error: Missing return type', 'Error: Missing parameters', 'None of the above']}
  answer="Correct syntax"
/>
<Question
  question="5).How do you define a member function outside a class?"
  options={['Using :: operator', 'Using . operator', 'Using -> operator', 'None of the above']}
  answer="Using :: operator"
/>
<Question
  question="6).Which operator is used to access members of a class through a pointer?"
  options={['.', '->', '::', 'None of the above']}
  answer="->"
/>
<Question
  question="7).What is the default access specifier for members in a class?"
  options={['private', 'protected', 'public', 'None of the above']}
  answer="private"
/>
<Question
  question="8).What happens if a constructor is not defined in a class?"
  options={['Compiler provides a default constructor', 'Error is thrown', 'Class cannot be used', 'None of the above']}
  answer="Compiler provides a default constructor"
/>
<Question
  question="9).What is a friend function in a class?"
  options={['A function declared outside but has access to private members', 'A member function that is private', 'A function that belongs to a derived class', 'None of the above']}
  answer="A function declared outside but has access to private members"
/>
<Question
  question="10).Which member function is called automatically when an object is destroyed?"
  options={['Destructor', 'Constructor', 'Friend function', 'None of the above']}
  answer="Destructor"
/>
