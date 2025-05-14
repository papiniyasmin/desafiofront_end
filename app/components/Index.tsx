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
          {/* LOGO + TEXTO */}
          <div className="flex items-center space-x-4 pl-[5px]">
            <Image src="/images/group-32400.png" alt="Logo Tablet" width={169} height={31} />
            <span className="text-white text-[30px]">30</span>
          </div>

          {/* ÍCONES */}
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

      {/* CONTEÚDO */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white text-center px-5 py-[100px]"
        style={{ backgroundImage: "url('/images/Rectangle-7.png')" }}
      >
        <div className="w-full max-w-[875px] font-light text-[24px] leading-[1.4] text-[#E0E0E0] flex flex-col justify-start mx-auto px-4 pb-[100px]">
          <p>
            A Visualforma acredita que a qualidade deve ir para além da certificação e, por 
            isso, integra-a na forma como envolve todos os colaboradores numa missão 
            e desafios únicos – não apenas satisfazer as expectativas do Cliente, mas
            excedê-las, pois somente um Cliente muito satisfeito se tornará num cliente leal.
          </p>
        </div>
      </div>
    </>
  );
}
