"use client";

import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faSquareTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer()
{
    return(
        <React.Fragment>
        <footer className="bg-gradient-to-r from-[#2A3E84] via-[#080B2A] to-[#2A3E84] body-font">
        <div className="container text-white sm:px-20 px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
            <div className="w-80 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <a className="flex title-font font-medium items-center md:justify-start justify-center">
                {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path></svg> */}
                <span className="font-bold text-2xl">Logo</span>
            </a>
            <p className="mt-7 text-sm ">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In urna ultrices amet tellus ornare. Faucibus id posuere massa</p>
            <div className="md:flex gap-5 mt-8">
                <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faSquareFacebook} className="text-[#15BFFD] h-8 w-8"/></a>
                <a href="https://www.linkedin.com/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="text-[#15BFFD] h-8 w-8"/></a>
                <a href="https://twitter.com/" target="_blank"><FontAwesomeIcon icon={faSquareTwitter} className="text-[#15BFFD] h-8 w-8"/></a>
                <a href="https://www.instagram.com/" target="_blank"><FontAwesomeIcon icon={faSquareInstagram} className="text-[#15BFFD] h-8 w-8"/></a>
            </div>
            <div className="md:flex mt-12">
                <p className="text-white text-sm text-center sm:text-left">Copyright © Prithviraj 2023 All right reserved</p>
            </div>
            </div>
            
            <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-lg mb-4">Important Links</h2>
                <nav className="list-none mb-10">
                <li className="text-sm"><a href="">Link 1</a></li>
                <li className="text-sm mt-4"><a href="">Link 2</a></li>
                <li className="text-sm mt-4"><a href="">Link 3</a></li>
                <li className="text-sm mt-4"><a href="">Link 4</a></li>
                </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-lg mb-4">Company</h2>
                <nav className="list-none mb-10">
                <li className="text-sm"><a href="">Help & Support</a></li>
                <li className="text-sm mt-4"><a href="">Terms & Conditions</a></li>
                <li className="text-sm mt-4"><a href="">Privacy Policy</a></li>
                </nav>
            </div>
            <div className="lg:w-1/3 md:w-1/2 w-full px-4">
                <h2 className="title-font font-medium text-lg mb-4">Resource</h2>
                <nav className="list-none mb-10">
                <li className="text-sm"><a href="">Partner</a></li>
                <li className="text-sm mt-4"><a href="">Blog</a></li>
                <li className="text-sm mt-4"><a href="">Newsletter</a></li>
                </nav>
            </div>
            </div>
        </div>
        {/* <div className="bg-gradient-to-r from-[#2A3E84] via-[#080B2A] to-[#2A3E84]">
            <div className="container sm:px-20 mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-white text-sm text-center sm:text-left">Copyright © Prithviraj 2023 All right reserved</p>
            </div>
        </div> */}
        </footer>
        </React.Fragment>
    );
}