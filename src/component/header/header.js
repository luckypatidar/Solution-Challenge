import styled from 'styled-components/macro';


export const Background = styled.div`
   display: flex;
   flex-direction: column;
   background: url(${({ src }) => (src ? '../images/misc/${src}.jpg' :
        '../images/home-bg.jpg')}) top left / cover no-repeat;
/*         
    img {
        filter: grayScale(100%);
    } */
`;

export const Container = styled.div`
   display: flex;
   margin: 0 56px;
   height: 100px;
   padding: 18px 0;
   justify-content: space-between;
   align-items: center;

   & {
       display: flex;
   }

   @media(max-width: 1000px){
       margin: 0 30px;
   }
`;

export const ButtonLink = styled.button`
   display: block;
   background-color: #0356fc;
   width: 90px;
   padding: 10px;
   height: fit-content;
   color: white;
   border: 0;
   font-size: 17px;
   border-radius: 7px;
   cursor: pointer;
   text-decoration: none;
   box-sizing: border-box;

   &:hover {
       background-color: #0320fc;
   }

`;

export const Logo = styled.img`
   /* height: 200px;
   width: 150px; */
   margin-right: 40px;

   @media (min-width: 1400px){
       height: 55px;
       width: 200px;
   }
`;