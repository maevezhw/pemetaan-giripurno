import DataHutan from './DataHutan';
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';

function Hutan() {
    const [curr, setCurr] = useState(0)
    const slides = DataHutan
    const prev = () =>
        setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1))
    const next = () =>
        setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1))

    return (
        <div className='bg-grey h-lvh font-roboto grid grid-cols-3 relative'>
            <div className='col-span-1 h-lvh'>
                <img src={slides[curr].img} alt={slides[curr].title} className='h-lvh w-full object-cover'></img>
            </div>

            <div className='col-span-2 flex items-center h-full px-20 py-20'>
                <div>
                    <p className = 'flex text-black text-xs border rounded-2xl border-black mt-3 w-36 text-center h-8 items-center justify-center font-bold'>Kawasan Hutan</p>
                    <h1 className='text-4xl font-bold text-dark-grey mt-5'>{slides[curr].title}</h1>
                    <h2 className='text-lg font-medium text-dark-grey mt-6 w-[700px] text-justify'>{slides[curr].desc}</h2>
                </div>

                <img src={slides[curr].legend} className = "absolute bottom-6"></img>
            </div>

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
        </div>
    );
}

export default Hutan;