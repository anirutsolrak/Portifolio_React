import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <Grid
      container
      justifyContent="center"
      sx={{
        backgroundColor: '#7CFC00',
        color: '#000000',
        padding: '40px 0',
        padding: '20px',
      }}
    >
      <Grid item xs={12} md={12} sx={{ textAlign: 'center' }}>
        <Typography
          variant="h6"
          sx={{ marginBottom: '10px', textAlign: 'center' }}
        >
          Contato
        </Typography>
      </Grid>

      <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
        <Typography variant="body2">
          Telefone: (11) 9 3962-1151
          <br />
          <br />
        </Typography>
        <Typography variant="body2">
          Email: carloseduardoturina@gmail.com
        </Typography>
      </Grid>
      <Grid item xs={12} md={3} sx={{ textAlign: 'center' }}>
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

        <Typography variant="body2">
          © 2024 por Carlos Eduardo Turina.
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
