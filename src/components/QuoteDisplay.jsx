import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote } from 'lucide-react';

const QUOTE_POOL = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Innovation distinguishes between a leader and a follower.", author: "Steve Jobs" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
    { text: "Learning never exhausts the mind.", author: "Leonardo da Vinci" },
    { text: "I have not failed. I've just found 10,000 ways that won't work.", author: "Thomas Edison" },
    { text: "Genius is one percent inspiration and ninety-nine percent perspiration.", author: "Thomas Edison" },
    { text: "Technology is best when it brings people together.", author: "Matt Mullenweg" },
    { text: "It's not a faith in technology. It's faith in people.", author: "Steve Jobs" },
    { text: "The advance of technology is based on making it fit in so that you don't really even notice it, so it's part of everyday life.", author: "Bill Gates" },
    { text: "Any sufficiently advanced technology is indistinguishable from magic.", author: "Arthur C. Clarke" },
    { text: "Talk is cheap. Show me the code.", author: "Linus Torvalds" },
    { text: "Programs must be written for people to read, and only incidentally for machines to execute.", author: "Harold Abelson" },
    { text: "Truth can only be found in one place: the code.", author: "Robert C. Martin" },
    { text: "First, solve the problem. Then, write the code.", author: "John Johnson" },
    { text: "Code is like humor. When you have to explain it, it’s bad.", author: "Cory House" },
    { text: "Fix the cause, not the symptom.", author: "Steve Maguire" },
    { text: "Optimism is an occupational hazard of programming: feedback is the treatment.", author: "Kent Beck" },
    { text: "Knowledge is power.", author: "Francis Bacon" },
    { text: "I think, therefore I am.", author: "René Descartes" },
    { text: "To be, or not to be, that is the question.", author: "William Shakespeare" },
    { text: "All the world's a stage, and all the men and women merely players.", author: "William Shakespeare" },
    { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
    { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
    { text: "Imagination is more important than knowledge.", author: "Albert Einstein" },
    { text: "Life is like riding a bicycle. To keep your balance, you must keep moving.", author: "Albert Einstein" },
    { text: "God does not play dice with the universe.", author: "Albert Einstein" },
    { text: "Science without religion is lame, religion without science is blind.", author: "Albert Einstein" },
    { text: "The measure of intelligence is the ability to change.", author: "Albert Einstein" },
    { text: "Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.", author: "Bil Keane" },
    { text: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.", author: "Buddha" },
    { text: "The mind is everything. What you think you become.", author: "Buddha" },
    { text: "Peace comes from within. Do not seek it without.", author: "Buddha" },
    { text: "He who has a why to live can bear almost any how.", author: "Friedrich Nietzsche" },
    { text: "That which does not kill us makes us stronger.", author: "Friedrich Nietzsche" },
    { text: "Without music, life would be a mistake.", author: "Friedrich Nietzsche" },
    { text: "I assume that is the only reason we are here: to learn.", author: "Carlo Rovelli" },
    { text: "Everything flows.", author: "Heraclitus" },
    { text: "No man ever steps in the same river twice.", author: "Heraclitus" },
    { text: "Know thyself.", author: "Socrates" },
    { text: "The unexamined life is not worth living.", author: "Socrates" },
    { text: "Education is the kindling of a flame, not the filling of a vessel.", author: "Socrates" },
    { text: "Wise men speak because they have something to say; fools because they have to say something.", author: "Plato" },
    { text: "Courage is knowing what not to fear.", author: "Plato" },
    { text: "At the touch of love everyone becomes a poet.", author: "Plato" }
];

export const QuoteDisplay = () => {
    const [quote, setQuote] = useState(null);

    useEffect(() => {
        // Load seen quotes from local storage
        const seenQuotes = JSON.parse(localStorage.getItem('seenQuotes') || '[]');

        // Filter out seen quotes
        let availableQuotes = QUOTE_POOL.filter((_, index) => !seenQuotes.includes(index));

        // Reset if all quotes have been seen
        if (availableQuotes.length === 0) {
            availableQuotes = QUOTE_POOL;
            localStorage.setItem('seenQuotes', JSON.stringify([]));
        }

        // Pick a random quote
        const randomIndex = Math.floor(Math.random() * availableQuotes.length);
        const selectedQuote = availableQuotes[randomIndex];

        // Find original index to mark as seen
        const originalIndex = QUOTE_POOL.indexOf(selectedQuote);

        // Update seen quotes in local storage
        if (availableQuotes.length !== QUOTE_POOL.length) { // Verify we aren't in the reset case effectively
            const newSeenQuotes = [...seenQuotes, originalIndex];
            localStorage.setItem('seenQuotes', JSON.stringify(newSeenQuotes));
        } else {
            // In reset case, just start fresh with this one
            localStorage.setItem('seenQuotes', JSON.stringify([originalIndex]));
        }

        setQuote(selectedQuote);
    }, []);

    if (!quote) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center max-w-2xl mx-auto my-8 p-6 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-center"
        >
            <Quote size={24} className="text-cyan-600 dark:text-cyan-400 mb-4 opacity-50" />
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-light italic mb-4">"{quote.text}"</p>
            <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent mb-2" />
            <p className="text-sm text-cyan-600 dark:text-cyan-400 font-mono tracking-wider">— {quote.author}</p>
        </motion.div>
    );
};
