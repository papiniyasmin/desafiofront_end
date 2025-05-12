import '../style/home.css';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-white font-[family-name:var(--font-geist-sans)]">
     
      <div className="absolute top-0 left-0 w-full h-[120px] bg-gradient-to-b from-[#d9d7fb] to-transparent z-0" />

     
      <div className="relative z-10 grid grid-cols-2 px-20 pt-[86px] gap-8 items-start">
     
        <h1 className="text-[28px] sm:text-[32px] font-bold bg-gradient-to-r from-[#0000ff] to-[#000066] bg-clip-text text-transparent whitespace-nowrap">
  Tecnologia e Consultoria
</h1>


       
        <div className="paragraph-rect">
          <p className="paragraph-text">
            A Visualforma acredita que a qualidade deve ir para além da certificação e,
            por isso, integra-a na forma como envolve todos os colaboradores numa missão 
            e desafios únicos – não apenas satisfazer as expectativas do Cliente, mas
            excedê las pois somente um Cliente muito satisfeito se tornará num cliente leal.
          </p>
          <a href="#" className="text-[#3F48CC] mt-2 inline-block">
            Marque já uma consulta →
          </a>
        </div>
      </div>
    </div>
  );
}
