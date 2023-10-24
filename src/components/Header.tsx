import React from "react";

function HeaderPage() {
  return (
    <header className="flex items-center justify-between p-3 py-5 mb-4 bg-gradient-to-r from-zinc-500 to-zinc-800 text-white">
      <section>
        <h1 className="text-lg">ClaytonJosué</h1>
      </section>
      <section>
        <ul className="flex align-middle gap-3 text-sm">
          <li>Home</li>
          <li>Sobre</li>
          <li>Cursos</li>
        </ul>
      </section>
    </header>
  );
}

export default HeaderPage;
