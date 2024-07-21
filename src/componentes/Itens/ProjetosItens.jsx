import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button'; // Importar o Button do MUI

const ProjetosItens = ({ image, title, description, link }) => {
  return (
    <Grid item xs={12} md={12} sx={{ marginBottom: '20px' }}>
      <Card sx={{ backgroundColor: '#282828', borderRadius: '10px' }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={title}
          sx={{ objectFit: 'cover' }}
        />
        <CardContent sx={{ textAlign: 'center' }}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ color: '#7CFC00' }}
          >
            {title}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ color: '#FFFFFF' }}
          >
            {description}
          </Typography>
          <Button
            variant="contained"
            sx={{
              marginTop: '10px',
              backgroundColor: '#7CFC00',
              color: '#000000',
              padding: '10px 15px',
              borderRadius: '5px',
            }}
            component={Link}
            to={link}
            target="_blank"
          >
            Experimente
          </Button>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProjetosItens;
