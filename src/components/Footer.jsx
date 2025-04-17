import { Facebook, Instagram, Linkedin, TwitterIcon, } from 'lucide-react'


const Footer = () => {
  return (
    <footer className="absolute text-gray-300 py-10 mb-0 px-24 mt-28">
      <div className="max-w-10xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Branding Section */}
        <div>
          <div className="text-2xl font-bold flex gap-2 items-center">
            <img src="./logo.png" height="24px" width="24px" alt="logo" />
            <div>
              Equinox <span>Mind</span>
            </div>
          </div>
          <p className="text-sm mt-2">AI-Powered Mental Health Support System</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col ml-8 space-y-2">
          <a href="/" className="hover:text-white">Home</a>
          <a href="/about" className="hover:text-white">About</a>
          <a href="/contact" className="hover:text-white">Contact</a>
          <a href="/blogs" className="hover:text-white">Blogs</a>
        </div>

        {/* Social Media & Copyright */}
        <div className="flex flex-col space-y-2">
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Facebook /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><TwitterIcon /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Instagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white"><Linkedin /></a>
          </div>
          <p className="text-sm mt-4">&copy; {new Date().getFullYear()} EquinoxMind. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;