import React from 'react';

import { Container, Details, Img, Title, Description } from './styles';

import img from '../../assets/13.png';

const Banner: React.FC = () => {
  return (
    <Container>
      <Details>
        <Title>Cobre um amigo</Title>

        <Description>
          Mantenha suas parcerias em dia, usa o PicPay para fazer suas cobranças
        </Description>
      </Details>
      <Img source={img} />
    </Container>
  );
};

export default Banner;
