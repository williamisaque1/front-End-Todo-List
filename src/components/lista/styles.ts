import styled from "styled-components";
export const List  = styled.ul`
list-style: none;
margin-top: 2rem;
margin-left: 5rem;
margin-right: 5rem;
&:last-child{
 margin-bottom: 1rem;
}
min-width: 380px;
@media (min-width: 380px) AND (max-width: 500px) {
    margin:0 1rem;
    margin-top: 1rem;
    
}
`;
export const ItemLista = styled.li`

display: flex;

align-items: center;
justify-content: space-between;
border-radius: 50rem;


background-color:#c5c5c5;
input{
    width: 1.8rem;
    height: 1.8rem
}
padding: 1.2rem;
& + li{
    margin-top: 1rem;
   
}
svg{


    height: 45px;
    cursor: pointer;
    margin-right: 2rem;
    
}

  
`;