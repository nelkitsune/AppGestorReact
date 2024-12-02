import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCharacter } from '../../../app/characterSlice';
import './PopUpAgregarNuevoPj.css';
import Button from 'react-bootstrap/Button';

const PopUpAgregarNuevoPj = ({ isVisible, onClose }) => {
    const dispatch = useDispatch();
    const characters = useSelector((state) => state.characters.characters);
    const initialCharacterData = {
        id: '',
        nombre: '',
        clases: '',
        nivel: '',
        raza: '',
        alineamiento: '',
        fuerza: '',
        destreza: '',
        constitucion: '',
        inteligencia: '',
        sabiduria: '',
        carisma: '',
        puntosVidaMaximo: '',
        puntosVidaActual: '',
        iniciativa: '',
        informacionAdicional: '',
        foto: ''
    };
    const [characterData, setCharacterData] = useState(initialCharacterData);

    useEffect(() => {
        if (!isVisible) {
            setCharacterData(initialCharacterData);
        }
    }, [isVisible]);

    if (!isVisible) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCharacterData({
            ...characterData,
            [name]: value
        });
    };

    const handleSubmit = () => {
        const maxId = characters.reduce((max, character) => (character.id > max ? character.id : max), 0);
        const newCharacter = {
            ...characterData,
            id: maxId + 1
        };
        dispatch(addCharacter(newCharacter));
        onClose();
    };

    return (
        <div className="overlay">
            <div className="popUpAgregarNuevoPj">
                <div className="tituloAgregarPersonaje">
                    <h1>Agregar Nuevos PJ</h1>
                </div>
                <div className='datosBasicosPersonajeJugador'>
                    <div className="inputGroup">
                        <label>Nombre del Personaje</label>
                        <input type="text" name="nombre" placeholder='Nombre del Personaje' value={characterData.nombre} onChange={handleChange} />
                    </div>
                    <div className="inputGroup">
                        <label>Clases</label>
                        <input type="text" name="clases" placeholder='Clases' value={characterData.clases} onChange={handleChange} />
                    </div>
                    <div className="inputGroup">
                        <label>Nivel</label>
                        <input type="number" name="nivel" placeholder='Nivel' value={characterData.nivel} onChange={handleChange} />
                    </div>
                    <div className="inputGroup">
                        <label>Raza</label>
                        <input type="text" name="raza" placeholder='Raza' value={characterData.raza} onChange={handleChange} />
                    </div>
                    <div className="inputGroup">
                        <label>Alineamiento</label>
                        <input type="text" name="alineamiento" placeholder='Alineamiento' value={characterData.alineamiento} onChange={handleChange} />
                    </div>
                </div>
                <div className="puntuacionDeCaracteristicasPersonajeJugador">
                    <div className="inputGroup">
                        <label>Fuerza</label>
                        <input type="text" name="fuerza" placeholder='Fuerza' value={characterData.fuerza} onChange={handleChange} />
                    </div>
                    <div className="inputGroup">
                        <label>Destreza</label>
                        <input type="text" name="destreza" placeholder='Destreza' value={characterData.destreza} onChange={handleChange} />
                    </div>
                    <div className="inputGroup">
                        <label>Constitución</label>
                        <input type="text" name="constitucion" placeholder='Constitucion' value={characterData.constitucion} onChange={handleChange} />
                    </div>
                    <div className="inputGroup">
                        <label>Inteligencia</label>
                        <input type="text" name="inteligencia" placeholder='Inteligencia' value={characterData.inteligencia} onChange={handleChange} />
                    </div>
                    <div className="inputGroup">
                        <label>Sabiduría</label>
                        <input type="text" name="sabiduria" placeholder='Sabiduria' value={characterData.sabiduria} onChange={handleChange} />
                    </div>
                    <div className="inputGroup">
                        <label>Carisma</label>
                        <input type="text" name="carisma" placeholder='Carisma' value={characterData.carisma} onChange={handleChange} />
                    </div>
                </div>
                <div className="puntosDeVidaMaximoJugador">
                    <div className="inputGroup">
                        <label>Puntos Máximos de Vida</label>
                        <input type="number" name="puntosVidaMaximo" placeholder='Puntos maximo de vida' value={characterData.puntosVidaMaximo} onChange={handleChange} />
                    </div>
                </div>
                <div className="puntosDeVidaActualJugador">
                    <div className="inputGroup">
                        <label>Puntos Actuales de Vida</label>
                        <input type="number" name="puntosVidaActual" placeholder='Puntos actuales de vida' value={characterData.puntosVidaActual} onChange={handleChange} />
                    </div>
                </div>
                <div className="iniciativaJugador">
                    <div className="inputGroup">
                        <label>Iniciativa</label>
                        <input type="number" name="iniciativa" placeholder='Iniciativa' value={characterData.iniciativa} onChange={handleChange} />
                    </div>
                </div>
                <div className="informacionAdicionalJugador">
                    <div className="inputGroup">
                        <label>Información Adicional</label>
                        <textarea name="informacionAdicional" placeholder='Informacion adicional' value={characterData.informacionAdicional} onChange={handleChange} />
                    </div>
                </div>
                <div className="agregarFoto">
                    <div className="inputGroup">
                        <label>URL de la Foto</label>
                        <input type="text" name="foto" placeholder='URL de la foto' value={characterData.foto} onChange={handleChange} />
                    </div>
                </div>
                <div className="botonEnviar">
                    <Button variant="success" onClick={handleSubmit}>Agregar</Button>
                </div>
                <div className="botonesclose">
                    <Button variant="danger" onClick={onClose}>Cerrar</Button>
                </div>
            </div>
        </div>
    );
}

export default PopUpAgregarNuevoPj;