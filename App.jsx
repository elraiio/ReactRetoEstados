// App.jsx

import React from 'react';
import Tarjeta from './Tarjeta'; 
import Tarjeta from './Tarjeta';

const App = () => {
    return (
        <div>
            <section>
                <Tarjeta
                    imagen="https://pxc.cdn.ellitoral.com.ar/litoral/072013/1515428041087.webp?cw=770&ch=440&extw=jpg"
                    titulo="Consola Video Juegos"
                    descripcion="Esta es una consola que entretine a los programadores en sus breaks"
                />
            </section>
            <section>
                <Tarjeta
                    imagen="https://pxc.cdn.ellitoral.com.ar/litoral/072013/1515428041087.webp?cw=770&ch=440&extw=jpg"
                    titulo="Consola Video Juegos"
                    descripcion="Esta es una consola que entretine a los programadores en sus breaks"
                />
            </section>
            <section>
                <Tarjeta
                    imagen="https://pxc.cdn.ellitoral.com.ar/litoral/072013/1515428041087.webp?cw=770&ch=440&extw=jpg"
                    titulo="Consola Video Juegos"
                    descripcion="Esta es una consola que entretine a los programadores en sus breaks"
                />
            </section>
        </div>
    );
};

export default App;
