import React from 'react';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';

const ExperienciaItens = ({ dates, title, company, description }) => {
  return (
    <ListItem
      sx={{
        backgroundColor: '#282828',
        padding: '20px',
        borderRadius: '8px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column', // Alinha itens na vertical
        alignItems: 'center', // Centraliza verticalmente
      }}
    >
      <Grid container spacing={2} sx={{ gap: '10px' }}>
        <Grid item xs={12} sx={{ textAlign: 'center', width: '100%' }}>
          <Typography
            variant="body2"
            sx={{ color: '#FFFFFF', marginBottom: '10px' }}
          >
            {dates}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'center', width: '100%' }}>
          <Typography
            variant="h6"
            sx={{ fontWeight: 'bold', marginBottom: '10px', color: '#7CFC00' }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            sx={{ marginBottom: '10px', color: '#FFFFFF' }}
          >
            {company}
          </Typography>
        </Grid>
        <Grid item xs={12} sx={{ textAlign: 'left', width: '100%' }}>
          <Typography
            variant="h6"
            sx={{ marginBottom: '10px', color: '#FFFFFF' }}
          >
            Descrição das atividades
          </Typography>
          <List sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {description.map((item, index) => (
              <ListItemText
                key={index}
                primary={item}
                sx={{ color: '#FFFFFF' }}
              />
            ))}
          </List>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default ExperienciaItens;
