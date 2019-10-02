import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 30px 90px 0;
`;

export const ShareContainer = styled.div`
  display: flex;
  margin-left: auto;
  cursor: pointer;
`;

export const ShareIcon = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px 0 0 50px;
  background: #ebebeb;
  width: 40px;
  height: 40px;
  svg path {
    fill: #999;
  }
`;

export const URLShare = styled.input`
  background: #ebebeb;
  color: #999;
  border: none;
  border-radius: 0 50px 50px 0;
  width: 145px;
  height: 40px;
  overflow: hidden;
  font-size: 13px;
  padding: 0 25px 0 0;
  cursor: inherit;
`;
