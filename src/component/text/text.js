import styled from 'styled-components/macro';


export const Container = styled.div`
   display: flex;
   flex-direction: column;
   text-align: center;
   padding: 165px 45px;
`;

export const Title = styled.h1`
   color: white;
   max-width: 640px;
   font-size: 60px;
   font-weight: bold;
   margin:auto;

   @media(max-width:600px){
       font-size:35px;
   }
`;

export const SubTitle = styled.h2`
   color: white;
   font-size: 26px;
   font-weight: bold;
   margin:auto;

   @media(max-width:600px){
       font-size:18px;
   }
`;

export const Break = styled.div`
   margin: 30px;
`;