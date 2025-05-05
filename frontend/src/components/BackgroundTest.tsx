const BlurryBackground = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-[#1a1a1a]">
            {/* Dégradés flous */}
            <div className="absolute inset-0 blur-3xl">
                <div className="absolute inset-0 bg-[radial-gradient(at_20%_30%,#6e7765_0%,transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(at_80%_70%,#1c1b1a_0%,transparent_60%)]"></div>
                <div className="absolute inset-0 bg-[radial-gradient(at_60%_40%,#b4b29f_0%,transparent_60%)]"></div>
            </div>

            {/* Overlay noir pour assombrir globalement */}
            <div className="absolute inset-0 bg-black opacity-50 mix-blend-multiply z-10" />

            {/* Contenu */}
            <div className="relative z-20 p-4">
                {children}
            </div>
        </div>
    );
};

export default BlurryBackground;