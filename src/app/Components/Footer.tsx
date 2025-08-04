// components/Footer.js
import React from "react";

const socialLinks = [
  {
    href: "https://github.com/SanketSonawane11",
    src: "/github.svg",
    alt: "GitHub",
  },
  {
    href: "https://www.linkedin.com/in/sanket-sonawane11",
    src: "https://img.icons8.com/fluent/30/000000/linkedin-2.png",
    alt: "LinkedIn",
  },
  {
    href: "https://x.com/Sanket_S11",
    src: "/x.svg",
    alt: "Twitter",
  },
];

const navLinks = [
  { href: "#", text: "Home" },
  { href: "#services", text: "Services" },
  { href: "#faq", text: "FAQ's" },
  { href: "#pricing", text: "Pricing" },
];

function Footer() {
  return (
    <footer className="bg-black/20 backdrop-blur-sm border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="flex flex-col items-center space-y-8 sm:space-y-12">
          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 text-white font-medium">
            {navLinks.map((link) => (
              <NavLink key={link.href} href={link.href}>
                {link.text}
              </NavLink>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 sm:space-x-8">
            {socialLinks.map((social) => (
              <SocialIcon
                key={social.href}
                href={social.href}
                src={social.src}
                alt={social.alt}
              />
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center">
            <a
              href="https://sankets-profile.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors duration-200 font-medium text-sm sm:text-base"
            >
              &copy; Made by: Sanket Sonawane
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a 
      href={href} 
      className="hover:text-orange-300 transition-colors duration-200 text-sm sm:text-base"
    >
      {children}
    </a>
  );
}

function SocialIcon({
  href,
  src,
  alt,
}: {
  href: string;
  src: string;
  alt: string;
}) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:scale-110 transition-transform duration-200"
    >
      <img src={src} alt={alt} className="w-8 h-8 sm:w-10 sm:h-10" />
    </a>
  );
}
