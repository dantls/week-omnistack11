import React,{useState} from 'react';
import {FiLogIn} from 'react-icons/fi';

import api from '../../services/api';

import {useHistory} from 'react-router-dom';

import { Container ,Form ,Section} from './styles';
import Button from '../../styles/Button';
import LinkBack from '../../styles/LinkBack';

import heroesImg from '../../assets/heroes.png';
import logoImg from '../../assets/logo.svg';


export default function Logon() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e){
    e.preventDefault();
    try {
      const response = await api.post('sessions', {id});

      localStorage.setItem('ongName', response.data.name);
      localStorage.setItem('ongId', id);

      history.push('/profile');
    } catch (error) {
      alert('Falha no login, tente novamente. ');
    }

  }

  return (
    <Container>
       <Section>
         <img src={logoImg} alt="Be The Hero"/>
         <Form onSubmit={handleLogin}>
           <h1>Faça seu Logon</h1>
           <input 
            placeholder="Sua ID"
            value={id}
            onChange={e => setId(e.target.value)}
           />
           <Button type="submit">Entrar</Button>
           <LinkBack to="/register">
             <FiLogIn size={16} color="#E02041" />
             Não tenho cadastro
           </LinkBack>
         </Form>
      </Section>
      <img src={heroesImg} alt="Heroes"/> 
    </Container>
  );
}
