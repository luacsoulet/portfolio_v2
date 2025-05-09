export const AboutSection = () => {
    return (
        <section id="About-section" className="flex flex-col gap-12 my-24">
            <h2 className="text-4xl text-center">My journey</h2>
            <div>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <li>
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="#899878"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic"> July 2024</time>
                            <div className="text-lg font-black">BTS in Software Development</div>
                            <p>State-certified Level 5 diploma obtained through a certification program with OpenClassrooms.</p>
                        </div>
                        <hr className="bg-[#899878]" />
                    </li>
                    <li>
                        <hr className="bg-[#899878]" />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="#899878"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end md:mb-10">
                            <time className="font-mono italic">2024</time>
                            <div className="text-lg font-black">Bachelor’s Degree in Full-Stack Development</div>
                            <p><em>CODA School – Orléans, France</em></p>
                            <p><em>August 2024 – June 2025</em></p>
                            <p>Expected graduation: June 2025 (final exams scheduled for June)</p>
                        </div>
                        <hr className="bg-[#899878]" />
                    </li>
                    <li>
                        <hr className="bg-[#899878]" />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="#899878"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-start mb-10 md:text-end">
                            <time className="font-mono italic">2024</time>
                            <div className="text-lg font-black">Apprenticeship as a React/TypeScript Developer</div>
                            <p><em>VAINKEURZ – Paris, France</em></p>
                            <p><em>September 2024 – March 2025</em></p>
                            <p>Contributed to the transition of the company’s existing website into a modern web application using React and TypeScript.
                                Also worked on backend API development in PHP and built automation scripts and bots in Python for data collection and marketing communication tasks.</p>
                        </div>
                        <hr className="bg-[#E4E6C3]/30" />
                    </li>
                    <li>
                        <hr className="bg-[#E4E6C3]/30" />
                        <div className="timeline-middle">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="#E4E6C3"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </div>
                        <div className="timeline-end md:mb-10">
                            <time className="font-mono italic">2025</time>
                            <div className="text-lg font-black">Master’s Degree in Artificial Intelligence (expected)</div>
                            <p><em>CODA School – Orléans, France</em></p>
                            <p><em>August 2025 – June 2027</em></p>
                        </div>
                        <hr className="bg-[#E4E6C3]/30" />
                    </li>
                </ul>
            </div>
        </section>
    )
}