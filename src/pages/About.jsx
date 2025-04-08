import { HeartHandshake, Brain, BarChart3 } from "lucide-react";

export default function About() {
  const team = [
    {
      id: "1",
      name: "Deepak Dutt",
      role: "Full Stack Developer",
      img: "https://avatarfiles.alphacoders.com/222/222663.jpg",
    },
    {
      id: "2",
      name: "Samarth Vohra",
      role: "ML Engineer",
      img: "https://images.pexels.com/photos/1407322/pexels-photo-1407322.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: "3",
      name: "Richa Anand",
      role: "Full Stack Developer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLkDSdpBEN3tksgeiC6FtBtoc1r838wqyeew&s",
    },
    {
      id: "4",
      name: "Swati Saxena",
      role: "UI/UX Designer",
      img: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#36247e] to-[#7b3476] py-12 px-6 flex flex-col items-center text-white space-y-24">
      {/* Intro */}
      <div className="max-w-4xl text-center">
        <h1 className="text-5xl font-bold mb-6">About EquinoxMind</h1>
        <p className="text-lg leading-relaxed text-gray-100">
          EquinoxMind is an AI-powered mental health support system designed to help individuals understand and manage their mental well-being.
          Our mission is to leverage machine learning to provide insights, self-assessments, and resources for mental health conditions such as
          depression, anxiety, OCD, schizophrenia, and more.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-white text-gray-800 p-8 rounded-2xl shadow-xl w-full max-w-4xl text-center space-y-4">
        <HeartHandshake className="mx-auto w-10 h-10 text-[#7b3476]" />
        <h2 className="text-2xl font-semibold">Our Mission</h2>
        <p>
          To democratize access to mental health support using the power of AI, fostering emotional resilience, self-awareness, and personal growth for all.
        </p>
      </div>

      {/* Core Values */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">Core Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Empathy First",
              desc: "We prioritize understanding and compassion in everything we design.",
            },
            {
              title: "Data Responsibility",
              desc: "User privacy and secure handling of data is our top ethical priority.",
            },
            {
              title: "Accessibility",
              desc: "Mental health support should be universally available and inclusive.",
            },
          ].map((value, i) => (
            <div
              key={i}
              className="bg-white text-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-bold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section className="w-full max-w-5xl text-center">
        <h2 className="text-3xl font-semibold mb-12 text-white">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
          {[
            {
              icon: <Brain className="w-10 h-10 mx-auto mb-4 text-white" />,
              title: "Smart Assessment",
              desc: "Answer a few guided questions for our system to understand your state of mind.",
            },
            {
              icon: <BarChart3 className="w-10 h-10 mx-auto mb-4 text-white" />,
              title: "AI-Driven Analysis",
              desc: "Our machine learning models analyze your inputs to provide insights and possible conditions.",
            },
            {
              icon: <HeartHandshake className="w-10 h-10 mx-auto mb-4 text-white" />,
              title: "Resources & Support",
              desc: "We guide you toward helpful resources, tips, and professional help when needed.",
            },
          ].map((step, idx) => (
            <div key={idx} className="p-6 rounded-xl bg-white/10 backdrop-blur-md border border-white/20">
              {step.icon}
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-gray-100">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full max-w-6xl">
        <h2 className="text-3xl font-semibold text-center mb-12 text-white">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-white text-gray-800 p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-2 text-center"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-24 h-24 mx-auto rounded-full object-cover shadow-md mb-4"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <div className="bg-white text-[#36247e] p-8 rounded-2xl shadow-md text-center w-full max-w-3xl mt-16">
        <h3 className="text-2xl font-bold mb-2">Ready to take the next step?</h3>
        <p className="mb-4">Try a self-assessment or explore our resources to begin your journey toward better mental health.</p>
        <button className="bg-[#7b3476] text-white px-6 py-2 rounded-full hover:bg-[#3d1571] transition">
          Get Started
        </button>
      </div>
    </div>
  );
}
