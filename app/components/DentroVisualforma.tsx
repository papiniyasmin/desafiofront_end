'use client';

export default function DentroVisualforma() {
  return (
    
    <div className="relative min-h-screen bg-white font-[family-name:var(--font-geist-sans)]">
       <div className="relative z-10 flex flex-col gap-8 px-6 md:px-20 pt-[86px]">
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