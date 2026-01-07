/**
 * 🎨 Color Tokens
 * 
 * 철학: 모든 컬러는 의미 기반으로 네이밍
 * - Semantic colors: primary, danger, success 등
 * - Neutral colors: gray scale
 * 
 * ❌ 직접 hex 값 사용 금지
 * ✅ 이 토큰을 통해서만 색상 접근
 */

export const colors = {
  // Semantic Colors - 의미 기반
  primary: {
    50: '#EFF6FF',
    100: '#DBEAFE',
    200: '#BFDBFE',
    300: '#93C5FD',
    400: '#60A5FA',
    500: '#3B82F6',  // 기본
    600: '#2563EB',
    700: '#1D4ED8',
    800: '#1E40AF',
    900: '#1E3A8A',
  },
  
  secondary: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',  // 기본
    600: '#475569',
    700: '#334155',
    800: '#1E293B',
    900: '#0F172A',
  },
  
  danger: {
    50: '#FEF2F2',
    100: '#FEE2E2',
    200: '#FECACA',
    300: '#FCA5A5',
    400: '#F87171',
    500: '#EF4444',  // 기본
    600: '#DC2626',
    700: '#B91C1C',
    800: '#991B1B',
    900: '#7F1D1D',
  },
  
  warning: {
    50: '#FFFBEB',
    100: '#FEF3C7',
    200: '#FDE68A',
    300: '#FCD34D',
    400: '#FBBF24',
    500: '#F59E0B',  // 기본
    600: '#D97706',
    700: '#B45309',
    800: '#92400E',
    900: '#78350F',
  },
  
  success: {
    50: '#F0FDF4',
    100: '#DCFCE7',
    200: '#BBF7D0',
    300: '#86EFAC',
    400: '#4ADE80',
    500: '#22C55E',  // 기본
    600: '#16A34A',
    700: '#15803D',
    800: '#166534',
    900: '#14532D',
  },
  
  // Neutral Colors - gray scale
  gray: {
    50: '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    400: '#9CA3AF',
    500: '#6B7280',
    600: '#4B5563',
    700: '#374151',
    800: '#1F2937',
    900: '#111827',
  },
  
  // Base colors
  white: '#FFFFFF',
  black: '#000000',
  
  // Transparent
  transparent: 'transparent',
} as const;

/**
 * Semantic Color Aliases
 * 용도별로 사용하기 쉽게 별칭 제공
 */
export const semanticColors = {
  // Text
  text: {
    primary: colors.gray[900],
    secondary: colors.gray[600],
    tertiary: colors.gray[500],
    disabled: colors.gray[400],
    inverse: colors.white,
  },
  
  // Background
  bg: {
    primary: colors.white,
    secondary: colors.gray[50],
    tertiary: colors.gray[100],
    inverse: colors.gray[900],
  },
  
  // Border
  border: {
    light: colors.gray[200],
    default: colors.gray[300],
    strong: colors.gray[400],
  },
  
  // Interactive states
  interactive: {
    hover: colors.gray[100],
    active: colors.gray[200],
    focus: colors.primary[500],
  },
} as const;

/**
 * 타입 정의
 */
export type ColorScale = keyof typeof colors.primary;
export type SemanticColor = keyof typeof colors;
export type Color = typeof colors;

export default colors;

