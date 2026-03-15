import NavBar from './NavBar'
import Footer from './Footer';

const Layout = ({ children, selectedPage, onSetPage }) => {
  return (
    <div>
      <NavBar selectedPage={selectedPage} onSetPage={onSetPage}/>

      <div>
        <section>
          {children}
        </section>
      </div>

      <Footer />
     
    </div>
  );
};

export default Layout;
