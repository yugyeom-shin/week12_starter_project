import { useEffect, useRef, useState } from 'react';

// LAB 4 (Slide 17): Timer ID를 useRef로 관리
export default function Lab4RefTimer() {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);
  // TODO 1: 타이머 ID를 유지할 timerRef 생성 (초기값 null)
  const timerRef = useRef(null);

  const start = () => {
    // TODO 2: timerRef.current에 타이머가 있으면 중복 시작 방지
    if (timerRef.current !== null) return;
    // TODO 3: setInterval의 반환 ID를 timerRef.current에 보관
    // TODO 4: 1초마다 count 증가, running을 true로 변경
    timerRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000);
    setRunning(true);
  };

  const stop = () => {
    // TODO 5: clearInterval로 타이머 중지
    clearInterval(timerRef.current);
    // TODO 6: timerRef.current를 null로, running은 false로 변경
    timerRef.current = null;
    setRunning(false);
  };

  const reset = () => {
    // TODO 7: stop() 실행 후 count를 0으로 초기화
    stop();
    setCount(0);
  };

  useEffect(() => {
    // TODO 8: 언마운트 시 Interval을 정리하는 Cleanup 작성
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <p className="status">상태: {running ? 'Running' : 'Stopped'}</p>
      <div className="count">{count}</div>
      <div className="controls">
        <button onClick={start} disabled={running}>Start</button>
        <button className="secondary" onClick={stop} disabled={!running}>Stop</button>
        <button className="secondary" onClick={reset}>Reset</button>
      </div>
      <p className="hint">Timer ID와 화면 표시용 상태의 차이를 설명해 보세요.</p>
    </div>
  );
}
