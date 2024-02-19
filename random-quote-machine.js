
const quotes = [ 
   {
     id: 1,
     author: "Ellen Ullman",
     content: "Programming is the art of algorithm design and the craft of debugging errant code.",
   },
   {
     id: 2,
     author: "Oscar Wilde",
     content: "Experience is the name everyone gives to their mistakes.",
   },
   {
     id: 3,
     author: "Yegor Bugayenk",
     content: "Quality is a product of a conflict between programmers and testers.",
   },
   {
     id: 4,
     author: "John Romero",
     content: "You might not think that programmers are artists, but programming is an extremely creative profession. It’s logic-based creativity.",
   },
   {
     id: 5,
     author: "Brian Kernighan",
     content: "Programming is learned by writing programs.",
   },
   {
     id: 6,
     author: "Khayri R.R. Woulfe",
     content: "If, at first, you do not succeed, call it version 1.0.",
   },
   {
     id: 7,
     author: "Alan J. Perlis",
     content: "A language that doesn't affect the way you think about programming is not worth knowing.",
   },
   {
     id: 7,
     author: " Linus Torvalds",
     content: "Bad programmers worry about the code. Good programmers worry about data structures and their relationships",
   },
   {
     id: 8,
     author: "Ken Thompson",
     content: "One of my most productive days was throwing away 1000 lines of code.",
   },
   {
     id: 9,
     author: " Donald Knuth",
     content: "Everyday life is like programming, I guess. If you love something, you can put beauty into it",
   },
   {
     id: 10,
     author: "Doug Linder",
     content: "A good programmer is someone who always looks both ways before crossing a one-way street.",
   },
   {
     id: 11,
     author: "Kent Beck",
     content: "Make it work, make it right, make it fast",
   },
   {
     id: 12,
     author: " Mark Zuckerberg",
     content: "People don’t care about what you say, they care about what you build",
   },
 ];
 console.log(`length: ${quotes.length}`);
 console.log(
   "Math.floor(Math.random()*quotes.length)::",
   Math.floor(Math.random() * quotes.length)
 );
 
 const setQuote = ()=>{
    let text=document.getElementById("text")
    let author=document.getElementById("author")
    let rand=Math.floor(Math.random() * quotes.length)
    console.log('rand::',rand)
    text.innerHTML=quotes[rand]['content']
    author.innerHTML=quotes[rand]['author']
 }
 //default
 setQuote()
 
 const nextQuoteFunc = ()=>{
    setQuote()
 }
 