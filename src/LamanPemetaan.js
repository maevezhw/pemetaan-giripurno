import Header from './Header';
import Nav from './Nav';
import DataKategori from './DataKategori'; 
import Perkebunan from './Perkebunan';
import Hutan from './Hutan';
import Bencana from './Bencana';
import Hidro from './Hidrogeologis';
import Footer from './Footer';

function Pemetaan() {
    return (
        <div className="bg-grey font-roboto snap-y snap-mandatory h-lvh overflow-y-scroll scroll-smooth">
            <Header />
            <Nav />

            <div className="snap-start snap-mandatory">
                <div className="px-4 md:px-10 lg:px-20 xl:px-44 pt-6 justify-items-center grid w-full align-center h-full">
                    <h1 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4">Hasil Pemetaan Daerah Giripurno Periode Juli 2024</h1>
                    <p className="text-wrap w-full md:w-3/4 lg:w-4/5 text-center">
                        Pemetaan dilakukan di bulan Juli 2024 di 6 dusun Desa Giripurno, mulai dari dusun Durek, Sumbersari, Krajan, Sawahan, Sabrangbendo, hingga Kedung. Pemetaan ini dilakukan untuk memetakan beberapa aspek, mulai dari
                        <b> hasil perkebunan dan pertanian</b>, <b>kondisi hutan</b>, <b>kawasan-kawasan rawan bencana</b>, hingga <b>kondisi hidrogeologis</b> lingkungan sekitar.
                    </p>
                    <p className="text-base flex items-center justify-center mb-2">
                        <a href="https://drive.google.com/drive/folders/1dS_0jn2X7lPDHr6zPt5gtVMkHU6TqvH0?usp=drive_link" className="flex items-center justify-center h-20" target="_blank">
                            <button className="bg-tosca text-white font-bold py-2 px-4 rounded transform transition duration-300 ease-in-out hover:bg-dark-tosca hover:scale-105">
                                File Peta Detail
                            </button>
                        </a>
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-4 md:px-10 lg:px-20 xl:px-44 justify-items-center items-center mb-9">
                    {DataKategori.map((kategori, index) => (
                        <div key={index} className="relative items-center content-center self-center h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
                            <a href={kategori.link}>
                                <img src={kategori.img} alt={kategori.title} className="h-full w-full object-cover border rounded-lg"></img>
                                <div className="absolute inset-0 flex items-center justify-center hover:bg-black hover:bg-opacity-50 hover:rounded-lg">
                                    <h3 className="text-lg font-semibold text-white text-center">{kategori.title}</h3>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="snap-start snap-mandatory" id="kebun">
                <Perkebunan />
            </div>

            <div className="snap-start snap-mandatory" id="hutan">
                <Hutan />
            </div>

            <div className="snap-start snap-mandatory" id="bencana">
                <Bencana />
            </div>

            <div className="snap-start snap-mandatory" id="hidro">
                <Hidro />
            </div>

            <div className="snap-start snap-mandatory">
                <Footer />
            </div>
        </div>
    );
}

export default Pemetaan;


// import Header from './Header';
// import Nav from './Nav';
// import DataKategori from './DataKategori'; 
// import Perkebunan from './Perkebunan';
// import Hutan from './Hutan';
// import Bencana from './Bencana';
// import Hidro from './Hidrogeologis';
// import Footer from './Footer';

// function Pemetaan() {
//     return (
//         <div className="bg-grey font-roboto snap-y snap-mandatory h-lvh overflow-y-scroll scroll-smooth">
//             <Header />
//             <Nav />

//             <div className = "snap-start snap-mandatory">
//                 <div className = "px-44 pt-6 justify-items-center grid w-full align-center h-full">
//                     <h1 className="text-3xl font-bold mb-4">Hasil Pemetaan Daerah Giripurno Periode Juli 2024</h1>
//                     <p className = 'text-wrap w-4/5 text-center'>Pemetaan dilakukan di bulan Juli 2024 di 6 dusun Desa Giripurno, mulai dari dusun Durek, Sumbersari, Krajan, Sawahan, Sabrangbendo, hingga Kedung. Pemetaan ini dilakukan untuk memetakan beberapa aspek, mulai dari
//                         <b> hasil perkebunan dan pertanian</b>, <b>kondisi hutan</b>, <b>kawasan-kawasan rawan bencana</b>, hingga <b>kondisi hidrogeologis</b> lingkungan sekitar.
//                     </p>
//                     <p className="text-base flex items-center justify-center mb-2">
//                         <a href="https://drive.google.com/drive/folders/1dS_0jn2X7lPDHr6zPt5gtVMkHU6TqvH0?usp=drive_link" className="flex items-center justify-center h-20" target="_blank">
//                             <button className="bg-tosca text-white font-bold py-2 px-4 rounded transform transition duration-300 ease-in-out hover:bg-dark-tosca hover:scale-105">
//                                 File Peta Detail
//                             </button>
//                         </a>

//                     </p>

//                 </div>
                
//                 <div className="grid grid-cols-4 gap-5 px-44 justify-items-center items-center mb-9">
//                     {DataKategori.map((kategori, index) => (
//                         <div key={index} className="relative items-center content-center self-center h-56 w-64 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
//                             <a href = {kategori.link}>
//                                 <img src={kategori.img} alt={kategori.title} className="h-full w-full object-cover border rounded-lg"></img>
//                                 <div className="absolute inset-0 flex items-center justify-center hover:bg-black hover:bg-opacity-50 hover:rounded-lg">
//                                     <h3 className="text-lg font-semibold text-white text-center">{kategori.title}</h3>
//                                 </div>
//                             </a>
//                         </div>
//                     ))}
//                 </div>

//             </div>

//             <div className='snap-start snap-mandatory' id="kebun">
//                 <Perkebunan />
//             </div>

//             <div className='snap-start snap-mandatory' id = "hutan">
//                 <Hutan />
//             </div>

//             <div className='snap-start snap-mandatory' id = "bencana">
//                 <Bencana />
//             </div>

//             <div className='snap-start snap-mandatory' id = "hidro">
//                 <Hidro />
//             </div>

//             <div className='snap-start snap-mandatory'>
//                 <Footer />
//             </div>
//         </div>
//     );
// }

// export default Pemetaan;