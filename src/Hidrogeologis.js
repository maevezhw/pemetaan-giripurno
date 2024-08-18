import DataHidro from './DataHidro';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

function Hidro () {
    const [curr, setCurr] = useState(0)
    const slides = DataHidro
    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    return (
        <div className="bg-hidro-bg px-4 sm:px-8 md:px-20 lg:px-32 xl:px-44 h-lvh font-roboto grid grid-cols-1 md:grid-cols-3 justify-center relative bg-cover">
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button
                onClick={prev}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                <ChevronLeft size={40} />
                </button>

                <button
                onClick={next}
                className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
                >
                <ChevronRight size={40} />
                </button>
            </div>

            <div className='h-lvh col-span-1 content-center justify-self-center mt-8 md:mt-0'>
                <p className='flex text-white text-xs border rounded-2xl border-white px-4 w-44 text-center h-8 items-center justify-center font-bold'>Kondisi Hidrogeologi</p>
                <h1 className='text-3xl md:text-5xl font-bold text-white mt-5 justify-items-center'>{slides[curr].title}</h1>
            </div>

            <div className='h-lvh col-span-1 justify-self-center pt-12 md:pt-24'>
                <img src={slides[curr].img} alt={slides[curr].title} className='h-48 md:h-[580px] object-contain'></img>
            </div>

            <div className='h-lvh col-span-1 justify-self-center content-center mt-8 md:mt-0'>
                <p className='text-base md:text-lg font-normal text-white mt-1 justify-items-center'>{slides[curr].desc}</p>

                <img src={slides[curr].legend} className='absolute bottom-6 h-20 md:h-28'></img>
            </div>
        </div>
    );
}

export default Hidro;


// import DataHidro from './DataHidro';
// import { useState } from 'react';
// import { ChevronLeft, ChevronRight } from 'react-feather';

// function Hidro () {
//     const [curr, setCurr] = useState(0)
//     const slides = DataHidro
//     const prev = () =>
//         setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
//     const next = () =>
//         setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

//     return (
//         <div className="bg-hidro-bg px-44 h-lvh font-roboto grid grid-cols-3 justify-center relative bg-cover">
//             <div className="absolute inset-0 flex items-center justify-between p-4">
//                 <button
//                 onClick={prev}
//                 className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//                 >
//                 <ChevronLeft size={40} />
//                 </button>

//                 <button
//                 onClick={next}
//                 className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//                 >
//                 <ChevronRight size={40} />
//                 </button>
//             </div>

//             <div className='h-lvh col-span-1 content-center justify-self-center'>
//                 <p className = 'flex text-white text-xs border rounded-2xl border-white px-4 w-44 text-center h-8 items-center justify-center font-bold'>Kondisi Hidrogeologi</p>
//                 <h1 className='text-5xl font-bold text-white mt-5 justify-items-center'>{slides[curr].title}</h1>
//             </div>

//             <div className='h-lvh col-span-1 justify-self-center content-center pt-24'>
//                 <img src={slides[curr].img} alt={slides[curr].title} className='h-[580px] object-contain'></img>
//             </div>

//             <div className='h-lvh col-span-1 justify-self-center content-center'>
//                 <p className='text-lg font-normal text-white mt-1 justify-items-center'>{slides[curr].desc}</p>

//                 <img src={slides[curr].legend} className = "absolute bottom-6 h-28"></img>
//             </div>
//         </div>
//     );
// }

// export default Hidro;