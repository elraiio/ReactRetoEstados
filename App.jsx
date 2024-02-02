import React from 'react';
import ReactDOM from 'react-dom';
import Tarjeta from './Tarjeta';

const App = () => {
    const descripcionComun = "Esta es una consola que entretiene a los programadores en sus breaks";

    return (
        <div>
            <section>
                <Tarjeta
                    imagen="https://acdn.mitiendanube.com/stores/002/500/835/products/11-1956ed0bdf91c3a3f216070936724610-640-0-74e6bbe0e715b7522c17049945879596-1024-1024.png"
                    titulo="Consola Video Juegos 1"
                    descripcion={descripcionComun}
                />
            </section>
            <section>
                <Tarjeta
                    imagen="https://acdn.mitiendanube.com/stores/002/500/835/products/11-1956ed0bdf91c3a3f216070936724610-640-0-74e6bbe0e715b7522c17049945879596-1024-1024.png"
                    titulo="Consola Video Juegos 2"
                    descripcion={descripcionComun}
                />
            </section>
            <section>
                <Tarjeta
                    imagen="https://acdn.mitiendanube.com/stores/002/500/835/products/11-1956ed0bdf91c3a3f216070936724610-640-0-74e6bbe0e715b7522c17049945879596-1024-1024.png"
                    titulo="Consola Video Juegos 3"
                    descripcion={descripcionComun}
                />
            </section>
        </div>
    );
};

export default App;
