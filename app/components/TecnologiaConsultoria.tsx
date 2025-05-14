'use client';

export default function TecnologiaConsultoria() {
  return ( 
  <div className="relative min-h-screen bg-white font-[family-name:var(--font-geist-sans)]">
      {/* Gradiente topo */}
      <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-[#d9d7fb] to-transparent z-0" />

      {/* Cabeçalho e texto */}
   {/* Cabeçalho e texto */}
<div className="relative z-10 flex flex-col lg:grid lg:grid-cols-2 gap-8 px-6 md:px-20 pt-[86px] items-start">
  {/* Título — ficará no topo no mobile */}
  <h1 className="text-[32px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-bold bg-gradient-to-r from-[#0000ff] to-[#000066] bg-clip-text text-transparent whitespace-normal leading-snug">
  Tecnologia e Consultoria
</h1>
{/* Texto — vai para baixo no mobile */}
  <div className="paragraph-rect">
    <p className="paragraph-text">
      A Visualforma acredita que a qualidade deve ir para além da certificação e, por 
      isso, integra-a na forma como envolve todos os colaboradores numa missão 
      e desafios únicos – não apenas satisfazer as expectativas do Cliente, mas
      excedê-las, pois somente um Cliente muito satisfeito se tornará num cliente leal.
    </p>
    <a href="#" className="text-[#3F48CC] mt-2 inline-block">
      Marque já uma consulta →
    </a>
  </div>
</div>
</div>
  );
}