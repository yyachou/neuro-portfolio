import { useEffect } from 'react';
import Presentation from './components/Presentation';
import CoverSlide from './slides/CoverSlide';
import BrainFocusSlide from './slides/BrainFocusSlide';
import NeuromodulationOpsSlide from './slides/NeuromodulationOpsSlide';
import ResearchSlide from './slides/ResearchSlide';
import OutroSlide from './slides/OutroSlide';

export default function App() {
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700&display=swap');
      body {
        font-family: 'Plus Jakarta Sans', sans-serif;
        background-color: black;
        color: white;
        margin: 0;
        overflow: hidden;
      }
    `;
    document.head.appendChild(style);
  }, []);

  return (
    <Presentation>
      <CoverSlide />
      <BrainFocusSlide />
      <NeuromodulationOpsSlide />
      <ResearchSlide />
      <OutroSlide />
    </Presentation>
  );
}