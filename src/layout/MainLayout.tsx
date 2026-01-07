/**
 * 🏗️ Main Layout
 */

import React from "react";
import styled from "styled-components";
import { tokens } from "../tokens";

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${tokens.semanticColors.bg.secondary};
`;

export default MainLayout;
