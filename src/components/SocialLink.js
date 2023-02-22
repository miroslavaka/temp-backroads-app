import React from 'react';

const SocialLink = (props) => {
  const { href, icon } = props.sociallink;
  const { iconclass } = props;

  return (
    <li>
      <a href={href} target="_blank" rel="noreferrer" className={iconclass}>
        <i className={icon}></i>
      </a>
    </li>
  );
};
export default SocialLink;
