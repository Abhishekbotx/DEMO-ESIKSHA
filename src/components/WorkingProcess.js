import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import files from "../img/Files.png";
import lineone from "../img/Line 1.png";
import linetwo from "../img/line 2.png";
import linethree from "../img/line 3.png";

const useInView = (ref) => {
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isInView;
};


const WorkingProcess = () => {

  const ref = useRef();
  const isInView = useInView(ref);
  return (
    <div className="flex flex-col md:flex-row justify-center  items-center py-16 px-4 md:px-0 w-screen">
      <div className="md:w-1/4 mb-8 md:mb-0 ml-0 md:ml-20">
        <h2 className="text-2xl font-bold mb-4 text-center md:text-left">How learning works</h2>
        <p className="mb-4 text-center md:text-left">
          A simple, step-by-step process for free education—accessible on low bandwidth and any device.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-green-500 text-white px-4 py-2 rounded-md">Start Learning</button>
        </div>
      </div>

      <div ref={ref} className="md:w-3/4 flex justify-center items-center flex-col">

        <div className='flex flex-row  justify-center items-center gap-2 sm:gap-4 m-2 '>

          <motion.div className='prDiv flex flex-row justify-center items-center w-36 lg:w-44 xl:w-52 h-16 border-4 border-black rounded-lg p-2 gap-4 '
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0, duration: 0.5 }}>

            <img className='w-4 md:w-6 lg:w-8' src={files} alt='files icon' />
            <h1 className='prh1 text-sm lg:text-base text-center'>Enroll</h1>
          </motion.div>

          <motion.img
            className='primg w-8 md:w-auto'
            src={lineone}
            alt='line one'
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          />

          <motion.div className='prDiv flex flex-row justify-center items-center w-36 lg:w-44 xl:w-52 h-16 border-4 border-black rounded-lg p-2 gap-4  '
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 1, duration: 0.5 }}>

            <img className='w-4 md:w-6 lg:w-8' src={files} alt='files icon' />
            <h1 className='prh1 text-sm lg:text-base text-center'>Orientation</h1>
          </motion.div>

          <motion.img
            className='primgdown w-20 md:w-auto mt-12 md:mt-20'
            src={linetwo}
            alt='line two'
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 1.5, duration: 0.5 }} />

        </div>

        <div className='flex flex-row justify-center items-center gap-2 sm:gap-4 -mt-6 md:-mt-12 lg:ml-24 m-2'>

          <motion.img
            className='primgdown w-20 md:w-auto mt-12 md:mt-20'
            src={linethree}
            alt='files icon'
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ delay: 3.5, duration: 0.5 }} />

          <motion.div className='prDiv flex flex-row justify-center items-center w-36 lg:w-44 xl:w-52 h-16 border-4 border-black rounded-lg p-2 gap-4'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 3, duration: 0.5 }}>

            <img className='w-4 md:w-6 lg:w-8' src={files} alt='files icon' />
            <h1 className='prh1 text-sm lg:text-base text-center'>Start <br />learning</h1>
          </motion.div>

          <motion.img
            className='primg w-8 md:w-auto rotate-180'
            src={lineone}
            alt='files icon'
            initial={{ opacity: 0, x: 20, rotate: 180 }}
            animate={isInView ? { opacity: 1, x: 0, rotate: 180 } : { opacity: 0, x: 20, rotate: 180 }}
            transition={{ delay: 2.5, duration: 0.5 }} />

          <motion.div className='prDiv flex flex-row justify-center items-center w-36 lg:w-44 xl:w-52 h-16 border-4 border-black rounded-lg p-2 gap-4'
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 2, duration: 0.5 }}>

            <img className='w-4 md:w-6 lg:w-8' src={files} alt='files icon' />
            <h1 className='prh1 text-sm lg:text-base text-center'>Download<br /> notes</h1>
          </motion.div>

        </div>

        <div className='flex flex-row justify-center items-center gap-2 sm:gap-4 mr-24 sm:mr-36 m-2'>

          <motion.div className='prDiv flex flex-row justify-center items-center w-36 lg:w-44 xl:w-52 h-16 border-4 border-black rounded-lg p-2 gap-4 '
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 4, duration: 0.5 }}>

            <img className='w-4 md:w-6 lg:w-8' src={files} alt='files icon' />
            <h1 className='prh1 text-sm lg:text-base text-center'>Practice quizzes</h1>
          </motion.div>

          <motion.img
          className='primg w-8 md:w-auto'
            src={lineone}
            alt='files icon'
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: 4.5, duration: 0.5 }} />

          <motion.div className='prDiv flex flex-row justify-center items-center w-36 lg:w-44 xl:w-52 h-16 border-4 border-black rounded-lg p-2 gap-4  '
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 5, duration: 0.5 }}>

            <img className='w-4 md:w-6 lg:w-8' src={files} alt='files icon' />
            <h1 className='prh1 text-sm lg:text-base text-center'>Join community</h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default WorkingProcess;