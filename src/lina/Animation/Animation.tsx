import { useState, useEffect, useRef } from "react";
import NET from "vanta/dist/vanta.net.min";
import * as THREE from "three";

export const MyComponent = () => {
    const [vantaEffect, setVantaEffect] = useState(0);
    const vantaRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(
                NET({
                    el: vantaRef.current,
                    THREE: THREE,
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    backgroundColor: '#444249',
                    points: 14.00,
                    maxDistance: 25.00,
                    spacing: 17.00,
                    shininess: 19.00,
                    color: 'hotpink',
                })
            );
        }
    }, [vantaEffect]);
    return (
        <div ref={vantaRef} >
            <p>
                <h1>Hi, I'm <h2 style={{ color: 'hotpink' }}>Lina</h2> </h1>
                <h1>Front end developer</h1>
            </p>
        </div>
    );
};