import styled from 'styled-components';
import LogoFyberSvg from '../assets/logo.svg?react';
import InstagramSvg from '../assets/icons/Instagram.svg?react';
import FacebookSvg from '../assets/icons/Facebook.svg?react';
import LinkedinSvg from '../assets/icons/Linkedin.svg?react';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 100vh;
  margin-left: 3.125rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 2rem;
  }
`;

export const LeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 4.375rem 0 0 0;
  gap: 8rem;

  @media screen and (max-width: 768px) {
    align-items: center;
    margin: 4.375rem auto 0 auto;
  }
`;

export const Logo = styled(LogoFyberSvg)`
  width: 21.875rem;
  height: 8.125rem;
`;

export const TextSocialContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: .5rem;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const H3 = styled.h3`
  font-size: 2rem;
  font-weight: 500;
  margin: 0;
  color: #0200d2;
`;

export const H1 = styled.h1`
  font-size: 4.5rem;
  font-weight: 700;
  margin: 0;
  color: #0200d2;
`;

export const H2 = styled.h2`
  font-size: 2.375rem;
  font-weight: 600;
  margin: 0;
  color: #333333;
`;

export const SocialMediaWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1.563rem;
  height: 4.375rem;

  a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & a:nth-child(1), & a:nth-child(2) {
    margin-right: .625rem;
  }

  svg {
    width: 3.125rem;
    height: 3.125rem;
    cursor: pointer;
    transition: all 0.2s;
  }

  svg:hover {
    transform: scale(1.1);
  }
`;

export const Instagram = styled(InstagramSvg)`
`;

export const Facebook = styled(FacebookSvg)`
`;

export const Linkedin = styled(LinkedinSvg)`
`;

export const ImageWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100%;
  flex-grow: 2;

  @media screen and (max-width: 768px) {
    overflow: visible;
    flex-grow: 1;
    width: 90%;
  }
`;

export const BackImage = styled.img`
  position: absolute;
  z-index: -2;
  right: 0;
  bottom: 50%;
  transform: translateY(50%);

  width: 140%;
  height: 140%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const FrontImage = styled.img`
  position: absolute;
  z-index: -1;
  right: -30%;
  bottom: 50%;
  transform: translateY(50%);
  
  width: 130%;
  object-fit: cover;

  @media screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
    object-fit: contain;
    right: 0;
  }
`;
