"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Confetti } from "@/components/confetti";

interface AvatarWithConfettiProps {
    alt: string;
    src: string;
    initials: string;
}

export default function AvatarWithConfetti({
    alt,
    src,
    initials,
}: AvatarWithConfettiProps) {
    const [showConfetti, setShowConfetti] = useState<boolean>(false);

    const handleClick = () => {
        setShowConfetti(true);
        setTimeout(() => setShowConfetti(false), 5000);
    };

    return (
        <div className="relative cursor-pointer">
            <Avatar className="size-28 border" onClick={handleClick}>
                <AvatarImage alt={alt} src={src} />
                <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
            {showConfetti && <Confetti />}
        </div>
    );
}
