import React from "react";

function Keyboard(props) {

    

    const row1 = "QWERTYUIOP";
    const row2 = "ASDFGHJKL";
    const row3 = "=ZXCVBNM<";

    const onClick = (e) =>{
        const key = e.target.dataset.key;
        let guess = props.guess;
        if(key=="<") {
            guess = guess.slice(0,-1);
        }
        else if(key=="=") {
            if(guess.length==5) {
              
                props.submitGuess();
                guess="";
            }
        }
        else {
        if(guess.length<5)
        guess+=key;
      
      
    }
    props.setGuess(guess);
    }

    return (
        <div style={styles.keyboard}>
            <div style={styles.row}>
            {row1.split("").map((letter, i)=>{
                return <button onClick={onClick} style={styles.button} data-key={letter} key={i}>{letter}</button>
            })}
            </div>
            <div style={styles.row}>
            {row2.split("").map((letter, i)=>{
                return <button onClick={onClick} style={styles.button} data-key={letter} key={i}>{letter}</button>
            })}
            </div>
            <div style={styles.row}>
            {row3.split("").map((letter, i)=>{
                return <button onClick={onClick} style={styles.button} data-key={letter} key={i}>{letter}</button>
            })}
            </div>
        </div>
    );
}

const styles = {
    row:{width:"100%", display:"flex", justifyContent:"center"},
    button:{width:"50px", height:"60px", margin:"3px", padding:"3px", border:"none", outline:"none", borderRadius:"3px", backgroundColor:"lightgrey", fontSize:"1.4rem", cursor:"pointer"},
    keyboard:{position:"fixed", width:"100%", bottom:0, maxWidth:"800px"}
}

export default Keyboard;