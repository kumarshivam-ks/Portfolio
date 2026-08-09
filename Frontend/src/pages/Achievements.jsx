import React from "react";
import {
  Trophy,
  Award,
  Briefcase,
  FolderGit2,
  Medal,
  BadgeCheck,
} from "lucide-react";

function Achievements() {
  const stats = [
    {
      icon: <Briefcase size={40} />,
      value: "2+",
      title: "Years Experience",
    },
    {
      icon: <FolderGit2 size={40} />,
      value: "3+",
      title: "Enterprise Projects",
    },
    {
      icon: <Award size={40} />,
      value: "1",
      title: "Employee Award",
    },
    {
      icon: <BadgeCheck size={40} />,
      value: "100%",
      title: "Client Satisfaction",
    },
  ];

  const achievements = [
    {
      title: "Start of the Month Award",
      company: "Xtranet Technologies",
      date: "May 2025",
      description:
        "Received recognition for outstanding performance and dedication towards project delivery.",
    },
    {
      title: "Completed Professional Training",
      company: "Xtranet Technologies",
      date: "2023",
      description:
        "Successfully completed 2 months of Full Stack Development training and assessments.",
    },
  ];

  return (
    <section
      id="achievements"
      className="min-h-screen bg-[#0d0d0d] text-white py-20 px-8"
    >
      {/* Heading */}

      <div className="text-center mb-16">

        <h1 className="text-5xl font-bold">
          My <span className="text-gray-400">Achievements</span>
        </h1>

        <div className="w-28 h-1 bg-gray-500 rounded-full mx-auto mt-4"></div>

      </div>

      {/* Stats */}

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">

        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] rounded-2xl border border-gray-700 p-8 text-center hover:border-gray-400 hover:-translate-y-2 hover:shadow-[0_0_30px_rgba(156,163,175,.3)] transition-all duration-500"
          >
            <div className="text-gray-400 flex justify-center">
              {item.icon}
            </div>

            <h2 className="text-4xl font-bold mt-5">
              {item.value}
            </h2>

            <p className="text-gray-400 mt-3">
              {item.title}
            </p>
          </div>
        ))}

      </div>

      {/* Achievement Cards */}

      <div className="max-w-5xl mx-auto mt-20 space-y-8">

        {achievements.map((item, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] border border-gray-700 rounded-2xl p-8 hover:border-gray-400 hover:shadow-[0_0_25px_rgba(156,163,175,.3)] transition-all duration-500"
          >
            <div className="flex items-start gap-5">

              <div className="bg-gray-800 p-4 rounded-full">
                <Trophy className="text-yellow-400" size={28} />
              </div>

              <div className="flex-1">

                <h2 className="text-2xl font-bold">
                  {item.title}
                </h2>

                <p className="text-gray-400 mt-2">
                  {item.company} • {item.date}
                </p>

                <p className="text-gray-300 mt-5 leading-7">
                  {item.description}
                </p>

              </div>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Achievements;