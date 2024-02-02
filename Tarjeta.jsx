
import React, { useState } from 'react';
import './Tarjeta.css';

const Tarjeta = ({ imagen, titulo, descripcion }) => {
    const [cantidad, setCantidad] = useState(0);

    const aumentarCantidad = () => {
        setCantidad(cantidad + 1);
    };

    const disminuirCantidad = () => {
        if (cantidad > 0) {
            setCantidad(cantidad - 1);
        }
    };

    return (
        <div className="tarjeta-articulo">
            <img src={imagen} alt={alt} />
            <div className="contenido">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
                <div className="contador">
                    <button onClick={disminuirCantidad}>-</button>
                    <span>{cantidad}</span>
                    <button onClick={aumentarCantidad}>+</button>
                </div>
            </div>
        </div>
    );
};

export default Tarjeta;