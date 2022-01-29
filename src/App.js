import React, { useState } from "react";
import "./styles.css";

var HeadingText = "Inside Out";
var color = "blue";
const emojiDirectory = {
  "😀":
    "Grinning Face ->A yellow face with simple, open eyes and a broad, open smile, showing upper teeth and tongue on some platforms. Often conveys general pleasure and good cheer or humor.",
  "😨": "Fearful Face ->Showing that someone is in fear",
  "🍈":
    "Melon ->A melon fruit in a light greenish-brown rind. Depicted as a cantaloupe by most platforms, but can resemble a honeydew at a distance",
  "🦄":
    "Unicorn ->The face of a unicorn, a mythical creature in the form of a white horse with a single, long horn on its forehead",
  "🥵":
    "Hot Face ->A reddish-orange face with furrowed eyebrows, tongue stuck out, and beads of sweat, as if overheated from high temperatures"
};
var emojiweknow = Object.keys(emojiDirectory);

export default function App() {
  const [meaning, setmeaning] = useState("");
  function onChangeHandler(event) {
    var new_userInput = event.target.value;
    var meaning = emojiDirectory[new_userInput];
    setuserInput(new_userInput);
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDirectory[emoji];
    if (meaning === undefined) {
      meaning = "We don't have this in our database";
    }
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{HeadingText}</h1>
      <input onChange={onChangeHandler}></input>
      <h6>{meaning}</h6>

      <h3>Emoji we know</h3>
      {emojiweknow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5 rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
