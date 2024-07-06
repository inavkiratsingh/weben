const { motion } = require("framer-motion");


const Path = props => (
    <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke="orange"
        strokeLinecap="round"
        {...props}
    />
);


export const MenuToggle = ({ toggle,msg }) => (
    <button
        onClick={toggle}
        className="z-[999] lg:w-auto lg:h-0 lg:relative lg:border-none sm:absolute flex flex-col gap-2 sm:top-5 sm:left-5 sm:border sm:w-16 sm:h-16 sm:items-center sm:justify-center sm:border-zinc-600 sm:rounded-full lg:-mt-5"
    >
        
        <div className="ham1 sm:w-6 border-[1px] bg-zinc-100"></div>
        <div className="ham2 sm:w-6 border-[1px] bg-zinc-100"></div>
    </button>
)