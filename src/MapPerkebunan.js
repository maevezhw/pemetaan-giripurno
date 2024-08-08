function MapPerkebunan({data, index}) {
    const kategori = data[index];
    return(
        <div>
            <img src={kategori.img} className="h-[600px] absolute right-[50px] top-10"></img>
        </div>
    );

}

export default MapPerkebunan;

