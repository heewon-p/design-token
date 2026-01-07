# 🚀 My App - React + TypeScript 프로젝트

자동화된 폴더/파일 생성 시스템이 구축된 React + TypeScript 프로젝트입니다.

---

## ✨ 특징

- ⚡ **Vite** - 빠른 개발 환경
- ⚛️ **React 19** - 최신 React
- 📘 **TypeScript** - 타입 안정성
- 🎨 **styled-components** - CSS-in-JS 스타일링
- 📦 **Zustand** - 간단한 전역 상태 관리
- 🔄 **TanStack Query** - 서버 상태 관리
- 🌐 **Axios** - HTTP 클라이언트
- 🎯 **Plop** - 자동 파일/폴더 생성

---

## 📚 문서

### 🚀 [빠른 시작 가이드](./QUICK-START.md)
- 5분 만에 프로젝트 설정하기
- 필수 명령어 체크리스트
- 빠른 참조 가이드

### 📖 [상세 설정 가이드](./SETUP-GUIDE.md)
- 처음부터 끝까지 자세한 설명
- 초보자도 따라할 수 있는 단계별 가이드
- 문제 해결 방법
- 실전 예제

### 📂 [프로젝트 구조 가이드](./PROJECT-STRUCTURE.md)
- 전체 폴더 구조 설명
- 각 폴더의 역할과 사용법
- 베스트 프랙티스
- 실전 워크플로우

---

## 🎯 빠른 시작

### 1. 의존성 설치
```bash
npm install
```

### 2. 폴더 구조 초기화
```bash
npm run init:structure
```

### 3. 개발 서버 실행
```bash
npm run dev
```

---

## 💻 사용 가능한 명령어

### 개발 관련
```bash
npm run dev          # 개발 서버 시작
npm run build        # 프로덕션 빌드
npm run preview      # 빌드 결과 미리보기
```

### 자동 생성 (Plop)
```bash
npm run generate              # 대화형 메뉴
npm run generate:feature      # Feature 생성
npm run generate:page         # Page 생성
npm run generate:hook         # Hook 생성
npm run generate:store        # Store 생성
npm run init:structure        # 프로젝트 구조 초기화
```

---

## 📁 프로젝트 구조

```
src/
├── features/         # 주요 기능 모듈
├── pages/           # 페이지 컴포넌트
├── common/          # 공통 컴포넌트 & 상수
│   ├── components/
│   └── constants/
├── layout/          # 레이아웃 컴포넌트
├── store/           # Zustand 상태 관리
├── hooks/           # 커스텀 훅
├── routes/          # 라우팅 설정
├── assets/          # 정적 파일
│   ├── images/
│   └── icons/
├── styles/          # 전역 스타일
├── types/           # TypeScript 타입
├── utils/           # 유틸리티 함수
└── Routers.tsx      # 라우터 설정
```

자세한 내용은 [프로젝트 구조 가이드](./PROJECT-STRUCTURE.md)를 참고하세요.

---

## 🎨 자동 생성 예시

### Feature 생성
```bash
npm run generate:feature
# 입력: user
```

**생성 결과:**
```
src/features/user/
├── index.ts
├── User.tsx
├── User.test.tsx
└── User.styles.ts
```

### Page 생성
```bash
npm run generate:page
# 입력: Home
```

**생성 결과:**
```
src/pages/Home/
├── index.tsx
└── Home.styles.ts
```

### Hook 생성
```bash
npm run generate:hook
# 입력: Counter
```

**생성 결과:**
```
src/hooks/useCounter.ts
```

### Store 생성
```bash
npm run generate:store
# 입력: auth
```

**생성 결과:**
```
src/store/authStore.ts
```

---

## 🛠️ 기술 스택

| 카테고리 | 기술 |
|---------|------|
| **프레임워크** | React 19 |
| **언어** | TypeScript |
| **빌드 도구** | Vite |
| **상태 관리** | Zustand, TanStack Query |
| **스타일링** | styled-components |
| **HTTP 클라이언트** | Axios |
| **코드 생성** | Plop |

---

## 📖 주요 개념

### Feature-based Architecture
기능별로 관련 코드를 한 곳에 모아 관리하는 구조입니다.

```typescript
// ✅ 좋은 예: 관련 코드를 함께 관리
features/user/
├── User.tsx          // 컴포넌트
├── User.test.tsx     // 테스트
├── User.styles.ts    // 스타일
└── index.ts          // Export

// ❌ 나쁜 예: 파일 타입별로 분산
components/User.tsx
tests/User.test.tsx
styles/User.styles.ts
```

### 폴더 역할 구분

- **features/** - 비즈니스 로직과 기능
- **pages/** - 라우트와 매핑되는 페이지
- **common/** - 재사용 가능한 UI 컴포넌트
- **hooks/** - 공통 로직
- **store/** - 전역 상태
- **utils/** - 순수 함수

자세한 내용은 [프로젝트 구조 가이드](./PROJECT-STRUCTURE.md)를 참고하세요.

---

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다.

---

## 🔗 관련 링크

- [Vite 문서](https://vitejs.dev/)
- [React 문서](https://react.dev/)
- [TypeScript 문서](https://www.typescriptlang.org/)
- [Zustand 문서](https://zustand-demo.pmnd.rs/)
- [TanStack Query 문서](https://tanstack.com/query/latest)
- [styled-components 문서](https://styled-components.com/)
- [Plop 문서](https://plopjs.com/)

---

## 🆘 도움이 필요하신가요?

- 📖 [빠른 시작 가이드](./QUICK-START.md) - 간단한 참고 자료
- 📚 [상세 설정 가이드](./SETUP-GUIDE.md) - 자세한 설명과 문제 해결
- 🏗️ [프로젝트 구조 가이드](./PROJECT-STRUCTURE.md) - 구조와 베스트 프랙티스

---

**즐거운 코딩 되세요! 🎉**
