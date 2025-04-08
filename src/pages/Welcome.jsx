import { useNavigate } from "react-router-dom";


const Welcome = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-white text-gray-800">

      {/* HERO SECTION */}
      <div
        className="relative flex flex-col items-center justify-center min-h-screen px-6 text-white text-center overflow-hidden"
        style={{
          backgroundImage: 'url("./conversational-ai.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#3d1571]/40 to-[#36247e]/50 backdrop-blur-xs" />
        <div className="relative z-10 max-w-3xl ">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 drop-shadow-md tracking-wide">
            " Welcome to <span className="">EquinoxMind "</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-6">
            Your AI-powered companion for mental well-being.
          </p>
          <button
            className="mt-4 px-6 py-3 bg-[#7b3476] text-white font-medium rounded hover:bg-[#3d1571] transition duration-300 shadow-md cursor-pointer"
            onClick={() => navigate('/login')}>
            Get Started
          </button>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <section className="bg-gray-100 py-24 px-6 md:px-16 fade-in">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#3d1571]">What We Offer</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: '🤖',
              title: 'AI Therapy',
              desc: 'Get instant support with our empathetic AI therapist.',
            },
            {
              icon: '📊',
              title: 'Mood Tracking',
              desc: 'Monitor emotions with daily check-ins and trends.',
            },
            {
              icon: '🧘',
              title: 'Meditation Tools',
              desc: 'Relax with guided sessions for mindfulness.',
            },
            {
              icon: '👥',
              title: 'Supportive Community',
              desc: 'Share experiences and grow with peers.',
            },
          ].map(({ icon, title, desc }, i) => (
            <div
              key={i}
              className="bg-white p-8 shadow-md rounded-2xl text-center hover:shadow-xl transition-transform duration-300 hover:scale-105 fade-in-up"
            >
              <div className="text-5xl mb-4">{icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-[#36247e]">{title}</h3>
              <p className="text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section className="bg-white py-24 px-6 md:px-20 fade-in">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Video */}
          <div className="w-full fade-in-up">
            <video
              autoPlay
              loop
              muted
              className="w-full rounded-xl shadow-xl"
            >
              <source src="/hero.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Steps */}
          <div>
            <h2 className="text-4xl font-bold mb-6 text-[#3d1571]">How It Works</h2>
            <p className="text-lg text-gray-700 mb-6">
              EquinoxMind blends AI and human compassion to deliver personalized support:
            </p>
            <ol className="space-y-6">
              {[
                "Take a personalized mental health assessment.",
                "Receive tailored advice and tools instantly.",
                "Access 24/7 support through chat or consultation.",
              ].map((step, idx) => (
                <li key={idx} className="flex items-start fade-in-up">
                  <span className="font-bold text-xl mr-4" style={{ color: '#7b3476' }}>
                    {idx + 1}.
                  </span>
                  <p className="text-gray-700">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Welcome;
