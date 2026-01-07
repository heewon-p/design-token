/**
 * 🎯 Button Types
 * 
 * Props = 디자이너와 개발자 간 계약서
 * 정확히 정의된 옵션만 허용
 */

import { InteractionType } from '@/tokens';

export type ButtonVariant = 'primary' | 'secondary' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonShape = 'sharp' | 'round' | 'pill';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * 버튼의 의미적 역할
   * @default 'primary'
   */
  variant?: ButtonVariant;
  
  /**
   * 버튼의 크기
   * @default 'md'
   */
  size?: ButtonSize;
  
  /**
   * 버튼의 모서리 스타일
   * @default 'round'
   */
  shape?: ButtonShape;
  
  /**
   * 인터랙션 애니메이션
   * @default 'none'
   */
  interaction?: InteractionType;
  
  /**
   * 비활성화 상태
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 로딩 상태
   * @default false
   */
  loading?: boolean;
  
  /**
   * 전체 너비
   * @default false
   */
  fullWidth?: boolean;
  
  /**
   * 버튼 내용
   */
  children: React.ReactNode;
  
  /**
   * 클릭 핸들러
   */
  onClick?: () => void;
}

