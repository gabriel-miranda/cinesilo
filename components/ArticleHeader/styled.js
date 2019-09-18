import styled from 'styled-components';

export const Header = styled.header`
  position: relative;
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 1;
  background: url(${({ bg }) => bg});
  background-size: cover;
  background-position: center center;
  filter: blur(10px);
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

export const Content = styled.div`
  padding: 115px 0 20px;
  position: relative;
  z-index: 3;
  ${({ theme }) => theme.media.tablet`
    padding: 165px 0 40px;
  `}
`;

export const Title = styled.h1`
  color: #fff;
  font-size: 30px;
  margin: 0 0 1em;
  ${({ theme }) => theme.media.tablet`
    font-size: 36px;
  `}
`;

export const Description = styled.p`
  font-size: 13px;
  line-height: 21px;
  color: rgba(255, 255, 255, 0.8);
  font-weight: 300;
  ${({ theme }) => theme.media.tablet`
    font-size: 15px;
    max-width: 620px;
  `}
`;
