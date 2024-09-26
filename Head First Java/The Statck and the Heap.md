## Java Stack and The Heap

---

### Why learn stack/heap thing?

> Knowing the fundamentals of the Java Stack and Heap is crucial if you want to understand variable scope, object creation issues, memory management, threads, and exception handling.

### Location

- objets live in the heap—对象在堆中

- method invocations and local variables live in the statck—方法调用和局部变量在栈中

### Variables Type

#### 定义

- **Instance variables are declared inside a class but not inside a method—实例对象跟随类的存在而存在**
  
  > They represent the “fields” that each individual object has (which can be filled with different values for each instance of the class). Instance variables live inside the object they belong to.

- **Local variables are declared inside a method, including method parameters—局部变量（包括方法参数）跟随方法的存在而存在**
  
  > They’re temporary and live only as long as the method is on the stack (in other words, as long as the method has not reached the closing curly brace).

### Method are stacked-方法在栈中是堆叠的

> 如果方法 foo ( ) 调用方法 bar ( ) ，则方法 bar ( ) 堆叠在方法 foo ( )  的顶部

**堆栈顶部的方法始终是当前正在执行的方法**

**The method on the top of the stack is always the currently executing method**

### Special List

1. 如果局部变量是对象的引用呢？
   
   > ***If the local variable is a reference to an object, only the variable (the reference/remote control) goes on the stack.***
   > 
   > 局部变量是对象的引用，那么只有变量（引用或远程控制）进入栈中

2. 所有对象都位于堆中，无论引用是局部变量还是实例变量
   
   > All objects live in the heap, regardless of whether the reference is a local or instance variable.


