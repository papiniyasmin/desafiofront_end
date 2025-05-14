'use client';
import Image from "next/image";

export default function Index() {
  return (
    <>
      {/* HEADER MOBILE (< md) */}
      <header className="bg-[#090056] shadow-md md:hidden">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* LOGO + TEXTO */}
          <div className="flex items-center space-x-2">
            <Image src="/images/group-32399.png" alt="Logo Mobile" width={33} height={29} />
            <span className="text-white text-[30px]">| 30</span>
          </div>

          {/* ÍCONES */}
          <div className="flex items-center space-x-4">
            <div className="bg-[#2C06FF] w-10 h-10 flex items-center justify-center rounded-full">
              <Image src="/images/Chats-Bold--Streamline-Phosphor-1.png" width={20} height={20} alt="Chat Icon" />
            </div>
            <div className="bg-white/20 w-10 h-10 flex items-center justify-center rounded-full">
              <Image src="/images/minus.png" width={20} height={20} alt="Minus Icon" />
            </div>
          </div>
        </div>
      </header>

      {/* HEADER TABLET (md até < lg) */}
      <header className="bg-[#090056] shadow-md hidden md:flex lg:hidden">
        <div className="w-full py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 pl-[5px]">
            <Image src="/images/group-32400.png" alt="Logo Tablet" width={169} height={31} />
            <span className="text-white text-[30px]">30</span>
          </div>

          <div className="flex items-center space-x-4 mr-4">
            <div className="bg-[#2C06FF] w-10 h-10 flex items-center justify-center rounded-full">
              <Image src="/images/Chats-Bold--Streamline-Phosphor-1.png" width={20} height={20} alt="Chat Icon" />
            </div>
            <div className="bg-white/20 w-10 h-10 flex items-center justify-center rounded-full">
              <Image src="/images/minus.png" width={20} height={20} alt="Minus Icon" />
            </div>
          </div>
        </div>
      </header>

      {/* HEADER DESKTOP (≥ lg) */}
      <header className="bg-[#090056] shadow-md hidden lg:flex items-center justify-between px-8 py-4 relative z-50">
        {/* LOGO */}
        <div className="flex items-center space-x-4">
          <Image src="/images/group-32400.png" alt="Logo Desktop" width={169} height={31} />
          <span className="text-white text-[30px]">30 Anos</span>
        </div>

        {/* MENU */}
        <div className="flex items-center space-x-12 text-white">
          <span className="hover:underline cursor-pointer">Carreiras</span>

          {/* Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-2">
              <span>Grupo Visualforma</span>
              <Image src="/images/group-41985.png" width={10} height={10} alt="dropdown" />
            </button>
            <div className="absolute hidden group-hover:block mt-2 bg-white text-black shadow-md rounded-md">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Link 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Link 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Link 3</a>
            </div>
          </div>

          {/* Search Icon */}
          <Image src="/images/search.png" width={24} height={24} alt="Search" />

          {/* Botão "Vamos conversar" */}
          <div className="relative bg-[#2C06FF] rounded-full py-2 px-6 flex items-center space-x-2 cursor-pointer hover:brightness-110">
            <span>Vamos conversar</span>
            <Image src="/images/Chats-Bold--Streamline-Phosphor-1.png" width={20} height={20} alt="Chat Icon" />
          </div>
        </div>
      </header>

      {/* CONTEÚDO */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white text-center px-5 py-[100px]"
        style={{ backgroundImage: "url('/images/Rectangle-7.png')" }}
      >
        <div className="bg-[#040f43] py-12 px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold uppercase tracking-wider text-white flex items-center justify-center gap-3 flex-wrap">
            A CONSTRUÍR O{" "}
            <span className="relative text-white drop-shadow-[0_4px_6px_rgba(255,255,255,0.7)]">
              FUTURO
            </span>
            , <span className="text-white">JUNTOS</span>
          </h1>
        </div>

        <div className="w-full max-w-[875px] font-light text-[24px] leading-[1.4] text-[#E0E0E0] flex flex-col justify-start mx-auto px-4 pb-[100px]">
          <p>
            A Visualforma acredita que a qualidade deve ir para além da certificação e, por 
            isso, integra-a na forma como envolve todos os colaboradores numa missão 
            e desafios únicos – não apenas satisfazer as expectativas do Cliente, mas
            excedê-las, pois somente um Cliente muito satisfeito se tornará num cliente leal.
          </p>
        </div>

        <Image src="/images/Group-32420.png" alt="Ícone decorativo" width={198} height={48} />
      </div>
    </>
  );
}
