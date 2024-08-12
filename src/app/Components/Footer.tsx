// components/Footer.js
import React from "react";

const socialLinks = [
  {
    href: "https://github.com/SanketSonawane11",
    src: "/github.svg",
    alt: "Facebook",
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
    <div className="w-full h-fit px-15 p">
      <footer className="flex flex-col space-y-10 justify-center m-10">
        <nav className="flex justify-center flex-wrap gap-6 text-white font-medium">
          {navLinks.map((link) => (
            <NavLink key={link.href} href={link.href}>
              {link.text}
            </NavLink>
          ))}
        </nav>

        <div className="flex justify-center space-x-5">
          {socialLinks.map((social) => (
            <SocialIcon
              key={social.href}
              href={social.href}
              src={social.src}
              alt={social.alt}
            />
          ))}
        </div>

        <a
          href="https://sankets-profile.netlify.app/"
          target="_blank"
          className="text-center text-white/90 font-medium"
        >
          &copy; Made by: Sanket Sonawane
        </a>
      </footer>
    </div>
  );
}

export default Footer;

function NavLink({ href, children }: { href: string; children: any }) {
  return (
    <a href={href} className="hover:text-gray-900">
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
    <a href={href} target="_blank" rel="noopener noreferrer">
      <img src={src} alt={alt} className="w-8 h-8" />
    </a>
  );
}
