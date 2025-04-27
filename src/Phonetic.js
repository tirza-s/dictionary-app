import React, { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVolumeLow } from '@fortawesome/free-solid-svg-icons';

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

        utterance.pitch = 1.4;
        utterance.rate = 0.8;

        speechSynthesis.speak(utterance);

    }

    return (
        <div className="Phonetic d-flex gap-3 mt-3">
            <button onClick={() => speak(word)} className="btn btn-link ">
                <FontAwesomeIcon icon={faVolumeLow} size="2x" />
            </button>
            <p className="phonetic-text">/{phonetic}/</p>

        </div>
    )
}