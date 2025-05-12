"use client"
import { motion } from "framer-motion";

export const AboutSection = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: "easeOut"
            }
        }
    };

    const lineVariants = {
        hidden: { scaleY: 0, backgroundColor: "#E4E6C3/30", transformOrigin: "top" },
        visible: {
            scaleY: 1,
            backgroundColor: "#899878",
            transition: {
                duration: 1.2,
                ease: "easeInOut"
            }
        }
    };

    const lastLineVariants = {
        hidden: { scaleY: 0, backgroundColor: "#E4E6C3/30", transformOrigin: "top" },
        visible: {
            scaleY: 1,
            backgroundColor: "#E4E6C3/30",
            transition: {
                duration: 1.2,
                ease: "easeInOut"
            }
        }
    };

    const iconVariants = {
        hidden: { scale: 0, fill: "currentColor" },
        visible: {
            scale: [0, 1.4, 1],
            fill: "#899878",
            transition: {
                duration: 1.2,
                ease: "easeOut",
                times: [0, 0.7, 1]
            }
        }
    };

    const lastIconVariants = {
        hidden: { scale: 0, fill: "currentColor" },
        visible: {
            scale: [0, 1.4, 1],
            fill: "currentColor",
            transition: {
                duration: 1.2,
                ease: "easeOut",
                times: [0, 0.7, 1]
            }
        }
    };

    const gradientLineVariants = {
        hidden: {
            scaleY: 0,
            transformOrigin: "top"
        },
        visible: {
            scaleY: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        }
    };

    return (
        <section id="About-section" className="flex flex-col gap-12 my-24 max-w-[1440px]">
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.8 }}
                className="text-4xl text-center"
            >
                My journey
            </motion.h2>
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
            >
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    <motion.li
                        variants={itemVariants}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <div className="timeline-middle">
                            <motion.svg
                                variants={iconVariants}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </motion.svg>
                        </div>
                        <motion.div
                            variants={itemVariants}
                            className="timeline-start mb-10 md:text-end"
                        >
                            <time className="font-mono italic"> July 2024</time>
                            <div className="text-lg font-black">BTS in Software Development</div>
                            <p>State-certified Level 5 diploma obtained through a certification program with OpenClassrooms.</p>
                        </motion.div>
                        <motion.hr
                            variants={lineVariants}
                            className="origin-top"
                        />
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.hr
                            variants={lineVariants}
                            className="origin-top"
                        />
                        <div className="timeline-middle">
                            <motion.svg
                                variants={iconVariants}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </motion.svg>
                        </div>
                        <motion.div
                            variants={itemVariants}
                            className="timeline-end md:mb-10"
                        >
                            <time className="font-mono italic">2024</time>
                            <div className="text-lg font-black">Bachelor's Degree in Full-Stack Development</div>
                            <p><em>CODA School – Orléans, France</em></p>
                            <p><em>August 2024 – June 2025</em></p>
                            <p>Expected graduation: June 2025 (final exams scheduled for June)</p>
                        </motion.div>
                        <motion.hr
                            variants={lineVariants}
                            className="origin-top"
                        />
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.hr
                            variants={lineVariants}
                            className="origin-top"
                        />
                        <div className="timeline-middle">
                            <motion.svg
                                variants={iconVariants}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </motion.svg>
                        </div>
                        <motion.div
                            variants={itemVariants}
                            className="timeline-start mb-10 md:text-end"
                        >
                            <time className="font-mono italic">2024</time>
                            <div className="text-lg font-black">Apprenticeship as a React/TypeScript Developer</div>
                            <p><em>VAINKEURZ – Paris, France</em></p>
                            <p><em>September 2024 – March 2025</em></p>
                            <p>Contributed to the transition of the company's existing website into a modern web application using React and TypeScript.
                                Also worked on backend API development in PHP and built automation scripts and bots in Python for data collection and marketing communication tasks.</p>
                        </motion.div>
                        <motion.hr
                            variants={gradientLineVariants}
                            className="origin-top bg-[linear-gradient(to_bottom,#899878_50%,#15191E_50%)]"
                        />
                    </motion.li>
                    <motion.li
                        variants={itemVariants}
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        <motion.hr
                            variants={lastLineVariants}
                            className="origin-top"
                        />
                        <div className="timeline-middle">
                            <motion.svg
                                variants={lastIconVariants}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                className="h-5 w-5"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                                    clipRule="evenodd"
                                />
                            </motion.svg>
                        </div>
                        <motion.div
                            variants={itemVariants}
                            className="timeline-end md:mb-10"
                        >
                            <time className="font-mono italic">2025</time>
                            <div className="text-lg font-black">Master's Degree in Artificial Intelligence (expected)</div>
                            <p><em>CODA School – Orléans, France</em></p>
                            <p><em>August 2025 – June 2027</em></p>
                        </motion.div>
                        <motion.hr
                            variants={lastLineVariants}
                            className="origin-top"
                        />
                    </motion.li>
                </ul>
            </motion.div>
        </section>
    )
}