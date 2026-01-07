/**
 * 📏 Spacing Tokens
 * 
 * 철학: 8px 기반 스케일 시스템
 * - 일관된 여백과 간격
 * - 픽셀 직접 사용 금지
 */

export const spacing = {
  none: '0',
  xs: '0.25rem',   // 4px
  sm: '0.5rem',    // 8px
  md: '1rem',      // 16px
  lg: '1.5rem',    // 24px
  xl: '2rem',      // 32px
  '2xl': '3rem',   // 48px
  '3xl': '4rem',   // 64px
  '4xl': '6rem',   // 96px
  '5xl': '8rem',   // 128px
} as const;

/**
 * Component Spacing Presets
 * 컴포넌트별 자주 사용하는 간격 조합
 */
export const componentSpacing = {
  button: {
    sm: { padding: `${spacing.xs} ${spacing.sm}` },
    md: { padding: `${spacing.sm} ${spacing.md}` },
    lg: { padding: `${spacing.md} ${spacing.lg}` },
  },
  input: {
    sm: { padding: `${spacing.xs} ${spacing.sm}` },
    md: { padding: `${spacing.sm} ${spacing.md}` },
    lg: { padding: `${spacing.md} ${spacing.lg}` },
  },
  card: {
    padding: spacing.lg,
    gap: spacing.md,
  },
} as const;

export type Spacing = keyof typeof spacing;

export default spacing;

