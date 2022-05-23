import React, {useContext, useEffect} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon';

import "./Map.css";
import 'leaflet/dist/leaflet.css';
import {SearchContext} from "../../contexts/search.context";

export const Map = () => {
    const {search} = useContext(SearchContext);

    useEffect(() => {
        console.log('Make request to search for', search);
    }, [search]);

    return(
        <div className="map">
            <h1>Search for {search}</h1>
            <MapContainer center={[50.2657152,18.9945008]} zoom={20}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
                />
                <Marker position={[50.2657152,18.9945008]}>
                    <Popup>
                        <h2>It.focus</h2>
                        <p>Super firma co programuje</p>
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};