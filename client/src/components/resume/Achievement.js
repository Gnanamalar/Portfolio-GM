import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2021 - 2024</p>
          <h2 className="text-4xl font-bold">Certifications</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Cyber Security for CISCO"
            subTitle="Cyber security Essentials"
            result="Success"
            des="Harness the power of Cisco-certified cybersecurity skills to safeguard your organization against evolving cyber threats. Let's collaborate to strengthen your digital defenses and mitigate risks effectively."
          />
          <ResumeCard
            title="Internet Of Thongs for NPTEL"
            subTitle="Introduction to Internet Of Things"
            result="Success"
            des="I completed an NPTEL course on IoT, gaining foundational knowledge and practical skills. This course covered IoT architecture, communication protocols, and hands-on experience with sensors and data analytics. Now, I'm ready to apply my expertise to develop innovative IoT solutions tailored to your business needs."
          />
          <ResumeCard
            title="Full-Stack Development for Coursera"
            subTitle="Fullstack"
            result="Success"
            des="Having completed the Full Stack Development course on Coursera, I've honed my skills in both frontend and backend technologies. With expertise in building dynamic web applications, I'm eager to collaborate and turn your concepts into reality."
          />
          <ResumeCard
            title="Python for CISCO"
            subTitle="Python course"
            result="Success"
            des="Completing the Python course has equipped me with a solid understanding of its fundamentals and best practices. I'm now prepared to tackle a wide range of programming challenges with confidence, leveraging Python's versatility and power to drive innovation and problem-solving."
          />
        </div>
      </div>
      {/* <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2007 - 2010</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
          <ResumeCard
            title="Lorem ipsum dolor sit amet."
            subTitle="Lorem ipsum dolor sit amet alternative."
            result="Success"
            des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora itaque accusamus corporis dolor debitis natus sapiente, voluptates possimus minima totam!"
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Achievement;
