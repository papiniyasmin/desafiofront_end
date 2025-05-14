'use cliente';

export default function cabecalho() {
  return ( 
<header className="bg-[rgba(9,0,86,1)] shadow-md ">
      <div className="relative">
      {/* shown only on small screens ( < md ) */}
      <Image
        className="block md:hidden absolute top-[25px] left-[10px]"
        src="/group 32399.png"
        width={33}
        height={29}
        alt="chat icon small"
      />

      {/* shown only on md+ screens */}
      <Image
        className="hidden md:block absolute top-[25px] left-[10px] lg:pl-[10px]"
        src="/group 32400.png"
        width={169}
        height={31}
        alt="chat icon large"
      />
    </div>
      <div className="max-w-full mx-auto px-4 py-4 flex justify-between items-center">
        <div className='text-[30px] pl-[30px] md:pl-[158] lg:hidden'> | 30 </div>
        <div className='example'>
          <div className='text-[30px] pt-[2px] pl-[167px]'>
             30 Anos
          </div>
        </div>
        <div className='example'>
        <div className="dropdown absolute top-[1px] right-[400px]">
  <button className="dropbtn">Grupo Visualforma <Image className='absolute top-[10px] left-[140px]' src="/group 41985.png" width={10} height={10} alt='a'>
    </Image></button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    </div>
  </div>
  <div className="dropdown absolute top-[1px] right-[300px]">
  <button className="dropbtn">Grupo Visualforma <Image className='absolute top-[10px] left-[140px]' src="/group 41985.png" width={10} height={10} alt='a'>
    </Image></button>
  <div className="dropdown-content">
    <a href="#">Link 1</a>
    <a href="#">Link 2</a>
    <a href="#">Link 3</a>
    </div>
  </div>
  <div className="absolute top-[29px] right-[800px]">
    Careiras
    </div>
    <Image className='absolute top-[29px] right-[250px]'
src= "/search.png" width={24} height={24}>
    </Image>
    <div className='absolute top-[24px] right-[50px] bg-[#2C06FF] filter blur-[0.2px] rounded-[64px] pb-[5px] pt-[5px] pl-[10px] pr-[50px]'>
      Vamos conversar <Image className="absolute top-[8px] left-[145px]" src="/Chats-Bold--Streamline-Phosphor 1.png" width={20} height={20} alt=""></Image>
    </div>
</div>
        <div className='bg-[#2C06FF] border-none text-white p-5 text-center no-underline inline-block text-base my-1 mx-[2px] rounded-full ml-[200px] md:ml-[465px] lg:hidden'>
        </div>
          <Image className="absolute top-[30px] left-[315px] md:absolute md:top-[30px] md:left-[707px] lg:hidden" src="/Chats-Bold--Streamline-Phosphor 1.png" width={20} height={20} alt=""></Image>
        <div className='bg-[#FFFFFF33] border-none text-white p-5 text-center no-underline inline-block text-base my-1 mx-[2px] rounded-full lg:hidden'></div>
        <Image className="absolute top-[30px] left-[362px] md:absolute md:top-[30px] md:left-[755px] lg:hidden" src="/minus.png" width={20} height={20} alt=""></Image>
        <nav className="space-x-6">
        </nav>
      </div>
    </header>
  );
}
