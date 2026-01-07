/**
 * 🎛️ Button Playground Options
 * 
 * Button이 가질 수 있는 모든 옵션 정의
 * Props와 1:1 매핑
 */

import { ButtonVariant, ButtonSize, ButtonShape } from '@/design-system/Button';
import { InteractionType } from '@/tokens';

export interface ButtonOption {
  value: string;
  label: string;
  description?: string;
}

export const variantOptions: ButtonOption[] = [
  {
    value: 'primary',
    label: 'Primary',
    description: '주요 액션 (CTA)',
  },
  {
    value: 'secondary',
    label: 'Secondary',
    description: '보조 액션',
  },
  {
    value: 'danger',
    label: 'Danger',
    description: '위험한 액션 (삭제 등)',
  },
];

export const sizeOptions: ButtonOption[] = [
  {
    value: 'sm',
    label: 'Small',
    description: '작은 크기 (32px)',
  },
  {
    value: 'md',
    label: 'Medium',
    description: '기본 크기 (40px)',
  },
  {
    value: 'lg',
    label: 'Large',
    description: '큰 크기 (48px)',
  },
];

export const shapeOptions: ButtonOption[] = [
  {
    value: 'sharp',
    label: 'Sharp',
    description: '각진 모서리',
  },
  {
    value: 'round',
    label: 'Round',
    description: '둥근 모서리 (기본)',
  },
  {
    value: 'pill',
    label: 'Pill',
    description: '완전히 둥근 모서리',
  },
];

export const interactionOptions: ButtonOption[] = [
  {
    value: 'none',
    label: 'None',
    description: '애니메이션 없음',
  },
  {
    value: 'hover-scale',
    label: 'Hover Scale',
    description: 'hover 시 확대',
  },
  {
    value: 'hover-glow',
    label: 'Hover Glow',
    description: 'hover 시 그림자',
  },
  {
    value: 'hover-lift',
    label: 'Hover Lift',
    description: 'hover 시 위로 올라감',
  },
  {
    value: 'active-press',
    label: 'Active Press',
    description: 'click 시 눌림 효과',
  },
];

export interface ButtonPlaygroundState {
  variant: ButtonVariant;
  size: ButtonSize;
  shape: ButtonShape;
  interaction: InteractionType;
  disabled: boolean;
  loading: boolean;
  fullWidth: boolean;
}

export const defaultButtonState: ButtonPlaygroundState = {
  variant: 'primary',
  size: 'md',
  shape: 'round',
  interaction: 'none',
  disabled: false,
  loading: false,
  fullWidth: false,
};

