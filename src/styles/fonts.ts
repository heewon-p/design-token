/**
 * 🎨 Web Font Definitions
 * 
 * 외부에서 다운받은 폰트 파일을 사용하기 위한 @font-face 정의
 * 
 * 📁 폰트 파일 위치: public/fonts/
 * 
 * 사용 방법:
 * 1. public/fonts/ 폴더에 폰트 파일 (.woff2, .woff) 저장
 * 2. 아래 @font-face에서 경로 확인
 * 3. GlobalStyles에서 fontFaces import하여 적용
 * 
 * 권장 폰트 포맷: woff2 (최신 브라우저 지원, 용량 작음)
 */

export const fontFaces = `
  /* ============================================
     Pretendard - 한글 최적화 폰트
     다운로드: https://github.com/orioncactus/pretendard
     ============================================ */
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Light.woff2') format('woff2'),
         url('/fonts/Pretendard-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Regular.woff2') format('woff2'),
         url('/fonts/Pretendard-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Medium.woff2') format('woff2'),
         url('/fonts/Pretendard-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-SemiBold.woff2') format('woff2'),
         url('/fonts/Pretendard-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-Bold.woff2') format('woff2'),
         url('/fonts/Pretendard-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Pretendard';
    src: url('/fonts/Pretendard-ExtraBold.woff2') format('woff2'),
         url('/fonts/Pretendard-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }

  /* ============================================
     Inter - 영문 전용 폰트
     다운로드: https://github.com/rsms/inter
     ============================================ */
  
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Light.woff2') format('woff2'),
         url('/fonts/Inter-Light.woff') format('woff');
    font-weight: 300;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Regular.woff2') format('woff2'),
         url('/fonts/Inter-Regular.woff') format('woff');
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Medium.woff2') format('woff2'),
         url('/fonts/Inter-Medium.woff') format('woff');
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-SemiBold.woff2') format('woff2'),
         url('/fonts/Inter-SemiBold.woff') format('woff');
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Bold.woff2') format('woff2'),
         url('/fonts/Inter-Bold.woff') format('woff');
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }
  
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-ExtraBold.woff2') format('woff2'),
         url('/fonts/Inter-ExtraBold.woff') format('woff');
    font-weight: 800;
    font-style: normal;
    font-display: swap;
  }
`;

/**
 * 📝 폰트 파일 다운로드 가이드
 * 
 * 1. Pretendard (한글)
 *    - GitHub: https://github.com/orioncactus/pretendard/releases
 *    - 다운로드: Pretendard-X.X.X.zip
 *    - 필요한 파일: woff2 폴더의 Pretendard-*.woff2
 *    - 저장 위치: public/fonts/
 * 
 * 2. Inter (영문)
 *    - GitHub: https://github.com/rsms/inter/releases
 *    - 다운로드: Inter-X.X.zip
 *    - 필요한 파일: web 폴더의 Inter-*.woff2
 *    - 저장 위치: public/fonts/
 * 
 * 3. 폴더 구조 예시:
 *    public/
 *    └── fonts/
 *        ├── Pretendard-Light.woff2
 *        ├── Pretendard-Regular.woff2
 *        ├── Pretendard-Medium.woff2
 *        ├── Pretendard-SemiBold.woff2
 *        ├── Pretendard-Bold.woff2
 *        ├── Pretendard-ExtraBold.woff2
 *        ├── Inter-Light.woff2
 *        ├── Inter-Regular.woff2
 *        ├── Inter-Medium.woff2
 *        ├── Inter-SemiBold.woff2
 *        ├── Inter-Bold.woff2
 *        └── Inter-ExtraBold.woff2
 * 
 * 💡 Tip: woff2 포맷만 사용해도 대부분의 최신 브라우저에서 작동합니다.
 *         woff는 구형 브라우저 지원을 위한 fallback입니다.
 */

export default fontFaces;

