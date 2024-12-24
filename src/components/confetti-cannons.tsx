"use client";

import React from "react";
import confetti from "canvas-confetti";

export function ConfettiSideCannons() {
    const confettiEvent = () => {
        const end = Date.now() + 1 * 1000; // 1 seconds
        const colors = ["#a786ff", "#fd8bbc", "#eca184", "#f8deb1"];

        const frame = () => {
            if (Date.now() > end) return;

            confetti({
                particleCount: 2,
                angle: 60,
                spread: 55,
                startVelocity: 60,
                origin: { x: 0, y: 0.5 },
                colors: colors,
            });
            confetti({
                particleCount: 2,
                angle: 120,
                spread: 55,
                startVelocity: 60,
                origin: { x: 1, y: 0.5 },
                colors: colors,
            });

            requestAnimationFrame(frame);
        };

        frame();
    };

    React.useEffect(() => {
        confettiEvent();
    }, []);

    return null;
}
