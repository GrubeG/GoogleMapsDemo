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
    marker3.append(customizedPin3); // Add your pin modifications
    mapElement.append(marker3);
    
    // 1. Customize the background, border, and inner glyph
    const customizedPin4 = new PinElement({
        background: "#d01c8b",
        borderColor: "white",
        glyphColor: "white",
        scale: 1.2, // Scales the pin size up by 20%
    });

    const marker4 = new AdvancedMarkerElement({
        position: { lat: 43.485, lng: -90.05 },
        title: "Customized Pin Colors",
    });
    marker4.append(customizedPin4); // Add your pin modifications
    mapElement.append(marker4);
    
    // 1. Customize the background, border, and inner glyph
    const customizedPin5 = new PinElement({
        background: "#f1b6da",
        borderColor: "black",
        glyphColor: "black",
        scale: 1.0, // Scales the pin size up by 20%
    });

    const marker5 = new AdvancedMarkerElement({
        position: { lat: 43.49, lng: -90.05 },
        title: "Customized Pin Colors",
    });
    marker5.append(customizedPin5); // Add your pin modifications
    mapElement.append(marker5);
    
    // 1. Customize the background, border, and inner glyph
    const customizedPin6 = new PinElement({
        background: "#b8e186",
        borderColor: "white",
        glyphColor: "white",
        scale: 1.2, // Scales the pin size up by 20%
    });

    const marker6 = new AdvancedMarkerElement({
        position: { lat: 43.495, lng: -90.05 },
        title: "Customized Pin Colors",
    });
    marker6.append(customizedPin6); // Add your pin modifications
    mapElement.append(marker6);
    
    // 1. Customize the background, border, and inner glyph
    const customizedPin7 = new PinElement({
        background: "#3FDCE0",
        borderColor: "black",
        glyphColor: "black",
        scale: 1.2, // Scales the pin size up by 20%
    });

    const marker7 = new AdvancedMarkerElement({
        position: { lat: 43.495, lng: -90.10 },
        title: "Customized Pin Colors",
    });
    marker7.append(customizedPin7); // Add your pin modifications
    mapElement.append(marker7);
    
    // 1. Customize the background, border, and inner glyph
    const customizedPin8 = new PinElement({
        background: "#FFBF00",
        borderColor: "black",
        glyphColor: "black",
        scale: 1.2, // Scales the pin size up by 20%
    });

    const marker8 = new AdvancedMarkerElement({
        position: { lat: 43.490, lng: -90.10 },
        title: "Customized Pin Colors",
    });
    marker8.append(customizedPin8); // Add your pin modifications
    mapElement.append(marker8);
    
    // 1. Customize the background, border, and inner glyph
    const customizedPin9 = new PinElement({
        background: "#F71839",
        borderColor: "black",
        glyphColor: "black",
        scale: 1.2, // Scales the pin size up by 20%
    });

    const marker9 = new AdvancedMarkerElement({
        position: { lat: 43.485, lng: -90.10 },
        title: "Customized Pin Colors",
    });
    marker9.append(customizedPin9); // Add your pin modifications
    mapElement.append(marker9);
    
    
    
    
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