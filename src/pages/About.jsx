import React from 'react';

// Reusable span for syntax highlighting
const K = ({ c, children }) => <span className={`text-${c}`}>{children}</span>; // Keyword
const S = ({ children }) => <span className="text-syntax-yellow">{children}</span>; // String
const F = ({ children }) => <span className="text-syntax-green">{children}</span>; // Function/Method
const C = ({ children }) => <span className="text-syntax-cyan">{children}</span>; // Class/Type
const N = ({ children }) => <span className="text-syntax-purple">{children}</span>; // Number/Constant
const CM = ({ children }) => <span className="text-syntax-comment italic">{children}</span>; // Comment

export const About = () => {
    return (
        <div className="p-8 font-mono text-sm md:text-base overflow-x-hidden">
            <div className="max-w-4xl">
                <div className="mb-4">
                    <CM># About Me - Styled as Python 3.10+</CM>
                </div>

                <div>
                    <K c="syntax-pink">class</K> <C>AmalMadhu</C>(<C>Engineer</C>):
                </div>

                <div className="pl-4 md:pl-8 border-l-2 border-white/5 space-y-2">
                    <div>
                        <CM>"""</CM><br />
                        <CM>I am an electronics engineer transitioning from broad ECE fundamentals</CM><br />
                        <CM>to specialized AI-Hardware integration.</CM><br />
                        <CM>"""</CM>
                    </div>

                    <div className="mt-4">
                        <K c="syntax-pink">def</K> <F>__init__</F>(<K c="syntax-orange">self</K>):
                        <div className="pl-4 md:pl-8 border-l-2 border-white/5">
                            <div><K c="syntax-orange">self</K>.name = <S>"Amal Madhu"</S></div>
                            <div><K c="syntax-orange">self</K>.title = <S>"M.Tech VLSI Scholar"</S></div>
                            <div><K c="syntax-orange">self</K>.focus = [<S>"Neuromorphic VLSI"</S>, <S>"Quantum Physics"</S>]</div>
                            <div><K c="syntax-orange">self</K>.location = <S>"Thiruvananthapuram, Kerala, India"</S></div>
                            <div><K c="syntax-orange">self</K>.ethos = <S>"DIY - Break it to build it"</S></div>
                        </div>
                    </div>

                    <div className="mt-4">
                        <K c="syntax-pink">def</K> <F>get_education</F>(<K c="syntax-orange">self</K>) -&gt; <C>list</C>:
                        <div className="pl-4 md:pl-8 border-l-2 border-white/5">
                            <K c="syntax-pink">return</K> [
                            <div className="pl-4 border-l-2 border-white/5">
                                {'{'}
                                <div className="pl-4">
                                    <S>"degree"</S>: <S>"M.Tech in Electronics Engineering (VLSI)"</S>,<br />
                                    <S>"school"</S>: <S>"Digital University Kerala"</S>,<br />
                                    <S>"year"</S>: <S>"2025 - Present"</S>,<br />
                                    <S>"details"</S>: <S>"Mixed-Signal Design, Neuromorphic VLSI"</S>
                                </div>
                                {'}'},
                            </div>
                            <div className="pl-4 border-l-2 border-white/5">
                                {'{'}
                                <div className="pl-4">
                                    <S>"degree"</S>: <S>"B.Tech in Electronics & Communication"</S>,<br />
                                    <S>"school"</S>: <S>"CEM Punnapra"</S>,<br />
                                    <S>"year"</S>: <S>"2020 - 2024"</S>,<br />
                                    <S>"gpa"</S>: <N>6.66</N>
                                </div>
                                {'}'}
                            </div>
                            ]
                        </div>
                    </div>

                    <div className="mt-4">
                        <K c="syntax-pink">def</K> <F>current_status</F>(<K c="syntax-orange">self</K>):
                        <div className="pl-4 md:pl-8 border-l-2 border-white/5">
                            <K c="syntax-pink">return</K> <S>"Early 2nd Semester, Learning Deeply"</S>
                        </div>
                    </div>
                </div>

                <div className="mt-8">
                    <CM># Instantiating the object</CM><br />
                    me = <C>AmalMadhu</C>()<br />
                    <K c="syntax-pink">print</K>(me.<F>current_status</F>())
                </div>
            </div>
        </div>
    );
};
