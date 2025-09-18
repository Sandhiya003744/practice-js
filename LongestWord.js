const line = (string) => {
     longestWord="";
     word = string.split(" ");
    for (i=0; i< word.length; i++)
    {
        if (word[i].length > longestWord.length ) {
            longestWord= word [i];
        }
    }
    return longestWord;
}
console.log(line("code to find longest word in the sentence"));