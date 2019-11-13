import React from 'react';
import {Input, CustomForm, Button, Span} from './styles';

const Form = ({
    inputs,
    onChange,
    onSubmit,
}) => {
    const displayInputs = inputs.map(({name, value}, i) => <Input 
                key={i}
                placeholder={name}    
                name={name} 
                value={value || ''} 
                onChange={onChange} 
            />
        );
    return(
        <CustomForm onSubmit={onSubmit}>
            { displayInputs }
            <Button type='submit'>
                <Span>Add</Span>
            </Button>
        </CustomForm>
    );
};

export default Form;