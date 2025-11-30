import { Link } from "react-router";  // Fixed import

import "remixicon/fonts/remixicon.css";

const Footer = () => {
  return (
    <footer className="bg-neutral-primary text-black dark:text-white">
      <div className="mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 gap-8 px-4 py-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand section - now responsive */}
          <div className="flex flex-col items-start space-y-4 lg:col-span-1">
          
            <p className="w-full text-[12px] sm:w-[300px] lg:w-[200px]">
              We turn thoughtful designs into fast, reliable digital experiences. From landing pages to full products, every detail is built with clean, modern code. Brands partner here to launch interfaces that look sharp and feel effortless to use. Your ideas become scalable, production-ready web experiences users love.
            </p>
          </div>
          
          {/* Company */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Company</h2>
            <ul className="text-body font-medium space-y-4">
              <li><Link to="/about" className="hover:underline">About</Link></li>
              <li><Link to="/skills" className="hover:underline">Skills</Link></li>
              <li><Link to="/projects" className="hover:underline">Projects</Link></li>
              <li><Link to="/blog" className="hover:underline">Blog</Link></li>
            </ul>
          </div>
          
          {/* Help Center */}
          <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">Help center</h2>
            <ul className="text-body font-medium space-y-4">
              <li>
                <a href="https://www.linkedin.com/in/obaid-ur-rehman-38b45230a/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/___obze/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/obaid.mughal.9659" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://wa.me/923483116357" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
          
        
        </div>
        
        {/* Bottom bar */}
        <div className="px-4 py-6  text-center bg-neutral-secondary-soft md:flex md:items-center md:justify-between md:text-left">
          <span className="text-xl font-semibold italic text-body">
            © 2025{' '}
            <Link to="/" className="hover:underline">obze.dev™</Link>
            . All Rights Reserved.
          </span>
          <div className="flex items-center text-black dark:text-white justify-center text-2xl  mt-4 space-x-6 md:mt-0">
            {/* Fixed GitHub link or remove if not needed */}
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-body hover:text-cyan-500" aria-label="GitHub">
             <i class="ri-github-fill"></i>
            </a>
            <a href="https://www.facebook.com/obaid.mughal.9659" className=" text-body hover:text-cyan-500" aria-label="Facebook">
             <i class="ri-facebook-circle-fill"></i>
            </a>
            <a href="https://www.instagram.com/___obze/" className="text-body hover:text-cyan-500" aria-label="Instagram">
             <i class="ri-instagram-line"></i>
            </a>
            <a href="https://www.linkedin.com/in/obaid-ur-rehman-38b45230a/" className="text-body hover:text-cyan-500" aria-label="LinkedIn">
             <i class="ri-linkedin-box-line"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
