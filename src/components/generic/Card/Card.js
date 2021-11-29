import './Card.css';
import className from 'classnames';
import PropTypes from 'prop-types';

const Card =  ({...props}) => {
    const { side ="front", children } = props;

    const cardStyle = [{
        [`panel_face_${side}`]: side? true : false
    }];

    return (
        <div className={className(cardStyle)}>
            { children }
        </div>
    );
}

Card.propTypes = {
    side: PropTypes.string,
    children: PropTypes.node
}

export default Card;