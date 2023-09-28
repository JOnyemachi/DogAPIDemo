//Source: https://blog.rosettastone.com/french-words/

/* MARK
10 Phrase: 
Format: Phrase // Meaning // Type
Bonjour // Hello // Greeting
Comment allez-vous ?	// How are you // Greeting
 Au revoir // goodbye // Goodbye
 Merci et bonne journée/soiree // Thank you, have a good day/night // Goodbye
 Excusez-moi, je n’ai pas compris // Excuse me, i did not understand // Clarification
 Pouvez-vous répéter s’il vous plaît ?	// Can you repeat please? // Clarification
 Comment tu t’appelles ? 	// What is your name // Asking
 Qu’est-ce que vous faites dans la vie ?	// What do you do for a living? // Asking
 Vous aimez…. ? / Tu aimes….. ? // Do you like // Conversation
 Qu’est-ce qu’il fait chaud / froid aujourd’hui !  // Its so hot/cold // Conversation
*/

import './App.css'
import Card from './components/Card'
import { useState } from 'react'


const App = () => {
  //ADD DATA HERE. Need to be able to access it throughout your app, NOT just in card. 
  /*const data = {
    'Hello':'Bonjour', 
    'How are you':'Comment allez-vous?', 
    'Goodbye':'Au revoir',
    'Have a good day/night':'Bonne journée/soiree',
    'Excuse me, I dont understand':'Excusez-moi, je n’ai pas compris',
    'Can you repeat, please?':'Pouvez-vous répéter s’il vous plaît ?',
    'What is your name':'Comment tu t’appelles ?',
    'What do you do for a living/work':'Qu’est-ce que vous faites dans la vie ?', 
    'Do you like [...]':'Vous aimez…. ? / Tu aimes….. ?', 
    'Its so hot/cold': 'Qu’est-ce qu’il fait chaud / froid aujourd’hui !'
  }*/

  const data =  [
    {
    frontText: "hello", 
    backText: "bonjour"
    }, 
    {
      frontText: "How are you", 
      backText: "Comment allez vous"
    }, 
    {
      frontText: "Goodbye", 
      backText: "Au revoir"
    },
    {
      frontText: "Have a good day/night", 
      backText: "Bonne journée/soiree"
    },
    {
      frontText: "Excuse me, I dont understand", 
      backText: "Excusez-moi, je n’ai pas compris"
    },
    {
      frontText: "Can you repeat, please?", 
      backText: "Pouvez-vous répéter s’il vous plaît?"
    },
    {
      frontText: "What is your name?", 
      backText: "Comment tu t’appelles?"
    },
    {
      frontText: "What do you do for a living/what do you do for work?", 
      backText: "Qu’est-ce que vous faites dans la vie ?"
    },
    {
      frontText: "Do you like [...]?", 
      backText: "Vous aimez…. ? / Tu aimes….. ?"
    },
    {
      frontText: "Its so hot/cold!", 
      backText: "Qu’est-ce qu’il fait chaud / froid aujourd’hui!"
    },
]


  //make an array of objects to hold data.
  const [count, setCount] = useState(0) // usestate to change states. need to iterate through this count. 
  //to do this, will have to change this setCount to iterate through cards
  //only want text on card when it finishes. 


  //next button
  const nextClick = () => {
    setCount(count + 1);
  }

  //previous button
  const prevClick = () => {
    setCount(count - 1);
  }

  return (
      <div className="App">
        <h1>Phrases in Français	</h1>
        <h2> Basic common French phrases, made fun!</h2>
        <h3> Number of cards: 10</h3>

        <Card frontText={data[count].frontText} backText = {data[count].backText}/>
        <button onClick = {prevClick} className= "prevBtn"> Previous</button>
        <button onClick = {nextClick} className= "nextBtn"> Next</button>
    </div>
  )
}

export default App;

