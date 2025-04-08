import {Facebook, Instagram, Linkedin, TwitterIcon, } from 'lucide-react'


const Footer = () => {
  return (
    <footer className="text-gray-300 py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Branding Section */}
        <div>
          <h2 className="text-2xl font-bold text-white">EquinoxMind</h2>
          <p className="text-sm mt-2">AI-Powered Mental Health Support System</p>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col space-y-2">
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