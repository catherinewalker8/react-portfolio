import React from 'react';

const pages = [
  { name: 'Home', key: 'home' },
  // { name: 'About', key: 'about' },
  { name: 'Contact', key: 'contact' }
]

const NavBar = ({selectedPage, onSetPage}) => {

  const renderPageLinks = () => {
        
    return pages.map(page => (
       <li
          key={page.key}
          className={`nav-item ${page.key === selectedPage ? 'active' : ''}`}
          onClick={() => onSetPage(page.key)}
        >
          {page.name}
        </li>
    ));
  };

return (
  <nav className='navbar'>
    <div className='nav-title'>
      <h1>Catherine Walker</h1>
      <p className="nav-tagline">
        Building software for <span className="text-people">people</span> and the <span className="text-planet">planet</span>.
      </p>
    </div>
    
    <ul className='nav-links-list'>
      {renderPageLinks()}
    </ul>
  </nav>
)
}

export default NavBar