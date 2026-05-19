// prime no logic
// console.log("hello java script")



// for(var i=0; i<5; i++){
//     console.log(i)
// }


// var n = 111;
// var c = 0;
// for (var i = 2; i <= Math.sqrt(n); i++) {
//     if (n % i === 0) {
//         c += 1;
//     }
// }
// if (c == 0 & n>1) {
//     console.log(n + " is a prime number");
// } else {
//     console.log(n + " is not a prime number");
// }

// 1-method
// var s = "11";

// if (s.split("").reverse().join("") === s) {
//     console.log(s + " is a palindrome");
// } else {
//     console.log(s + " is not a palindrome");
// }

// 2-method
var num=12
function ispalindrome(num){
    var temp=num;
    var rev=0;
    while (temp>0){
        r=temp%10;
        rev=rev*10+r;
        temp=Math.floor(temp/10)
    }
    if (num===rev){
        return true;
    }
    else{
        return false;
    }

}
if (ispalindrome(num)){
    console.log(num+" is a palindrome")
}
else{
    console.log(num+" is not a palindrome")
}
