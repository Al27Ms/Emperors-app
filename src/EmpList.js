import React from 'react';

const EmpList = ({ items }) => {
    return (
        <div className="section-center">
            {items.map((listItem) => {
                const { id, name, img, desc, reign } = listItem;
                return (
                    <div key={id} className="card">
                        <div className='photo'>
                            <img src={img} alt={name} className='photo' /></div>
                        <div className='container'>
                            <header>
                                <div className='name'>{name}</div>

                                <div className='reign'>{reign}</div>
                                <div className="line"></div>
                            </header>
                            <p className='item-text'>{desc}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default EmpList;