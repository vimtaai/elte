# Steps

1. Create the **static** user interface (elements that don't change)
2. Create an element that will contain the **dinamic** user interface (JavaScript will generate elements here)
3. Describe the **state** of the application (data representation, global variables)
   *What is minesweeper?*
   - A *matrix* of *field*s
   - A *field*:
     - is it a mine or not
     - how many mines are around it
     - is it revealed or not
     - does it have a flag
4. Create **classes** for state representation
5. Create **functions** for changing the state (e.g. initialization)
6. Create **rendering** functions for the state