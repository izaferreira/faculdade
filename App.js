import React from 'react';
import { CssBaseline, Container, Typography, Box, Paper, Grid, Button } from '@mui/material';

const App = () => {
  return (
    <>
      <CssBaseline />
      <Box 
        sx={{
          minHeight: '100vh', 
          background: `url(${process.env.PUBLIC_URL + '/saude-clinica.jpg'}) no-repeat center center fixed`,
          backgroundSize: 'cover',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ my: 4, bgcolor: 'rgba(255, 255, 255, 0.8)', p: 2 }}> 
            <Typography variant="h2" component="h1" gutterBottom>
              Clínica Saúde & Bem-estar
            </Typography>
            <Typography variant="h5" component="h2" gutterBottom>
              Cuidado completo para toda a família.
            </Typography>

            <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="h6" component="h3">
                    Atendimento Médico
                  </Typography>
                  <Typography>
                    Oferecemos consultas em diversas especialidades médicas para cuidar da sua saúde.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="h6" component="h3">
                    Exames Laboratoriais
                  </Typography>
                  <Typography>
                    Realize seus exames conosco com conforto e rapidez.
                  </Typography>
                </Paper>
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{ p: 2 }}>
                  <Typography variant="h6" component="h3">
                    Aconselhamento Nutricional
                  </Typography>
                  <Typography>
                    Nutricionistas experientes para melhorar sua dieta e saúde.
                  </Typography>
                </Paper>
              </Grid>
            </Grid>

            <Box sx={{ mt: 4 }}>
              <Button variant="contained" color="primary">
                Agende sua Consulta
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default App;
