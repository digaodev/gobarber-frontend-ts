import React from 'react';
import { FiArrowLeft, FiMail, FiLock, FiUser } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoSvg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Background />

    <Content>
      <img src={logoSvg} alt="Go Barber logo" />

      <form>
        <h1>Faça seu cadastro</h1>

        <Input
          name="name"
          type="text"
          placeholder="Informe seu nome"
          icon={FiUser}
        />
        <Input
          name="email"
          type="text"
          placeholder="Informe seu email"
          icon={FiMail}
        />
        <Input
          name="password"
          type="password"
          placeholder="Informe sua senha"
          icon={FiLock}
        />

        <Button type="submit">Cadastrar</Button>
      </form>

      <a href="login">
        <FiArrowLeft />
        Já é membro? Ir para o login
      </a>
    </Content>
  </Container>
);

export default SignIn;
