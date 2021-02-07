import HeaderContainer from './container/header';
import TextContainer from './container/text';
import Footer from './component/footer/index';
import QuotesContainer from './container/quotes';

export default function App() {
  return (
    <>
      <HeaderContainer>
        <TextContainer />
      </HeaderContainer>
      <QuotesContainer />
      <Footer>
        <Footer.Copyright>Copyright 2021</Footer.Copyright>
      </Footer>
    </>
  )
}
