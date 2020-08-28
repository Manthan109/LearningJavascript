let name='Manthan Gupta'
console.log(name.length)
console.log(name.toUpperCase())
console.log(name.toLowerCase())

let password='abc123asdpasswordf098'

let isValidPassword=function(pass){
    if(pass.length>8 && !pass.includes('password')){
        return true;
    }
    return false;
}

console.log(isValidPassword(password))