'use cliente';
import Image from "next/image";

export default function rodape() {
  return ( 
<div className="lg:hidden">
  <div className="flex items-center place-contents-center bg-[rgba(252,252,252,1)]">
    <Image
      className="md:pl-[100px] pl-[20px] bg-[rgba(252,252,252,1)]"
      src="/group 32395.png"
      width={162}
      height={29}
      alt="aa"
    />
    <div className="text-[30px] pt-[2px] text-[#000561] bg-[rgba(252,252,252,1)]">
      | 30 Anos
    </div>
  </div>

  <p
    className="md:pl-[100px] pl-[20px] font-normal text-[24px] leading-[31px] text-[rgba(0,5,97,0.5)] bg-[rgba(252,252,252,1)]"
    style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
  >
    Colocamos a tecnologia ao <br /> serviço das organizações.
  </p>

  <div className="md:pl-[100px] flex flex-row pt-[30px] pb-[30px] pl-[20px] gap-[50px] bg-[rgba(252,252,252,1)]">
    <Image src="/instagram.png" width={24} height={24} alt="" />
    <Image src="/facebook.png" width={24} height={24} alt="" />
    <Image src="/linkedin.png" width={24} height={24} alt="" />
  </div>

  <p
    className="md:pl-[100px] pl-[20px] pb-[20px] font-normal text-[24px] leading-[31px] text-[rgba(0,5,97,0.5)] bg-[rgba(252,252,252,1)]"
    style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
  >
    +3510289898989 <br /> email@visualforma.pt
  </p>

  <p
    className="md:pl-[100px] pl-[20px] pb-[20px] font-normal text-[24px] leading-[31px] text-[rgba(0,5,97,0.5)] bg-[rgba(252,252,252,1)]"
    style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
  >
    Visualforma Business Centre <br />
    E.N. 125 - Sítio das Figuras <br />
    8005 - 145
  </p>
</div>

{/* ===== GRID SECTION ===== */}
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-x-12 px-[85px] pt-[50px] pb-[50px] lg:bg-[rgba(252,252,252,1)]">

  {/* --- COL 1 on lg: show header/contact here */}
  <div className="hidden lg:block bg-[rgba(252,252,252,1)]">
    <div className="flex items-center place-contents-center bg-[rgba(252,252,252,1)] ">
      <Image
        className="pl-[20px] lg:pl-0"
        src="/group 32395.png"
        width={162}
        height={29}
        alt="aa"
      />
      <div className="text-[30px] pt-[2px] text-[#000561] bg-[rgba(252,252,252,1)]">
        | 30 Anos
      </div>
    </div>

    <p
      className="pl-[20px] lg:pl-0 font-normal text-[24px] leading-[31px] text-[rgba(0,5,97,0.5)] mt-[10px] bg-[rgba(252,252,252,1)]"
      style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
    >
      Colocamos a tecnologia ao <br /> serviço das organizações.
    </p>

    <div className="flex flex-row pt-[30px] pb-[30px] pl-[20px] lg:pl-0 gap-[50px] bg-[rgba(252,252,252,1)]">
      <Image src="/instagram.png" width={24} height={24} alt="" />
      <Image src="/facebook.png" width={24} height={24} alt="" />
      <Image src="/linkedin.png" width={24} height={24} alt="" />
    </div>

    <p
      className="pl-[20px] lg:pl-0 pb-[20px] font-normal text-[24px] leading-[31px] text-[rgba(0,5,97,0.5)] bg-[rgba(252,252,252,1)]"
      style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
    >
      +3510289898989 <br /> email@visualforma.pt
    </p>

    <p
      className="pl-[20px] lg:pl-0 pb-[20px] font-normal text-[24px] leading-[31px] text-[rgba(0,5,97,0.5)] bg-[rgba(252,252,252,1)]"
      style={{ fontFamily: 'Hanken Grotesk, sans-serif' }}
    >
      Visualforma Business Centre <br />
      E.N. 125 - Sítio das Figuras <br />
      8005 - 145
    </p>
  </div>

  {/* 2) Wrapper for all Grupo Visualforma items: spans cols 2–4 on LG */}
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 lg:col-start-2 lg:col-span-3">
    
    {/* Repeat this block for each of your six groups */}
    <div>
      <p className="pt-[50px] font-medium text-[24px] leading-[31px] text-[#000561]">Grupo Visualforma</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Sobre nós</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Serviços</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Clientes</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Carreiras</p>
    </div>

    <div>
      <p className="pt-[50px] font-medium text-[24px] leading-[31px] text-[#000561]">Grupo Visualforma</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Sobre nós</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Serviços</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Clientes</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Carreiras</p>
    </div>

    <div>
      <p className="pt-[50px] font-medium text-[24px] leading-[31px] text-[#000561]">Grupo Visualforma</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Sobre nós</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Serviços</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Clientes</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Carreiras</p>
    </div>

    <div>
      <p className="pt-[50px] font-medium text-[24px] leading-[31px] text-[#000561]">Grupo Visualforma</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Sobre nós</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Serviços</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Clientes</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Carreiras</p>
    </div>

    <div>
      <p className="pt-[50px] font-medium text-[24px] leading-[31px] text-[#000561]">Grupo Visualforma</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Sobre nós</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Serviços</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Clientes</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Carreiras</p>
    </div>

    <div>
      <p className="pt-[50px] font-medium text-[24px] leading-[31px] text-[#000561]">Grupo Visualforma</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Sobre nós</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Serviços</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Clientes</p>
      <p className="pt-[15px] text-[24px] leading-[31px] text-[#000000]">Carreiras</p>
    </div>

  </div>

</div>
