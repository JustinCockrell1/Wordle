import React from "react";

function Word(props) {

    return (
        <>

        {props.attempts.map((word, ind)=>{
            return (
                <div style={styles.container} key={ind}>
            <div style={{...styles.letter, backgroundColor:word.colors[0]}}>{word.letters[0]}</div>
            <div style={{...styles.letter, backgroundColor:word.colors[1]}}>{word.letters[1]}</div>
            <div style={{...styles.letter, backgroundColor:word.colors[2]}}>{word.letters[2]}</div>
            <div style={{...styles.letter, backgroundColor:word.colors[3]}}>{word.letters[3]}</div>
            <div style={{...styles.letter, backgroundColor:word.colors[4]}}>{word.letters[4]}</div>
        </div>
            );
        })}

  
        <div style={styles.container}>
        <div style={styles.letter}>{props.guess[0]}</div>
            <div style={styles.letter}>{props.guess[1]}</div>
            <div style={styles.letter}>{props.guess[2]}</div>
            <div style={styles.letter}>{props.guess[3]}</div>
            <div style={styles.letter}>{props.guess[4]}</div>
        </div>
  
        </>
    );

}

const styles = {
    letter:{width:"50px", height:"50px", backgroundColor:"white", border:"1px solid grey", margin:"2px", display:"flex", justifyContent:"center", alignItems:"center"},
    container:{display:"flex", justifyContent:"center"}
}

export default Word;