import React from "react";
import {
  FolderOpen,
  ExternalLink,
  ArrowRight,
  Code2,
} from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "My Srinagar",
      category: "Smart City Management System",
      description:
        "Developed a Smart City platform providing digital municipal services such as contractor card management, water & sanitation services, and online hall booking.",

      tech: [
        "C#",
        ".NET",
        "React",
        "PostgreSQL",
        "REST API",
        "Kendo UI",
      ],

      features: [
        "Hall Booking System",
        "Contractor Card Management",
        "Water & Sanitation",
        "CMS Integration",
      ],

      github: "#",
      live: "#",
    },

    {
      title: "ASAL JOB",
      category: "Job Portal",

      description:
        "Professional job searching platform where employers and candidates connect using real-time job listings.",

      tech: [
        "ASP.NET Core",
        "React",
        "PostgreSQL",
        "REST API",
      ],

      features: [
        "Job Search",
        "Employer Dashboard",
        "Candidate Profiles",
        "Real-time Notifications",
      ],

      github: "#",
      live: "#",
    },

    {
      title: "Document Management System",
      category: "Enterprise DMS",

      description:
        "Enterprise document management platform with secure storage, workflow automation and advanced search.",

      tech: [
        "Flutter",
        ".NET",
        "Kafka",
        "PostgreSQL",
      ],

      features: [
        "Workflow Automation",
        "Role Based Access",
        "Document Search",
        "Kafka Integration",
      ],

      github: "#",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-[#0d0d0d] text-white py-20 px-8"
    >
      {/* Heading */}
      <div className="text-center mb-20">
        <h1 className="text-5xl font-bold">
          My <span className="text-gray-400">Projects</span>
        </h1>

        <div className="w-28 h-1 bg-gray-500 rounded-full mx-auto mt-4"></div>

        <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
          Enterprise applications and full-stack projects developed during my
          professional journey.
        </p>
      </div>

      {/* Projects */}

      <div className="max-w-7xl mx-auto space-y-10">

        {projects.map((project, index) => (

          <div
            key={index}
            className="bg-[#1a1a1a] rounded-3xl border border-gray-700 hover:border-gray-400 hover:shadow-[0_0_30px_rgba(156,163,175,.3)] transition-all duration-500 overflow-hidden"
          >

            <div className="grid lg:grid-cols-3">

              {/* Left */}

              <div className="lg:col-span-2 p-8">

                <p className="text-sm uppercase tracking-widest text-gray-500">
                  Project {(index + 1).toString().padStart(2, "0")}
                </p>

                <h2 className="text-3xl font-bold mt-3">
                  {project.title}
                </h2>

                <p className="text-gray-400 mt-2">
                  {project.category}
                </p>

                <p className="text-gray-300 mt-6 leading-8">
                  {project.description}
                </p>

                {/* Tech Stack */}

                <div className="flex flex-wrap gap-3 mt-8">

                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-full bg-gray-800 border border-gray-600 text-sm hover:bg-gray-700 transition"
                    >
                      {item}
                    </span>
                  ))}

                </div>

                {/* Features */}

                <div className="grid md:grid-cols-2 gap-4 mt-8">

                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <ArrowRight size={16} />
                      {feature}
                    </div>
                  ))}

                </div>

                {/* Buttons */}

                <div className="flex gap-5 mt-10">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl bg-gray-800 hover:bg-gray-700 transition"
                  >
                    <Code2 size={18} />
                    Source Code
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-xl border border-gray-600 hover:border-gray-400 transition"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>

                </div>

              </div>

              {/* Right */}

              <div className="bg-gradient-to-br from-gray-900 to-black border-l border-gray-700 flex flex-col items-center justify-center p-8">

                <div className="w-36 h-36 rounded-full bg-[#242424] flex items-center justify-center shadow-[0_0_35px_rgba(156,163,175,.3)]">

                  <FolderOpen
                    size={60}
                    className="text-gray-400"
                  />

                </div>

                <h3 className="text-2xl font-semibold mt-8 text-center">
                  {project.title}
                </h3>

                <p className="text-gray-500 mt-2 text-center">
                  Full Stack Application
                </p>

              </div>

            </div>

          </div>

        ))}

      </div>
    </section>
  );
}

export default Projects;