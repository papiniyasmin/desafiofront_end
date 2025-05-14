'use client';
import '../style/home.css';

import TecnologiaConsultoria from '../components/TecnologiaConsultoria';
import DentroVisualforma from '../components/DentroVisualforma';
import Clientes from '../components/Clientes';
import VisualformaNumeros from '../components/VisualformaNumeros';
import Index from '../components/Index';

export default function Home() {
  return (
    <main>
      < Index />
      <TecnologiaConsultoria />
      <VisualformaNumeros />
      <Clientes />
      <DentroVisualforma />
    </main>
  );
}
