let stack = [3, 65, 43, 67, 29];

function push(x){
    stack.unshift(x);
}

function clear(){
    let i = stack.length;
    stack.splice(0, i)
}

function count(){
    let i = stack.length;
    console.log(i)
}

function peek(){
    console.log(stack[0])
}

function pop(){
    console.log(stack[0]);
    stack.splice(0, 1);
}

function toString(){
    console.log(stack)
}



 push(45);
// clear();
// count();
// peek();
// pop();
// toString();
