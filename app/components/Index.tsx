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
          <div className="relative group">
            <button className="flex items-center space-x-2">
              <span>Soluções</span>
              <Image src="/images/group-41985.png" width={10} height={10} alt="dropdown" />
            </button>
            <div className="absolute hidden group-hover:block mt-2 bg-white text-black shadow-md rounded-md">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Link 1</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Link 2</a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">Link 3</a>
            </div>
          </div>

          <span className="hover:underline cursor-pointer pr-[420px]">Carreiras</span>

          {/* Search Icon */}
          <Image src="/images/search.png" width={24} height={24} alt="Search" />

          {/* Botão "Vamos conversar" */}
          <div className="relative bg-[#2C06FF] rounded-full py-2 px-6 flex items-center space-x-2 cursor-pointer hover:brightness-110">
            <span>Vamos conversar</span>
            <Image src="/images/Chats-Bold--Streamline-Phosphor-1.png" width={20} height={20} alt="Chat Icon" />
          </div>
        </div>
      </header>

     {/* CONTEÚDO PRINCIPAL */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white text-center px-5 py-[60px] bg-[#090056]"
        style={{ backgroundImage: "url('/images/Rectangle-7.png')" }}
      >
        {/* TÍTULO */}
        <div className="py-8 px-2 text-left font-outfit 
  not-italic 
  font-semibold ">
          <h1 className="text-3xl lg:text-5xl font-extrabold uppercase leading-tight text-white font-outfit 
  not-italic 
  font-semibold ">
            A CONSTRUÍR{" "}
            <br className="block lg:hidden" />{/* quebra só no mobile/tablet */}
<span className="font-outfit 
  not-italic 
  font-semibold relative text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)] 
  before:content-[''] 
  before:absolute 
  before:inset-0 
  before:bg-[url('/futuro.png')] 
  before:bg-[length:80%_auto] 
  before:bg-no-repeat 
  before:opacity-70
    before:bg-[calc(35px)_center] 
  before:z-[-1]  after:content-[''] 
  after:absolute 
  after:inset-0 
  after:to-transparent 
  after:opacity-100 
  after:z-[-1]">
  O FUTURO
</span>
            , JUNTOS
          </h1>
        </div>

        {/* Texto — vai para baixo no mobile e tablet */}
        <div className="w-full max-w-[875px] font-light text-[24px] leading-[140%] text-[#ffffff] flex flex-col justify-start px-4 pb-[100px] order-2 lg:order-none text-left">
          <p className="text-[24px] font-light leading-[140%] text-[#ffffff]">
            A{" "}
            <span className="relative text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
              Visualforma
            </span>{" "}
            acredita que a qualidade deve ir para além da certificação e, por
            isso, integra-a na forma como envolve todos os colaboradores numa missão
            e desafios únicos – não apenas satisfazer as expectativas do Cliente, mas
            excedê-las, pois somente um Cliente muito satisfeito se tornará num cliente leal.
          </p>
        </div>

          {/* Imagem visível apenas no desktop */}
<div className="hidden lg:block absolute top-[-5px] right-[50px] z-[5] object-cover">
  <Image 
    src="/images/Asset-2-1.png" 
    alt="Imagem Desktop" 
    width={639}
    height={959} 
  />
</div>

        {/* BOTÃO */}
        <div className="text-left px-2">
          <button className="border border-white text-white py-2 px-4 rounded-full flex items-center space-x-2 hover:bg-white hover:text-[#090056] transition">
            <span>Fale connosco</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </div>
        {/* Gradiente no fim — apenas desktop */}
<div className="hidden lg:block absolute bottom-0 left-0 w-full h-[200px] z-[20]">
  <Image
    src="/images/Rectangle-34.png" 
    alt="Gradiente Rodapé Desktop"
    fill
  />
</div>

      </div>
    </>
  );
}
