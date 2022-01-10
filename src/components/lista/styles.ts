import styled from "styled-components";
interface propsdelete{
    deletado?:number;
}
export const List  = styled.ul`
list-style: none;
margin-top: 2rem;
margin-left: 5rem;
margin-right: 5rem;


&:last-child{
 margin-bottom: 1rem;
 @media (min-width: 380px) AND (max-width: 500px) {
    margin-bottom: 3.5rem;
 }
}
min-width: 380px;
@media (min-width: 380px) AND (max-width: 500px) {
    display: flex;
    flex-direction: column;
    align-self: center;
    margin-top: 1rem;
    max-width: 380px;
}
`;
export const ItemLista = styled.li`
display: flex;
align-items: center;
justify-content: space-between;
border-radius: 50rem;
background-color:#c5c5c5;

@keyframes slidein {
  from {
   
transform: translateX(0px);
  }

  to {
    transform: translateX(1600px);
  }
}

 &.del {
    animation-duration: 1s;
  animation-name:   "slidein";
  
}


p{
    overflow-x:auto;
    margin-left: 0.5rem;
   margin-right: 0.5rem;
}
input{
    width: 1.8rem;
    height: 1.8rem;
    min-width: 1.8rem;
    cursor: pointer;
    margin-left: 1rem;
}
padding: 1.2rem;
& + li{
    margin-top: 1rem;
    overflow-y: hidden;
}
svg{  
    height: 45px;
    cursor: pointer;
    margin-right: 1rem;   
    color:black;
     min-width: 1.2rem;
    @media (min-width: 380px) AND (max-width: 500px) {
        min-width: 1.2rem;
        margin-right: 1rem;   
    }
}
`;