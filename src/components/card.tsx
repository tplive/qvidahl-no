import * as React from 'react';
import PropTypes from 'prop-types';
import julestyle from './card.module.css';



const Card = ({ number, url, active }) => {
    return (

        active === "true" ? (
            <a href={url}>
                <div key={number} className={ julestyle.activeCard }>
                    <h1 className={julestyle.hatch}>{number}</h1>
                </div>
            </a>
        ) : (
                <div key={number} className={julestyle.inactiveCard}>
                    <h1 className={julestyle.hatch}>{number}</h1>
                </div>
            )


    );
}

Card.propTypes = {
    siteTitle: PropTypes.string,
}

Card.defaultProps = {
    siteTitle: ``,
}

export default Card