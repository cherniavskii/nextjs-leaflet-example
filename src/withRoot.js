import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, withStyles } from 'material-ui/styles';
import Reboot from 'material-ui/Reboot';
import lStyles from 'leaflet/dist/leaflet.css';
import getPageContext from './getPageContext';

const styles = {
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1200,
  },
};

function withRoot(Component) {
  class WithRoot extends React.Component {
    componentWillMount() {
      this.pageContext = this.props.pageContext || getPageContext();
    }

    componentDidMount() {
      // Remove the server-side injected CSS.
      const jssStyles = document.querySelector('#jss-server-side');
      if (jssStyles && jssStyles.parentNode) {
        jssStyles.parentNode.removeChild(jssStyles);
      }
    }

    pageContext = null;

    render() {
      const { classes, ...props } = this.props;
      // MuiThemeProvider makes the theme available down the React tree thanks to React context.
      return (
        <MuiThemeProvider
          theme={this.pageContext.theme}
          sheetsManager={this.pageContext.sheetsManager}
        >
          {/* Reboot kickstart an elegant, consistent, and simple baseline to build upon. */}
          <Reboot />
          <style jsx global>{lStyles}</style>
          <div className={classes.absolute}>
            <Component {...props} />
          </div>
        </MuiThemeProvider>
      );
    }
  }

  WithRoot.propTypes = {
    pageContext: PropTypes.object,
    classes: PropTypes.object,
  };

  WithRoot.getInitialProps = ctx => {
    if (Component.getInitialProps) {
      return Component.getInitialProps(ctx);
    }

    return {};
  };

  return withStyles(styles)(WithRoot);
}

export default withRoot;
