import React from "react";

function Footer() {
  return (
    <footer className="text-center p-3 py-5 bg-gradient-to-l from-zinc-500 to-zinc-800 text-white">
      <h2 className="text-xl">Clayton Josué</h2>
      <div className="flex items-center justify-center gap-3">
        <a
          href="https://github.com/ClaytonJosue"
          target="_blank"
          className="text-blue-500 underline"
        >
          Github
        </a>
        <a
          href="https://www.linkedin.com/in/clayton-josue/"
          target="_blank"
          className="text-blue-500 underline"
        >
          Linkedin
        </a>
      </div>
    </footer>
  );
}

export default Footer;
