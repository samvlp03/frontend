export default function Contact() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center">
        <div className="container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center">
          {/* Left Side - Contact Info */}
          <div className="lg:w-1/2 w-full text-white">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg mb-4">
              We’d love to hear from you! Whether you have questions about our AI-powered mental health system,
              need support, or just want to share feedback, feel free to reach out.
            </p>
            <p className="text-lg mb-2"><strong>Email:</strong> contact@equinoxmind.com</p>
            <p className="text-lg mb-2"><strong>Phone:</strong> +1 (123) 456-7890</p>
            <p className="text-lg mb-2"><strong>Address:</strong> JIMS(EMTC) 48/4 Knowledge Park III, Greater Noida, UP-201308</p>
            <p className="text-lg mt-4">
              Our team is available Monday through Friday, from 9 AM to 6 PM (IST). You can also reach us via
              our social media handles for updates and community discussions.
            </p>
          </div>

          {/* Right Side - Friendly Robot Image */}
          <div className="lg:w-1/2 w-full flex justify-center mt-10 lg:mt-0">
            <img src="https://wallpapers.com/images/high/large-phone-gwgx38cgxfcanke4.webp" alt="Friendly Robot" className="w-100 h-auto ml-10" />
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}
