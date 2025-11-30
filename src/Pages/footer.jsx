import { Link } from "react-router";
import LogoFooter from "../Components/Logo";

const Footer = () => {
  return (
    <footer className="bg-neutral-primary  text-black dark:text-white">
      <div className="mx-auto w-full max-w-7xl ">
        <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4">
          <ul className="w-[200px] flex justify-start items-start flex-col hidden lg:block">
            <li className="">
              <LogoFooter />
            </li>
            <li>
              <p className="w-[300px] text-[12px] ">
                We turn thoughtful designs into fast, reliable digital
                experiences. From landing pages to full products, every detail
                is built with clean, modern code. Brands partner here to launch
                interfaces that look sharp and feel effortless to use. Your
                ideas become scalable, production‑ready web experiences users
                love.
              </p>
            </li>
          </ul>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
              Company
            </h2>
            <ul className="text-body font-medium">
              <li className="mb-4">
                <Link to="/about" className="hover:underline">
                  About
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/skills" className="hover:underline">
                  Skills
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/projects" className="hover:underline">
                  Projects
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/blog" className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
              Help center
            </h2>

            <ul className="text-body font-medium">
              <li className="mb-4">
                <Link
                  to="https://www.linkedin.com/in/obaid-ur-rehman-38b45230a/"
                  className="hover:underline"
                >
                  Linked In
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="https://www.instagram.com/___obze/"
                  className="hover:underline"
                >
                  Instagram
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="https://www.facebook.com/obaid.mughal.9659"
                  className="hover:underline"
                >
                  Facebook
                </Link>
              </li>
              <li className="mb-4">
                <Link
                  to="https://wa.me/923483116357"
                  className="hover:underline"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="mb-6 text-sm font-semibold text-heading uppercase">
              Legal
            </h2>
            <ul className="text-body font-medium">
              <li className="mb-4">
                <Link to="/privacy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/licensing" className="hover:underline">
                  Licensing
                </Link>
              </li>
              <li className="mb-4">
                <Link to="/terms" className="hover:underline">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
          <div></div>
        </div>
        <div className="px-4 py-6 text-center md:text-left bg-neutral-secondary-soft md:flex md:items-center md:justify-between">
          <span className="text-1xl text-center md:text-left font-semibold italic text-body sm:text-center">
            © 2025{" "}
            <Link to="/" className="hover:underline">
              obze.dev™
            </Link>
            . All Rights Reserved.
          </span>
          <div className="flex items-center mt-4 sm:justify-center md:mt-0 space-x-2 rtl:space-x-reverse ">
            <Link
              to="https://www.facebook.com/obaid.mughal.9659"
              className=" hover:text-cyan-500 text-body hover:text-heading"
              aria-label="Facebook page"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6h.543Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>

            <Link
              to="#"
              className="hover:text-cyan-500 text-body hover:text-heading ms-5"
              aria-label="GitHub account"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12.006 2a9.847 9.847 0 0 0-6.484 2.44 10.32 10.32 0 0 0-3.393 6.17 10.48 10.48 0 0 0 1.317 6.955 10.045 10.045 0 0 0 5.4 4.418c.504.095.683-.223.683-.494 0-.245-.01-1.052-.014-1.908-2.78.62-3.366-1.21-3.366-1.21a2.711 2.711 0 0 0-1.11-1.5c-.907-.637.07-.621.07-.621.317.044.62.163.885.346.266.183.487.426.647.71.135.253.318.476.538.655a2.079 2.079 0 0 0 2.37.196c.045-.52.27-1.006.635-1.37-2.219-.259-4.554-1.138-4.554-5.07a4.022 4.022 0 0 1 1.031-2.75 3.77 3.77 0 0 1 .096-2.713s.839-.275 2.749 1.05a9.26 9.26 0 0 1 5.004 0c1.906-1.325 2.74-1.05 2.74-1.05.37.858.406 1.828.101 2.713a4.017 4.017 0 0 1 1.029 2.75c0 3.939-2.339 4.805-4.564 5.058a2.471 2.471 0 0 1 .679 1.897c0 1.372-.012 2.477-.012 2.814 0 .272.18.592.687.492a10.05 10.05 0 0 0 5.388-4.421 10.473 10.473 0 0 0 1.313-6.948 10.32 10.32 0 0 0-3.39-6.165A9.847 9.847 0 0 0 12.007 2Z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              to="https://www.instagram.com/___obze/"
              className="text-body hover:text-heading ms-5 hover:text-cyan-500"
              aria-label="Instagram account"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm5 2.5A4.505 4.505 0 0 0 7.5 11 4.505 4.505 0 0 0 12 15.5 4.505 4.505 0 0 0 16.5 11 4.505 4.505 0 0 0 12 6.5zm0 2A2.503 2.503 0 0 1 14.5 11 2.503 2.503 0 0 1 12 13.5 2.503 2.503 0 0 1 9.5 11 2.503 2.503 0 0 1 12 8.5zM17.75 6a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
              </svg>
            </Link>
            <Link
              to="https://www.linkedin.com/in/obaid-ur-rehman-38b45230a/"
              className="text-body hover:text-heading ms-5 hover:text-cyan-500"
              aria-label="LinkedIn account"
            >
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M4.983 3.5C4.983 4.604 4.122 5.5 3 5.5 1.903 5.5 1 4.604 1 3.5 1 2.422 1.887 1.5 3.008 1.5h.016C4.122 1.5 4.983 2.422 4.983 3.5zM2 8h2.995V22H2V8zm6.535 0H12.4v1.906h.043C13.01 8.912 14.18 8 15.994 8 19.3 8 20 10.238 20 13.297V22h-3V13.906c0-1.93-.461-3.031-1.651-3.031-1.313 0-1.868.941-1.868 3.031V22h-3V8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
