import React from 'react';

const CategoryMap = ({ data}) => {
    return (
        <div>
            {data.map((kategori) => (
                <div className = "relative">
                    <img src={kategori.img} alt={kategori.title} className="mx-auto backdrop-brightness-50 border rounded-lg"></img>
                    <h3 className="text-lg font-semibold text-white text-center absolute justify-items-center">{kategori.title}</h3>
                </div>
                
            ))}
        </div>
        
    );
};

export default CategoryMap;
