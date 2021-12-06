import { memo } from 'react';
import './Dashboard.css';
import PropTypes from 'prop-types';

const Dashboard =  memo((props) => {
  const { id = "", children }  = props;

  return (
    <div className="dashboard">
        <div className="dashboard_inner" id={id}>
            {children}
        </div>
    </div>
  );
});


Dashboard.propTypes  = {
  id: PropTypes.string,
  children: PropTypes.node
}

export default Dashboard;