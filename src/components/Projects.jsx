import ParallaxText from './ui/ParallaxText'
// import ProjectCards from './ui/ProjectCards'

function Projects() {
    return (
        <section className="w-full h-screen overflow-hidden text-center sm:mt-20">
            <ParallaxText baseVelocity={-10} className="ml-[25%]">Featured projects</ParallaxText>
            <ParallaxText baseVelocity={10}>Featured projects</ParallaxText>


            <div className="projects">
                {/* <ProjectCards /> */}
            </div>

        </section>
    )
}

export default Projects