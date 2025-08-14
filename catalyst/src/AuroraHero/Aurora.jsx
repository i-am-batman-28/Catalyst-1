import React, { useEffect } from "react";
import {motion, useMotionTemplate, useMotionValue, animate} from "framer-motion";

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335c"];

export const AuroraHero = () => {
    const color = useMotionValue(COLORS[0]);

    const backgroundImage = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #120a1f 50%, ${color})`;

    useEffect(() => {
        animate(color, COLORS, {
            ease : "easeInOut",
            duration: 10,
            repeat: Infinity,
            repeatType: "mirror",
        })
    }, []);

    return (
        <motion.section 
        style={{
            backgroundImage,
        }}
        >

        </motion.section>
    )
};

export default AuroraHero; 