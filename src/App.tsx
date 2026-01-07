/**
 * 🎯 Main App
 */

import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { tokens } from './tokens';
import Navigation from './layout/Navigation';
import MainLayout from './layout/MainLayout';
import HomePage from './pages/HomePage';
import ButtonPlayground from './playground/ButtonPlayground';
import ColorPlayground from './playground/ColorPlayground';
import TypographyPlayground from './playground/TypographyPlayground';
import MotionPlayground from './playground/MotionPlayground';
import InputPlayground from './playground/InputPlayground';

function App() {
  const [currentPath, setCurrentPath] = useState('/');

  const renderPage = () => {
    switch (currentPath) {
      case '/':
        return <HomePage onNavigate={setCurrentPath} />;
      case '/button':
        return <ButtonPlayground />;
      case '/color':
        return <ColorPlayground />;
      case '/typography':
        return <TypographyPlayground />;
      case '/motion':
        return <MotionPlayground />;
      case '/input':
        return <InputPlayground />;
      default:
        return <HomePage onNavigate={setCurrentPath} />;
    }
  };

  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Navigation currentPath={currentPath} onNavigate={setCurrentPath} />
        <Content>
          {renderPage()}
        </Content>
      </MainLayout>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: ${tokens.typography.fontFamily.sans};
    background: ${tokens.semanticColors.bg.secondary};
    color: ${tokens.semanticColors.text.primary};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  button {
    font-family: inherit;
  }
  
  input {
    font-family: inherit;
  }
`;

const Content = styled.main`
  margin-left: 240px;
  min-height: 100vh;
  width: calc(100% - 240px);
  
  @media (max-width: 968px) {
    margin-left: 0;
    width: 100%;
  }
`;

export default App;
