function DescPerkebunan({data, index}) {
    const kategori = data[index];
    return(
        <div>
            <h3 className="text-3xl font-bold text-tosca mt-3 mb-5">{kategori.title}</h3>
            <p className="text-lg text-dark-grey text-justify">{kategori.desc}</p>
        </div>
    );

}

export default DescPerkebunan;

