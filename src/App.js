import "./styles.css";

var HeadingText = "Inside Out";
var color = "blue";
var countLike = 0;
export default function App() {
  function likeClickHandler() {
    countLike = countLike + 1;
    console.log("Liked it");
    console.log("people liked it " + countLike + "times");
  }
  return (
    <div className="App">
      <h1 style={{ backgroundColor: color }}>{HeadingText}</h1>
      <button onClick={likeClickHandler}> Like me</button>
    </div>
  );
}
