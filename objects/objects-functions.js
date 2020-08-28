let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

let otherBook = {
    title: 'A People History',
    author: 'Howard Zinn',
    pageCount: 723
}

let getSummary = function (book) {
    return `${book.title} is written by ${book.author} and contains ${book.pageCount} pages`
}

console.log(getSummary(myBook))
console.log(getSummary(otherBook))

let convert = function (fahrenheit) {
    let celcius = (fahrenheit - 32) * (5 / 9);
    let kelvin = celcius + 273.15;
    return {
        Fahrenheit: `${fahrenheit}F`,
        Celcius: `${celcius}C`,
        Kelvin:`${kelvin}K`
    }
}

console.log(convert(32).Fahrenheit)
console.log(convert(32).Celcius)
console.log(convert(32).Kelvin)