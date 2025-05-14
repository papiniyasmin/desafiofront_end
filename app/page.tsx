'use client';
import '../style/home.css';

import TecnologiaConsultoria from '../components/TecnologiaConsultoria';
import DentroVisualforma from '../components/DentroVisualforma';
import Clientes from '../components/Clientes';
import VisualformaNumeros from '../components/VisualformaNumeros';

export default function Home() {
  return (
    <main>
      <TecnologiaConsultoria />
      <VisualformaNumeros />
      <Clientes />
      <DentroVisualforma />
    </main>
  );
}
