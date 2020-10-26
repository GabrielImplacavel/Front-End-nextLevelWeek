import React, {useEffect,useState} from 'react';
import {Link} from 'react-router-dom';
import mapMarkerImg from '../images/mapMarker.svg';
import {FiPlus, FiArrowRight} from 'react-icons/fi'
import '../syles/pages/orphanages-map.css';
import {Map,TileLayer,Marker, Popup} from 'react-leaflet';

import mapIcon from '../utils/mapIcon';
import api from '../services/api';


interface Orphanage {
    id: number;
    latitude: number;
    longitude: number;
    name: string;
}

function OrphanagesMap(){
    const [orphanages, setOphanages] = useState<Orphanage[]>([]);

    useEffect( ()=>{
        api.get('orphanages').then(response => {
            setOphanages(response.data);
        });
    } , []);


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
            style={{width: '100%', height: '100%', zIndex:1}}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

              {orphanages.map(orphanage => {
                  return (<Marker 
                    key={orphanage.id}
                    icon = {mapIcon}
                    position={[orphanage.latitude,orphanage.longitude]}  
                >
                    <Popup closeButton={false} minWidth={240} maxHeight={240} className="map-popup">
                        {orphanage.name}
                        <Link to={`/orphanages/${orphanage.id}`}>
                            <FiArrowRight size={20} color="#FFF"/>
                        </Link>
                    </Popup>
                </Marker>)
              })}  
            </Map>

            <Link to="/orphanages/create" style={{zIndex:2}} className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
            </Link>
        </div> 
    )
}

export default OrphanagesMap;