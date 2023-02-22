import React from 'react';
import logo from '../images/logo.svg';
import { pageLinks, socialLinks } from '../data';
import PageLinks from './PageLinks';
import SocialLink from './SocialLink';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <PageLinks parentClass="nav-links" itemClass="nav-link" />

        <ul className="nav-icons">
          {socialLinks.map((sociallink) => {
            //destructure sociallink object:
            //const { id, href, icon } = sociallink;
            return (
              <SocialLink
                sociallink={sociallink}
                iconclass="nav-icon"
                key={sociallink.id}
              />
            );
            {
            }
          })}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
