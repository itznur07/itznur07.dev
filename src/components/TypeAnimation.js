import { useEffect, useState } from 'react';

function TypingAnimation({ text }) {
  const [currentText, setCurrentText] = useState('Full Stack ');
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setCurrentText((prevText) => prevText + text.charAt(i));
      i++;
      if (i >= text.length) clearInterval(timer);
    }, 100);
    return () => clearInterval(timer);
  }, [text]);
  
  return (
    <div className="text-[#94A3B8] font-bold">
      {currentText}
      <span className="animate-ping">|</span>
    </div>
  );
}

export default TypingAnimation