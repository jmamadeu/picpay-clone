import React from 'react';

import { Feather, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';

import {
  Container,
  Header,
  Title,
  Card,
  CardHeader,
  CardBody,
  Avatar,
  Description,
  Bold,
  UserName,
  CardFooter,
  Deatails,
  Value,
  Divider,
  Date,
  Actions,
  Options,
  OptionLabel,
} from './styles';

import avatar from '../../assets/avatar.png';

const Activities: React.FC = () => {
  return (
    <Container>
      <Header>
        <Title>Actividades</Title>
      </Header>
      <Card>
        <CardHeader>
          <Avatar source={avatar} />
          <Description>
            <Bold>Você</Bold> pagou a <Bold>@mateus_aalexandre</Bold>
          </Description>
        </CardHeader>

        <CardBody>
          <UserName>Mateus Aalexadre</UserName>
        </CardBody>

        <CardFooter>
          <Deatails>
            <Value>AKZ 900.900.90,90</Value>

            <Divider />

            <Feather name='lock' color='#fff' size={14} />
            <Date>há 2 anos</Date>
          </Deatails>

          <Actions>
            <Options>
              <MaterialCommunityIcons
                name='comment-outline'
                size={14}
                color='#fff'
              />
              <OptionLabel>0</OptionLabel>
            </Options>

            <Options>
              <AntDesign name='hearto' size={14} color='#fff' />
              <OptionLabel>0</OptionLabel>
            </Options>
          </Actions>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Activities;
