import React from 'react';

const Form = ({
    inputs,
    onChange,
    onSubmit,
}) => {
    const displayInputs = inputs.map(({name, value}, i) => <input 
                key={i}
                placeholder={name}    
                name={name} 
                value={value || ''} 
                onChange={onChange} 
            />
        );
    return(
        <form onSubmit={onSubmit}>
            { displayInputs }
            <button type='submit'>
                create
            </button>
        </form>
    );
};

export default Form;