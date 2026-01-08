/**
 * 📝 Text Component Types
 */

import { FontFamily, FontSize, FontWeight, LineHeight, TypographyPreset } from '@/tokens';

export interface TextProps {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontFamily?: FontFamily;
  size?: FontSize;
  weight?: FontWeight;
  lineHeight?: LineHeight;
  preset?: TypographyPreset;
  color?: string;
  children: React.ReactNode;
}

