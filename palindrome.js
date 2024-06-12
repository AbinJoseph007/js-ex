// w.a.p to check the given string is palindrome or not


let Palindrome = (string) => {
    let isPalindrome = string === string.split("").reverse().join("");

    if (isPalindrome) {
        console.log("The given string is a palindrome");
    } else {
        console.log("The given string is not a palindrome");
    }
    return isPalindrome
};

console.log(Palindrome("abin"));