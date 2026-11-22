import { useState } from 'react';
import Lab1EffectTimer from './components/Lab1_EffectTimer.jsx';
import Lab2TimerControl from './components/Lab2_TimerControl.jsx';
import Lab3InputFocus from './components/Lab3_InputFocus.jsx';
import Lab4RefTimer from './components/Lab4_RefTimer.jsx';

const labs = [
  { id: '1', name: 'LAB 1', subtitle: 'useEffect Timer', Component: Lab1EffectTimer },
  { id: '2', name: 'LAB 2', subtitle: 'Start / Stop / Cleanup', Component: Lab2TimerControl },
  { id: '3', name: 'LAB 3', subtitle: 'useRef Input Focus', Component: Lab3InputFocus },
  { id: '4', name: 'LAB 4', subtitle: 'useRef Timer', Component: Lab4RefTimer },
];

export default function App() {
  const [active, setActive] = useState('1');
  const chosen = labs.find(lab => lab.id === active);
  const CurrentLab = chosen.Component;

  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">OPEN SOURCE STUDIO · WEEK 12</p>
        <h1>useEffect, useRef를 활용하여 타이머와 focuse 기능 구현</h1>
        <p>useEffect · Cleanup · useRef — 4개의 독립된 Lab</p>
      </header>

      <nav className="tabs" aria-label="실습 선택">
        {labs.map(lab => (
          <button key={lab.id} type="button" className={active === lab.id ? 'tab active' : 'tab'}
            onClick={() => setActive(lab.id)} aria-current={active === lab.id ? 'page' : undefined}>
            <b>{lab.name}</b><span>{lab.subtitle}</span>
          </button>
        ))}
      </nav>

      <section className="lab-panel">
        <div className="section-heading">
          <span className="pill">{chosen.name}</span>
          <h2>{chosen.subtitle}</h2>
        </div>
        <CurrentLab />
      </section>
      <footer>랩을 전환하면 이전 Lab은 언마운트됩니다. Timer Cleanup을 확인해 보세요.</footer>
    </main>
  );
}
