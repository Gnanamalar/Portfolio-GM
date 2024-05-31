// import React from 'react'
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaReact } from "react-icons/fa";
// import { SiTailwindcss, SiFigma, SiNextdotjs } from "react-icons/si";
// const Media = () => {
//   return (
//     <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
//         <div>
//           <h2 className="text-base uppercase font-titleFont mb-4">
//             Find me in
//           </h2>
//           <div className="flex gap-4">
//             <span className="bannerIcon">
//               <FaFacebookF />
//             </span>
//             <span className="bannerIcon">
//               <FaTwitter />
//             </span>
//             <span className="bannerIcon">
//               <FaLinkedinIn />
//             </span>
//           </div>
//         </div>
//         <div>
//           <h2 className="text-base uppercase font-titleFont mb-4">
//             BEST SKILL ON
//           </h2>
//           <div className="flex gap-4">
//             <span className="bannerIcon">
//               <FaReact />
//             </span>
//             <span className="bannerIcon">
//               <SiNextdotjs />
//             </span>
//             <span className="bannerIcon">
//               <SiTailwindcss />
//             </span>
//             <span className="bannerIcon">
//               <SiFigma />
//             </span>
//           </div>
//         </div>
//       </div>
//   )
// }

// export default Media



import React from 'react'
import { FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import {  SiFigma, SiNodedotjs } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
        <div className="flex gap-4">
          <a href="https://github.com/Gnanamalar?tab=following" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/gnanamalar-s-58844a253" target="_blank" rel="noopener noreferrer" className="bannerIcon">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
          {/* <span className="bannerIcon">
            <Sicss />
          </span> */}
          <span className="bannerIcon">
            <SiFigma />
          </span>
        </div>
      </div>
    </div>
  )
}

export default Media

