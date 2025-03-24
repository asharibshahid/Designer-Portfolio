import Link from 'next/link';
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full p-6 z-50 backdrop-blur-md bg-opacity-90 bg-gray-900 animate-slideDown">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
       {/* Logo */}
       <Link href="/" className="flex items-center text-2xl font-bold text-white space-x-2 ">
          <Image src="/logo.jpeg" alt="GS Designers Logo" width={40} height={40} className='rounded-full bg-black'/>
          <span>GS DESIGNERS<span className="text-red-500">.</span></span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex space-x-8">
          <Link href="/projects" className="text-white hover:text-red-500 transition-all relative group">
            Work
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/about" className="text-white hover:text-red-500 transition-all relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/services" className="text-white hover:text-red-500 transition-all relative group">
            Services
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
          </Link>
          <Link href="/contact" className="text-white hover:text-red-500 transition-all relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-red-500 transition-all group-hover:w-full"></span>
          </Link>
        </div>
      </div>
    
    </nav>
  );
};

export default Navbar;
