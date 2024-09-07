import React, { useState, useEffect } from 'react';

const TypingEffect = ({text}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [removing, setRemoving] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (removing) {
                if (index > 0) {
                    setDisplayedText(displayedText.slice(0, -1));
                    setIndex(index - 1);
                } else {
                    setRemoving(false);
                }
            } else {
                if (index < text.length) {
                    setDisplayedText(displayedText + text.charAt(index));
                    setIndex(index + 1);
                } else {
                    setRemoving(true);
                }
            }
        }, 100); // Adjust typing speed here

        return () => clearTimeout(timer);
    }, [displayedText, index, removing]);

    return (
        <div>
            {displayedText}
            <span className="blinking-cursor">|</span>
        </div>
    );
}

export default TypingEffect;