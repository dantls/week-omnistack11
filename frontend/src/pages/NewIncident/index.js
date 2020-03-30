import React, { useState } from 'react';
import { FiArrowLeft} from 'react-icons/fi';

import {useHistory} from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import LinkBack from '../../styles/LinkBack';

import { Container, Content ,Form} from './styles';

import Button from '../../styles/Button';

import api from '../../services/api';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState('');

  const history = useHistory();

  const ongId = localStorage.getItem('ongId');

  async function handleNewIncident(e){
    e.preventDefault();
    const data = {
      title,
      description,
      value,
    };
    try {
      await api.post('incidents', data,{
        headers:{Authorization: ongId,
      }});
     
      history.push('/profile');
    } catch (error) {
      alert('Erro ao cadastrar caso, tente novamente');
    }
  }

  return (
    <Container>
      <Content>
        <section>
            <img src={logoImg} alt="Be The Hero"/>
            <h1>Cadastrar Novo Caso</h1>
            <p>Descreva o caso detalhadamente para encontrar um herói para resolver isso.</p>
            <LinkBack to="/profile">
                <FiArrowLeft size={16} color="#E02041" />
                Voltar
            </LinkBack>
        </section>
        <Form onSubmit={handleNewIncident}>
          <input 
            placeholder="Título do caso" 
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea 
            placeholder="Descrição" 
            value={description}
            onChange={e => setDescription(e.target.value)}
          />
          <input 
            placeholder="Valor em reais" 
            value={value}
            onChange={e => setValue(e.target.value)}
          />
                
          <Button type="submit">Cadastrar</Button>
        </Form>
      </Content>
    </Container>
  );
}
