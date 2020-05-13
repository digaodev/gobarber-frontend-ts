import React from 'react';
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi';

import { Container, Content, Background } from './styles';
import logoSvg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoSvg} alt="Go Barber logo" />

      <form>
        <h1>Faça seu login</h1>

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

        <Button type="submit">Entrar</Button>

        <a href="forgot">Esqueci minha senha</a>
      </form>

      <a href="signup">
        <FiLogIn />
        Criar conta
      </a>
    </Content>

    <Background />
  </Container>
);

export default SignIn;
