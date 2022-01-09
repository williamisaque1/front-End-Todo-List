import {createGlobalStyle} from "styled-components";
export const GlobalStyle = createGlobalStyle`


*{
    
margin: 0;
padding: 0;
box-sizing: border-box;

}
html{
    @media (max-width: 1080px) {
        font-size: 93,75%; //15px
        
    }
    @media (max-width: 720px) {
        font-size: 87,5%; //14px 
    }
    //para usar no rem
}
body{
 
 overflow-y: hidden;

    -webkit-font-smoothing:antialiased;  
}
body,input,textarea,button{
font-family: "Poppins",sans-serif;
font-weight: 400;
}
h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
}

button{
    cursor: pointer;
    box-shadow: 0 0 0 0;
    outline: 0;
    transition: filter 0.2s;
  &:hover{
      filter: brightness(0.9);
  }
}
[disabled]{
    opacity: 0.95;
    cursor:not-allowed
}


`
