import * as S from './styles';

const SocialMediaWrapper = () => {
  return (
    <S.SocialMediaWrapper>
      <a href='https://instagram.com/fiberpolimeros/' target='_blank'>
        <S.Instagram />
      </a>
      <a href='https://facebook.com' target='_blank'>
        <S.Facebook />
      </a>
      <a href='https://linkedin.com' target='_blank'>
        <S.Linkedin />
      </a>
    </S.SocialMediaWrapper>
  );
};

export default SocialMediaWrapper;
