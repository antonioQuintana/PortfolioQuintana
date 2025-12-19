import React, { useState, useEffect } from 'react';
import { pilotos } from '../data/pilots';

const Pilots = () => {
    const [sortedPilots, setSortedPilots] = useState(pilotos);
    const [sortCriterion, setSortCriterion] = useState('puntos');

    useEffect(() => {
        const sorted = [...pilotos].sort((a, b) => {
            if (sortCriterion === 'puntos') {
                return b.puntos - a.puntos;
            } else {
                return a.nombre.localeCompare(b.nombre);
            }
        });
        setSortedPilots(sorted);
    }, [sortCriterion]);

    return (
        <div className="container my-5">
            <h2 className="text-center text-white mb-4">Pilotos F1 - Temporada Actual</h2>
            <div className="row mb-3">
                <div className="col-md-4 mx-auto">
                    <select
                        id="ordenarPilotos"
                        className="form-select"
                        value={sortCriterion}
                        onChange={(e) => setSortCriterion(e.target.value)}
                    >
                        <option value="puntos">Ordenar por puntos</option>
                        <option value="nombre">Ordenar alfabéticamente</option>
                    </select>
                </div>
            </div>
            <div className="row" id="pilotos-lista">
                {sortedPilots.map((piloto, index) => (
                    <div key={index} className="col-md-3 mb-4">
                        <div className="card h-100 shadow">
                            <a href={piloto.f1url} target="_blank" rel="noreferrer">
                                <img
                                    src={piloto.foto}
                                    className="card-img-top"
                                    alt={piloto.nombre}
                                    style={{ height: '260px', objectFit: 'cover', objectPosition: 'top' }}
                                    loading="lazy"
                                    decoding="async"
                                    width="100%"
                                    height="260"
                                    onError={(e) => {
                                        e.target.onerror = null;
                                        e.target.src = "https://placehold.co/400x400?text=No+Image";
                                    }}
                                />
                            </a>
                            <div className="card-body">
                                <h5 className="card-title">{piloto.nombre}</h5>
                                <p className="card-text mb-1"><strong>Equipo:</strong> {piloto.equipo}</p>
                                <p className="card-text mb-1"><strong>Nacionalidad:</strong> {piloto.nacionalidad}</p>
                                <p className="card-text mb-1"><strong>Edad:</strong> {piloto.edad}</p>
                                <p className="card-text"><strong>Puntos:</strong> {piloto.puntos}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Pilots;
