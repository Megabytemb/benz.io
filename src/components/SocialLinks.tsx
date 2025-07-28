
import React from 'react';
import { SocialLink } from '../types';

interface SocialLinksProps {
  links: SocialLink[];
}

const SocialLinks: React.FC<SocialLinksProps> = ({ links }) => {
  return (
    <div className="flex justify-center space-x-6 md:space-x-8">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.name}
          className="text-gray-400 hover:text-cyan-400 transform hover:scale-110 transition-all duration-300"
        >
          <i className={`${link.icon} fa-2x`}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;