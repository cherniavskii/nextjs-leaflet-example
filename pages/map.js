import React from 'react';
import Typography from 'material-ui/Typography';
import withRoot from '../src/withRoot';
import Link from '../src/components/link';

class MapPage extends React.Component {
  render() {
    return (
      <div>
        <Typography>Map page</Typography>
        <Link href="/">
          Index page
        </Link>
      </div>
    );
  }
}

export default withRoot(MapPage);
