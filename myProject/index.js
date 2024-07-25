let giveMeaJokes=require("give-me-a-joke");
console.log(giveMeaJokes);
giveMeaJokes.getRandomDadJoke((jokes)=>{
      console.log(jokes);
})