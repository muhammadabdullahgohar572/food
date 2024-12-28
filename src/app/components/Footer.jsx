import Image from "next/image";
import logo from "../img/Navbar/logo.png";

export const Footer = () => {
  return (
    <>
      <div className="mx-auto cursor-pointer  bg-yellow-600 max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <Image src={logo} className="mr-3  w-[150px]" alt="CodewithFaraz Footer Logo" />

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2">
              <div>
                <h2 className="text-2xl font-bold text-black">Get the latest news!</h2>
                <p className="mt-4 text-black font-semibold">
                  Don't be shy. Say hi 👋. Do you have a project or an idea that could use some help? Let's work together.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <div className="w-full">
                <div className="relative max-w-lg">
                  <label className="sr-only"> Email </label>
                  <input
                    className="w-full rounded-full border-gray-200 outline-none bg-gray-100 p-4 pe-32 text-sm font-medium"
                    id="email"
                    type="email"
                    placeholder="user@codewithfaraz.com"
                  />
                  <button
                    type="submit"
                    id="subsbtn"
                    className="absolute end-1 top-1/2 -translate-y-1/2 rounded-full bg-blue-600 px-5 py-3 text-sm font-medium text-black transition hover:bg-blue-700"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-black">Quick Links</p>
              <ul className="mt-6 space-y-4 text-sm" style={{ listStyle: "none" }}>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Home
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    About Us
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Blogs
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Contact Us
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Write For Us
                  </span>
                </li>
              </ul>
            </div>

            {/* Components */}
            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-black">Components</p>
              <ul className="mt-6 space-y-4 text-sm" style={{ listStyle: "none" }}>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    HTML, CSS, and JS
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Python
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    C#
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Questions
                  </span>
                </li>
              </ul>
            </div>

            {/* Useful Tools */}
            <div className="relative">
              <p className="relative font-medium text-black">Useful Tools</p>
              <ul style={{ listStyle: "none" }} className="mt-6 space-y-4 text-sm">
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Case Converter
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Word Counter
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Slug Generator
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-red-600">
                    View More
                  </span>
                </li>
              </ul>
            </div>

            {/* Free Icons */}
            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-black">Free Icons</p>
              <ul style={{ listStyle: "none" }} className="mt-6 space-y-4 text-sm">
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    SVG
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Car SVG
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Emojis
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-red-600">
                    View More
                  </span>
                </li>
              </ul>
            </div>

            {/* Category */}
            <div className="col-span-2 sm:col-span-1">
              <p className="relative font-medium text-black">Category</p>
              <ul style={{ listStyle: "none" }} className="mt-6 space-y-4 text-sm">
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    App
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Form
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Navbar
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-black">
                    Landing Page
                  </span>
                </li>
                <li>
                  <span className="transition hover:opacity-75 text-red-600">
                    View More
                  </span>
                </li>
              </ul>
            </div>

            {/* Social Media */}
            <ul style={{ listStyle: "none" }} className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
              <li>
                <span  rel="noreferrer" target="_blank" className="transition hover:text-[#1877F2] text-black">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.47-3.879 3.805-3.879 1.104 0 2.261.079 2.26.079v2.51h-1.25c-1.227 0-1.597.759-1.597 1.537v1.853h2.566l-.33 2.891h-2.236v6.986C18.343 21.128 22 16.991 22 12z" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </li>
              <li>
                <span  rel="noreferrer" target="_blank" className="transition hover:text-[#1D9BF0] text-black">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M22 5.542c-.818.364-1.69.606-2.607.715.938-.56 1.66-1.44 1.996-2.497-.877.519-1.85.898-2.87 1.104C17.78 3.171 16.246 2 14.415 2c-3.002 0-5.435 2.433-5.435 5.436 0 .425.048.84.14 1.239-4.51-.23-8.495-2.38-11.149-5.653-.466.798-.732 1.73-.732 2.717 0 1.875 1.036 3.52 2.602 4.474-.96-.031-1.86-.294-2.642-.736v.074c0 2.616 1.859 4.797 4.321 5.296-.451.121-.926.189-1.418.189-.348 0-.684-.035-1.015-.101.687 2.151 2.692 3.72 5.056 3.76-1.847 1.446-4.17 2.307-6.674 2.307-.434 0-.86-.025-1.285-.074 2.381 1.524 5.207 2.4 8.267 2.4 9.914 0 15.34-8.225 15.34-15.34 0-.23 0-.46-.016-.69-.797-.54-1.541-.946-2.377-1.184z" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </li>
              <li>
                <span  rel="noreferrer" target="_blank" className="transition hover:text-[#0A66C2] text-black">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fill-rule="evenodd" d="M2 2h20c1.103 0 2 .897 2 2v16c0 1.103-.897 2-2 2H2c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2zm8.104 14.573h2.58v-6.393h-2.58v6.393zm1.29-7.24c.823 0 1.47-.633 1.47-1.448s-.646-1.448-1.47-1.448c-.823 0-1.47.633-1.47 1.448s.647 1.448 1.47 1.448zM9 8.23h2.58V16.8H9V8.23zM17.25 9.922h-.025c-.7 0-1.38.465-1.38 1.109v3.235h2.578v-3.19c0-2.242-1.234-3.694-3.177-3.694-1.383 0-2.674.726-3.08 1.91V9.922zm1.086 4.375h-.088c-.718 0-1.309-.52-1.309-1.143V13.2h2.617v-2.082h-2.617v-1.508h-2.85v2.072h2.57v2.088h2.652z" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
