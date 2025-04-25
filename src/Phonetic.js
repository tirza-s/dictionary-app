import React, { useEffect } from "react";

export default function Phonetic({ phonetic, word }) {
    useEffect(() => {
        window.SpeechSynthesis.onvoicechanged = () => {
            speechSynthesis.getVoices();
        };
    }, [])

    function speak(text) {
        const utterance = new SpeechSynthesisUtterance(text);
        const voices = speechSynthesis.getVoices();

        const betterVoice = voices.find(
            (voice) => voice.lang === "en-US" && voice.name.includes("Samantha")
        ) || voices.find((voice) => voice.lang === "en-US");

        if (betterVoice) {
            utterance.voice = betterVoice;
        }

        utterance.pitch = 1.2;
        utterance.rate = 0.9;

        speechSynthesis.speak(utterance);
    }

    return (
        <div className="Phonetic">
            <p className="phonetic">/{phonetic}/</p>
            <button onClick={() => speak(word)} className="phonetic"> 🔊</button>
        </div>
    )
}