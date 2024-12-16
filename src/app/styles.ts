import { theme } from '@/assets/themes/theme';
import styled from 'styled-components';

export const Main = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: ${theme.colors.white};

  @media screen and (max-width: 769px) {
    flex-direction: column; 
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: ${theme.colors.green800};
  text-align: center; 

  
  @media screen and (max-width: 769px) {
    order: 2; 
    border-radius: 40px 40px 0 0;
    min-height: 100ch;
  }
`;

export const ContentImage = styled.div`
  flex: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (max-width: 769px) {
    order: 1; 
  }
`;

export const Text = styled.div`
  font-size: ${theme.fontSizes.md};
  font-family: 'Times New Roman', Times, serif;
  color: ${theme.colors.lilas100};
  text-align: center;
  margin-bottom: 50px;

  @media screen and (max-width: 769px) {
    h3 {
      font-size: 1rem;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  background-color: ${theme.colors.white};
  padding: 0.8rem;
  border-radius: 50px;
  text-align: center;
  font-weight: bold;
  font-size: ${theme.fontSizes.p};
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin-top: 20px;

  &:hover {
    background-color: ${theme.colors.green800};
  }
`;
