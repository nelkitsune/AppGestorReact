import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { selectCharacter } from '../../../app/selectedCharacterSlice';
import { deleteCharacter } from '../../../app/characterSlice';
import Button from 'react-bootstrap/Button';
import './TarjetaJugador.css';
import VerPj from './VerPj/VerPj';
import PopUpEditarPj from '../PopUpEditarPj/PopUpEditarPj';

const TarjetaJugador = ({ datos }) => {
    const [isVerPjVisible, setVerPjVisible] = useState(false);
    const [isEditarPjVisible, setEditarPjVisible] = useState(false);
    const dispatch = useDispatch();

    const handleVerPj = () => {
        dispatch(selectCharacter(datos));
        togglePopUpVerPj();
    };

    const handleEditarPj = () => {
        dispatch(selectCharacter(datos));
        togglePopUpEditarPj();
    };

    const handleBorrarPj = () => {
        dispatch(deleteCharacter(datos.id));
    };

    const togglePopUpVerPj = () => {
        setVerPjVisible(!isVerPjVisible);
    };

    const togglePopUpEditarPj = () => {
        setEditarPjVisible(!isEditarPjVisible);
    };

    return (
        <>
            <div className='tarjetaJugador'>
                <div className='tarjetaJugadorImagen'>
                    <img src={datos.foto || 'https://via.placeholder.com/150'} alt='Imagen de jugador' />
                </div>
                <div className='tarjetaJugadorDatos'>
                    <div className='tarjetaJugadorNombre'>
                        <h3>{datos.nombre}</h3>
                    </div>
                    <div className='tarjetaJugadorDatos'>
                        <p>Raza: {datos.raza}</p>
                        <p>Clase: {datos.clases}</p>
                    </div>
                    <div className='seccionDeBotones'>
                        <Button variant="primary" onClick={handleVerPj}>Ver</Button>
                        <Button variant="success" onClick={handleEditarPj}>Editar</Button>
                        <Button variant="danger" onClick={handleBorrarPj}>Borrar</Button>
                    </div>
                </div>
            </div>
            {isVerPjVisible && <VerPj isVisible={isVerPjVisible} onClose={togglePopUpVerPj} datos={datos} />}
            {isEditarPjVisible && <PopUpEditarPj isVisible={isEditarPjVisible} onClose={togglePopUpEditarPj} />}
        </>
    );
}

export default TarjetaJugador;