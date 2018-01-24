import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import Link from '../src/components/link';
import withRoot from '../src/withRoot';
import getMap from '../src/getMap';

const styles = theme => ({
  root: {
    width: '100%',
    height: '100%',
  },
});

class Index extends React.Component {
  componentDidMount() {
    const map = getMap();
    map.flyTo([12, 23], 4);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Typography type="headline">Index page</Typography>
        <Link href="/map">
            Map page
        </Link>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Index));
