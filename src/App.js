import "./App.css";
import { useState } from "react";
import CardFront from "../src/components/CardFront";
import CardBack from "./components/CardBack";

function App() {
  const [showCard, setShowCard] = useState(<CardFront />);
  const [text, setText] = useState("Show Card Back");

  const handleClick = () => {
    if (showCard.type === CardFront) {
      setShowCard(<CardBack />);
      setText("Show Card Front");
    } else {
      setShowCard(<CardFront />);
      setText("Show Card Back");
    }
  };

  return (
    <div className="App">
      {showCard}
      <button
        onClick={handleClick}
        className="mx-[700px] my-10 px-2 py-2 rounded-xl bg-[#00a99d] text-white hover:bg-[#FBB089]"
      >
        {text}
      </button>
    </div>
  );
}

export default App;
