import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link } from './Layout.styled';
import Loader from 'components/Loader/Loader';
import img from '../video.png';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <img src={img} alt="icon" width={80} />
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
export default SharedLayout;
