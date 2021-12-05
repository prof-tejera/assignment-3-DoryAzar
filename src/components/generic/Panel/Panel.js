import { memo } from 'react';
import './Panel.css';
import PropTypes from 'prop-types';

const Panel =  memo((props) => {
  const { id = "", children }  = props;

  return (
    <div className="panel">
        <div className="panel_inner" id={id}>
            {children}
        </div>
    </div>
  );
});


Panel.propTypes  = {
  id: PropTypes.string,
  children: PropTypes.node
}

export default Panel;