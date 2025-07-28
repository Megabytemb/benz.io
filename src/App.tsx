
import React from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import SocialLinks from './components/SocialLinks';
import { SOCIAL_LINKS } from './constants';

function App(): React.ReactNode {
  return (
    <div className="relative min-h-screen bg-gray-900 text-white font-sans overflow-hidden">
      <ParticlesBackground />
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4 text-center">
        <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm p-8 rounded-xl">
          <h1 className="text-5xl md:text-7xl font-bold tracking-wider text-gray-100 animate-fade-in-down">
            Michael Benz
          </h1>
          <div className="mt-8 animate-fade-in-up">
            <SocialLinks links={SOCIAL_LINKS} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;