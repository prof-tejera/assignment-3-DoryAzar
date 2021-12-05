import {memo} from 'react';
import PropTypes from 'prop-types';
import './Container.css';

const Container = memo((props) => {
  const { children }  = props;
  return <div className="container">{children}</div>;
});


Container.propTypes  = {
  children: PropTypes.node
}

export default Container;