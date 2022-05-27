import React from 'react';
import { Link } from 'react-router-dom';
import './MyProfile.css'
import img from '../../../Images/img.jpg'
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";


const MyPortfolio = () => {
    return (
        <div className='flex flex-col items-center justify-center mt-44 mb-36'>
            <div class="avatar">
                <div class=" rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img}
                    />
                </div>
            </div>
            <div className='bg-slate-100 p-16 rounded-3xl'>
                <p className='text-5xl p-3'>Zahid Miron</p>
                <p className='text-3xl p-6'>Email: zahidmiron599@gmail.com</p>
                <div>
                    <h1 className='text-center text-2xl'>Educational Qualification</h1>
                    <input className='h-6 p-4 mt-4' type="" value='Horns 1st Year' disabled />
                    <div className='items-center  text-center'>
                        <p className='text-2xl p-5'>Find Me On</p>
                        <div className='flex justify-evenly items-center  flex-wrap content-between '>
                            <a className='icons items-center text-center' href="https://www.facebook.com/"><FaFacebookSquare /></a>
                            <a className='icons' href="https://github.com/"><FaGithubSquare /></a>
                            <a className='icons' href="https://www.linkedin.com/"><FaLinkedin /></a>
                        </div>
                    </div>
                </div>
                <h1 className='text-center mt-10 text-3xl font-semibold'>My Skills</h1>
                <p className='text-center text-xl font-semibold'>-- what i know --</p>

                <div className='skillsContainer'>
                    <p>HTML</p>
                    <progress class="progress progress-primary " value="95" max="100"></progress>
                </div>
                <div>
                    <p>CSS</p>
                    <progress class="progress progress-error  " value="80" max="100"></progress>
                </div>
                <div>
                    <p>JAVASCRIPT</p>
                    <progress class="progress progress-primary " value="65" max="100"></progress>
                </div>
                <div>
                    <p>REACT.JS</p>
                    <progress class="progress progress-success " value="70" max="100"></progress>
                </div>
                <div>
                    <p>NODE.JS</p>
                    <progress class="progress progress-info  " value="50" max="100"></progress>
                </div>
                <div>
                    <p>EXPRESS.JS</p>
                    <progress class="progress progress-success " value="50" max="100"></progress>
                </div>
                <div>
                    <p>MONGODB</p>
                    <progress class="progress progress-info  " value="49" max="100"></progress>
                </div>
            </div>
            <div>
                <h1 className='text-center font-semibold text-3xl text-red-700 p-4'>Recent Projects</h1>
                <p className='text-center text-xl font-bold pb-3'>i've completed</p>
                <div className='projectContainer'>
                    <div class="card w-96  cardss bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Electro Invo</h2>
                            <p>[web app] [april 2022]</p>
                            <ul className='text-left'>
                                <li>Product Add Facility</li>
                                <li>Add New Product</li>
                                <li>Log in Facility</li>
                            </ul>
                            <br />
                            <div class="card-actions justify-end">
                                <a target='_blank' href='https://warehouse-management-a6773.web.app/' class="btn btn-primary">Live demo</a>
                            </div>
                        </div>
                    </div>
                    <div class="card w-96  cardss bg-neutral text-neutral-content">
                        <div class="card-body items-center text-center">
                            <h2 class="card-title">Wild Photographer</h2>
                            <p>[web app] [april 2022]</p>
                            <ul className='text-left'>
                                <li>Personal Photography WEbsite</li>
                                <li></li>
                                <li>User login Register Facility</li>
                            </ul>
                            <br />
                            <div class="card-actions justify-end">
                                <a target='_blank' href='https://wild-photographer-f106f.web.app/' class="btn btn-primary">Live demo</a>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>



        </div>
    );
};

export default MyPortfolio;