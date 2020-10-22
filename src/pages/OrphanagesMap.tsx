import React from 'react';
import {Link} from 'react-router-dom';
import mapMarkerImg from '../images/mapMarker.svg';
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import '../syles/pages/orphanages-map.css';
import {Map,TileLayer,Marker, Popup} from 'react-leaflet';

import mapIcon from '../utils/mapIcon';



function OrphanagesMap(){
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                <strong>Belo Horizonte</strong>
                <span>Minas Gerais</span>
                </footer>
            </aside>
            <Map 
            center={[-19.9552581,-44.0674924]}
            zoom={15}
            style={{width: '100%', height: '100%'}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{z}.png"/>

                <Marker 
                    icon = {mapIcon}
                    position={[-19.9552581,-44.0674924]}
                >
                    <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
                        Lar dos cria
                        <Link to="/orphanages/1">
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
                </Marker>
            </Map>

            <Link to="/orphanages/create" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div> 
    )
}

export default OrphanagesMap;