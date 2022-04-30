import React from "react";


const Dynasties = ({ dynasties, filterList }) => {
    return (
        <div className="btn-container">
            {dynasties.map((dynasty, index) => {
                return (
                    <button
                        type="button"
                        className="btn"
                        key={index}
                        onClick={() => filterList(dynasty)}
                    >
                        {dynasty}
                    </button>
                );
            })}
        </div>
    );
};

export default Dynasties;