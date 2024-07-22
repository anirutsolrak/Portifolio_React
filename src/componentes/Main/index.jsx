import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import me from '../../assets/me.jpg'

const Main = () => {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      alignItems="center"
      sx={{ backgroundColor: '#000000', padding: '100px 0', padding: '20px' }}
    >
      <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
        <img
          src={me}
          //src="../assets/me.jpg"
          alt="Foto de Perfil"
          style={{
            width: '200px',
            height: '200px',
            borderRadius: '50%',
            objectFit: 'cover',
            marginBottom: '20px',
            border: '3px solid #7CFC00',
          }}
        />
        <Typography variant="body1" sx={{ marginBottom: '10px' }}>
          Carlos Eduardo Turina
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: '20px', color: '#FFFFFF' }}
        >
          Desenvolvedor Front-End
        </Typography>
        <div
          className="buttons"
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '10px',
            marginBottom: '20px',
          }}
        >
          <Link
            to="/curriculo"
            style={{ textDecoration: 'none', color: '#000000' }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: '#7CFC00', color: '#000000' }}
            >
              CURRÍCULO
            </Button>
          </Link>
          <Link
            to="/projetos"
            style={{ textDecoration: 'none', color: '#000000' }}
          >
            <Button
              variant="contained"
              sx={{ backgroundColor: '#7CFC00', color: '#000000' }}
            >
              PROJETOS
            </Button>
          </Link>
        </div>
        <Grid
          item
          xs={12}
          md={12}
          sx={{
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'space-around',
          }}
        >
          <List
            sx={{
              listStyle: 'none',
              margin: '0',
              padding: '0',
              display: 'flex',
              justifyContent: 'center',
              gap: '10px',
            }}
          >
            <ListItem>
              <a
                href="https://www.linkedin.com/in/carlos-eduardo-turina-014a5425b"
                target="_blank"
                style={{
                  display: 'inline-block',
                  width: '35px',
                  height: '35px',
                  lineHeight: '45px',
                  textAlign: 'center',
                  borderRadius: '50%',
                  backgroundColor: '#7CFC00',
                  color: '#000000',
                  fontSize: '18px',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <LinkedInIcon />
              </a>
            </ListItem>
            <ListItem>
              <a
                href="https://github.com/anirutsolrak"
                target="_blank"
                style={{
                  display: 'inline-block',
                  width: '35px',
                  height: '35px',
                  lineHeight: '42px',
                  textAlign: 'center',
                  borderRadius: '50%',
                  backgroundColor: '#7CFC00',
                  color: '#000000',
                  fontSize: '18px',
                  transition: 'background-color 0.3s ease',
                }}
              >
                <GitHubIcon />
              </a>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Typography
          variant="h3"
          sx={{
            textAlign: 'center',
            marginBottom: '20px',
            color: '#FFFFFF',
            boxShadow: '5px 5px 10px white ',
          }}
        >
          Olá! Sou Carlos Eduardo Turina Desenvolvedor Front-End
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: '10px', color: '#FFFFFF' }}
        >
          Sou um desenvolvedor Front-End dedicado a criar experiências digitais
          de alta qualidade. Minhas habilidades em HTML, CSS e JavaScript me
          permitem construir interfaces web responsivas, interativas e
          visualmente atraentes. Busco constantemente aprimorar minhas
          capacidades e explorar novas tecnologias para oferecer soluções web
          inovadoras.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: '10px', color: '#FFFFFF' }}
        >
          Minha trajetória profissional teve início em um laboratório de
          patologia cirúrgica, onde trabalhei como Auxiliar de Expedição e
          Digitador, desenvolvendo habilidades valiosas em organização e atenção
          aos detalhes. Atualmente, estou em transição para a área de
          programação, impulsionado pela minha paixão por tecnologia e pelo
          desejo de construir uma carreira nesta área.
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: '10px', color: '#FFFFFF' }}
        >
          Para além do código, sou um ávido leitor, apreciando especialmente os
          gêneros infantojuvenil e jovem adulto. Meus hobbies incluem videogames
          de RPG e estratégia, além de jogos de tabuleiro como xadrez e War.
          Dedico meu tempo livre à minha família, composta por minha esposa e
          nossa filha de três anos.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Main;
