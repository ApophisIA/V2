import React, { useState, useEffect } from 'react';
import { MessageSquare } from 'lucide-react';

const FloatingCTA = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsVisible(currentScrollY < lastScrollY || currentScrollY < 100);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <button
      className={`fixed bottom-8 right-8 bg-purple-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:bg-purple-700 hover:scale-110 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
      }`}
    >
      <MessageSquare className="animate-pulse" size={24} />
    </button>
  );
};

export default FloatingCTA;