import NavBar from './NavBar'
import Footer from './Footer';

const Layout = ({ children, selectedPage, onSetPage }) => {
  return (
    <div className = 'layout-container'>
      <NavBar selectedPage={selectedPage} onSetPage={onSetPage}/>

      <div className = 'main-content'>
        <section className = 'page-area'>
          {children}
        </section>
      </div>

      <Footer />
     
    </div>
  );
};

export default Layout;
