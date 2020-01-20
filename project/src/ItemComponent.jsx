import React from 'react';
import PropTypes from 'prop-types';
import format from 'date-fns/format';

export const ItemComponent = ({ item, index }) => {
    if (!item) return null;

    return (
        <a className="news-container" href={item.story_url}>
            <h3 className="title">{item.story_title || item.title}</h3>
            <p>
                {item.created_at_i && (
                    <span className="dateTime">
                        {format(item.created_at_i * 1000, 'dd MMMM yyyy')}
                    </span>
                )}
                <span className="author">{' '}{item.author}</span>
            </p>
            <p dangerouslySetInnerHTML={{ __html: item.comment_text }} />
        </a>
    );
};

ItemComponent.defaultProps = {
    index: 0,
};

ItemComponent.propTypes = {
    item: PropTypes.object,
    index: PropTypes.number,
};

export default ItemComponent;
