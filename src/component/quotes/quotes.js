import styled from 'styled-components/macro';

export const Item = styled.div`
   display:flex;
   padding: 50px 5%;
   border-bottom: 8px solid #222;
   color: white;
   overflow: hidden;
`;

export const Inner = styled.div`
   display:flex;
   align-items: center;
   flex-direction: ${({ direction }) => direction};
   justify-content: space-between;
   max-width:1100px;
   margin:auto;
   width: 100%;

   @media(max-width:1000px){
       flex-direction: column;
   }
`;

export const Container = styled.div`
background-color: rgba(0,0,0,0.99);
  @media (max-width: 1000px){
      ${Item}:last-of-type h2{
          margin-bottom: 50px;
      }
  }
`;

export const Box = styled.div` 
   width: 50%;

   @media (max-width:1000px){
       width: 100%;
       padding: 0 45px;
       text-align: center;
   }
`;

export const Title = styled.h2` 
   font-size: 20px;
   line-height:1.1;
   margin-bottom:8px;

   @media (max-width: 600px){
       font-size: 35px;
   }
`;

export const SubTitle = styled.h3` 
   font-size: 15px;
   font-weight: normal;
   line-height: normal;

   @media (max-width: 600px){
       font-size:15px;
   }
`;

export const Image = styled.img` 
   max-width: 50%;
   height: auto;
   margin-left: 100px;

   @media (max-width:1000px){
       margin-left:0;
   }
`;