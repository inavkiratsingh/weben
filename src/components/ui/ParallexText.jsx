import { useRef, useState, useEffect } from "react";
import {
    motion,
    useScroll,
    useSpring,
    useTransform,
    useMotionValue,
    useVelocity,
    useAnimationFrame,
    wrap
} from "framer-motion";

function ParallaxText({ children, baseVelocity = 100 }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useVelocity(scrollY);
    const smoothVelocity = useSpring(scrollVelocity, {
        damping: 50,
        stiffness: 400
    });
    const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
        clamp: false
    });

    const [isScrolling, setIsScrolling] = useState(false);

    const directionFactor = useRef(baseVelocity > 0 ? -1 : 1);

    // Check scroll state and update isScrolling flag
    const handleScroll = () => {
        setIsScrolling(true);
        setTimeout(() => setIsScrolling(false), 1); // debounce scroll state for smooth movement
    };

    // Add event listener for scroll
    useEffect(() => {
        try {
            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        } catch (error) {
            console.log("error", error)
        }
    });
    // Update baseX only when scrolling is active
    useEffect(() => {
        if (isScrolling) {
            let moveBy = directionFactor.current * baseVelocity * (1 / 60);

            /**
             * This is what changes the direction of the scroll once we
             * switch scrolling directions.
             */
            if (velocityFactor.get() < 0) {
                directionFactor.current = -1;
            } else if (velocityFactor.get() > 0) {
                directionFactor.current = 1;
            }

            moveBy += directionFactor.current * moveBy * velocityFactor.get();

            baseX.set(baseX.get() + moveBy);
        }
    }, [isScrolling, baseVelocity]);

    // Calculate x transformation based on baseX
    const x = useTransform(baseX, (v) => `${wrap(50, -205, v)}%`);

    return (
        <div className="parallax bg-black text-center text-white text-[15rem] grotesk whitespace-nowrap">
            <motion.div style={{ x }} className="ml-[50%] leading-none">
                <span>{children} </span>
            </motion.div>
        </div>
    );
}

export default ParallaxText;
