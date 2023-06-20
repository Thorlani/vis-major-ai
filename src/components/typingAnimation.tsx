import { useState, useEffect } from "react";

interface TypingIprops {
  text: string;
  typingDelay: number;
}

const TypingAnimation = ({ text, typingDelay }: TypingIprops) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let timeoutId: any;

    const animateTyping = () => {
      timeoutId = setTimeout(() => {
        setDisplayedText(
          (prevText) => prevText + text.charAt(displayedText.length)
        );
      }, typingDelay);
    };

    const handleAnimation = () => {
      if (displayedText === text) {
        clearTimeout(timeoutId);
      } else {
        animateTyping();
      }
    };

    handleAnimation();

    return () => {
      clearTimeout(timeoutId);
    };
  }, [displayedText, text, typingDelay]);

  return <p>{displayedText}</p>;
};

export default TypingAnimation;
