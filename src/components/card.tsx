import * as React from 'react';
import PropTypes from 'prop-types';
import julestyle from './card.module.css';



const Card = ({ number, url, active }) => {
    return (

        <div key={number} className={ active === "true" ? julestyle.activeCard : julestyle.inactiveCard }>
            <a href={url}>
                    <h1 className={julestyle.hatch}>{number}</h1>
            </a>
        </div>

    );
}

Card.propTypes = {
    siteTitle: PropTypes.string,
}

Card.defaultProps = {
    siteTitle: ``,
}

export default Card