"use client";

import { useEffect, useState } from "react";

export default function TypeAnimation({ texts, className }) {
  const [wordNum, setWordNum] = useState(0);
  const [letterNum, setLetterNum] = useState(0);
  const [isAdd, setIsAdd] = useState(true);

  useEffect(() => {
    if (wordNum == texts.length) {
      setWordNum(0);
    }
  }, [wordNum]);

  useEffect(() => {
    let intervalId;
    if (isAdd) {
      intervalId = setInterval(() => {
        setLetterNum((prev) => prev + 1);
      }, 220);
    } else {
      intervalId = setInterval(() => {
        setLetterNum((prev) => prev - 1);
      }, 120);
    }

    if (isAdd && letterNum == 0) {
      if (texts[wordNum + 1]) {
        setWordNum((prev) => prev + 1);
      } else {
        setWordNum(0);
      }
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [isAdd]);

  useEffect(() => {
    if (typeof texts[wordNum] != "undefined") {
      if (letterNum == 0) {
        setIsAdd(true);
      } else if (letterNum == texts[wordNum].length) {
        setTimeout(() => {
          setIsAdd(false);
        }, 500);
      }
    }
  }, [letterNum]);

  return (
    <span className={className}>
      <span>{wordNum != texts.length && texts[wordNum].substring(0, letterNum)}</span>
      <span className="mr-0.5">|</span>
    </span>
  );
}
