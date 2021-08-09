import React from 'react';

const Parent = (props) => {
 


    const { name, age } = props;


    return (
        <div>
            <h1>Exemple de passage de proprités de parent à enfant </h1>
            <br />
            <p>Nom :{name} </p>
            <br />
            <p>age {age}: </p>
            <br />
           
            
        </div>
    );
};

export default Parent;