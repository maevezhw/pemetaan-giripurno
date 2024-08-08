import { useState } from 'react';
import DataPerkebunan from './DataPerkebunan';
import DescPerkebunan from './DescPerkebunan';
import MapPerkebunan from './MapPerkebunan';

function Perkebunan () {
    const [data, setData] = useState('Apel');

    return (
        <div className = 'bg-kebun-bg px-44 py-6 h-lvh font-roboto'>
            <div className = 'grid grid-cols-3 gap-2'>
                <div className = 'col-span-2 mt-16'>
                    <h1 className = 'text-4xl font-bold text-white mt-1'>Hasil Pertanian dan Perkebunan</h1>
                    <h2 className = 'text-2xl font-normal text-white mt-3 mb-8'>Musim Tanam 1 2024</h2>

                    <div className = 'grid grid-cols-7 gap-2 mt-5'>
                        <button onClick={() => setData('Apel')} className = 'text-white font-medium rounded-lg border border-white py-1 px-2 w-30 focus:bg-tosca focus:border-none'>Apel</button>
                        <button onClick={() => setData('Bunga Kol')} className = 'text-white font-medium rounded-lg border border-white py-1 px-2 w-30 focus:bg-tosca focus:border-none'>Bunga Kol</button>
                        <button onClick={() => setData('Cabai Rawit')} className = 'text-white font-medium rounded-lg border border-white py-1 px-2 w-30 focus:bg-tosca focus:border-none'>Cabai Rawit</button>
                        <button onClick={() => setData('Jagung')} className = 'text-white font-medium rounded-lg border border-white py-1 px-2 w-30 focus:bg-tosca focus:border-none'>Jagung</button>
                        <button onClick={() => setData('Jeruk')} className = 'text-white font-medium rounded-lg border border-white py-1 px-2 w-30 focus:bg-tosca focus:border-none'>Jeruk</button>
                        <button onClick={() => setData('Seledri')} className = 'text-white font-medium rounded-lg border border-white py-1 px-2 w-30 focus:bg-tosca focus:border-none'>Seledri</button>
                        <button onClick={() => setData('Tomat')} className = 'text-white font-medium rounded-lg border border-white py-1 px-2 w-30 focus:bg-tosca focus:border-none'>Tomat</button>
                    </div>

                    <div className = 'h-80 w-4/5 mt-10 px-8 py-5 bg-white border rounded-lg'>
                        {data === 'Apel' && <DescPerkebunan data={DataPerkebunan} index={0} />}
                        {data === 'Bunga Kol' && <DescPerkebunan data={DataPerkebunan} index={1} />}
                        {data === 'Cabai Rawit' && <DescPerkebunan data={DataPerkebunan} index={2} />}
                        {data === 'Jagung' && <DescPerkebunan data={DataPerkebunan} index={3} />}
                        {data === 'Jeruk' && <DescPerkebunan data={DataPerkebunan} index={4} />}
                        {data === 'Seledri' && <DescPerkebunan data={DataPerkebunan} index={5} />}
                        {data === 'Tomat' && <DescPerkebunan data={DataPerkebunan} index={6} />}
                    </div>

                </div>

                <div className = 'col-span-1 relative'>
                    {data === 'Apel' && <MapPerkebunan data={DataPerkebunan} index={0} />}
                    {data === 'Bunga Kol' && <MapPerkebunan data={DataPerkebunan} index={1} />}
                    {data === 'Cabai Rawit' && <MapPerkebunan data={DataPerkebunan} index={2} />}
                    {data === 'Jagung' && <MapPerkebunan data={DataPerkebunan} index={3} />}
                    {data === 'Jeruk' && <MapPerkebunan data={DataPerkebunan} index={4} />}
                    {data === 'Seledri' && <MapPerkebunan data={DataPerkebunan} index={5} />}
                    {data === 'Tomat' && <MapPerkebunan data={DataPerkebunan} index={6} />}
                </div>
            </div>
            
        </div>
    );
}

export default Perkebunan;