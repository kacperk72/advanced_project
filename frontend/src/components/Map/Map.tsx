import React, {useContext, useEffect, useState} from "react";
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import '../../utils/fix-map-icon';

import "./Map.css";
import 'leaflet/dist/leaflet.css';
import {SearchContext} from "../../contexts/search.context";
import {SimpleAdEntity} from "types";
import {SingleAd} from "./SingleAd";

export const Map = () => {
    const {search} = useContext(SearchContext);
    const [ads, setAds] = useState<SimpleAdEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/ad/search');
            const data = await res.json();

            setAds(data);
        })();
    }, [search]);


return (
    <div className="map">
        <h1>Search for {search}</h1>
        <MapContainer center={[50.2657152, 18.9945008]} zoom={20}>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution="&copy; <a href='https://openstreetmap.org/copyright'>OpenStreetMap</a> & contributors"
            />
            {
                ads.map(ad => (
                    <Marker key={ad.id} position={[ad.lat, ad.lon]}>
                        <Popup>
                            <SingleAd id={ad.id} />
                        </Popup>
                    </Marker>
                ))
            }
        </MapContainer>
    </div>
);
}
;