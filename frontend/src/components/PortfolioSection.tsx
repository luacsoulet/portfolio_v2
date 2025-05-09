import { ProjectsCard } from "./ProjectsCard";

export const PortfolioSection = () => {
    return (
        <section id="Portfolio-scetion" className="flex flex-col gap-12">
            <h2 className="text-4xl text-center">My Works</h2>
            <div className="flex flex-wrap gap-6">
                <ProjectsCard />
                <ProjectsCard />
                <ProjectsCard />
            </div>
        </section>
    );
};