import React from 'react';
import Parent from './Parent';


const Enfant = ({name,age}) => {

    return (
        <div>
            <Parent name="Enfant 3" age=" 8 ans et demi" />
            <Parent name="Enfant 2" age="12" />
            <Parent name="Enfant 3" age="20" />
        </div>
    );
};

export default Enfant;