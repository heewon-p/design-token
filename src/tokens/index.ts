/**
 * 🎯 Design Tokens
 *
 * 모든 디자인 토큰의 단일 진실 공급원 (Single Source of Truth)
 *
 * 사용법:
 * import { tokens } from '@/tokens';
 *
 * background: tokens.colors.primary[500];
 * padding: tokens.spacing.md;
 * font-size: tokens.typography.fontSize.lg;
 */

// 통합 export를 위한 import
import { colors, semanticColors } from "./colors";
import { typography, typographyPresets } from "./typography";
import { spacing, componentSpacing } from "./spacing";
import { interaction, animations, interactionAnimations } from "./interaction";
import { shadows } from "./shadows";
import { radii, shapePresets } from "./radii";

// 개별 export
export { colors, semanticColors } from "./colors";
export type { ColorScale, SemanticColor, Color } from "./colors";

export { typography, typographyPresets } from "./typography";
export type {
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  LetterSpacing,
  TypographyPreset,
} from "./typography";

export { spacing, componentSpacing } from "./spacing";
export type { Spacing } from "./spacing";

export { interaction, animations, interactionAnimations } from "./interaction";
export type {
  Duration,
  Easing,
  AnimationType,
  InteractionType,
} from "./interaction";

export { shadows } from "./shadows";
export type { Shadow } from "./shadows";

export { radii, shapePresets } from "./radii";
export type { Radii, Shape } from "./radii";

export const tokens = {
  colors,
  semanticColors,
  typography,
  typographyPresets,
  spacing,
  componentSpacing,
  interaction,
  animations,
  interactionAnimations,
  shadows,
  radii,
  shapePresets,
} as const;

export default tokens;
