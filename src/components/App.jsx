import React, {useState} from "react";

import Note from "./Note";
import Keyboard from "./Keyboard";
import Word from "./Word";
import Header from "./Header";

function App() {

    const [currentGuess, setCurrentGuess] = useState("");
    const [attempts, setAttempts] = useState([]);
    const answer = "apple";

    const updateGuess = (guess) =>{
        setCurrentGuess(guess);
        console.log(guess);
    }

    const submitGuess = () =>{
        let colors = ["#fff", "#fff","#fff",'#fff','#fff'];
        let numCorrect = 0;
        for(let i = 0; i < currentGuess.length; i++) {
            if(answer[i].toUpperCase()==currentGuess[i].toUpperCase()) {
            colors[i]="green";
            numCorrect++;
            }
            else if(answer.includes(currentGuess[i].toLowerCase())) {
                colors[i]="yellow";
            }
            else {
                colors[i]="red";
            }
        }

        if(numCorrect==5) {
            alert("You won!")
        }

        setAttempts([...attempts, {colors:colors, letters:currentGuess}]);
        setCurrentGuess("");
        console.log("submitting");
    }

    return (
        <div style={{display:"flex", justifyContent:"center"}}>
        <div style={{maxWidth:"800px", width:"100%"}}>
            <Header />
            <Word attempts={attempts} guess={currentGuess}/>
            <Keyboard setGuess={updateGuess} submitGuess={submitGuess} guess={currentGuess}/>
        </div>
        </div>
    );
}

export default App;