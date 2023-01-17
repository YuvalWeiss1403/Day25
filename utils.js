export const greet =(str,isFormal)=>{
    if (isFormal) {
        return `Good evening, ${str}`;
    }else{
        return `Hi, ${str}`;
    }
}

export const calculate =(num1,num2,operation)=>{
    switch(operation) {
        case operation== 'add':
            return num1+num2;
            break;
        case operation== 'subtract':
            return num1-num2;
            break;
        case operation == 'multiply':
            return num1*num2;
            break;
        case operation == 'divide':
            return num1/num2;
            break;
        default:
            return "none"
    }
}

