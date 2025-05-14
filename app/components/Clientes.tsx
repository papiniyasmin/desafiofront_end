import Image from "next/image";

export default function Clientes() {
  return (
    <div className="relative min-h-screen bg-white font-[var(--font-geist-sans)]">
      <div className="relative z-10 flex flex-col gap-8 px-6 md:px-20 pt-[86px]">
        {/* Título e parágrafo */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 items-start">
          <h1 className="text-[32px] md:text-[36px] lg:text-[40px] font-bold bg-gradient-to-r from-[#000561] to-[#000561] bg-clip-text text-transparent leading-snug">
            Os nossos clientes são a prova
          </h1>

          <div className="w-full max-w-[875px] font-light text-[24px] leading-[1.4] text-black flex flex-col justify-start px-4 pb-[100px]">
            <p>
              A Visualforma acredita que a qualidade deve ir para além da certificação e, por 
              isso, integra-a na forma como envolve todos os colaboradores numa missão 
              e desafios únicos – não apenas satisfazer as expectativas do Cliente, mas
              excedê-las, pois somente um Cliente muito satisfeito se tornará num cliente leal.
            </p>
          </div>
        </div>

        {/* Imagens dos clientes */}
        <div className="flex flex-wrap justify-center gap-[60px] w-full px-5 pb-[100px]">
          <Image src="/images/loule.jpg" alt="Loulé" width={154} height={82} className="max-w-full h-auto object-contain" />
          <Image src="/images/faro.svg" alt="Faro" width={234} height={114} className="max-w-full h-auto object-contain" />
          <Image src="/images/setubal.avif" alt="Setúbal" width={237} height={178} className="max-w-full h-auto object-contain" />
          <Image src="/images/seixal.png" alt="Seixal" width={125} height={98} className="max-w-full h-auto object-contain" />
          <Image src="/images/olhao.jpg" alt="Olhão" width={273} height={98} className="max-w-full h-auto object-contain" />
          <Image src="/images/monchique.jpg" alt="Monchique" width={273} height={121} className="max-w-full h-auto object-contain" />
        </div>
      </div>
    </div>
  );
}
