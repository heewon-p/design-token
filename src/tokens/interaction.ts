/**
 * 🎬 interaction Tokens
 *
 * 철학: 일관된 애니메이션 경험
 * - Duration: 빠름, 보통, 느림
 * - Easing: 자연스러운 움직임
 * - 미리 정의된 애니메이션만 사용
 */

export const interaction = {
  // Duration
  duration: {
    instant: "0ms",
    fast: "120ms",
    normal: "200ms",
    slow: "320ms",
    slower: "480ms",
  },

  // Easing
  easing: {
    linear: "linear",
    easeIn: "cubic-bezier(0.4, 0, 1, 1)",
    easeOut: "cubic-bezier(0, 0, 0.2, 1)",
    easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
    bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
  },

  // Common Transitions
  transition: {
    fast: "all 120ms cubic-bezier(0, 0, 0.2, 1)",
    normal: "all 200ms cubic-bezier(0.4, 0, 0.2, 1)",
    slow: "all 320ms cubic-bezier(0.4, 0, 0.2, 1)",
  },
} as const;

/**
 * Animation Presets
 * 자주 사용하는 애니메이션 효과
 */
export const animations = {
  // Fade
  fadeIn: {
    keyframes: `
      @keyframes fadeIn {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    `,
    animation: `fadeIn ${interaction.duration.normal} ${interaction.easing.easeOut}`,
  },

  fadeOut: {
    keyframes: `
      @keyframes fadeOut {
        from { opacity: 1; }
        to { opacity: 0; }
      }
    `,
    animation: `fadeOut ${interaction.duration.normal} ${interaction.easing.easeIn}`,
  },

  // Scale
  scaleIn: {
    keyframes: `
      @keyframes scaleIn {
        from { 
          opacity: 0;
          transform: scale(0.9);
        }
        to { 
          opacity: 1;
          transform: scale(1);
        }
      }
    `,
    animation: `scaleIn ${interaction.duration.normal} ${interaction.easing.easeOut}`,
  },

  // Slide
  slideUp: {
    keyframes: `
      @keyframes slideUp {
        from { 
          opacity: 0;
          transform: translateY(10px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
    animation: `slideUp ${interaction.duration.normal} ${interaction.easing.easeOut}`,
  },

  slideDown: {
    keyframes: `
      @keyframes slideDown {
        from { 
          opacity: 0;
          transform: translateY(-10px);
        }
        to { 
          opacity: 1;
          transform: translateY(0);
        }
      }
    `,
    animation: `slideDown ${interaction.duration.normal} ${interaction.easing.easeOut}`,
  },

  // Hover effects
  hoverScale: {
    transform: "scale(1.05)",
    transition: interaction.transition.fast,
  },

  hoverLift: {
    transform: "translateY(-2px)",
    transition: interaction.transition.fast,
  },

  // Press effect
  press: {
    transform: "scale(0.98)",
    transition: interaction.transition.fast,
  },
} as const;

/**
 * Interaction Animations
 * 인터랙션별 애니메이션 맵
 */
export const interactionAnimations = {
  none: {},
  "hover-scale": {
    transition: interaction.transition.fast,
    "&:hover:not(:disabled)": {
      transform: "scale(1.05)",
    },
  },
  "hover-glow": {
    transition: interaction.transition.fast,
    "&:hover:not(:disabled)": {
      boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.2)",
    },
  },
  "hover-lift": {
    transition: interaction.transition.fast,
    "&:hover:not(:disabled)": {
      transform: "translateY(-2px)",
      boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
    },
  },
  "active-press": {
    transition: interaction.transition.fast,
    "&:active:not(:disabled)": {
      transform: "scale(0.98)",
    },
  },
} as const;

export type Duration = keyof typeof interaction.duration;
export type Easing = keyof typeof interaction.easing;
export type AnimationType = keyof typeof animations;
export type InteractionType = keyof typeof interactionAnimations;

export default interaction;
