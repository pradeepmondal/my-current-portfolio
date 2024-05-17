
"use client"
import React from 'react';
import {BsGithub, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube} from 'react-icons/bs';
import { useRef, useEffect, useState } from 'react';


export default function Hero() {
    const heroRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const updateCursorPosition = (e: MouseEvent) => {
            if (!heroRef.current) return;
            const {clientX, clientY} = e;
            heroRef.current.style.setProperty('--x', `${clientX}px`)
            heroRef.current.style.setProperty('--y', `${clientY}px`)
            console.log(clientX, clientY);
        };

        window.addEventListener('mousemove', updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
        }
    }, []);




    return (
        <>
            <style jsx>{`
                .hero {
                    cursor: none;
                    background-image: radial-gradient(
                            circle farthest-side at var(--x, 100px) var(--y, 100px),
                            #005000 -70%,
                            transparent 100%
                    );
                    
                }

                
            `}</style>
            <div ref={heroRef} className='hero h-[100vh]'>

                <div className="pt-[9rem] sm:pt-[18rem] px-[22%] text-center">
                    <h1 className="text-slate-100/80 sm:text-[1.5rem] sm:px-[45%]  ">Hi !</h1><br/>
                    <h1 className="text-slate-100/80 sm:text-[1.5rem]  ">I'm <span
                        className="text-[#00FFD5]">Pradeep</span> from India. Been with computers now for about 12
                        years. Programming since 2014.<br/> Currently diving deep into the world of <span
                            className="text-yellow-500">Data</span> and <span className="text-red-600">AI</span>
                    </h1><br/>
                    <br/>
                </div>
            </div>


        </>


    );
}