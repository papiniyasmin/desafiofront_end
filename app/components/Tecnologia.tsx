'use client';
import Image from "next/image";

export default function Tecnologia() {
  return (
    <div className="relative min-h-screen bg-white font-hanken">
      {/* Seção com fundo de imagem */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white text-center px-5 py-[100px]"
        style={{ backgroundImage: "url('/images/Rectangle-9.png')" }}
      >
        {/* Gradiente no rodapé */}
        <Image
          src="/images/Rectangle-10.png"
          alt="Gradiente Rodapé"
          fill
          className="absolute bottom-0 left-0 w-full h-[200px] object-cover z-0 pointer-events-none"
        />
        
        {/* Conteúdo com padding-top ajustado para mobile */}
        <div className="relative z-10 pt-60 md:pt-40">
          {/* Título */}
          <div className="py-8 px-2 text-left">
            <h1 className="relative top-30  text-[24px] align-bottom md:text-[36px] lg:text-[40px] font-bold lg:bg-gradient-to-r from-[#ffffff] to-[#fffff] bg-clip-text  whitespace-normal leading-snug text-center">
          Colocamos a tecnologia ao serviço das organizações.
        </h1>
        
        {/* Texto — vai para baixo no mobile */}
        <div className="w-full max-w-[875px] text-[24px] leading-[140%] text-[#000066] flex flex-col justify-start px-4 pb-[100px] text-center">
<p className="hidden sm:block text-[24px] font-thin not-italic text-[#ffffff] relative top-40 lg:left-[25vw]">
  A Visualforma acredita que a qualidade deve ir para além da certificação e, por 
  isso, integra-a na forma como envolve todos os colaboradores numa missão 
  e desafios únicos – não apenas satisfazer as expectativas do Cliente, mas
  excedê-las, pois somente um Cliente muito satisfeito se tornará num cliente leal.
</p>
            </div>
          </div>


          {/* Ícones */}
            <div className="lg:hidden flex flex-col items-center space-y-6 mt-20">
              <div className="inset-0 border-2 border-white rounded-[32px] [filter:blur(0.5px)] box-border pr-[16vw] pl-[16vw] md:pr-[30vw] md:pl-[30vw] whitespace-nowrap">
                <div className="flex font-semibold text-[16px] leading-[21px] text-white font-['Hanken_Grotesk'] pb-[10px] pt-[10px] pl-[20px] pr-[20px] gap-[20px]">
  Quem somos  <Image src="/images/users.png" alt="Ícone decorativo 1" width={24} height={24} />
</div>
</div>
                            <div className="inset-0 border-2 border-white rounded-[32px] [filter:blur(0.5px)] box-border pr-[15vw] pl-[15vw] md:pr-[30vw] md:pl-[30vw] whitespace-nowrap">
                <div className="flex font-semibold text-[16px] leading-[21px] text-white font-['Hanken_Grotesk'] pb-[10px] pt-[10px] pl-[20px] pr-[20px] gap-[20px]">
  O que fazemos  <Image src="/images/user-check.png" alt="Ícone decorativo 2" width={24} height={24} />
</div>
</div>
                            <div className="inset-0 border-2 border-white rounded-[32px] [filter:blur(0.5px)] box-border pr-[19vw] md:pr-[30vw] md:pl-[30vw] pl-[19vw]">
                <div className="flex font-semibold text-[16px] leading-[21px] text-white font-['Hanken_Grotesk'] pb-[10px] pt-[10px] pl-[20px] pr-[20px] gap-[20px]">
  Careiras  <Image src="/images/user-plus.png" alt="Ícone decorativo 3" width={24} height={24} />
</div>
</div>
            </div>
                        <div className="example flex flex-row items-center mt-20 gap-15 justify-center">
              <div className="inset-0 border-2 border-white rounded-[32px] [filter:blur(0.5px)] box-border pr-[1vw] pl-[1vw]  whitespace-nowrap">
                <div className="flex font-semibold text-[16px] leading-[21px] text-white font-['Hanken_Grotesk'] pb-[10px] pt-[10px] pl-[20px] pr-[20px] gap-[20px]">
  Quem somos  <Image src="/images/users.png" alt="Ícone decorativo 1" width={24} height={24} />
</div>
</div>
                            <div className="inset-0 border-2 border-white rounded-[32px] [filter:blur(0.5px)] box-border pr-[1vw] pl-[1vw]  whitespace-nowrap">
                <div className="flex font-semibold text-[16px] leading-[21px] text-white font-['Hanken_Grotesk'] pb-[10px] pt-[10px] pl-[20px] pr-[20px] gap-[20px]">
  O que fazemos  <Image src="/images/user-check.png" alt="Ícone decorativo 2" width={24} height={24} />
</div>
</div>
                            <div className="inset-0 border-2 border-white rounded-[32px] [filter:blur(0.5px)] box-border pr-[1vw] pl-[1vw]">
                <div className="flex font-semibold text-[16px] leading-[21px] text-white font-['Hanken_Grotesk'] pb-[10px] pt-[10px] pl-[20px] pr-[20px] gap-[20px]">
  Careiras  <Image src="/images/user-plus.png" alt="Ícone decorativo 3" width={24} height={24} />
</div>
</div>
            </div>
            
        </div>
      </div>
    </div>
  );
}
