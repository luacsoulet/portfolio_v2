"use client"
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";

export const ProjectsCard = () => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

    const rotateX = useTransform(mouseYSpring, [-2, 2], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-2, 2], ["-15deg", "15deg"]);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        const xPct = mouseX / width - 0.25;
        const yPct = mouseY / height - 0.25;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            className="relative w-96 shadow-sm perspective-1000"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
        >
            <motion.div
                className="relative w-full h-full"
                style={{
                    transform: "translateZ(80px)",
                    transformStyle: "preserve-3d",
                }}
            >
                <figure>
                    <img
                        src="https://placehold.co/400x400"
                        alt="Shoes"
                        className="rounded-lg"
                    />
                </figure>
                <motion.div
                    className="absolute bottom-0 left-0 w-full p-2"
                    style={{
                        transform: "translateZ(80px)",
                        transformStyle: "preserve-3d",
                    }}
                >
                    <div className="flex justify-between items-center px-4 py-2 w-full glass-effect-darker">
                        <h3>This is project title</h3>
                        <button className="btn btn-outline btn-sm rounded-lg">View more</button>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}