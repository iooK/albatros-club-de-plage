import React from "react";
import { StaticImageData } from "next/image";

export default function Parallax({
    backgroundImage,
    children,
}: {
    backgroundImage: StaticImageData;
    children: React.ReactNode;
}) {
    return (
        <header
            className="parallax"
            style={{ backgroundImage: `url('${backgroundImage.src}')` }}
        >
            <span>{children}</span>
        </header>
    );
}
