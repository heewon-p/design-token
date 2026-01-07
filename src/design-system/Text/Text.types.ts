/**
 * 📝 Text Component Types
 */

import { FontSize, FontWeight, LineHeight } from '@/tokens';

export interface TextProps {
  as?: 'p' | 'span' | 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  size?: FontSize;
  weight?: FontWeight;
  lineHeight?: LineHeight;
  color?: string;
  children: React.ReactNode;
}

