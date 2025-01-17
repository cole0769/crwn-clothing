import React from 'react';
import { withRouter } from 'react-router-dom'; // For page history / navigation. avoids drilling through other components.
import '../menu-item/menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div style={{
        backgroundImage: `url(${imageUrl})`
    }}
    className={`${size} menu-item`} 
    onClick={() => history.push( `${match.url}${linkUrl}`)}
    >
        <div 
            className='background-image' 
            style={{backgroundImage: `url(${imageUrl})`
            }}
        />
        <div className="content">
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>Shop Now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);
