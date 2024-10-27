'use client';
import { useState } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle closing the menu
  const handleCloseMenu = () => setIsMenuOpen(false);

  return (
    <div>
      <header className="bg-gray-900 text-white p-5">
        <nav className="container mx-auto flex justify-between items-center">
          {/* Logo */}
          <h1 className="text-3xl font-bold">RealEstateLoans</h1>

          {/* Hamburger Menu Button */}
          <button
            className="text-white block md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>

          {/* Navigation Links for Desktop */}
          <ul className="hidden md:flex space-x-4 items-center">
            <li><a href="#services" className="hover:text-gray-400">Services</a></li>
            <li><a href="#about" className="hover:text-gray-400">About Us</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center">
          <ul className="text-white text-center space-y-8">
            <li>
              <a
                href="#services"
                className="text-2xl hover:text-gray-400"
                onClick={handleCloseMenu}
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="text-2xl hover:text-gray-400"
                onClick={handleCloseMenu}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-2xl hover:text-gray-400"
                onClick={handleCloseMenu}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      )}

      <main>
        {/* Hero Section */}
        <section className="bg-[url('/real-estate-bg.jpg')] bg-cover h-screen flex items-center justify-center text-center text-white">
          <div className="bg-black bg-opacity-60 p-10 rounded-lg">
            <h2 className="text-4xl font-bold mb-5">Find the Best Loan for Your Dream Home</h2>
            <p className="text-lg">We offer customized loan plans that fit your needs.</p>
            <a href="#contact" className="mt-5 inline-block bg-yellow-500 text-black py-2 px-4 rounded">Get Started</a>
          </div>
        </section>

        {/* Other sections... */}

        <section id="services" className="container mx-auto py-10 text-center">
          <h3 className="text-2xl font-semibold mb-6">Our Loan Services</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-5 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-3">Home Loans</h4>
              <p>Get the best deals on home loans with flexible interest rates.</p>
            </div>
            <div className="p-5 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-3">Construction Loans</h4>
              <p>Financing solutions for constructing your dream property.</p>
            </div>
            <div className="p-5 shadow-lg rounded-lg">
              <h4 className="text-xl font-bold mb-3">Refinancing</h4>
              <p>Refinance your existing loan to reduce payments and save more.</p>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section id="testimonials" className="py-10 bg-gray-100">
  <div className="container mx-auto text-center">
    <h3 className="text-2xl font-semibold mb-6">What Our Clients Say</h3>

    {/* Testimonial Cards */}
    <div className="overflow-hidden relative">
      <div className="flex animate-marquee">
        {/* Testimonial Cards */}
        {[...Array(2)].flatMap((_, i) => [
          <div key={`testimonial-1-${i}`} className="min-w-[300px] bg-white shadow-lg p-5 rounded-lg mx-3">
            <p className="text-gray-600">
              "RealEstateLoans helped me get the best home loan at a great rate. The process was seamless and transparent!"
            </p>
            <div className="mt-4">
              <h4 className="font-bold">John Doe</h4>
              <p className="text-sm text-gray-500">Homebuyer</p>
            </div>
          </div>,

          <div key={`testimonial-2-${i}`} className="min-w-[300px] bg-white shadow-lg p-5 rounded-lg mx-3">
            <p className="text-gray-600">
              "I was able to refinance my loan easily. The team was professional and very helpful throughout."
            </p>
            <div className="mt-4">
              <h4 className="font-bold">Jane Smith</h4>
              <p className="text-sm text-gray-500">Refinance Client</p>
            </div>
          </div>,

          <div key={`testimonial-3-${i}`} className="min-w-[300px] bg-white shadow-lg p-5 rounded-lg mx-3">
            <p className="text-gray-600">
              "Great service, transparent terms, and excellent customer support. Highly recommend RealEstateLoans!"
            </p>
            <div className="mt-4">
              <h4 className="font-bold">Michael Johnson</h4>
              <p className="text-sm text-gray-500">Investor</p>
            </div>
          </div>
        ])}
      </div>
    </div>
  </div>

  {/* CSS for the marquee animation */}
  <style jsx>{`
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-marquee {
      display: flex;
      width: max-content;
      animation: marquee 20s linear infinite;
    }
  `}</style>
</section>


        <section id="book-meeting" className="py-16 bg-gradient-to-r from-blue-500 to-teal-400 text-white">
        <div className="container mx-auto text-center px-6">
          <h3 className="text-4xl font-bold mb-4">Book a Meeting with Us</h3>
          <p className="text-lg mb-8">
            Schedule a convenient time for a consultation and let’s discuss how we can help with your real estate loan needs.
          </p>

          {/* Enhanced Cal.com iframe container */}
          <div className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg overflow-hidden p-4 max-w-lg w-full">
              <iframe
                src="https://cal.com/rishabh-aggarwal-bpqkik" // Replace with your Cal.com link
                className="w-full h-96 border-0 rounded-lg"
                title="Schedule a Meeting"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
        {/* About Us Section */}
        <section id="about" className="bg-gray-100 py-10">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6">About Us</h3>
            <p className="max-w-3xl mx-auto">
              We are a leading real estate loan provider with years of experience in the financial industry. Our mission is to
              help individuals achieve their home ownership dreams with the best financial advice and services.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-10 bg-gray-900 text-white">
          <div className="container mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-6">Contact Us</h3>
            <p>Need help finding the right loan? Get in touch with our team today!</p>
            <form className="max-w-lg mx-auto mt-8">
              <div className="mb-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 rounded-md" />
              </div>
              <div className="mb-4">
                <input type="email" placeholder="Your Email" className="w-full p-3 rounded-md" />
              </div>
              <div className="mb-4">
                <textarea placeholder="Your Message" className="w-full p-3 rounded-md" rows={5}></textarea>
              </div>
              <button className="bg-yellow-500 text-black py-2 px-4 rounded">Send Message</button>
            </form>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; {new Date().getFullYear()} RealEstateLoans. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
