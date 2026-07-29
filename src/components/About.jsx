import React from 'react';
import stackImage from '../assets/about/ahsan-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons for Mohammed Ahsan's core skills
const PythonMlIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <linearGradient id="pythonA" x1="10.8%" y1="11.4%" x2="84.6%" y2="84.8%">
        <stop offset="0%" stopColor="#387EB8" />
        <stop offset="100%" stopColor="#366994" />
      </linearGradient>
      <linearGradient id="pythonB" x1="16.5%" y1="16.4%" x2="88.7%" y2="88.6%">
        <stop offset="0%" stopColor="#FFE052" />
        <stop offset="100%" stopColor="#FFC331" />
      </linearGradient>
      <path fill="url(#pythonA)" d="M63.1 13c-23.7 0-22.2 10.3-22.2 10.3l.1 10.6h22.6v3.2H31.8S18 35.6 18 59.8c0 24.2 12.1 23.3 12.1 23.3h7.2V72.4s-.4-12.8 12.6-12.8h22.1s12.1.2 12.1-11.8V25s1.7-12-21-12zm-6.6 7.2c2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4 1.8-4 4-4z" />
      <path fill="url(#pythonB)" d="M64.9 115c23.7 0 22.2-10.3 22.2-10.3l-.1-10.6H64.4v-3.2h31.8s13.8 1.5 13.8-22.7c0-24.2-12.1-23.3-12.1-23.3h-7.2v10.7s.4 12.8-12.6 12.8H56.2s-12.1-.2-12.1 11.8V103s-1.7 12 20.8 12zm6.6-7.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4z" />
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Python & ML</span>
  </div>
);

const JavaSpringBootIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <path fill="#6DB33F" d="M116.452 6.643a59.104 59.104 0 01-6.837 12.136A64.249 64.249 0 0064.205-.026C28.984-.026 0 28.958 0 64.179c0 35.22 28.984 64.205 64.205 64.205 35.221 0 64.179-28.985 64.179-64.205 0-10.632-2.624-20.672-7.26-29.508a59.03 59.03 0 01-4.672-8.028zm-53.478 99.75c-23.407 0-42.392-18.985-42.392-42.393 0-23.407 18.985-42.392 42.392-42.392 4.016 0 7.907.563 11.591 1.607l-4.756 8.229a34.498 34.498 0 00-6.835-.683c-19.152 0-34.673 15.521-34.673 34.673 0 19.153 15.521 34.674 34.673 34.674 12.322 0 23.146-6.443 29.29-16.146l7.621 4.397c-7.966 12.614-22.043 20.984-37.911 20.034z"/>
      <path fill="#6DB33F" d="M96.118 56.392l-32.22 18.604-8.816-15.273 32.221-18.604z"/>
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Java & Spring</span>
  </div>
);

const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <g stroke="#00d8ff" strokeWidth="4.5" fill="none" transform="translate(10, 10)">
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(30 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(90 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="46" transform="rotate(150 54 54)" />
        <circle cx="54" cy="54" r="7" fill="#00d8ff" />
      </g>
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">React JS</span>
  </div>
);

const MainframeAs400Icon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-16 h-16 md:w-20 md:h-20" viewBox="0 0 128 128">
      <rect x="16" y="24" width="96" height="80" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="4" />
      <path d="M32 44h64M32 64h48M32 84h32" stroke="#38bdf8" strokeWidth="4" strokeLinecap="round" />
      <circle cx="96" cy="84" r="6" fill="#22c55e" />
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">SQL & AS400</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#ff2a2a] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500 border border-gray-700">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-gray-700 relative">
                <img 
                  src={stackImage} 
                  alt="Mohammed Ahsan — Associate Software Engineer" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.target.src = "/user.png"; }}
                />
              </div>
              <div className="mt-3 text-center">
                <p className="text-white font-bold text-sm tracking-wide">MOHAMMED AHSAN</p>
                <p className="text-red-400 text-[11px] font-mono uppercase tracking-wider">Associate Software Engineer</p>
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-12 leading-relaxed max-w-3xl text-red-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-8 mt-8">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonMlIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <JavaSpringBootIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MainframeAs400Icon />
            </div>
          </div>

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
