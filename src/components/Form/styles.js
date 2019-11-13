import styled from 'styled-components';

export const Input = styled.input`
    border: none;
    margin: 0 10px;
    padding: 5px;
    padding-left: 10px;
    border-radius: 10px;

    :placeholder {
        opacity: 0.7;
    }
`

export const CustomForm = styled.form`
    display: flex;
    justify-content: flex-start;
    padding-left: 20px;
    align-items: center;
`

export const Button = styled.button`
    border: none;
    height: 30px;
    width: 30px;
    border-radius: 50px;
    background: white;
    color: white;
    padding: 5px;
`

export const Span = styled.span`
    color: #3B5957;
    font-size:12px;
    text-shadow: 0px 1px 0px rgba(255,255,255,.3), 0px -1px 0px rgba(0,0,0,.7);
`