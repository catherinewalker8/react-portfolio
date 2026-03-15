import React from 'react';

const pages = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Contact', key: 'contact' },
]

const NavBar = ({selectedPage, onSetPage}) => {

  const renderPageLinks = () => {
        
    return pages.map(page => (
       <li
          key={page.key}
          onClick={() => onSetPage(page.key)}
        >
          {page.name}
        </li>
    ));
  };

  return (
    <nav>
      <ul>
        {renderPageLinks()}
      </ul>
      <h1>Catherine Walker</h1>
    </nav>
  )
}

export default NavBar