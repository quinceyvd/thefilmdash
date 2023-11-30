export function randomJobDone() {
    const references = [
        "That's a wrap, folks.",
        "Mission: Accomplished.",
        "Fade to black, end credits roll.",
        "Beam me up!",
        "Fin.",
        "The story concludes.",
        "So it's a job well done.",
        "The final act.",
        "Artistry achieved.",
        "A masterpiece in motion.",
        "Absolute. Cinema.",
        "ABSOLUTE. CINEMA.",
        "This is cinema.",
        "THIS IS CINEMA.",
        "To me, that's cinema.",
        "Show me the money!",
        "You had my curiousity, but now you have my attention.",
        "Say hello to my little friend!",
        "I feel the need... The need for speed.",
        "Here's Johnny!",
        "Hasta la vista, baby.",
        "To infinity and beyond!",
    ]
    // Select random reference
    const randomReference = references[Math.floor(Math.random() * references.length)];
    return randomReference;
}