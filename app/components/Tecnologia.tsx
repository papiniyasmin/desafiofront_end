'use client';
import Image from "next/image";

export default function Tecnologia() {
  return (
    <div className="relative min-h-screen bg-white font-hanken">
      {/* Seção com fundo de imagem */}
      <div
        className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white text-center px-5 py-[100px]"
        style={{ backgroundImage: "url('/images/fundo2.png')" }}
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
            <h1 className="text-3xl font-extrabold leading-tight text-white">
              colocamos a{" "}
              <span className="relative text-white drop-shadow-[0_0_10px_rgba(255,255,255,0.9)]">
                tecnologia
              </span>{" "}
              ao serviço das organizações
            </h1>
          </div>

          {/* Ícones */}
          <div className="w-full max-w-[875px] font-light text-[24px] leading-[140%] text-[#ffffff] px-4 mx-auto">
            <div className="flex flex-col items-center space-y-6 mt-10">
              <Image src="/images/Group-32401.png" alt="Ícone decorativo 1" width={198} height={48} />
              <Image src="/images/Group-42196.png" alt="Ícone decorativo 2" width={198} height={48} />
              <Image src="/images/Group-32403.png" alt="Ícone decorativo 3" width={198} height={48} />
            </div>
          </div>
        </div>
      </div>

      {/* --- Nova área para tablet --- */}
      {/* Visível apenas em tablets (768px a 1023px) */}
      <section className="hidden md:block lg:hidden bg-white text-black px-6 py-10 max-w-xl mx-auto font-hanken mt-16">
        <p className="text-base leading-relaxed mb-8">
          A Visualforma acredita que a qualidade deve ir para além da certificação e, por isso, integra-a na forma como envolve todos os colaboradores numa missão e desafios únicos - não apenas satisfazer as expectativas do Cliente, mas excedê-las pois somente um Cliente muito satisfeito se tornará num cliente leal.
        </p>

        <div className="flex flex-col items-center space-y-6">
          <Image src="/images/Group-32401.png" alt="Ícone decorativo 1" width={198} height={48} />
          <Image src="/images/Group-42196.png" alt="Ícone decorativo 2" width={198} height={48} />
          <Image src="/images/Group-32403.png" alt="Ícone decorativo 3" width={198} height={48} />
        </div>
      </section>
    </div>
  );
}
