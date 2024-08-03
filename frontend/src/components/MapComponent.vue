<template>
  <div id="map"></div>
</template>

<script>
import L from 'leaflet';

export default {
  name: 'MapComponent',
  mounted() {
    // Coordenadas do ponto central
    const center = [-2.5291, -44.3028];
    
    // Definindo os limites (bounding box) ao redor do ponto central
    const bounds = L.latLngBounds(
      L.latLng(center[0] - 0.01, center[1] - 0.01), // Sudoeste
      L.latLng(center[0] + 0.01, center[1] + 0.01)  // Nordeste
    );

    // Inicializar o mapa dentro dos limites definidos
    this.map = L.map('map', {
      maxBounds: bounds,
      maxBoundsViscosity: 1.0,
      zoomControl: false // desativa o controle de zoom
    }).setView(center, 15);

    // Adicionar controle de zoom manualmente (opcional)
    L.control.zoom({
      position: 'bottomright'
    }).addTo(this.map);

    // Adicionar camadas do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
      maxZoom: 18,
      minZoom: 14 // Definir minZoom para garantir que o mapa mantenha a proporção
    }).addTo(this.map);

    // Adicionar um marcador
    L.marker(center).addTo(this.map)
      .bindPopup('<b>São Luís</b><br />Capital do Maranhão.')
      .openPopup();

    // Ajustar o mapa ao redimensionar a janela
    window.addEventListener('resize', () => {
      this.map.invalidateSize();
    });
  }
};
</script>

<style>
#map {
  width: 100%;
  height: 100%;
}
</style>
