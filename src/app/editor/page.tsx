// import Fabritor from '@/fabritor';
'use client';
import dynamic from 'next/dynamic'

const DynmicFabritor = dynamic(() => import('../../fabritor/index').then(a => a), {
  ssr: false,
})

function FabritorPage() {
  return (
    <div>
      <DynmicFabritor />
    </div>
  );
}


FabritorPage.diplsayName = "FabritorPage";

export default FabritorPage;
