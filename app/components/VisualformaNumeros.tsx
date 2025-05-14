'use client';

export default function VisualformaNumeros() {
  return (
    <div className="relative min-h-screen bg-white font-[family-name:var(--font-geist-sans)] flex flex-col justify-center">
      <div className="relative z-10 flex flex-col gap-8 px-6 md:px-20 pt-[86px]">
        <h1 className="text-[32px] md:text-[40px] font-bold text-left">
          <span className="bg-gradient-to-r from-[#a14bc6] to-[#4a3ed8] bg-clip-text text-transparent">
            Visualforma
          </span>{' '}
          <span className="text-[#000066]">em números</span>
        </h1>
      </div>

      <div className="flex flex-col items-center gap-6 px-6 md:px-20 mt-8">
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
    </div>
  );
}
