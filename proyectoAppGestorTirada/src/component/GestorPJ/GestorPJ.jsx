import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import './GestorPJEstilo.css';
import TarjetaJugador from './TarjetaJugador/TarjetaJugador';
import PopUpAgregarNuevoPj from './PopUpAgregarNuevoPj/PopUpAgregarNuevoPj';
import { addCharacter, updateCharacter, deleteCharacter } from '../../app/characterSlice';

const GestorPJ = () => {
    const [isPopUpVisible, setPopUpVisible] = useState(false);
    const characters = useSelector((state) => state.characters.characters);
    const dispatch = useDispatch();

    const togglePopUp = () => {
        setPopUpVisible(!isPopUpVisible);
    };

    const handleAddCharacter = (character) => {
        dispatch(addCharacter(character));
    };

    const handleUpdateCharacter = (id, updatedCharacter) => {
        dispatch(updateCharacter({ id, ...updatedCharacter }));
    };

    const handleDeleteCharacter = (id) => {
        dispatch(deleteCharacter(id));
    };

    return (
        <div className='gestorPJPadre'>
            <div className='botonPrincipal'>
                <Button variant="primary" onClick={togglePopUp}>Agregar Nuevo PJ</Button>
                <PopUpAgregarNuevoPj isVisible={isPopUpVisible} onClose={togglePopUp} onSubmit={handleAddCharacter} />
            </div>
            <div className='cuerpoGestorPj'>
                {characters.map((character, index) => (
                    <TarjetaJugador key={index} datos={character} onDelete={handleDeleteCharacter} onUpdate={handleUpdateCharacter} />
                ))}
            </div>
        </div>
    );
}

export default GestorPJ;
