
const word="java script"
const vowelcount = (string) => {
    const vowels = "aeiouAEIOU";
    let count=0;
for(const char of string) {
    if(vowels.includes(char)) {
    count++;
}
}

return count;
}
console.log(vowelcount(word));