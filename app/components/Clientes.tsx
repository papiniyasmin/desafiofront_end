import Image from "next/image";

export default function Clientes() {
  return (
    <div className="relative min-h-screen bg-white font-[family-name:var(--font-geist-sans)]">
    <div className="relative z-10 flex flex-col gap-8 px-6 md:px-20 pt-[86px]">
     {/* Seção de clientes */}
<div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-8 px-6 md:px-20 pt-[86px] items-start">
  {/* Título — ficará no topo no mobile */}
  <h1 className="text-[32px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold bg-gradient-to-r from-[#000561] to-[#000561] bg-clip-text text-transparent whitespace-normal leading-snug">
  Os nossos clientes são a prova 
</h1>

  <div className="paragraph-rect">
    <p className="paragraph-text">
      A Visualforma acredita que a qualidade deve ir para além da certificação e, por 
      isso, integra-a na forma como envolve todos os colaboradores numa missão 
      e desafios únicos – não apenas satisfazer as expectativas do Cliente, mas
      excedê-las, pois somente um Cliente muito satisfeito se tornará num cliente leal.
    </p>
    </div>
    
    </div>
    <div className="imagens flex flex-wrap justify-center gap-4 mt-4">
      
        <Image src="/images/loule.jpg" alt="" width={154} height={82} className="object-contain" />
     
        <Image src="/images/faro.svg" alt="" width={234} height={114} className="object-contain" />
      
        <Image src="/images/setubal.avif" alt="" width={237} height={178} className="object-contain" />
      
        <Image src="/images/seixal.png" alt="" width={125} height={98} className="object-contain" />
     
        <Image src="/images/olhao.jpg" alt="" width={273} height={98} className="object-contain" />
      
        <Image src="/images/monchique.jpg" alt="" width={273} height={121} className="object-contain" />
      </div>
    </div>
    </div>
  );
}
