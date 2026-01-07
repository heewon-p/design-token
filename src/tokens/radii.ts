/**
 * 📐 Border Radius Tokens
 * 
 * 철학: 일관된 모서리 스타일
 */

export const radii = {
  none: '0',
  sm: '0.25rem',   // 4px
  md: '0.375rem',  // 6px
  lg: '0.5rem',    // 8px
  xl: '0.75rem',   // 12px
  '2xl': '1rem',   // 16px
  full: '9999px',  // 완전한 원형
} as const;

/**
 * Shape Presets
 * 컴포넌트별 모서리 스타일
 */
export const shapePresets = {
  sharp: radii.none,
  round: radii.md,
  pill: radii.full,
} as const;

export type Radii = keyof typeof radii;
export type Shape = keyof typeof shapePresets;

export default radii;

