let mapboxgl = require('mapbox-gl');

module.exports = {
  buildMarker: function (type, coordinates){
    const element = document.createElement('div');
    element.style.width = "32px";
    element.style.height = "39px";

    if (type === 'activity'){
      element.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
    }
    else if (type === 'hotel'){
      element.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
    }
    else {
      element.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";
    }
    const marker = new mapboxgl.Marker(element).setLngLat(coordinates);
    return marker;
  }
}
