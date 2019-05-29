// module.exports={
//     greet: (name) => {
//         return `Hello ${name}`
//     }
// }

// module.exports.greet = (name) => {
//     let regex=new RegExp('[A-Z]+')
//     if(name==null){
//         return "Hello, my friend"
//     }
//     else if(typeof name == "string"){
//         if(name.toUpperCase()==name){
//             return `HELLO, ${name}!`
//         }
//         else{
//             return `Hello, ${name}`
//         }
//     }
//     else if (Array.isArray(name)){
//         let counter=0;
//         name.forEach(item => {
//             while(counter=name.length){
//                 if(item.toUpperCase!=item){
//                     break;
//                 }
//                 else{
//                     counter ++;
//                     console.log(counter)
//                 }
//             }
//             return 'CIAO'
//         });
//         return (`Hello, ${name[0]} ${name[1]}`)
//     }
    
// }

// console.log(this.greet(['A','B']))

// ANDREA PACIOLLA 
// isUppercase = string => string.toUpperCase() === string;
// module.exports.greet = (name) => {

//     if(!!name) {
//         // Ohohoh here comes arrays...
//         if(Array.isArray(name)) {
//             if(isUppercase(name[0]) && isUppercase(name[1])) {
//                 return `HELLO, ${name[0]} AND ${name[1]}`;
//             }
//             return `Hello, ${name[0]} and ${name[1]}`;
//         }

//         // Check if the unique name is uppercase and reply shouting
//         if(isUppercase(name))
//             return `HELLO, ${name.toUpperCase()}`;
//         // Well...Hello buddy!
//         return `Hello, ${name}`;
//     }
//     // Damn, I just got a new friend! Hi buddy :)
//     return `Hello, my friend`;
// }




// DI NUOVO IO

module.exports.fizzbuzz = () => {
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
    return results;
}