import styled, {keyframes} from 'styled-components';

const showAnimtion = keyframes`
  0% {
    opacity: 0 
  }
  50% {
    opacity: 0.6
  }
  100% {
    opacity: 1
  }
`

export const Wrapper = styled.div`
    width: 300px;
    height: 300px;
`
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: ${showAnimtion} 3s ease-in;
    box-shadow: -2px 4px 5px 0px rgba(0,0,0,0.25);
    margin: 0 10px;
    padding: 10px;
`
export const Image = styled.img`
    height: 100px;
    width: 100px;
`

export const Button = styled.button`
  border: none;
  font-weight: bold;
  background: none;
  margin-left: 200px;
  margin-bottom: -20px;
`