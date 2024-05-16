import SocialMediaWrapper from './components/SocialMediaWrapper.jsx';
import TextWrapper from './components/TextWrapper.jsx';
import * as S from './components/styles.js';
import Monitor from './assets/monitor.png';
import Waves from './assets/waves-nobg.png';

function App() {
  return (
    <S.Container>
      <S.LeftWrapper>
        <S.Logo />
        <S.TextSocialContainer>
          <TextWrapper />
          <SocialMediaWrapper />
        </S.TextSocialContainer>
      </S.LeftWrapper>
      <S.ImageWrapper>
        <S.FrontImage src={Monitor} />
        <S.BackImage src={Waves} />
      </S.ImageWrapper>
    </S.Container>
  );
}

export default App;
