'use client';

import { useEffect, useRef, useState } from 'react';

export function VantaBackground() {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const vantaRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loadScript = (url: string) => {
            return new Promise((resolve, reject) => {
                if (document.querySelector(`script[src="${url}"]`)) return resolve(null);
                const script = document.createElement('script');
                script.src = url;
                script.onload = resolve;
                script.onerror = reject;
                document.head.appendChild(script);
            });
        };

        const initVanta = async () => {
            try {
                await loadScript('https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js');
                await loadScript('https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js');

                if (!vantaEffect && vantaRef.current && (window as any).VANTA) {
                    console.log('Initializing Vanta FOG effect...');
                    const effect = (window as any).VANTA.FOG({
                        el: vantaRef.current,
                        mouseControls: true,
                        touchControls: true,
                        gyroControls: false,
                        minHeight: 200.0,
                        minWidth: 200.0,
                        highlightColor: 0xff1744,
                        midtoneColor: 0x9c27b0,
                        lowlightColor: 0x673ab7,
                        baseColor: 0x0a0a0a,
                        blurFactor: 0.6,
                        zoom: 1.0,
                        speed: 1.0,
                    });
                    console.log('Vanta effect initialized:', effect);
                    setVantaEffect(effect);
                }
            } catch (err) {
                console.error('Failed to load Vanta background:', err);
            }
        };

        if (!vantaEffect) {
            initVanta();
        }

        return () => {
            if (vantaEffect) {
                console.log('Destroying Vanta effect...');
                vantaEffect.destroy();
            }
        };
    }, []);

    return <div ref={vantaRef} className="fixed inset-0 z-0" />;
}
