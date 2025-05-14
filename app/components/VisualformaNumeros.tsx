'use client';

export default function VisualformaNumeros() {
  return (
    <div className="relative min-h-screen bg-white font-[var(--font-geist-sans)] flex flex-col justify-center">
      <div className="relative z-10 flex flex-col gap-8 px-6 md:px-20 pt-[86px]">
        <h1 className="text-[32px] md:text-[40px] font-bold text-left">
          <span className="bg-gradient-to-r from-[#a14bc6] to-[#4a3ed8] bg-clip-text text-transparent">
            Visualforma
          </span>{' '}
          <span className="text-[#000066]">em números</span>
        </h1>
      </div>

      <div className="flex flex-col items-center gap-6 px-6 md:px-20 mt-8">
        {/* Grid de 3 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Quadrado 1 */}
          <div className="w-full max-w-[720px] h-[376px] bg-white border border-[#E0E0E0] rounded-[4px] shadow-[0_0_0_1px_inset_#E0E0E0] p-[20px] flex flex-col justify-end">
            <div>
              <div className="text-[40px] font-bold text-[#000066] mb-2">150 Clientes</div>
              <div className="text-[16px] text-[#2C06FF]">Explore oportunidades</div>
            </div>
          </div>

          {/* Quadrado 2 */}
          <div className="w-full max-w-[720px] h-[376px] bg-white border border-[#E0E0E0] rounded-[4px] shadow-[0_0_0_1px_inset_#E0E0E0] p-[20px] flex flex-col justify-end">
            <div>
              <div className="text-[40px] font-bold text-[#000066] mb-2">1995</div>
              <div className="text-[16px] text-[#2C06FF]">Fundada em 1995, 30 anos de experiência</div>
            </div>
          </div>

          {/* Quadrado 3 */}
          <div className="w-full max-w-[720px] h-[376px] bg-white border border-[#E0E0E0] rounded-[4px] shadow-[0_0_0_1px_inset_#E0E0E0] p-[20px] flex flex-col justify-end">
            <div>
              <div className="text-[40px] font-bold text-[#000066] mb-2">10+</div>
              <div className="text-[16px] text-[#2C06FF]">Prémios por mérito e excelência</div>
            </div>
          </div>
        </div>

        {/* Grid de 2 colunas */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* Quadrado 4 */}
          <div className="w-full max-w-[1000px] h-[376px] bg-white border border-[#E0E0E0] rounded-[4px] shadow-[0_0_0_1px_inset_#E0E0E0] p-[20px] flex flex-col justify-end">
            <div>
              <div className="text-[40px] font-bold text-[#000066] mb-2">Faro</div>
              <div className="text-[16px] text-[#2C06FF]">De Faro para todo o território em Portugal</div>
            </div>
          </div>

          {/* Quadrado 5 */}
          <div className="w-full max-w-[1000px] h-[376px] bg-white border border-[#E0E0E0] rounded-[4px] shadow-[0_0_0_1px_inset_#E0E0E0] p-[20px] flex flex-col justify-end">
            <div>
              <div className="text-[40px] font-bold text-[#000066] mb-2">Soluções digitais</div>
              <div className="text-[16px] text-[#2C06FF]">Fundada em 1995, 30 anos de experiência</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
