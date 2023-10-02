import React, { useState } from "react"
import './Card.css'


const Card = (props) => {
    //TODOs:
    //think about what i want user to initally see first i.e: useEffect
    //create event handler for when car is clicked
    // define handleclick. its not being used anywhere
    //need a useState to check if card is flipped
    /*
    const [isFlipped, setIsFlipped] = useState(false);
    const flipCard = () => {

        if(isFlipped) {
            //if it's not flipped, on click, flip
            const flip = () => {setIsFlipped(isFlipped)}
            isFlipped ? setIsFlipped(true): setIsFlipped(false)
        }
        else{
            //if it's flipped, click to unflip
        }
    }
    */

    const [flip, setFlip] = useState(false);

  
    
    return(
     <div className = {`flashcard ${flip ? "flip" : ""}`}>
            <div className="flashcard-front" onClick = {() => setFlip(!flip)} > 
                    <div className = "flashcard-inner">
                        <p>{props.frontText}</p>
                    </div>
            </div>
            <div className = "flashcard-back" onClick = {() => setFlip(!flip)}>
                <console className="log"> The flip is working</console>
                <p>{props.backText}</p>
            </div>
     </div>

    )
}

export default Card;
