import {BsGithub, BsInstagram, BsLinkedin, BsTwitterX, BsYoutube} from "react-icons/bs";
import React from "react";

export default function SocialLinks() {
    return (
    <div className="social-links pt-[5rem] max-w-fit mx-auto flex space-x-8 sm:space-x-16 lg:space-x-40">
        <a href='https://github.com/pradeepmondal' target='blank' className=''><BsGithub
            className='text-white/90 text-[2rem]'/>
        </a>
        <a href='https://twitter.com/ppmtwts' target='blank' className=''><BsTwitterX
            className='text-blue-400 text-[2rem]'/>
        </a>
        <a href='https://www.linkedin.com/in/impradeepmondal/' target='blank' className=''><BsLinkedin
            className='text-blue-500 text-[2rem]'/>
        </a>
        <a href='https://www.instagram.com/pradeepmondal/' target='blank' className=''><BsInstagram
            className='text-pink-600 text-[2rem]'/>
        </a>
        <a href='https://www.youtube.com/@PradeepMondal' target='blank' className=''><BsYoutube
            className='text-red-600 text-[2.5rem]'/>
        </a>
    </div>
    )
}