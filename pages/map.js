import React from 'react';
import Typography from 'material-ui/Typography';
import withRoot from '../src/withRoot';
import Link from '../src/components/link';
import getMap from '../src/getMap';


class MapPage extends React.Component {
  componentDidMount() {
    this.map = getMap();
    this.map.flyTo([0, 0], 8);
  }
  render() {
    return (
      <div>
        <Typography type="headline">Map page</Typography>
        <Link href="/">
          Index page
        </Link>
      </div>
    );
  }
}

export default withRoot(MapPage);
