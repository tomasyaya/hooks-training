import styled, {keyframes} from 'styled-components';

const circular = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const CircularLoader = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  :after{
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #c18ff0;
    border-color: #c18ff0 transparent #c18ff0 transparent;
    animation: ${circular} 1.2s linear infinite;
  }
`