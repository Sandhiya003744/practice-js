const sentence= "hello viewer here is my code"
const capatilize = (word) => {
    console.log ( word.split(" ").map(string => string.charAt(0).toUpperCase() + string.slice(1)) .join(" ") );
}
capatilize(sentence);