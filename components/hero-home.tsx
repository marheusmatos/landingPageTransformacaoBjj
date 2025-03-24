import Image from "next/image";
import Banner from "@/public/images//banner/banner.png";
export default function HeroHome() {
  return (
    <section className="relative flex items-center justify-center h-screen bg-cover bg-center" style={{backgroundImage: `url(${Banner.src})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay escurecido */}
      
      <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
        <h1 className="text-4xl font-bold text-white md:text-6xl">
          Há mais de 19 anos<br />
          transformando vidas<br />
          através do esporte e educação
        </h1>
        <div className="mt-6 flex flex-col gap-4 md:flex-row md:justify-start">
          <a
            href="#"
            className="px-6 py-3 text-lg font-semibold text-white bg-orange-500 rounded-lg shadow-lg hover:bg-orange-600"
          >
            Conheça o nosso projeto
          </a>
          <a
            href="#"
            className="px-6 py-3 text-lg font-semibold text-orange-500 bg-white rounded-lg shadow-lg hover:bg-gray-100"
          >
            Junte-se a nós
          </a>
        </div>
      </div>
    </section>
  );
}
