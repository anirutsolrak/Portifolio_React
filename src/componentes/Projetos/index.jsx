import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ProjetosItens from '../Itens/ProjetosItens';
import thumb_crud from '../../assets/thumb_crud.jpg';
import thumb_descript from '../../assets/thumb_descript.jpg';
import thumb_numero from '../../assets/thumb_numero.jpg';
import thumb_nexus from '../../assets/thumb_nexus.jpg';

const Projetos = () => {
  return (
    <Grid
      container
      sx={{ backgroundColor: '#181818', padding: '60px 0', padding: '20px' }}
    >
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{ textAlign: 'center', marginBottom: '40px', color: '#7CFC00' }}
        >
          Projetos
        </Typography>
      </Grid>
      <Grid 
        container
        sx={{
          display: 'flex', // Define o display como flex
          flexDirection: 'row', // Define a direção como linha (row)
          flexWrap: 'wrap', // Permite que os itens quebrem para a próxima linha
          gap: '20px', // Define o espaço entre os itens
          justifyContent: 'space-around', // Distribui os itens uniformemente
          width: '100%', // Define a largura como 100%
        }}
      >
        <Grid item xs={12} md={5}>
          <ProjetosItens
            image={thumb_numero}
            title="Jogo do Número Secreto"
            description="Um jogo interativo para adivinhar um número secreto, desenvolvido em React."
            link="https://numero-secreto-react.vercel.app/"
          />
          <ProjetosItens
            image={thumb_descript}
            title="Descriptação e Encriptação de Texto"
            description="Um aplicativo web que permite criptografar e descriptografar mensagens de texto, garantindo a segurança da informação."
            link="https://encriptacao.vercel.app"
          />
        </Grid>
        <Grid item xs={12} md={5}>
          <ProjetosItens
            image={thumb_nexus}
            title="NexusPlay"
            description="Uma aplicação pra você exibir os seus videos favoritos."
            link="https://nexuplay-git-main-anirutsolraks-projects.vercel.app/"
          />
          <ProjetosItens
            image={thumb_crud}
            title="Alura Book"
            description="Um projeto CRUD para gerenciar uma estante virtual de livros, desenvolvido com JavaScript."
            link="https://alura-book-lime-chi.vercel.app/"
          />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Projetos;