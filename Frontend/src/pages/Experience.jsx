import React, { useState } from "react";
import {
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

import CompanyImg from "../images/XtrSynergyLogo.png";

function Experience() {
  const [openCard, setOpenCard] = useState(null);

  const experiences = [
    {
      company: "Xtranet Technologies",
      role: ".NET Full Stack Developer",
      duration: "June 2023 - Present",
      logo: CompanyImg,
      technologies: [
        "C#",
        ".NET Core",
        "React",
        "PostgreSQL",
        "Kafka",
        "Tailwind CSS",
        "Kendo UI",
        "AG Grid",
      ],
      achievements: [
        "Developed scalable web applications using C#, ASP.NET Core, React, JavaScript and PostgreSQL.",
        "Built RESTful APIs and integrated third-party services.",
        "Developed Smart City (My Srinagar), ASAL JOB, and Document Management System (DMS).",
        "Optimized SQL queries and backend performance, improving response time.",
        "Worked with Kafka for asynchronous messaging and workflow automation.",
        "Designed responsive UI using HTML, CSS, Bootstrap, Tailwind CSS, Kendo UI, and AG Grid.",
      ],
    },
{
      company: "Xtranet Technologies",
      role: ".NET Full Stack Developer",
      duration: "June 2023 - Present",
      logo: CompanyImg,
      technologies: [
        "C#",
        ".NET Core",
        "React",
        "PostgreSQL",
        "Kafka",
        "Tailwind CSS",
        "Kendo UI",
        "AG Grid",
      ],
      achievements: [
        "Developed scalable web applications using C#, ASP.NET Core, React, JavaScript and PostgreSQL.",
        "Built RESTful APIs and integrated third-party services.",
        "Developed Smart City (My Srinagar), ASAL JOB, and Document Management System (DMS).",
        "Optimized SQL queries and backend performance, improving response time.",
        "Worked with Kafka for asynchronous messaging and workflow automation.",
        "Designed responsive UI using HTML, CSS, Bootstrap, Tailwind CSS, Kendo UI, and AG Grid.",
      ],
    },

  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-[#0d0d0d] text-white py-20 px-8"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          Work <span className="text-gray-400">Experience</span>
        </h1>

        <div className="w-28 h-1 bg-gray-500 mx-auto mt-4 rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto relative">

        {/* Timeline */}
        <div className="absolute left-5 top-0 h-full w-1 bg-gray-700"></div>

        {experiences.map((exp, index) => (
          <div key={index} className="relative pl-16 mb-12">

            {/* Timeline Icon */}
            <div className="absolute left-0 w-10 h-10 rounded-full bg-gray-900 border-4 border-gray-500 flex items-center justify-center">
              <Briefcase size={18} />
            </div>

            {/* Card */}
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl overflow-hidden hover:border-gray-400 hover:shadow-lg hover:shadow-gray-700/40 transition-all duration-300">

              {/* Header */}
              <div className="grid md:grid-cols-4 gap-6 items-center p-6">

                {/* Left */}
                <div className="md:col-span-3">

                  <h2 className="text-2xl font-bold">
                    {exp.role}
                  </h2>

                  <h3 className="text-lg text-gray-300 mt-2">
                    {exp.company}
                  </h3>

                  <div className="flex items-center gap-2 mt-4 text-gray-500">
                    <Calendar size={16} />
                    <span>{exp.duration}</span>
                  </div>

                </div>

                {/* Logo */}
                <div className="flex flex-col items-center">

                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-28 h-28 object-contain rounded-full bg-white p-2 border border-gray-600 shadow-[0_0_25px_rgba(156,163,175,0.4)] hover:shadow-[0_0_40px_rgba(209,213,219,0.7)] hover:scale-110 transition-all duration-500"
                  />

                  <button
                    onClick={() =>
                      setOpenCard(openCard === index ? null : index)
                    }
                    className="mt-5 flex items-center gap-2 text-gray-300 hover:text-white transition"
                  >
                    {openCard === index ? "Hide Details" : "View Details"}

                    {openCard === index ? (
                      <ChevronUp size={18} />
                    ) : (
                      <ChevronDown size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* Expand Section */}

              <div
                className={`transition-all duration-500 overflow-hidden ${
                  openCard === index
                    ? "max-h-[800px] opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="border-t border-gray-700 p-6">

                  <h3 className="text-xl font-semibold mb-5">
                    Key Achievements
                  </h3>

                  <ul className="space-y-3 text-gray-300">

                    {exp.achievements.map((item, i) => (
                      <li
                        key={i}
                        className="flex gap-3"
                      >
                        <span className="text-gray-400">✔</span>
                        {item}
                      </li>
                    ))}

                  </ul>

                  <h3 className="text-xl font-semibold mt-8 mb-4">
                    Technologies
                  </h3>

                  <div className="flex flex-wrap gap-3">

                    {exp.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-4 py-2 rounded-full bg-gray-800 border border-gray-600 hover:bg-gray-700 transition"
                      >
                        {tech}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Experience;