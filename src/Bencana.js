import DataBencana from './DataBencana';

function Bencana() {
    return (
        <div className="px-4 md:px-10 lg:px-20 xl:px-44 pt-14 bg-dark-tosca min-h-screen h-full font-roboto">
            <div className="flex justify-center">
                <p className="flex text-tosca text-xs border rounded-2xl border-white mt-5 px-4 w-3/4 md:w-1/2 lg:w-1/3 text-center h-8 items-center justify-center font-bold bg-grey">Kawasan Rawan Bencana</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 lg:gap-20 mt-5 text-justify">
                <div className="h-full bg-white rounded-lg self-center pb-10">
                    <img src={DataBencana[0].img} alt={DataBencana[0].title} className="h-60 md:h-72 lg:h-[22rem] w-full object-cover rounded-t-lg" />
                    <h1 className="text-xl md:text-2xl font-bold text-dark-grey mt-3 px-4 md:px-5">{DataBencana[0].title}</h1>
                    <p className="text-base font-normal text-dark-grey mt-1 px-4 md:px-5">{DataBencana[0].desc}</p>
                </div>

                <div className="h-full bg-white rounded-lg self-center pb-10">
                    <img src={DataBencana[1].img} alt={DataBencana[1].title} className="h-60 md:h-72 lg:h-[22rem] w-full object-cover rounded-t-lg" />
                    <h1 className="text-xl md:text-2xl font-bold text-dark-grey mt-3 px-4 md:px-5">{DataBencana[1].title}</h1>
                    <p className="text-base font-normal text-dark-grey mt-1 px-4 md:px-5">{DataBencana[1].desc}</p>
                </div>
            </div>
        </div>
    )
}

export default Bencana;


// import DataBencana from './DataBencana';

// function Bencana () {
//     return (
//         <div className="px-44 pt-14 bg-dark-tosca h-lvh font-roboto">
//             <div className="flex justify-center">
//                 <p className = 'flex text-tosca text-xs border rounded-2xl border-white mt-5 px-4 w-64 text-center h-8 items-center justify-center font-bold bg-grey'>Kawasan Rawan Bencana</p>
//             </div>
//             <div className = 'grid grid-cols-2 gap-20 mt-5 text-justify'>
//                 <div className='h-[520px] bg-white rounded-lg self-center'>
//                     <img src={DataBencana[0].img} alt={DataBencana[0].title} className='h-[350px] w-full object-cover rounded-t-lg'></img>
//                     <h1 className='text-2xl font-bold text-dark-grey mt-3 px-5'>{DataBencana[0].title}</h1>
//                     <p className='text-base font-normal text-dark-grey mt-1 px-5'>{DataBencana[0].desc}</p>
//                 </div>

//                 <div className='h-[520px] bg-white rounded-lg self-center'>
//                     <img src={DataBencana[1].img} alt={DataBencana[1].title} className='h-[350px] w-full object-cover rounded-t-lg'></img>
//                     <h1 className='text-2xl font-bold text-dark-grey mt-3 px-5'>{DataBencana[1].title}</h1>
//                     <p className='text-base font-normal text-dark-grey mt-1 px-5'>{DataBencana[1].desc}</p>
//                 </div>
//             </div>
            
//         </div>
//     )
// }

// export default Bencana;