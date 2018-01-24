import React from 'react';
import Typography from 'material-ui/Typography';
import withRoot from '../src/withRoot';
import Link from '../src/components/link';

class MapPage extends React.Component {
  componentDidMount() {
    const { Map } = require('leaflet');
    // require('leaflet/dist/leaflet.css');
    this.map = new Map('map').setView([51.505, -0.09], 13);
    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
  render() {
    return (
      <div>
        <div id="map" style={{ width: '100%', height: '500px' }} />
        <Typography>Map page</Typography>
        <Link href="/">
          Index page
        </Link>
      </div>
    );
  }
}

export default withRoot(MapPage);
