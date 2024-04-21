import React from "react";
import { TextRevealCard, TextRevealCardTitle, TextRevealCardDescription } from "./ui/text-reveal-card";

const SamplePage = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <TextRevealCard
        text="Hover to reveal"
        revealText="JEETS ARE ALL GONE!"
        className="cursor-pointer"
      >
        <TextRevealCardTitle>Discover Hidden Truths</TextRevealCardTitle>
        <TextRevealCardDescription>
          Hover over the card to uncover the message hidden behind the initial text. Try it now!
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
};

export default SamplePage;
