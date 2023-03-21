//Count vowels in a string: Write a function that takes a string as input and returns the number of vowels in the string.
console.log("started")

const countVowels = (word) => {
    let lowerWord = word.toLowerCase();
    let wordArr = lowerWord.split("");

    let vowelArr = wordArr.filter((char)=>{
        return(
            char === 'a' || char === 'e'|| char === 'i'|| char === 'o'|| char === 'u'
        )
    })

    return vowelArr.length;
}
let noOfVowel = countVowels("AEIOU")
console.log("Number of Vowel in sting: " + noOfVowel)


// Find the largest number in an array: Write a function that takes an array of numbers as input and returns the largest number in the array.

const findLargestNumber = (arr) => {
    let descendingArr = arr.sort((a,b)=>{
        return b-a;
    })

    return descendingArr[0];
}
let largestNumber = findLargestNumber([5,6,200,511,42]);

console.log("Largest number in arry: " + largestNumber);


// Longest word: Write a function that takes a string as input and returns the longest word in the string.

const longestWord = (str) => {
    let strArr = str.split(" ");

    let wordLength = strArr.map((word)=>{
        return word.length;
    })

    let indx = wordLength.indexOf(Math.max(...wordLength));

    return strArr[indx]
}

console.log(longestWord("i got the biggest work hurrrayyya"))

// Remove duplicates from an array: Write a function that takes an array as input and returns a new array with all the duplicates removed.

const uniqueArr = (arr) => {
    let unArr = [...new Set(arr)];

    return unArr
}

console.log(uniqueArr([5,5,6,6,7,7,8]))

//

class bankAccount{
    constructor(acNumber, userName, balance){
        this.acNumber = acNumber;
        this.userName = userName;
        this.balance = balance;
    }

    deposit(amount){
        this.balance = this.balance + amount;
    }

    withdrawl(amount){
        this.balance = this.balance - amount;
    }
}

const inder = new bankAccount(11001, "Inder", 0);

inder.deposit(15000);
inder.withdrawl(5000);

const ekum = new bankAccount(11002, "Ekum", 5000);

ekum.deposit(100000);

