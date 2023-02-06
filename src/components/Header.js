import "../styles.css";
import { useState, useRef } from "react";

export default function Header() {
  let count = useRef(0);
  const circle = <div className="circle" key={count.current}></div>;
  function handleClick() {
    count.current += 1;
    let circle = <div className="circle" key={count.current}></div>;
    setCircles([...circles, circle]);
  }

  const [circles, setCircles] = useState([circle]);
  return (
    <header>
      <div className="intro">Hi.</div>
      <div className="circles">{circles}</div>
      <div className="intro">
        I'm{" "}
        <span className="hover-animation" onClick={handleClick}>
          Thienan.
        </span>
        <p className="small-text">(Click my name for something cool)</p>
      </div>
    </header>
  );
}
