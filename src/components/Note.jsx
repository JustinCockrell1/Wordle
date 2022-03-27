import React, {useState} from "react";


function Note() {

    const [pos, setPos] = useState({x:0,y:0});

    const handleClick = ()=>{
        setPos((prevValue)=>{
            return {...prevValue, y:prevValue.y+5};

        });
    }

    return (
        <div style={{position:"fixed", left:pos.x, top:pos.y}} onClick={handleClick}>
        <h1 style={{margin:0, padding:0}}>Hello</h1>
        </div>
    );
}

export default Note;