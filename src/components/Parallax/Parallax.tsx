import React from "react";
import { StaticImageData } from "next/image";

export default function Parallax({
    backgroundImage,
    backgroundPosition,
    children,
}: {
    backgroundImage: StaticImageData;
    backgroundPosition?: String;
    children: React.ReactNode;
}) {
    const style = {};

    Object.assign(style, { backgroundImage: `url('${backgroundImage.src}')` });
    if (backgroundPosition) Object.assign(style, { backgroundPosition: backgroundPosition });

    return (
        <header
            className="parallax"
            style={style}
        >
            <span>{children}</span>
        </header>
    );
}
