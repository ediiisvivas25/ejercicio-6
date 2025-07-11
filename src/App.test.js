import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders all required sections', () => {
    render(<App />);
    
    // Verify all required sections exist
    expect(screen.getByText('Datos Personales')).toBeInTheDocument();
    expect(screen.getByText('Formación Profesional')).toBeInTheDocument();
    expect(screen.getByText('Formación Continua')).toBeInTheDocument();
    expect(screen.getByText('Habilidades')).toBeInTheDocument();
    expect(screen.getByText('Proyectos')).toBeInTheDocument();
    
    // Verify section IDs exist
    expect(document.getElementById('datos-personales')).toBeInTheDocument();
    expect(document.getElementById('formacion-profesional')).toBeInTheDocument();
    expect(document.getElementById('formacion-continua')).toBeInTheDocument();
    expect(document.getElementById('habilidades')).toBeInTheDocument();
    expect(document.getElementById('proyectos')).toBeInTheDocument();
  });
});
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
