import * as React from 'react';
import PropTypes from 'prop-types';
import { Link, PageProps } from 'gatsby';


const Card = ({ number, url }) => {
    return (

        <div
            style={{
                background: `#D6001C`,
                float: `left`,
                alignContent: `center`,
                marginBottom: `1.45rem`,
                marginRight: `1.45rem`,
                width: `150px`,
                height: `150px`,
                border: "1.0px solid #FFF",
            }}
        ><a style={{
            textDecoration: `none`,
        }}
            href={url}>
                <div
                    style={{
                        margin: `0 auto`,
                    
                        padding: `1.45rem 1.0875rem`,
                    }}
                >
                    <h1 style={{
                        margin: 0,
                        color: `white`,
                        textDecoration: `none`,
                    }}>

                        {number}

                    </h1>
                </div>
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