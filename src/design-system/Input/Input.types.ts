/**
 * 📝 Input Types (Headless Architecture)
 */

export type InputSize = 'sm' | 'md' | 'lg';
export type InputState = 'default' | 'error' | 'disabled' | 'readOnly';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'prefix'> {
  /**
   * Input 크기
   */
  size?: InputSize;
  
  /**
   * 에러 상태
   */
  error?: boolean;
  
  /**
   * 에러 메시지
   */
  errorMessage?: string;
  
  /**
   * Helper text
   */
  helperText?: string;
  
  /**
   * Label
   */
  label?: string;
  
  /**
   * Prefix 아이콘
   */
  prefix?: React.ReactNode;
  
  /**
   * Suffix 아이콘
   */
  suffix?: React.ReactNode;
  
  /**
   * 전체 너비
   */
  fullWidth?: boolean;
}

