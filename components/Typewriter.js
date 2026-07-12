"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ text }) {
  const [display, setDisplay] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    var fullText = text.toUpperCase();
    var index = 0;

    var timer = setInterval(function () {
      index += 1;
      setDisplay(fullText.slice(0, index));
      if (index >= fullText.length) {
        clearInterval(timer);
        setDone(true);
      }
    }, 90);

    return function () {
      clearInterval(timer);
    };
  }, [text]);

  return (
    <>
      {display}
      <span className={"type-cursor" + (done ? " type-cursor-blink" : "")} />
    </>
  );
}
