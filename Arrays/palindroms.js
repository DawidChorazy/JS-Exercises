let checkPalindrom = txt => {
let splittedText = [...txt].reverse().join("");
if(splittedText == txt)
{
  console.log("palindrom");
}
else{
  console.log("not palindrom");
}
console.log(splittedText);
}

checkPalindrom("kajak");