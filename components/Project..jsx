"use client";
import React, { useState } from "react";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

// contoh data portfolio
const projectsData = [
  {
    id: 1,
    title: "Coming Soon!",
    image: "/images/tes.jpg",
    description:
      "There are currently no projects, take quick action to create a project now!",
    link: "https://yourportfolio.com",
  },
  {
    id: 2,
    title: "Coming Soon!",
    image: "/images/tes.jpg",
    description:
      "There are currently no projects, take quick action to create a project now!",
    link: "https://yourportfolio.com",
  },
  {
    id: 3,
    title: "Coming Soon!",
    image: "/images/tes.jpg",
    description:
      "There are currently no projects, take quick action to create a project now!",
    link: "https://yourportfolio.com",
  },
  {
    id: 4,
    title: "Coming Soon!",
    image: "/images/tes.jpg",
    description:
      "There are currently no projects, take quick action to create a project now!",
    link: "https://yourportfolio.com",
  },
  {
    id: 5,
    title: "Coming Soon!",
    image: "/images/tes.jpg",
    description:
      "There are currently no projects, take quick action to create a project now!",
    link: "https://yourportfolio.com",
  },
  {
    id: 6,
    title: "Coming Soon!",
    image: "/images/tes.jpg",
    description:
      "There are currently no projects, take quick action to create a project now!",
    link: "https://yourportfolio.com",
  },
  // bisa tambahin lagi
];

// Fungsi potong teks
const truncateText = (text, wordLimit) => {
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(3);

  const showProjectDetail = (project) => {
    MySwal.fire({
      title: project.title,
      html: `
      <style>
        .swal-custom-img {
          width: 100%;
          border-radius: 8px;
          margin-bottom: 15px;
          border: 1px solid #2CFF05;
        }
        .swal-custom-link {
          text-decoration: none;
          display: block;
          margin-top: 10px;
          font-weight: 500;
          transition: color 0.3s ease;
          border-radius: 8px;
          margin-bottom: 15px;
          border: 1px solid #2CFF05;
        }
        .swal-custom-link:hover {
          color: #2CFF05;
        }
      </style>
      <img src="${project.image}" alt="${project.title}" class="swal-custom-img"/>
      <p style="text-align:justify">${project.description}</p>
      <a href="${project.link}" target="_blank" class="swal-custom-link">Link Website</a>
    `,
      showCloseButton: true,
      showConfirmButton: false,
      width: "600px",
      background: "#282c33",
      color: "#abb2bf",
    });
  };

  return (
    <div className="py-10 px-6">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 p-10 md:p-15">
        {projectsData.slice(0, visibleProjects).map((project) => (
          <div
            key={project.id}
            className="border-2 rounded-xl hover:border-[var(--primary)] shadow-md hover:shadow-lg transition-all duration-300 hover:shadow-green-400 cursor-pointer overflow-hidden"
            onClick={() => showProjectDetail(project)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover blur-sm hover:blur-none transition-all duration-300"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm">{truncateText(project.description, 10)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProjects < projectsData.length && (
        <div className="flex justify-center mt-6">
          <button
            onClick={() => setVisibleProjects((prev) => prev + 3)}
            className="px-6 py-2 rounded-lg hover:text-[var(--primary)] transition hover:border-green-400 border-1 cursor-pointer hover:drop-shadow-[0px_0px_15px_rgb(0,0,0)] hover:drop-shadow-green-400"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
