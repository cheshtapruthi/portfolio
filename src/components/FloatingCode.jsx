import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const codeSnippets = [
  "const hero = true;",
  "<div>Hello World</div>",
  "npm install life",
  "git push origin master",
  "while(alive) { code() }",
  "import Future from 'react'",
  "array.map(item => item)",
  "404 Not Found",
  "console.log('Success')",
  "if (err) throw err;",
  "return <Component />",
  "background: #000;",
  "chmod 777 script.sh",
  "docker-compose up",
  "SELECT * FROM world"
];

const FloatingCode = () => {
  const [elements, setElements] = useState([]);

  useEffect(() => {
    // Generate random elements only on client-side to avoid hydration mismatch
    const newElements = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      duration: Math.random() * 20 + 10, // 10-30s
      delay: Math.random() * 5,
      scale: Math.random() * 0.5 + 0.5, // 0.5 - 1.0
    }));
    setElements(newElements);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      overflow: 'hidden',
      pointerEvents: 'none',
      background: 'transparent' // Inherit from body
    }}>
      {elements.map((el) => (
        <motion.div
          key={el.id}
          initial={{
            x: `${el.x}vw`,
            y: `${el.y}vh`,
            opacity: 0
          }}
          animate={{
            x: [`${el.x}vw`, `${(el.x + 20) % 100}vw`, `${(el.x - 20 + 100) % 100}vw`], // Wander horizontally
            y: [`${el.y}vh`, `${(el.y + 30) % 100}vh`, `${(el.y - 30 + 100) % 100}vh`], // Wander vertically
            opacity: [0, 0.8, 0] // Fade in -> HIGHLY visible -> fade out
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            ease: "linear",
            delay: el.delay,
            times: [0, 0.5, 1] // Keyframes for opacity
          }}
          style={{
            position: 'absolute',
            color: 'rgba(125, 211, 252, 0.6)', // Bright, clear cyan
            fontFamily: 'monospace',
            fontSize: 'max(14px, 1.2vw)',
            whiteSpace: 'nowrap',
            scale: el.scale,
          }}
        >
          {el.text}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingCode;
