const index = require('./index');

// test('Should greet my name', () => {
//   expect(greet.greet('Pacho')).toBe('Hello, Pacho');
// });

// test('Should greet friend if name is null', () => {
//   expect(greet.greet()).toBe('Hello, my friend');
// });

// test('Should shout if you shout', () => {
//   expect(greet.greet('PACHO')).toBe('HELLO, PACHO');
// });

// test('Should greet two names', () => {
//   expect(greet.greet(['pacho', 'pacha'])).toBe('Hello, pacho and pacha');
// });

// test('Should greet two names shouting', () => {
//   expect(greet.greet(['PACHA', 'PACHO'])).toBe('HELLO, PACHA AND PACHO');
// });

const prova= () => {
    const array= new Array(100);
    const results= new Array(100);
    for(let i=0;i<array.length;i++){
        array[i]=i;
    }
    array.forEach((element,index) => {
        if(element%3==0 && element%5==0){
            results[index]='FizzBuzz'
        }
        else{
            if(element%3==0){
                results[index]='Fizz'
             }
             else if(element%5==0){
                 results[index]='Buzz'
             }
             
             else {
                 results[index]=element
             }
        }
        
    })
    return results.toString;
}

test('should be fizzbuzz', () => {
    expect(index.fizzbuzz().toString).toBe(prova());
})