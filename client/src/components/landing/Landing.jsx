import React from 'react';
import { Container} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Landing.css';

import dogsImage from './dog1.jpg';
import missingImage from './dog2.jpg';
import expertDogImage from './dog3.jpg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <div className="landing-page">
      <div className="hero-section">
        <Container>
          <h1 className="text-center landing-title">Bienvenido a Dogs World</h1>
          <p className="text-center landing-subtitle">Descubre el mundo de los perros y encuentra información fascinante.</p>
        
            <Link className="botonlanding" to='/home'>🐶 inicio 🐶</Link>
          
        </Container>
      </div>
      <div className="content-section">
        <Container>
          <div className="row">
            <div className="col-md-6">
              <h2 className="section-title">Explora diferentes razas de perros</h2>
              <p className="section-description">
              Descubre la diversidad de tamaños, colores y formas que existen en el mundo canino, desde pequeñas razas de compañía hasta imponentes razas de trabajo.

Aprende sobre las peculiaridades de cada raza, desde las características físicas distintivas hasta sus comportamientos típicos, lo que te ayudará a comprender mejor a tu futuro compañero peludo.

Obtén información detallada sobre el temperamento de cada raza, lo que te permitirá elegir una que se adapte a tu estilo de vida, personalidad y necesidades específicas.

Descubre los cuidados necesarios para mantener a tu perro sano y feliz, desde sus requerimientos de ejercicio y alimentación hasta las rutinas de higiene y atención veterinaria recomendadas.

Explora el fascinante mundo de las razas de perros y encuentra el compañero perfecto que se ajuste a tu estilo de vida y preferencias. 
              </p>
            </div>
            <div className="col-md-6">
              <img src={dogsImage} alt="Perros" className="img-fluid imagenes" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <img src={missingImage} alt="Perros" className="img-fluid imagenes" />
            </div>
            <div className="col-md-6">
              <h2 className="section-title">Crea una nueva raza</h2>
              <p className="section-description">En nuestra web, te brindamos la oportunidad de ser parte activa en el mundo de los perros. Queremos que compartas tus conocimientos y pasión por los caninos al crear una nueva raza. Si has descubierto una raza única o tienes información detallada sobre una raza poco conocida, este es el lugar perfecto para compartirla. A través de nuestro formulario de creación de razas, puedes agregar todos los detalles importantes, como el nombre de la raza, su origen, características distintivas y cualquier otra información relevante. ¡Ayúdanos a ampliar nuestra base de datos canina y contribuye a la comunidad compartiendo tu descubrimiento! Juntos, podemos explorar y celebrar la diversidad canina.</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6">
              <h2 className="section-title">Conviértete en un experto en el apasionante mundo de los perros.</h2>
              <p className="section-description">Sumérgete en un mar de conocimiento a través de una amplia gama de recursos disponibles. Explora artículos informativos, sumérgete en libros especializados y descubre valiosos recursos en línea. A medida que te sumerjas en este universo canino, adquirirás una comprensión profunda de sus comportamientos, necesidades y cuidados. ¡Prepárate para convertirte en un verdadero experto en el mundo de los perros! 🐾📚📖</p>
            </div>
            <div className="col-md-6">
              <img src={expertDogImage} alt="Perro experto" className="img-fluid imagenes" />
            </div>
          </div>
        </Container>
      </div>
      <div className="footer">
        <Container>
          <p className="text-center footer-text">© 2023 Dogs World. Todos los derechos reservados.</p>
        </Container>
      </div>
    </div>
  );
};

export default Landing;
