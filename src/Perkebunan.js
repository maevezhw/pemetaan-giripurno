import { useState } from 'react';
import DataPerkebunan from './DataPerkebunan';
import DescPerkebunan from './DescPerkebunan';
import MapPerkebunan from './MapPerkebunan';

function Perkebunan() {
    const [data, setData] = useState('Apel');

    return (
        <div className="bg-kebun-bg px-4 md:pl-10 md:pr-5 lg:pl-20 lg:pr-10 xl:pl-44 xl:pr-20 py-6 min-h-screen h-full font-roboto">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-2">
                <div className="col-span-1 lg:col-span-4 mt-16">
                    <p className="flex text-white text-xs font-bold border rounded-2xl border-white mt-3 w-3/4 md:w-1/2 lg:w-1/3 text-center h-8 items-center justify-center backdrop-blur-xl">Pertanian dan Perkebunan</p>
                    <h1 className="text-3xl lg:text-4xl font-bold text-white mt-5">Hasil Pertanian dan Perkebunan</h1>
                    <h2 className="text-xl lg:text-2xl font-normal text-white mt-3 mb-5">Musim Tanam 1 2024</h2>

                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mt-3 w-full lg:w-4/5">
                        <button onClick={() => setData('Apel')} className={`${data === 'Apel' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Apel</button>
                        <button onClick={() => setData('Bunga Kol')} className={`${data === 'Bunga Kol' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Bunga Kol</button>
                        <button onClick={() => setData('Cabai Rawit')} className={`${data === 'Cabai Rawit' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Cabai</button>
                        <button onClick={() => setData('Jagung')} className={`${data === 'Jagung' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Jagung</button>
                        <button onClick={() => setData('Jeruk')} className={`${data === 'Jeruk' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Jeruk</button>
                        <button onClick={() => setData('Seledri')} className={`${data === 'Seledri' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Seledri</button>
                        <button onClick={() => setData('Tomat')} className={`${data === 'Tomat' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Tomat</button>
                    </div>

                    <div className="h-80 w-full lg:w-4/5 mt-10 px-4 md:px-8 py-5 bg-white border rounded-lg">
                        {data === 'Apel' && <DescPerkebunan data={DataPerkebunan} index={0} />}
                        {data === 'Bunga Kol' && <DescPerkebunan data={DataPerkebunan} index={1} />}
                        {data === 'Cabai Rawit' && <DescPerkebunan data={DataPerkebunan} index={2} />}
                        {data === 'Jagung' && <DescPerkebunan data={DataPerkebunan} index={3} />}
                        {data === 'Jeruk' && <DescPerkebunan data={DataPerkebunan} index={4} />}
                        {data === 'Seledri' && <DescPerkebunan data={DataPerkebunan} index={5} />}
                        {data === 'Tomat' && <DescPerkebunan data={DataPerkebunan} index={6} />}
                    </div>
                </div>

                <div className="col-span-1 relative mt-10 lg:mt-0">
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


// import { useState } from 'react';
// import DataPerkebunan from './DataPerkebunan';
// import DescPerkebunan from './DescPerkebunan';
// import MapPerkebunan from './MapPerkebunan';

// function Perkebunan () {
//     const [data, setData] = useState('Apel');

//     return (
//         <div className = 'bg-kebun-bg px-44 py-6 h-lvh font-roboto'>
//             <div className = 'grid grid-cols-5 gap-2'>
//                 <div className = 'col-span-4 mt-16'>
//                     <p className = 'flex text-white text-xs font-bold border rounded-2xl border-white mt-3 w-44 text-center h-8 items-center justify-center backdrop-blur-xl'>Pertanian dan Perkebunan</p>
//                     <h1 className = 'text-4xl font-bold text-white mt-5'>Hasil Pertanian dan Perkebunan</h1>
//                     <h2 className = 'text-2xl font-normal text-white mt-3 mb-5'>Musim Tanam 1 2024</h2>

//                     <div className = 'grid grid-cols-7 gap-2 mt-3 w-[830px]'>
//                         <button onClick={() => setData('Apel')} className = {`${data === 'Apel' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Apel</button>
//                         <button onClick={() => setData('Bunga Kol')} className = {`${data === 'Bunga Kol' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Bunga Kol</button>
//                         <button onClick={() => setData('Cabai Rawit')} className = {`${data === 'Cabai Rawit' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Cabai Rawit</button>
//                         <button onClick={() => setData('Jagung')} className = {`${data === 'Jagung' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Jagung</button>
//                         <button onClick={() => setData('Jeruk')} className = {`${data === 'Jeruk' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Jeruk</button>
//                         <button onClick={() => setData('Seledri')} className = {`${data === 'Seledri' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Seledri</button>
//                         <button onClick={() => setData('Tomat')} className = {`${data === 'Tomat' ? 'bg-tosca border-none' : 'bg-none'} text-white font-medium rounded-lg border border-white py-1 px-2`}>Tomat</button>
//                     </div>

//                     <div className = 'h-80 w-[700px] mt-10 px-8 py-5 bg-white border rounded-lg'>
//                         {data === 'Apel' && <DescPerkebunan data={DataPerkebunan} index={0} />}
//                         {data === 'Bunga Kol' && <DescPerkebunan data={DataPerkebunan} index={1} />}
//                         {data === 'Cabai Rawit' && <DescPerkebunan data={DataPerkebunan} index={2} />}
//                         {data === 'Jagung' && <DescPerkebunan data={DataPerkebunan} index={3} />}
//                         {data === 'Jeruk' && <DescPerkebunan data={DataPerkebunan} index={4} />}
//                         {data === 'Seledri' && <DescPerkebunan data={DataPerkebunan} index={5} />}
//                         {data === 'Tomat' && <DescPerkebunan data={DataPerkebunan} index={6} />}
//                     </div>

//                 </div>

//                 <div className = 'col-span-1 relative'>
//                     {data === 'Apel' && <MapPerkebunan data={DataPerkebunan} index={0} />}
//                     {data === 'Bunga Kol' && <MapPerkebunan data={DataPerkebunan} index={1} />}
//                     {data === 'Cabai Rawit' && <MapPerkebunan data={DataPerkebunan} index={2} />}
//                     {data === 'Jagung' && <MapPerkebunan data={DataPerkebunan} index={3} />}
//                     {data === 'Jeruk' && <MapPerkebunan data={DataPerkebunan} index={4} />}
//                     {data === 'Seledri' && <MapPerkebunan data={DataPerkebunan} index={5} />}
//                     {data === 'Tomat' && <MapPerkebunan data={DataPerkebunan} index={6} />}
//                 </div>
//             </div>
            
//         </div>
//     );
// }

// export default Perkebunan;