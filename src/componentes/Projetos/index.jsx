import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProjetosItens from '../Itens/ProjetosItens';

const Projetos = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{ backgroundColor: '#181818', padding: '60px 0', padding: '20px' }}
    >
      <Grid item xs={12} md={6}>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', marginBottom: '40px', color: '#7CFC00' }}
        >
          Projetos
        </Typography>
        <Grid container spacing={2} sx={{ gap: '20px' }}>
          <ProjetosItens
            image="thumb_jogo.jpg"
            title="Jogo do Número Secreto"
            description="Um jogo interativo para adivinhar um número secreto, desenvolvido em JavaScript."
            link="https://jogo-rouge-three.vercel.app"
          />
          <ProjetosItens
            image="thumb_descript.jpg"
            title="Descriptação e Encriptação de Texto"
            description="Um aplicativo web que permite criptografar e descriptografar mensagens de texto, garantindo a segurança da informação."
            link="https://encriptacao.vercel.app"
          />
          <ProjetosItens
            image="quiz.jpg"
            title="Quiz"
            description="Um quiz interativo que testa seus conhecimentos sobre diversos assuntos, com interface amigável e feedback instantâneo."
            link="https://quiz-rho-dusky-73.vercel.app"
          />
          <ProjetosItens
            image="thumb_crud.jpg"
            title="Alura Book"
            description="Um projeto CRUD para gerenciar uma estante virtual de livros, desenvolvido com JavaScript."
            link="https://alura-book-lime-chi.vercel.app/"
          />
          {/* Adicione mais projetos aqui */}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projetos;
