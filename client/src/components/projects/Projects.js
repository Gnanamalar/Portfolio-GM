import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="FOOD DELIVERY"
          des="Designed a user-friendly UI/UX for a Food Delivery App,focusing on intuitive navigation and appealing aesthetics.Enhanced user experience by implementing smooth transitions and interactive elements."
          src={projectOne}
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Designed an engaging UI/UX for an e-commerce platform,emphasizing seamless navigation and attractive visuals.Improved user experience with intuitive product browsing,easy checkout processes,and interactive elements."
          src={projectThree}
        />
        <ProjectsCard
          title="QUIZ App"
          des="Developed a Quiz App using Android Studio and Kotlin to aid in interview preparation.The app features a user-friendly interface with a variety of questions to help users practice and enhance their skills."
          src={projectTwo}
        />
        <ProjectsCard
          title="BMI CALCULATOR"
          des="Created a BMI Calculator app using Android Studio and Kotlin.The app provides a simple interface for users to input their data and instantly receive their Body Mass Index results"
          src={projectThree}
        />
        <ProjectsCard
          title="PEACE WORLD"
          des="Built a House Renting website hosted on Vercel,utilizing database storage for seamless data management.Providing users with a streamlined platform to search for rental properties and manage their listings efficiently."
          src={projectOne}
        />
         <ProjectsCard
          title="CGPA Calculator"
          des="Developed a React-based website catering to college students,featuring a versatile CGPA calculator accessible to engineering students across all departments and years.Providing a user-friendly interface for effortless GPA calculation and academic tracking."
          src={projectTwo}
        />
      </div>
    </section>
  );
}

export default Projects