/**
 * 📝 Typography Tokens
 *
 * 철학: 픽셀 값 대신 의미 기반 스케일 사용
 * - xs, sm, md, lg, xl, 2xl 등
 * - 제목, 본문, 캡션 등 용도별 프리셋
 */

export const typography = {
  // Font Family
  fontFamily: {
    // 시스템 폰트 (기본)
    sans: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',

    // 한글 최적화 폰트 (외부 폰트 사용 시)
    korean: '"Pretendard", "Apple SD Gothic Neo", "Noto Sans KR", sans-serif',

    // 영문 전용 폰트 (외부 폰트 사용 시)
    display: '"Inter", "SF Pro Display", -apple-system, sans-serif',

    // 모노스페이스 (코드용)
    mono: 'ui-monospace, SFMono-Regular, "SF Mono", Menlo, Consolas, "Liberation Mono", monospace',

    // 세리프 (장문 읽기용)
    serif: 'ui-serif, Georgia, Cambria, "Times New Roman", Times, serif',
  },

  // Font Size
  fontSize: {
    xs: "0.75rem", // 12px
    sm: "0.875rem", // 14px
    md: "1rem", // 16px (기본)
    lg: "1.125rem", // 18px
    xl: "1.25rem", // 20px
    "2xl": "1.5rem", // 24px
    "3xl": "1.875rem", // 30px
    "4xl": "2.25rem", // 36px
    "5xl": "3rem", // 48px
  },

  // Font Weight
  fontWeight: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
  },

  // Line Height
  lineHeight: {
    tight: 1.25,
    snug: 1.375,
    normal: 1.5,
    relaxed: 1.75,
    loose: 2,
  },

  // Letter Spacing
  letterSpacing: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em",
  },
} as const;

/**
 * Typography Presets
 * 용도별로 미리 조합된 타이포그래피
 */
export const typographyPresets = {
  // Headings
  h1: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize["4xl"],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight,
  },
  h2: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize["3xl"],
    fontWeight: typography.fontWeight.bold,
    lineHeight: typography.lineHeight.tight,
    letterSpacing: typography.letterSpacing.tight,
  },
  h3: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize["2xl"],
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.snug,
  },
  h4: {
    fontFamily: typography.fontFamily.display,
    fontSize: typography.fontSize.xl,
    fontWeight: typography.fontWeight.semibold,
    lineHeight: typography.lineHeight.normal,
  },

  // Body
  bodyLarge: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.relaxed,
  },
  body: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
  },
  bodySmall: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
  },

  // Korean Optimized
  korean: {
    fontFamily: typography.fontFamily.korean,
    fontSize: typography.fontSize.md,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.relaxed,
  },

  // Caption
  caption: {
    fontFamily: typography.fontFamily.sans,
    fontSize: typography.fontSize.xs,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
  },

  // Code
  code: {
    fontFamily: typography.fontFamily.mono,
    fontSize: typography.fontSize.sm,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.normal,
  },

  // Article (장문 읽기용)
  article: {
    fontFamily: typography.fontFamily.serif,
    fontSize: typography.fontSize.lg,
    fontWeight: typography.fontWeight.regular,
    lineHeight: typography.lineHeight.loose,
  },
} as const;

export type FontFamily = keyof typeof typography.fontFamily;
export type FontSize = keyof typeof typography.fontSize;
export type FontWeight = keyof typeof typography.fontWeight;
export type LineHeight = keyof typeof typography.lineHeight;
export type LetterSpacing = keyof typeof typography.letterSpacing;
export type TypographyPreset = keyof typeof typographyPresets;

export default typography;
