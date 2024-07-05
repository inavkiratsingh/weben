import ParallaxText from './ui/ParallexText'

function Projects() {
    return (
        <section className="w-full h-screen overflow-hidden text-center">
            <ParallaxText baseVelocity={-10}>Featured projects</ParallaxText>
            <ParallaxText baseVelocity={10}>Featured projects</ParallaxText>
        </section>
    )
}

export default Projects