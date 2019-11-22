import React from 'react';
import PropTypes from "prop-types"

export const ItemComponent = ({ item, index }) => {
    if (!item)
        return null;

    return (<div className="news-container">
        <p>
            <span className="title">{item.Title}</span>-
        <span className="dateTime">{item.Date} </span>
        </p>
        <h3>{item.Info}</h3>
        <p>
            {item.Description}</p>

        {item.Image && <img src={item.Image} />}
        {index % 2 ?
            <div className="blue-line" /> :
            <div className="green-line" />}
    </div>);
};

ItemComponent.defaultProps = { 
    index: 0
}

ItemComponent.propTypes = {
  item: PropTypes.object,
  index: PropTypes.number
}

export default ItemComponent;
