'use client';

import React from 'react';
import Image from 'next/image';
import { Content, ContentImage, Main, Text } from '../styles';
import SignIn from '../SingIn/page';
import plannerA from '../../assets/plannerA.png'; 

const Home: React.FC = () => {
  return (
    <Main>
      <Content>
        <Text>
          <h3>Crie sua conta na PlannerA com o Google!</h3>
          <h3>É fácil, basta clicar no botão abaixo.</h3>
        </Text>
        <SignIn />
      </Content>

     <ContentImage>
     <Image
        src={plannerA}
        alt="PlannerA Logo"
        width={200}
        height={200}
        layout="responsive"
      />

     </ContentImage>
     
    </Main>
  );
};

export default Home;
