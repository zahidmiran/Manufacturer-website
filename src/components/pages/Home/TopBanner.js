import React from 'react';
import x from '../../../Images/x.jpg'
import xx from '../../../Images/xx.jpg'
import xxx from '../../../Images/xxx.jpg'
import xxxx from '../../../Images/xxxx.jpg'
import xy from '../../../Images/xy.jpg'

import Typewriter from 'typewriter-effect';
import './Bus.css'
import { faChalkboardTeacher } from "react-icons/fa";


const TopBanner = () => {
    return (
        <>
            <div class="hero h-screen mt-10">
                {/* <div class="hero-content flex-col divv lg:flex-row content-between"> */}
                <div class="hero-content grid grid-cols-1 content-between md:grid-cols-2 lg:grid-cols-2 gap-5">
                    <div >
                        <h1 data-aos-duration="2000" data-aos-delay="200"
                            data-aos="fade-right" class="text-5xl font-bold">GET All PC  COMPONENTS  <br />  AND TOOLS HOUSE IN BD </h1>
                        
                            <span class="py-6 max-w-xl">
                                <h1 className=" text-5xl " >
                                    <Typewriter
                                        options={{
                                            strings: ["GET RAM, MOTHERBOARD", "NEW ARRIVALS ", "MAKE AN EXECUTIVE"],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </h1>
                            </span>
                            
                            <button style={{ fontSize: "30px" }} className="btn btn-lg mr-5 mt-5"><faChalkboardTeacher className='iconnns' /><faChalkboardTeacher/> Learn More</button>
                            

                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <div class="carousel carousel-center max-w-md p-4 space-x-4 bg-neutral rounded-box">
                            <div class="carousel-item">
                                <img src={x} class="rounded-box" />
                            </div>
                            <div class="carousel-item">
                                <img src={xx} class="rounded-box" />
                            </div>
                            <div class="carousel-item">
                                <img src={xxx} class="rounded-box" />
                            </div>
                            <div class="carousel-item">
                                <img src={xxxx} class="rounded-box" />
                            </div>
                            <div class="carousel-item">
                                <img src={xy} class="rounded-box" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default TopBanner;