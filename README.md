## 1 Project Information: 프로젝트 소개 및 Starter Project 정보
- 프로젝트 소개 : useEffect와 useRef의 동작 원리를 이해하여 타이머 관리와 입력창 Focus 기능을 구현한다.
- Starter Project 정보 : https://github.com/2026-2-OSS/week12_starter_project.git

## 2 Installation: 설치·실행 방법 및 실행 화면
fork >
clone git repository >
reponpm install >
npm run dev
![Clone 화면](./실행1.png)
![Clone 화면](./실행2.png)

## 3 Source Code Exploration: 주요 파일 구조, useEffect 및 useRef 분석, 주요 코드 2개 설명
### Project Structure: App.jsx와 주요 Lab 컴포넌트의 역할
- App.jsx : 메인 컴포넌트, 4개의 Lab 컴포넌트를 화면에 표시한다. labs 배열에 각 Lab의 이름과 컴포넌트 정보를 저장
- lab1 : 1초마다 증가하는 타이머
- lab2 : 타이머의 Start, Stop, Reset 기능
- lab3 : Focus 버튼으로 입력창에 포커스를 호출하고, Clear 버튼으로 입력 내용을 지우는 기능
- lab4 : 타이머 ID를 저장하여 타이머를 관리하는 기능, Start, Stop, Reset 버튼

### useEffect: Effect, Dependency Array 및 Cleanup의 동작 원리
- Effect : 부 시스템과 컴포넌트를 동기화하기 위해 사용하는 Hook
- Dependency Array : 실행 시점 지정. [] - 최초 마운트 시 실행 / [running]: 최초 마운트 및 running 값이 변경되었을 때 실행
- Cleanup : 이전 Effect가 수행한 작업을 정

### useRef: .current 속성과 useState의 차이
- useRdf : 렌더링 간에 유지되는 값을 저장하거나 DOM 요소를 참조하는 Hook
- .current : useRef가 보관하는 현재 값에 접근하는 속성
- useState의 차이 : useState의 값을 변경하면 컴포넌트가 다시 렌더링되지만, useRef의 .current 값을 변경해도 리렌더링이 발생하지 않는다.

### Code Analysis: useEffect와 useRef 관련 주요 코드 각 1개(5~15줄)를 선택하여 동작 원리 설명
    useEffect(() => {
        // TODO 1: 1초마다 setCount(prev => prev + 1)을 실행할 setInterval 작성
        // TODO 2: 만든 타이머 ID를 보관
        // TODO 3: return Cleanup 함수에서 clearInterval 호출
        // TODO 4: Dependency Array가 []일 때와 생략했을 때의 차이 관찰
    }, []);
Dependency Array가 []이므로 최초 마운트 시 Effect가 실행된다. setInterval로 1초마다 Count를 증가시키고, Cleanup에서 clearInterval을 호출하여 컴포넌트가 사라질 때 타이머를 정리하게 된다.
    import { useRef } from 'react';

    // LAB 3 (Slide 15): Input Focus with useRef
    export default function Lab3InputFocus() {
    // TODO 1: input DOM을 참조할 inputRef 생성 (초기값 null)

    const focusInput = () => {
        // TODO 2: ref.current를 이용해 input에 focus() 호출
    };

    const clearInput = () => {
        // TODO 3: input의 값을 지우고 다시 Focus
    };
useRef가 import되어 있다. useRef(null)로 Input 요소를 참조하고, .current.focus()를 통해 입력창으로 포커스를 이동시킬 수 있다.

## 4 Lab Implementation: 4개 Lab 구현 내용 및 실행 결과

## 5 Lab Comparison: STEP 3의 비교 분석 질문 4개에 대한 답변

## 6 Customizing: 수정 내용 및 파일명

## 7 Deployment: 실제 접근 가능한 Vercel URL

## 8 Weekly Review:
### 새롭게 배운 내용 3가지
- useRdf와 useState의 차이 : useState의 값을 변경하면 컴포넌트가 다시 렌더링되지만, useRef의 .current 값을 변경해도 리렌더링이 발생하지 않는다.
- 
- 
### 어려웠던 점과 해결 방법
### AI 활용 내용 및 느낀 점
useRef의 .current 기능과 useState의 차이 개념 / 




# OSS Week 12 — React Hooks Playground (Student Starter)

## 실행 방법
Node.js 20.19+ 또는 22.12+ 권장. 프로젝트 폴더에서 실행:

```bash
npm install
npm run dev
```

브라우저에 터미널의 Local URL을 열고 LAB 탭을 이동하세요. 제출 전 `npm run build`도 실행하세요.

## 수행 방법
1. `src/components/` 아래의 LAB 1~4 파일에 있는 `TODO`를 직접 완성합니다.
2. `src/App.jsx`, `src/App.css`는 공통 화면이므로 가급적 수정하지 않습니다.
3. 각 LAB의 동작 화면과 콘솔 결과를 기록합니다.
4. 한 LAB에서 다른 LAB으로 탭을 전환하면 기존 컴포넌트가 언마운트됩니다. Cleanup 결과를 관찰합니다.


## 이해도 확인 질문
1. `setCount(prev => prev + 1)`은 왜 유용한가?
2. `useEffect(fn, [])`과 `useEffect(fn)`은 어떻게 다른가?
3. Cleanup은 언제 실행되는가? 개발 환경 StrictMode 영향은?
4. `useState`와 `useRef`의 값 변경 시 렌더링 차이는?
5. LAB 2와 LAB 4에서 Timer를 관리하는 방식의 차이는?
