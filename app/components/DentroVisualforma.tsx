'use client';

export default function DentroVisualforma() {
  return (
    <div className="relative min-h-screen bg-white font-[var(--font-geist-sans)]">
      <div className="relative z-10 flex flex-col gap-8 px-6 md:px-20 pt-[86px]">
        <h1 className="text-[32px] md:text-[40px] font-bold bg-gradient-to-r from-[#000561] to-[#000561] bg-clip-text text-transparent mb-8">
          Dentro da Visualforma
        </h1>

        <div className="flex flex-wrap gap-10 md:gap-10 px-4 md:px-0 max-w-[1200px] font-[200] text-[20px] mx-auto">
          {/* Coluna 1 */}
          <div className="flex-1 min-w-[240px]">
            <h4 className="font-bold text-[24px] text-black mb-2">A nossa Empresa</h4>
            <p className="text-[#333333] text-[20px] mb-4">
              A Visualforma acredita que a qualidade deve ir para além da
            </p>
            <a href="#" className="block text-[#3F00FF] text-[20px] mb-1 no-underline hover:underline">
              Sobre nós →
            </a>
            <a href="#" className="block text-[#3F00FF] text-[20px] mb-1 no-underline hover:underline">
              A nossa história →
            </a>
          </div>

          {/* Coluna 2 */}
          <div className="flex-1 min-w-[240px]">
            <h4 className="font-bold text-[24px] text-black mb-2">O nosso impacto</h4>
            <p className="text-[#333333] text-[20px] mb-4">
              A Visualforma acredita que a qualidade deve ir para além da
            </p>
            <a href="#" className="block text-[#3F00FF] text-[20px] mb-1 no-underline hover:underline">
              O nosso compromisso →
            </a>
            <a href="#" className="block text-[#3F00FF] text-[20px] mb-1 no-underline hover:underline">
              Outro →
            </a>
          </div>

          {/* Coluna 3 */}
          <div className="flex-1 min-w-[240px]">
            <h4 className="font-bold text-[24px] text-black mb-2">A nossa inovação</h4>
            <p className="text-[#333333] text-[20px] mb-4">
              A Visualforma acredita que a qualidade deve ir para além da
            </p>
            <a href="#" className="block text-[#3F00FF] text-[20px] mb-1 no-underline hover:underline">
              Smart Cities →
            </a>
            <a href="#" className="block text-[#3F00FF] text-[20px] mb-1 no-underline hover:underline">
              Rega automática →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
