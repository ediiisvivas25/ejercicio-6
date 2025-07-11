import React from 'react';
import { 
  Box, 
  Typography, 
  Paper, 
  Container, 
  List, 
  ListItem, 
  ListItemText, 
  Avatar,
  AppBar,
  Toolbar,
  Button,
  createTheme,
  ThemeProvider
} from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" onClick={() => scrollToSection('datos-personales')}>
            Datos Personales
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('formacion-profesional')}>
            Formación Profesional
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('formacion-continua')}>
            Formación Continua
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('habilidades')}>
            Habilidades
          </Button>
          <Button color="inherit" onClick={() => scrollToSection('proyectos')}>
            Proyectos
          </Button>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="md">
        <Box sx={{ my: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Avatar
            alt="Edison Fernando Vivas Calderon"
            src="/mi_foto.jpg"
            sx={{ width: 150, height: 150, mb: 2 }}
          />
          
          <Paper id="datos-personales" elevation={3} sx={{ p: 3, mb: 3, width: '100%' }}>
            <Typography variant="h4" gutterBottom>Datos Personales</Typography>
            <Typography>Nombre: Edison Fernando Vivas Calderon</Typography>
            <Typography>Edad: 28 años</Typography>
            <Typography>Ciudad: Quito</Typography>
            <Typography>Número de teléfono: 0995499788</Typography>
          </Paper>

          <Paper id="formacion-profesional" elevation={3} sx={{ p: 3, mb: 3, width: '100%' }}>
            <Typography variant="h4" gutterBottom>Formación Profesional</Typography>
            <Typography>Servidor Policial en el grado de Subteniente</Typography>
          </Paper>

          <Paper id="formacion-continua" elevation={3} sx={{ p: 3, mb: 3, width: '100%' }}>
            <Typography variant="h4" gutterBottom>Formación Continua</Typography>
            <List>
              <ListItem>
                <ListItemText primary="Conocimientos en programación" secondary="JavaScript, Python, HTML/CSS" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Desarrollo web" secondary="React, Node.js, Express" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Bases de datos" secondary="SQL, MongoDB" />
              </ListItem>
            </List>
          </Paper>

          <Paper id="habilidades" elevation={3} sx={{ p: 3, mb: 3, width: '100%' }}>
            <Typography variant="h4" gutterBottom>Habilidades</Typography>
            <List>
              <ListItem><ListItemText primary="Desarrollo Frontend (React)" /></ListItem>
              <ListItem><ListItemText primary="Desarrollo Backend (Node.js)" /></ListItem>
              <ListItem><ListItemText primary="Gestión de Bases de Datos (SQL, MongoDB)" /></ListItem>
              <ListItem><ListItemText primary ="Resolución de Problemas" /></ListItem>
              <ListItem><ListItemText primary="Trabajo en Equipo" /></ListItem>
              <ListItem><ListItemText primary="Comunicación Efectiva" /></ListItem>
            </List>
          </Paper>

          <Paper id="proyectos" elevation={3} sx={{ p: 3, width: '100%' }}>
            <Typography variant="h4" gutterBottom>Proyectos</Typography>
            <List>
              <ListItem><ListItemText primary="Proyecto 1: Aplicación de Gestión de Tareas" secondary="Desarrollada con React y Node.js" /></ListItem>
              <ListItem><ListItemText primary="Proyecto 2: Sistema de Inventario" secondary="Implementado con Python y SQL" /></ListItem>
              <ListItem><ListItemText primary="Proyecto 3: Portafolio Personal" secondary="Construido con React y Material-UI" /></ListItem>
            </List>
          </Paper>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
