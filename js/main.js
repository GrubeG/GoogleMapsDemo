const mapElement = document.querySelector('gmp-map');

async function init() {
    // Request needed libraries.
    const [{ AdvancedMarkerElement, PinElement }] = await Promise.all([
        google.maps.importLibrary('marker'),
        google.maps.importLibrary('maps'),
    ]);
    
    // 1. Customize the background, border, and inner glyph
    const customizedPin = new PinElement({
        background: "#f4a582",
        borderColor: "white",
        glyphColor: "white",
        scale: 1.2, // Scales the pin size up by 20%
    });

    const marker1 = new AdvancedMarkerElement({
        position: { lat: 43.5, lng: -90 },
        title: "Customized Pin Colors",
    });
    marker1.append(customizedPin); // Add your pin modifications
    mapElement.append(marker1);
   
     // 1. Customize the background, border, and inner glyph
    const customizedPin2 = new PinElement({
        background: "#0571b0",
        borderColor: "black",
        glyphColor: "white",
        scale: 1.2, // Scales the pin size up by 20%
    });

    const marker2 = new AdvancedMarkerElement({
        position: { lat: 43.495, lng: -90 },
        title: "Customized Pin Colors",
    });
    marker2.append(customizedPin2); // Add your pin modifications
    mapElement.append(marker2);
    
    // 1. Customize the background, border, and inner glyph
    const customizedPin3 = new PinElement({
        background: "#ca0020",
        borderColor: "white",
        glyphColor: "white",
        scale: 1.2, // Scales the pin size up by 20%
    });

    const marker3 = new AdvancedMarkerElement({
        position: { lat: 43.485, lng: -90 },
        title: "Customized Pin Colors",
    });
    marker2.append(customizedPin3); // Add your pin modifications
    mapElement.append(marker3);
    
    
    
    
    
    // 2. Replace the inner glyph with custom text
    const textPin = new PinElement({
        glyphText: "Fix",
        glyphColor: "white",
    });
    
    const markerText = new AdvancedMarkerElement({
        position: { lat: 43.51, lng: -90 },
        title: "Pin with Text Glyph",
    });
    markerText.append(textPin);
    mapElement.append(markerText);
}
void init();