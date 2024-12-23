import { Question } from '../../Question';

# Smart Pointers

<Question
  question="1).What is a smart pointer in C++?"
  options={['A pointer that manages dynamic memory', 'A pointer that always points to a valid memory', 'A pointer that can be dereferenced', 'None of the above']}
  answer="A pointer that manages dynamic memory"
/>
<Question
  question="2).Which type of smart pointer automatically deallocates memory when it goes out of scope?"
  options={['std::unique_ptr', 'std::shared_ptr', 'std::weak_ptr', 'None of the above']}
  answer="std::unique_ptr"
/>
<Question
  question="3).What is the purpose of `std::shared_ptr`?"
  options={['To manage shared ownership of a dynamically allocated object', 'To avoid memory leaks', 'To allocate memory for variables', 'None of the above']}
  answer="To manage shared ownership of a dynamically allocated object"
/>
<Question
  question="4).Which of the following smart pointers allows multiple pointers to share ownership of the same object?"
  options={['std::unique_ptr', 'std::shared_ptr', 'std::weak_ptr', 'None of the above']}
  answer="std::shared_ptr"
/>
<Question
  question="5).What is the purpose of `std::weak_ptr`?"
  options={['To observe an object without affecting its reference count', 'To provide exclusive ownership', 'To manage multiple references', 'None of the above']}
  answer="To observe an object without affecting its reference count"
/>
<Question
  question="6).How does `std::unique_ptr` ensure there is only one owner of the object?"
  options={['By deleting the object when it goes out of scope', 'By preventing copying of the pointer', 'By allowing shared ownership', 'None of the above']}
  answer="By preventing copying of the pointer"
/>
<Question
  question="7).What happens if a `std::shared_ptr` is copied?"
  options={['It creates a new pointer pointing to the same object', 'It deletes the object', 'It throws an exception', 'None of the above']}
  answer="It creates a new pointer pointing to the same object"
/>
<Question
  question="8).Which of the following is true about `std::weak_ptr`?"
  options={['It does not contribute to reference counting', 'It manages the memory of the object', 'It is used for unique ownership', 'None of the above']}
  answer="It does not contribute to reference counting"
/>
<Question
  question="9).Can you assign a `std::unique_ptr` to a `std::shared_ptr`?"
  options={['Yes', 'No', 'It depends on the compiler', 'None of the above']}
  answer="No"
/>
<Question
  question="10).Which of the following smart pointers should be used when you want shared ownership and the possibility of multiple owners?"
  options={['std::unique_ptr', 'std::shared_ptr', 'std::weak_ptr', 'None of the above']}
  answer="std::shared_ptr"
/>
