import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const IdiomasItens = ({ idiomas }) => {
  return (
    <Grid container sx={{ marginBottom: '20px', padding: '10px', backgroundColor: '#282c34', borderRadius: '10px' }}>
      <Grid item xs={12} sx={{ textAlign: 'center' }}>
        <Typography variant="h5" sx={{ color: '#7CFC00', marginBottom: '10px' }}>
          Idiomas
        </Typography>
        <List sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {idiomas.map((item) => (
            <ListItem key={item}>
              <ListItemText primary={item} sx={{ color: '#FFFFFF' }} />
            </ListItem>
          ))}
        </List>
      </Grid>
    </Grid>
  );
};

export default IdiomasItens;