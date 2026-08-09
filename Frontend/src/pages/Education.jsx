import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

function Education() {
  const education = [
    {
      degree: "Master Of Computer Application (M.C.A)",
      branch: "Computer Applictions",
      college: "LNCT University",
      university: "LNCT University",
      duration: "2021 - 2023",
      grade: "CGPA: 9.4",
    },
    {
      degree: "Bachelor Of Computer Application (B.C.A)",
      branch: "Computer Applictions",
      college: "",
      university: "",
      duration: "2018 - 2020",
      grade: "82%",
    },
    {
      degree: "Higher Secondary (12th)",
      branch: "Science",
      college: "",
      university: "",
      duration: "2018 - 2020",
      grade: "82%",
    },
    {
      degree: "Secondary School (10th)",
      branch: "",
      university: "",
      college: "Your School Name",
      duration: "2017 - 2018",
      grade: "88%",
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen bg-[#0d0d0d] text-white py-20 px-8"
    >
      {/* Heading */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold">
          My <span className="text-gray-400">Education</span>
        </h1>

        <div className="w-28 h-1 bg-gray-500 mx-auto mt-4 rounded-full"></div>
      </div>

      {/* Timeline */}
      <div className="max-w-4xl mx-auto relative">

        {/* Vertical Line */}
        <div className="absolute left-5 top-0 h-full w-1 bg-gray-700"></div>

        {education.map((item, index) => (
          <div
            key={index}
            className="relative pl-16 mb-12"
          >
            {/* Circle */}
            <div className="absolute left-0 w-10 h-10 rounded-full bg-gray-900 border-4 border-gray-500 flex items-center justify-center">
              <GraduationCap size={18} />
            </div>

            {/* Card */}
            <div className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-6 hover:border-gray-400 hover:shadow-lg hover:shadow-gray-700/40 transition-all duration-300">

              <div className="grid md:grid-cols-4 gap-6 items-center">

                {/* Left Side */}
                <div className="md:col-span-3">
                  <h2 className="text-2xl font-semibold">
                    {item.degree}
                  </h2>

                  {item.branch && (
                    <p className="text-gray-400 mt-2">
                      {item.branch}
                    </p>
                  )}

                  <p className="mt-3 text-lg text-gray-300">
                    {item.college}
                  </p>
                  <p className="text-gray-500 mt-2">
                    {item.university}
                  </p>

                  <div className="flex items-center gap-2 text-gray-500 mt-4">
                    <Calendar size={16} />
                    <span>{item.duration}</span>
                  </div>

                  <p className="mt-2 text-gray-400">
                    {item.grade}
                  </p>
                </div>

                {/* Right Side Logo */}
                <div className="flex justify-center md:justify-end">
                  <img
                    src="/images/university-logo.png"
                    alt="University Logo"
                    className="w-28 h-28 object-contain rounded-full border-2 border-gray-600 p-2 bg-white hover:scale-110 transition duration-300"
                  />
                </div>

              </div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;