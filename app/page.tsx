'use client';
import Image from 'next/image';
import '../style/home.css';

export default function Home() {
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



        <h1 className="text-[32px] md:text-[40px] font-bold">
          <span className="bg-gradient-to-r from-[#a14bc6] to-[#4a3ed8] bg-clip-text text-transparent">
            Visualforma
          </span>{' '}
          <span className="text-[#000066]">em números</span>
        </h1>
      </div>

     {/* Cards estatísticos */}
<div className="flex flex-col items-center gap-6 px-6 md:px-20 pt-10">
  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
    <div className="square">
      <div>
        <div className="square-title">150 Clientes</div>
        <div className="square-subtitle">Explore oportunidades</div>
      </div>
    </div>

    <div className="square">
      <div>
        <div className="square-title">1995</div>
        <div className="square-subtitle">Fundada em 1995, 30 anos de experiência</div>
      </div>
    </div>

    <div className="square">
      <div>
        <div className="square-title">10+</div>
        <div className="square-subtitle">Prémios por mérito e excelência</div>
      </div>
    </div>
  </div>

  <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
    <div className="square2">
      <div>
        <div className="square-title">Faro</div>
        <div className="square-subtitle">De Faro para todo o território em Portugal</div>
      </div>
    </div>

    <div className="square2">
      <div>
        <div className="square-title">Soluções digitais</div>
        <div className="square-subtitle">Fundada em 1995, 30 anos de experiência</div>
      </div>
    </div>
  </div>
</div>


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
    

      {/* Dentro da Visualforma */}
      <div className="relative z-10 px-6 md:px-20 pt-[86px]">
        <h1 className="text-[32px] md:text-[40px] font-bold bg-gradient-to-r from-[#000561] to-[#000561] bg-clip-text text-transparent mb-8">
          Dentro da Visualforma
        </h1>

        <div className="dentro-visualforma flex flex-col md:flex-row gap-8">
          <div className="coluna">
            <h4 className="font-bold text-[#000000]">A nossa Empresa</h4>
            <p>A Visualforma acredita que a qualidade deve ir para além da</p>
            <a href="#">Sobre nós</a>
            <a href="#">A nossa história</a>
          </div>

          <div className="coluna">
            <h4 className="font-bold text-[#000000]">O nosso impacto</h4>
            <p>A Visualforma acredita que a qualidade deve ir para além da</p>
            <a href="#">O nosso compromisso</a>
            <a href="#">Outro</a>
          </div>

          <div className="coluna">
            <h4 className="font-bold text-[#000000]">A nossa inovação</h4>
            <p>A Visualforma acredita que a qualidade deve ir para além da</p>
            <a href="#">Smart Cities</a>
            <a href="#">Rega automática</a>
          </div>
        </div>
      </div>
    </div>
  );
}
