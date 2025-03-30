import React, { useState } from 'react';
import { MapContainer as LeafletMap, TileLayer, Polygon, Marker, Popup } from 'react-leaflet';
import { zones } from '../data/zones';
import 'leaflet/dist/leaflet.css';

// Fix for marker icons in React-Leaflet
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

function PortMap() {  // Changed from MapContainer to PortMap
  const [activeLayer, setActiveLayer] = useState('Tous');
  
  const filteredZones = activeLayer === 'Tous' 
    ? zones 
    : zones.filter(zone => zone.type === activeLayer);
  
  return (
    <div className="map-container">
      <div className="map-header">
        <div className="map-title">Carte des Zones Portuaires</div>
        <div className="layer-controls">
          {['Tous', 'Dépôts', 'Réparation', 'Parking', 'Export'].map(layer => (
            <button 
              key={layer}
              className={`layer-btn ${activeLayer === layer ? 'active' : ''}`}
              onClick={() => setActiveLayer(layer)}
            >
              {layer}
            </button>
          ))}
        </div>
      </div>
      <div style={{ height: "calc(100% - 52px)" }}>
        <LeafletMap center={[35.8936, -5.4928]} zoom={14} style={{ height: '100%', width: '100%' }}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          
          {filteredZones.map((zone, index) => (
            <Polygon
              key={index}
              positions={zone.coordinates}
              pathOptions={{ color: zone.color, fillOpacity: 0.5 }}
            >
              <Popup>
                <strong>{zone.name}</strong><br />
                Type: {zone.type}<br />
                Taux d'occupation: {zone.metrics.occupation}<br />
                Temps d'attente: {zone.metrics.waitTime}<br />
                {zone.metrics.throughput && `Débit: ${zone.metrics.throughput}`}
              </Popup>
            </Polygon>
          ))}
          
          <Marker position={[35.8860, -5.4980]}>
            <Popup><b>Entrée Principale</b><br/>Temps de passage moyen: 15 min</Popup>
          </Marker>
          <Marker position={[35.8940, -5.4850]}>
            <Popup><b>Bâtiment Administratif</b></Popup>
          </Marker>
        </LeafletMap>
      </div>
      
      <div className="legend">
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#4a8af4' }}></div>
          <span>Dépôts de Stockage</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#f4a93c' }}></div>
          <span>Zones de Réparation</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#5cb85c' }}></div>
          <span>Surfaces de Parking</span>
        </div>
        <div className="legend-item">
          <div className="legend-color" style={{ backgroundColor: '#d9534f' }}></div>
          <span>Zone d'Export</span>
        </div>
      </div>
    </div>
  );
}

export default PortMap;  // Export with the new name
