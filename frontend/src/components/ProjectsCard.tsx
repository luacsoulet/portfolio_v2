export const ProjectsCard = () => {
    return (
        <div className="relative w-96 shadow-sm">
            <figure>
                <img
                    src="https://placehold.co/400x400"
                    alt="Shoes"
                    className="rounded-lg"
                />
            </figure>
            <div className="absolute bottom-0 left-0 w-full p-2">
                <div className="flex justify-between items-center px-4 py-2 w-full glass-effect-darker">
                    <h3>This is project title</h3>
                    <button className="btn btn-outline btn-sm rounded-lg">View more</button>
                </div>
            </div>
        </div>
    )
}