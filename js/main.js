const mapElement = document.querySelector('gmp-map');

async function init() {
    // Request needed libraries.
    const [{ AdvancedMarkerElement }] = await Promise.all([
        google.maps.importLibrary('marker'),
        google.maps.importLibrary('maps'),
    ]);

    const marker = new AdvancedMarkerElement({
        position: { lat: 37.4239163, lng: -122.0947209 },
    });
    mapElement.append(marker);
}
void init();