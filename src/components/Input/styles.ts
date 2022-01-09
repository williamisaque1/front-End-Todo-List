import React from "react";
import styled from "styled-components";

export const Secao = styled.section`
display: flex;
align-items: center;
justify-content: center;
border: 1px solid black;
margin: 0 auto;
margin-top: 1rem;
height: 3rem;
max-width: 60rem;
border-radius: 1rem;
position: relative;
border-bottom: 0;
background-color: white;
  min-width: 380px;
  @media (min-width: 380px) AND (max-width: 960px) {
    margin:0 1rem;
    margin-top: 1rem;
}
`

export const InputTarefa =  styled.input.attrs((props)=>({

  autoFocus:true
})) `
background-color: white;
width: 64rem;
height: 3rem;
padding-left: 1rem;
border-radius: 1rem;
border-right:0;
border-right:0;
border-left: 0;
border-top: 0;

&:focus{
box-shadow: 0 0 0 0;
border: 0 none;
outline: 0;
 
}
`
interface propsInput {
  value:string;
}
export const Botao = styled.button <propsInput> `
position: absolute;
right: 0;
height: 3rem;
width: 6rem;
border-radius: 1rem;
border-top: 0;
border-right: 0;
cursor: ${(props:propsInput)=> props.value.length == 0 && 'not-allowed'}
`