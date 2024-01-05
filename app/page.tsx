import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Home() {


  return (
    <React.Fragment>
    <section className="bg-gradient-to-r from-[#2A3E84] via-[#080B2A] to-[#2A3E84] text-white body-font">
    <div className="container mx-auto flex sm:px-24 px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-7xl text-5xl font-bold">Lorem ipsum</h1>
        <h2 className="sm:text-7xl text-5xl tracking-tight mb-4">dolor sit amet</h2>
        <img src="./Vector.png"></img>
        <p className="mb-8 leading-relaxed mt-5">Lorem ipsum dolor sit amet consectetur. <br/>Odio amet enim suspendisse in varius. In volutpat amet ac.</p>
        <div className="flex justify-center">
          <button className="inline-flex text-white bg-[#15BFFD] border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Button 1</button>
          <button className="ml-4 inline-flex text-[#15BFFD] bg-transparent border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Button 2
          <FontAwesomeIcon icon={faArrowRight} className="test-[#15BFFD] py-1 ml-2"/></button>
        </div>
        <p className="text-lg font-bold mt-8">Lorem ipsum dolor sit</p>
      </div>
      <div className=" md:w-1/2 w-5/6">
        <img className="object-cover object-center rounded" alt="home" src="./home.png"/>
      </div>
    </div>
  </section>  


    <section className="bg-gradient-to-r from-[#2A3E84] via-[#080B2A] to-[#2A3E84] text-white body-font sm:px-40" id="discover">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img className="object-cover object-center rounded" alt="hero" src="./circle.png"/>
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-5xl text-3xl mb-4 font-bold">Why choose us?
            {/* <br className="hidden lg:inline-block"/>readymade gluten */}
          </h1>
          <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur. Congue eu arcu neque um semper. Eros suspendisse varius enim ultrices  isque et quis ctumst. Feugiat amet velit faucibus amet </p>
          <p className="mb-8 leading-relaxed">Eu feugiat adipiscing viverrfeugiat. Mollis tellus</p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-[#15BFFD] border-0 py-2 px-6 focus:outline-none rounded-full text-lg">Button</button>
          </div>
        </div>
      </div>
    </section>



    <section className="bg-gradient-to-r from-[#2A3E84] via-[#080B2A] to-[#2A3E84] text-white body-font" id="marketplace">
      <div className="container sm:px-24 px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4">Heading</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Posuere diam phasellus lacus ornare diam aenean. Semper.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="p-4 md:w-1/3">
            <div className="flex rounded-lg h-full border-t-[#9C37FD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#15BFFD] border p-5 flex-col">
              <div className="mb-1">Header</div>
              <div className="flex items-center flex-wrap">
                <h2 className="text-lg title-font font-bold text-[#15BFFD]">SUPPORTING TEXT</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm border-gray-200">
                <button className="inline-flex text-white bg-[#15BFFD] border-0 py-2 px-6 focus:outline-none rounded-full text-lg">Button</button>
                </span>
              </div>
              <div className="sm:mt-72 ">Info</div>
              <div className="flex items-center flex-wrap">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <img src="./Ellipse.png"></img>
                  </div>
                  <h2 className="text-lg title-font text-[#B4C7CE]">Text</h2>
                </div>
                <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm border-gray-200">
                  <img src="./Frame.png"></img>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full border-t-[#9C37FD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#15BFFD] border p-5 flex-col">
              <div className="mb-1">Header</div>
              <div className="flex items-center flex-wrap">
                <h2 className="text-lg title-font font-bold text-[#15BFFD]">SUPPORTING TEXT</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm border-gray-200">
                <button className="inline-flex text-white bg-[#15BFFD] border-0 py-2 px-6 focus:outline-none rounded-full text-lg">Button</button>
                </span>
              </div>
              <div className="sm:mt-72 ">Info</div>
              <div className="flex items-center flex-wrap">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <img src="./Ellipse.png"></img>
                  </div>
                  <h2 className="text-lg title-font text-[#B4C7CE]">Text</h2>
                </div>
                <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm border-gray-200">
                  <img src="./Frame.png"></img>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full border-t-[#9C37FD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#15BFFD] border p-5 flex-col">
              <div className="mb-1">Header</div>
              <div className="flex items-center flex-wrap">
                <h2 className="text-lg title-font font-bold text-[#15BFFD]">SUPPORTING TEXT</h2>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm border-gray-200">
                <button className="inline-flex text-white bg-[#15BFFD] border-0 py-2 px-6 focus:outline-none rounded-full text-lg">Button</button>
                </span>
              </div>
              <div className="sm:mt-72 ">Info</div>
              <div className="flex items-center flex-wrap">
                <div className="flex items-center">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                    <img src="./Ellipse.png"></img>
                  </div>
                  <h2 className="text-lg title-font text-[#B4C7CE]">Text</h2>
                </div>
                <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm border-gray-200">
                  <img src="./Frame.png"></img>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>






    <section className="bg-gradient-to-r from-[#2A3E84] via-[#080B2A] to-[#2A3E84] text-white body-font" id="work">
      <div className="container sm:px-24 px-5 py-24 mx-auto flex flex-wrap">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4">Heading</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Posuere felis consectetur a metus urna velit nam bibendum.</p>
        </div>
        <div className="flex flex-wrap -m-4">

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-8 sm:flex-row flex-col">
              <div className="flex-grow">
                <div className="flex flex-col text-center w-full">
                  <h1 className="text-lg title-font mb-4">Heading</h1>
                </div>
                <h2 className="text-3xl title-font font-bold mb-3">Header</h2>
                <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-8 sm:flex-row flex-col">
              <div className="flex-grow">
                <div className="flex flex-col text-center w-full">
                  <h1 className="text-lg title-font mb-4">Heading</h1>
                </div>
                <h2 className="text-3xl title-font font-bold mb-3">Header</h2>
                <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-8 sm:flex-row flex-col">
              <div className="flex-grow">
                <div className="flex flex-col text-center w-full">
                  <h1 className="text-lg title-font mb-4">Heading</h1>
                </div>
                <h2 className="text-3xl title-font font-bold mb-3">Header</h2>
                <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-8 sm:flex-row flex-col">
              <div className="flex-grow">
                <div className="flex flex-col text-center w-full">
                  <h1 className="text-lg title-font mb-4">Heading</h1>
                </div>
                <h2 className="text-3xl title-font font-bold mb-3">Header</h2>
                <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-8 sm:flex-row flex-col">
              <div className="flex-grow">
                <div className="flex flex-col text-center w-full">
                  <h1 className="text-lg title-font mb-4">Heading</h1>
                </div>
                <h2 className="text-3xl title-font font-bold mb-3">Header</h2>
                <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.</p>
              </div>
            </div>
          </div>

          <div className="p-4 lg:w-1/2 md:w-full">
            <div className="flex border-2 rounded-lg border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-8 sm:flex-row flex-col">
              <div className="flex-grow">
                <div className="flex flex-col text-center w-full">
                  <h1 className="text-lg title-font mb-4">Heading</h1>
                </div>
                <h2 className="text-3xl title-font font-bold mb-3">Header</h2>
                <p className="leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Elit massa erat vitae non semper quis. Morbi sed aliquet donec  facilisis. Senectus eget.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>




    <section className="bg-gradient-to-r from-[#2A3E84] via-[#080B2A] to-[#2A3E84] text-white body-font">
    <div className="container sm:px-24 px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4">Heading</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Volutpat non pharetra eget nulla odio dolor feugiat laoreet.</p>
      </div>
      <div className="flex flex-wrap -m-4">
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-5 flex-col">
            <div className="text-[#B4C7CE] mb-1">Created for</div>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <img src="./Ellipse.png"></img>
              </div>
              <h2 className="text-lg title-font font-bold text-[#15BFFD]">Company name</h2>
            </div>
            <div className="flex-grow sm:mt-72">
              <h1 className="font-bold text-xl">Project name</h1>
              <div className="flex items-center flex-wrap">
                <p className="leading-relaxed text-base text-[#ACACAC]">Main Work <span className="text-[#15BFFD] font-bold">Work</span></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm border-gray-200">
                  <button className="inline-flex text-transparent bg-transparent border-0 py-2 px-6 focus:outline-none rounded-full text-lg">Button</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-5 flex-col">
            <div className="text-[#B4C7CE] mb-1">Created for</div>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <img src="./Ellipse.png"></img>
              </div>
              <h2 className="text-lg title-font font-bold text-[#15BFFD]">Company name</h2>
            </div>
            <div className="flex-grow sm:mt-72">
              <h1 className="font-bold text-xl">Project name</h1>
              <div className="flex items-center flex-wrap">
                <p className="leading-relaxed text-base text-[#ACACAC]">Main Work <span className="text-[#15BFFD] font-bold">Work</span></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm border-gray-200">
                  <button className="inline-flex text-transparent bg-transparent border-0 py-2 px-6 focus:outline-none rounded-full text-lg">Button</button>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 md:w-1/3">
          <div className="flex rounded-lg h-full border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-5 flex-col">
            <div className="text-[#B4C7CE] mb-1">Created for</div>
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                <img src="./Ellipse.png"></img>
              </div>
              <h2 className="text-lg title-font font-bold text-[#15BFFD]">Company name</h2>
            </div>
            <div className="flex-grow sm:mt-72">
              <h1 className="font-bold text-xl">Project name</h1>
              <div className="flex items-center flex-wrap">
                <p className="leading-relaxed text-base text-[#ACACAC]">Main Work <span className="text-[#15BFFD] font-bold">Work</span></p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <span className="text-gray-400 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm border-gray-200">
                  <button className="inline-flex text-transparent bg-transparent border-0 py-2 px-6 focus:outline-none rounded-full text-lg">Button</button>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="inline-flex text-[#15BFFD] bg-[#080B2A] border border-[#15BFFD] py-2 px-6 focus:outline-none rounded-full text-lg">Button</button>
      </div>
    </div>
    </section>


    <section className="bg-gradient-to-r from-[#2A3E84] via-[#080B2A] to-[#2A3E84] text-white body-font">
    <div className="container sm:px-24 px-5 py-24 mx-auto">
      <div className="flex flex-col text-center w-full mb-20">
        <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4">Happy Client testimonial</h1>
        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Lorem ipsum dolor sit amet consectetur. Quis neque at imperdiet est risus id tortor viverra cras.</p>
      </div>
      <div className="flex flex-wrap -m-2">
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-4 rounded-lg">
            <img alt="team" className="w-16 h-16 bg-[#D9D9D9] object-cover object-center flex-shrink-0 rounded-full mr-4" src="./Ellipse.png"/>
            <div className="flex-grow">
              {/* <img src="./Subtract.png"></img> */}
              <h2 className="title-font font-medium">Emerson Philips</h2>
              <p className="font-bold">Work</p>
            </div>
            <div className="underline text-[#15BFFD]">Follow</div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-[#D9D9D9] object-cover object-center flex-shrink-0 rounded-full mr-4" src="./Ellipse.png"/>
            <div className="flex-grow">
              <h2 className="title-font font-medium">Emerson Philips</h2>
              <p className="font-bold">Work</p>
            </div>
            <div className="underline text-[#15BFFD]">Follow</div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-[#D9D9D9] object-cover object-center flex-shrink-0 rounded-full mr-4" src="./Ellipse.png"/>
            <div className="flex-grow">
              <h2 className="title-font font-medium">Emerson Philips</h2>
              <p className="font-bold">Work</p>
            </div>
            <div className="underline text-[#15BFFD]">Follow</div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-[#D9D9D9] object-cover object-center flex-shrink-0 rounded-full mr-4" src="./Ellipse.png"/>
            <div className="flex-grow">
              <h2 className="title-font font-medium">Emerson Philips</h2>
              <p className="font-bold">Work</p>
            </div>
            <div className="underline text-[#15BFFD]">Follow</div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-[#D9D9D9] object-cover object-center flex-shrink-0 rounded-full mr-4" src="./Ellipse.png"/>
            <div className="flex-grow">
              <h2 className="title-font font-medium">Emerson Philips</h2>
              <p className="font-bold">Work</p>
            </div>
            <div className="underline text-[#15BFFD]">Follow</div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-[#D9D9D9] object-cover object-center flex-shrink-0 rounded-full mr-4" src="./Ellipse.png"/>
            <div className="flex-grow">
              <h2 className="title-font font-medium">Emerson Philips</h2>
              <p className="font-bold">Work</p>
            </div>
            <div className="underline text-[#15BFFD]">Follow</div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-[#D9D9D9] object-cover object-center flex-shrink-0 rounded-full mr-4" src="./Ellipse.png"/>
            <div className="flex-grow">
              <h2 className="title-font font-medium">Emerson Philips</h2>
              <p className="font-bold">Work</p>
            </div>
            <div className="underline text-[#15BFFD]">Follow</div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-[#D9D9D9] object-cover object-center flex-shrink-0 rounded-full mr-4" src="./Ellipse.png"/>
            <div className="flex-grow">
              <h2 className="title-font font-medium">Emerson Philips</h2>
              <p className="font-bold">Work</p>
            </div>
            <div className="underline text-[#15BFFD]">Follow</div>
          </div>
        </div>
        <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
          <div className="h-full flex items-center border-t-[#15BFFD] border-l-[#15BFFD] border-r-[#15BFFD] border-b-[#9C37FD] border p-4 rounded-lg">
          <img alt="team" className="w-16 h-16 bg-[#D9D9D9] object-cover object-center flex-shrink-0 rounded-full mr-4" src="./Ellipse.png"/>
            <div className="flex-grow">
              <h2 className="title-font font-medium">Emerson Philips</h2>
              <p className="font-bold">Work</p>
            </div>
            <div className="underline text-[#15BFFD]">Follow</div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10">
        <button className="inline-flex text-[#15BFFD] bg-[#080B2A] border border-[#15BFFD] py-2 px-6 focus:outline-none rounded-full text-lg">Button</button>
      </div>
    </div>
    </section>
    </React.Fragment> 
  )
}
