NEED TO:

<!-- A. DISPLAY CURRENT DAY AS MAIN TITLE
    - Title content already exist, need to change the title content with updating moment.js tools -->

<!-- B. CREATE TIMEBLOCKS FOR 9-5 WORK DAY
    - Create grid layout with bootstrap for every hour that exists in the work day -->

<!-- C. COLOR TIMEBLOCKS FOR PAST PRESENT AND FUTURE
    - Exist in base CSS? -->

D. WHEN CLICKING ON A TIME BLOCK, CAN ENTER AN EVENT
    - Need to make it so you cannot add to a time that has passsed?
    - Use inputs for user input

E. SAVE BUTTON THAT STORES THE USER INPUT EVENT TO THE LOCAL STORAGE
    - Events must be static on refresh



Keep inputs static on page? not the "" function?


need inputs to be static
need to save inputs to local data
prevent default on forms
forms on every input? lables?

add buttons


array of usertasks
object per hour
let usertasks = [{9amTask},{10amTask}]

on save button, run a function that for loops every object in user tasks and saves its todo key value to local storage and prints it at each places inner text

- move the id TIME tag to the input tag in each?
- class of userTodo on every input
- for loop (on save?) for every userTodo value to be push and update it to the array of objects userTodoInput key:?

need to make it so that values arent always being pushed on but rather updated

usertasks[i].push(userTodo.value)
<!-- stringify this? -->

0
let 9amTask = { 
    time: 9am
    userTodoInput: userinput
}


1
let 10amTask = { 
    time: 10am
    todo: userinput
} 

if condtion for if entry is empty print " "