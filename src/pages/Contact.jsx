import React from 'react';

export const Contact = () => {
    return (
        <div className="p-8 font-mono text-base text-fg-primary">
            <div className="mb-4 text-syntax-comment">#!/bin/bash</div>
            <div className="mb-8 text-syntax-comment"># Printing contact information</div>

            <div className="mb-4">
                <span className="text-syntax-pink">echo</span> <span className="text-syntax-yellow">"📧 Email: amalmadhu04022001@gmail.com"</span>
            </div>

            <div className="mb-4">
                <span className="text-syntax-pink">echo</span> <span className="text-syntax-yellow">"📱 Phone: +91-8921470483"</span>
            </div>

            <div className="mb-4">
                <span className="text-syntax-pink">echo</span> <span className="text-syntax-yellow">"🐙 GitHub: AbyssDrn"</span>
            </div>

            <div className="mb-4">
                <span className="text-syntax-pink">echo</span> <span className="text-syntax-yellow">"📍 Location: Thiruvananthapuram, India"</span>
            </div>

            <div className="mt-8">
                <span className="text-syntax-comment"># Send a message directly?</span><br />
                <span className="text-syntax-purple">read</span> -p <span className="text-syntax-yellow">"Enter your message: "</span> message<br />
                <span className="text-white animate-pulse">_</span>
            </div>
        </div>
    );
};
