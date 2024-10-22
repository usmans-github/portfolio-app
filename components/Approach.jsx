"use client";
import React from "react";

import { AnimatePresence, motion } from "framer-motion";
import { CanvasRevealEffect } from "@/components/ui/CanvasReveal";

const Approach = () => {
    return (
        <section className="w-full py-20">
            <h1 className="heading">
                My <span className="text-purple">Approach</span>
            </h1>
            <div
                className="my-20 flex flex-col lg:flex-row items-center justify-center gap-4">
                <Card
                    title="Planning & Strategy"
                    desc="We'll collaborate to map out your website's goals, target audience, 
                    and key functionalities. We'll discuss things like site structure, 
                    navigation, and content requirements."
                    icon={<AceternityIcon order="Phase 1" />}>
                    <CanvasRevealEffect
                        animationSpeed={5.1}
                        containerClassName="bg-emerald-700 dark:bg-emerald-900 rounded-3xl overflow-hidden"
                    />
                </Card>
                <Card
                    title="Development & Progress Update"
                    desc="Once we agree on the plan, I cue my lofi playlist and dive into
                    coding. From initial sketches to polished code, I keep you updated
                    every step of the way."
                    icon={<AceternityIcon order="Phase 2" />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-pink-700 dark:bg-pink-900 rounded-3xl overflow-hidden"
                        colors={[
                            [255, 166, 158],
                            [221, 255, 247],
                        ]}
                        dotSize={2}
                    />

                </Card>
                <Card
                    title="Development & Launch"
                    desc="This is where the magic happens! Based on the approved design, 
                    I'll translate everything into functional code, building your website
                    from the ground up."
                    icon={<AceternityIcon order="Phase 3" />}>
                    <CanvasRevealEffect
                        animationSpeed={3}
                        containerClassName="bg-sky-500 dark:bg-sky-600 rounded-3xl overflow-hidden"
                        colors={[[125, 211, 252]]}
                    />
                </Card>
            </div>
        </section>);
}

const Card = ({
    title,
    icon,
    children,
    desc
}) => {
    const [hovered, setHovered] = React.useState(false);
    return (
        (<div
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="border border-black/[0.2] cursor-pointer group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4  lg:h-[35rem] relative rounded-3xl">
            
            <AnimatePresence>
                {hovered && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="h-full w-full absolute inset-0">
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
            <div className="relative z-20">
                <div
                    className="text-center group-hover/canvas-card:-translate-y-4 group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]">
                    {icon}
                </div>
                <h2
                    className="dark:text-white text-3xl opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center">
                    {title}
                </h2>
                <h2
                    className="text-sm dark:text-white  opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4   group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center"
                    style={{ color: "e4ecff" }}>
                    {desc}
                </h2>
            </div>
        </div>)
    );
};

const AceternityIcon = ({ order }) => {
    return (
        <div className="text-2xl px-5 py-2 md:text-4xl font-bold tracking-wide bg-gradient-to-r from-[hsl(286,58%,43%)] to-purple bg-clip-text text-transparent">
            {order}
        </div>
    );
};



export default Approach