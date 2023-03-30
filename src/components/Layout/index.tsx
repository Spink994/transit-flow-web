import { ReactNode } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';

type LayoutType = { children: ReactNode };

function Layout({ children }: LayoutType) {
  return (
    <main className="flex flex-col min-h-screen max-w-[1920px] w-full mx-auto overflow-x-hidden">
      <nav className="fixed w-full max-w-[1920px] z-50">
        <NavBar />
      </nav>
      <section className="mt-[80px] lg:mt-[160px] min-w-full">
        {children}
      </section>
      <footer className="bg-primary-2">
        <Footer />
      </footer>
    </main>
  );
}

export default Layout;
