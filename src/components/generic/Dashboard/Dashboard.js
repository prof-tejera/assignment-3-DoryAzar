import { memo } from 'react';
import './Dashboard.css';
import PropTypes from 'prop-types';

const Dashboard =  memo((props) => {
  const { children }  = props;

  return (
    <div className="dashboard">
        <div className="dashboard_inner">
            {children}
        </div>
    </div>
  );
});


Dashboard.propTypes  = {
  children: PropTypes.node
}

export default Dashboard;