import RotatingText from "./RotatingText";

export const HeroSection = () => {
    return (
        <section id="Hero-section" className="hero-content min-w-full p-24 justify-start mb-24 mt-32">
            <div className="max-w-fit text-left">
                <h1 className="text-5xl">Hi, I'm Lucas</h1>
                <RotatingText
                    texts={["React Developer", "Node.js Developer", "Full Stack Developer"]}
                    rotationInterval={4000}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    staggerDuration={0.02}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    splitLevelClassName="text-5xl font-bold text-[#E4E6C3]"
                />
            </div>
        </section>
    );
};
