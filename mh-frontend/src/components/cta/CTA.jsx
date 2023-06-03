import React from 'react';

function CTA({text, onClick, href='/'}) {
    return ( 
        <button onClick={onClick}>
            {text}
        </button>
     );
}

export default CTA;