import React from 'react';
import PropTypes from 'prop-types';
import NextLink from 'next/link';
import Button from 'material-ui/Button';

const Link = ({ href, children, ...props }) => (
  <NextLink href={href}>
    <Button href={href} {...props}>
      {children}
    </Button>
  </NextLink>
);

Link.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  raised: true,
  color: 'secondary',
  component: 'a',
};

export default Link;