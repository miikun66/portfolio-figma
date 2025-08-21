// src/components/About.jsx
import { FaGithub, FaLinkedin, FaFacebook, FaYoutube } from "react-icons/fa";

export default function About() {
  return (
    <div className="max-w-4xl lg:mx-auto shadow-lg rounded-lg p-8 mt-20 mx-5 border-2 border-[var(--primary)] hover:shadow-lg transition-all duration-300 hover:shadow-green-400 cursor-pointer">
      {/* Header */}
      <div className="flex items-center gap-6 border-b pb-6">
        <img
          src="/images/hero.webp"
          alt="Profile"
          className="w-20 h-20 md:w-28 md:h-28 rounded-full object-cover border border-[var(--primary)] opacity-15"
        />
        <div>
          <h1 className="text-3xl font-bold">Michael Christianto</h1>
          <p>Beginner Developer</p>
          <div className="flex gap-4 mt-2 text-xl ">
            <a href="https://github.com/" target="_blank" rel="noreferrer">
              <FaGithub className="hover:text-black" />
            </a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer">
              <FaLinkedin className="hover:text-blue-600" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebook className="hover:text-blue-500" />
            </a>
            <a href="https://youtube.com/" target="_blank" rel="noreferrer">
              <FaYoutube className="hover:text-red-500" />
            </a>
          </div>
        </div>
      </div>

      {/* About Me */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-3">About Me</h2>
        <p className=" leading-relaxed">
          Hi, my name is Michael, and I’m a beginner who has just started my
          journey in the world of programming. I enjoy learning step by step,
          even if it’s challenging at times, because I believe every small
          progress brings me closer to my goals.
        </p>
        <br />
        <p className=" leading-relaxed">
          My dream is to become a skilled developer who can create something
          meaningful for people, especially games. Since I was young, I’ve
          always been fascinated by how games are built and how they can inspire
          and entertain others. That’s why I’m working hard to improve my coding
          skills, little by little, with patience and consistency.
        </p>{" "}
        <br />
        <p className=" leading-relaxed">
          I know the road is long, but I’m excited to keep learning and one day
          turn my dream of building my own game into reality.
        </p>
      </div>

      {/* Experience */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-3">Experience</h2>

        <div className="mb-4">
          <h3 className="font-bold">
            Kitchen Assistant - Pangsit Noodle Restaurant
          </h3>
          <p className="text-sm text-gray-500">2016 - 2021</p>
          <p>
            Assisted in kitchen management, food preparation, and maintaining a
            clean working environment. Developed teamwork and time management
            skills in a fast-paced restaurant setting.
          </p>
        </div>

        <div>
          <h3 className="font-bold">
            Data Entry Administrator – Local Business
          </h3>
          <p className="text-sm text-gray-500">2022 - 2025</p>
          <p>
            Managed customer and sales data entry, organized reports, and
            supported backend operations using Google Spreadsheet. Learned
            database handling and basic deployment processes.
          </p>
        </div>
      </div>

      {/* Education */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-3">Education</h2>
        <p className="font-bold">High School - Harapan Bangsa</p>
        <p>accountancy (2013 - 2016)</p>
      </div>

      {/* Skills */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold border-b pb-2 mb-3">Skills</h2>
        <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
          <li>React & Laravel</li>
          <li>Data Entry</li>
          <li>TailwindCSS</li>
          <li>Kitchen Management</li>
          <li>Git & GitHub</li>
          <li>Problem Solving</li>
        </ul>
      </div>

      {/* Download Button */}
      <div className="mt-8 text-center">
        <a
          href="/cv.pdf"
          download="cv.pdf"
          className="shadow-green-400 font-semibold py-2 px-6 rounded-lg shadow hover:text-[var(--primary)] transition-all duration-200 hover:border-green-400 cursor-pointer hover:drop-shadow-[0px_0px_15px_rgb(0,0,0)] hover:drop-shadow-green-400"
        >
          Download CV
        </a>
      </div>
    </div>
  );
}
