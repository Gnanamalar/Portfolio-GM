import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2019 - 2025</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="B.Tech Information Technology"
            subTitle="Chennai Institute Of Technology (2021 - 2025)"
            result="8.56 (CGPA)"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Higher Secondary School"
            subTitle="Government Higher Secondary School (2021 - 2021)"
            result="89%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Government Higher Secondary School (2019 - 2020)"
            result="85%"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2023 - 2024</p>
          <h2 className="text-3xl md:text-4xl font-bold">Internship Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-End Developer"
            subTitle="Smartiapps Technologies - (June - 2023)"
            result="Chennai (Onsite)"
            des="Smartiapp's Technologies hiring process is an important part of our culture. Smartiapps Technologies care deeply about their teams and the people who make them up."
          />
          <ResumeCard
            title="Front-End-Developer"
            subTitle="Oasis Infobyte - (Aug - 2023)"
            result="Bangalore (Remote)"
            des="A popular destination with a growing number of highly qualified homegrown graduates, it's true that securing a role in Malaysia isn't easy."
          />
          <ResumeCard
            title="UI/UX Designer"
            subTitle="Codsoft - (April - 2024)"
            result="Bangalore (Remote)"
            des="The Codsoft has grown strongly over recent years, having transformed itself from a producer and innovation-based economy."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education