import { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routesConst from './routes.const';
import Skeleton from '../components/Skeleton';

const Home = lazy(() => import('../pages/Home'));
const Project = lazy(() => import('../pages/Project'));
const About = lazy(() => import('../pages/About'));
const Contact = lazy(() => import('../pages/Contact'));
const NotFound = lazy(() => import('../pages/NotFound'));

function App() {
  return (
    <Suspense fallback={<Skeleton />}>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path={routesConst.project} element={<Project />} />
          <Route path={routesConst.about} element={<About />} />
          <Route path={routesConst.contact} element={<Contact />} />
          <Route path={routesConst.notFound} element={<NotFound />} />
        </Routes>
      </Router>
    </Suspense>
  );
}

export default App;
