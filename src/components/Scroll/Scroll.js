import React from 'react';

const Scroll = (props) => {
    return (
        <div className='pa2 ma5' style={{ overflowY: 'scroll', border: '5px solid black', height: '800px' }}>
            {props.children}
        </div>
    )
}

export default Scroll