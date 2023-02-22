import React from 'react';
import { pageLinks } from '../data';

const PageLinks = (props) => {
  const { parentClass, itemClass } = props;
  return (
    <ul className={parentClass} id="nav-links">
      {pageLinks.map((pagelink) => {
        return (
          <li key={pagelink.id}>
            <a href={pagelink.href} className={itemClass}>
              {pagelink.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};
export default PageLinks;
