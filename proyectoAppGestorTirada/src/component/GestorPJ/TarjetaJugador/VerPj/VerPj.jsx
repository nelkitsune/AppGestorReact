import React from 'react';
import { useSelector } from 'react-redux';
import './VerPjEstilo.css';
import Button from 'react-bootstrap/Button';

const VerPj = ({ isVisible, onClose }) => {
    const personajeJugador = useSelector((state) => state.selectedCharacter.selectedCharacter);

    if (!isVisible || !personajeJugador) return null;

    return (
        <div className="overlay">
            <div className="verPj">
                <div className="nombreTitulo">
                    <h1>{personajeJugador.nombre}</h1>
                </div>
                <div className="foto">
                    <img src={personajeJugador.foto || 'https://via.placeholder.com/150'} alt='Imagen de jugador' />
                </div>
                <div className="infoBasica">
                    <p>Raza: {personajeJugador.raza}</p>
                    <p>Clase: {personajeJugador.clases}</p>
                    <p>Nivel: {personajeJugador.nivel}</p>
                    <p>Alineamiento: {personajeJugador.alineamiento}</p>
                </div>
                <div className="caracteristica">
                    <p>Fuerza: {personajeJugador.fuerza}</p>
                    <p>Destreza: {personajeJugador.destreza}</p>
                    <p>Constitución: {personajeJugador.constitucion}</p>
                    <p>Inteligencia: {personajeJugador.inteligencia}</p>
                    <p>Sabiduría: {personajeJugador.sabiduria}</p>
                    <p>Carisma: {personajeJugador.carisma}</p>
                </div>
                <div className="vidaIniciativa">
                    <p>Puntos de Vida Máximo: {personajeJugador.puntosVidaMaximo}</p>
                    <p>Puntos de Vida Actual: {personajeJugador.puntosVidaActual}</p>
                    <p>Iniciativa: {personajeJugador.iniciativa}</p>
                </div>
                <div className="infoAdicional">
                    <p>{personajeJugador.informacionAdicional}</p>
                </div>
                <div className="botonCerrar">
                    <Button variant="danger" onClick={onClose}>Cerrar</Button>
                </div>
            </div>
        </div>
    );
}

export default VerPj;
