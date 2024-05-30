import React from "react";
import "./styles.css";

export default function App() {
  function handlePet() {
    console.log("Thanks petting me!");
  }

  return (
    <div>
      <Pet
        sound="Miau"
        animal="cat"
        emoji="🐈"
        age={15}
        onPet={handlePet}
        isHungry
      />
      <Pet sound="Wuff" animal="dog" emoji="🐶" age={5} onPet={handlePet} />
      <Pet
        sound="Piep"
        animal="mouse"
        emoji="🐭"
        age={2}
        onPet={handlePet}
        isHungry
      />
    </div>
  );
}

function Pet({ sound, animal, emoji, age, onPet, isHungry }) {
  return (
    <button onClick={onPet}>
      {isHungry ? "Feed me!" : sound} <span aria-label={animal}>{emoji}</span>{" "}
      Age: {age}
    </button>
  );
}

/* 
Die gleiche Komponente ohne Destructuring:

function Pet(props) {
  return (
    <div>
      {props.sound}
      <span aria-label={props.animal}>{props.emoji}</span> Age:
      {props.age}
    </div>
  );
} 

Wiederholung Object Destructuring (Modern Syntax):

const {sound, animal, emoji, age } = props;

-> Die Destrukturierung kann direkt in den runden Klammern stattfinden (ausschließlich die Methode verwenden wir im Bootcamp):
*/
