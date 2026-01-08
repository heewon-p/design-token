/**
 * 🎯 Main App
 */

import React, { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { tokens } from "./tokens";
import { fontFaces } from "./styles/fonts";
import Navigation from "./layout/Navigation";
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import ComingSoon from "./pages/ComingSoon";
import ButtonPlayground from "./playground/ButtonPlayground";
import ColorPlayground from "./playground/ColorPlayground";
import TypographyPlayground from "./playground/TypographyPlayground";
import InteractionPlayground from "./playground/InteractionPlayground";
import InputPlayground from "./playground/InputPlayground";

function App() {
  const [currentPath, setCurrentPath] = useState("/");

  const renderPage = () => {
    switch (currentPath) {
      // Home
      case "/":
        return <HomePage onNavigate={setCurrentPath} />;

      // Design Tokens
      case "/tokens/color":
        return <ColorPlayground />;
      case "/tokens/typography":
        return <TypographyPlayground />;
      case "/tokens/spacing":
        return <ComingSoon title="Spacing Tokens" />;
      case "/tokens/interaction":
        return <InteractionPlayground />;
      case "/tokens/shadows":
        return <ComingSoon title="Shadow Tokens" />;
      case "/tokens/radii":
        return <ComingSoon title="Radii Tokens" />;

      // Common Components
      case "/components/button":
        return <ButtonPlayground />;
      case "/components/input":
        return <InputPlayground />;
      case "/components/input-field":
        return <ComingSoon title="InputField Component" />;
      case "/components/textarea":
        return <ComingSoon title="TextArea Component" />;
      case "/components/checkbox":
        return <ComingSoon title="CheckBox Component" />;
      case "/components/radio":
        return <ComingSoon title="Radio Component" />;
      case "/components/toggle":
        return <ComingSoon title="Toggle Component" />;
      case "/components/dropdown":
        return <ComingSoon title="DropDown Component" />;
      case "/components/search-dropdown":
        return <ComingSoon title="SearchDropdown Component" />;
      case "/components/select":
        return <ComingSoon title="Select Component" />;
      case "/components/date-select":
        return <ComingSoon title="DateSelect Component" />;
      case "/components/search-bar":
        return <ComingSoon title="SearchBar Component" />;
      case "/components/card":
        return <ComingSoon title="Card Component" />;
      case "/components/modal":
        return <ComingSoon title="Modal Component" />;
      case "/components/toast":
        return <ComingSoon title="Toast Component" />;
      case "/components/tooltip":
        return <ComingSoon title="Tooltip Component" />;
      case "/components/loading":
        return <ComingSoon title="Loading Component" />;
      case "/components/pagination":
        return <ComingSoon title="Pagination Component" />;
      case "/components/tab-menu":
        return <ComingSoon title="TabMenu Component" />;
      case "/components/navigation":
        return <ComingSoon title="Navigation Component" />;
      case "/components/layout":
        return <ComingSoon title="Layout Component" />;
      case "/components/box-select-group":
        return <ComingSoon title="BoxSelectGroup Component" />;
      case "/components/image-box":
        return <ComingSoon title="ImageBox Component" />;
      case "/components/icon-box":
        return <ComingSoon title="IconBox Component" />;
      case "/components/logo":
        return <ComingSoon title="Logo Component" />;
      case "/components/video-player":
        return <ComingSoon title="VideoPlayer Component" />;
      case "/components/video-container":
        return <ComingSoon title="VideoContainer Component" />;

      default:
        return <HomePage onNavigate={setCurrentPath} />;
    }
  };

  return (
    <>
      <GlobalStyle />
      <MainLayout>
        <Navigation currentPath={currentPath} onNavigate={setCurrentPath} />
        <Content>{renderPage()}</Content>
      </MainLayout>
    </>
  );
}

const GlobalStyle = createGlobalStyle`
  /* 웹폰트 로딩 */
  ${fontFaces}
  
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
