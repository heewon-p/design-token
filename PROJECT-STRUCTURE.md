# 📂 프로젝트 구조 상세 가이드

---

## 🌳 전체 폴더 구조

```
my-app/
├── node_modules/              # 설치된 패키지들
├── public/                    # 정적 파일 (favicon, robots.txt 등)
├── src/                       # 소스 코드 메인 디렉토리
│   ├── features/             # ⭐ 주요 기능 모듈 (도메인별)
│   │   ├── user/
│   │   │   ├── index.ts
│   │   │   ├── User.tsx
│   │   │   ├── User.test.tsx
│   │   │   └── User.styles.ts
│   │   └── auth/
│   │       ├── index.ts
│   │       ├── Auth.tsx
│   │       ├── Auth.test.tsx
│   │       └── Auth.styles.ts
│   │
│   ├── pages/                # 🌐 페이지 컴포넌트
│   │   ├── Home/
│   │   │   ├── index.tsx
│   │   │   └── Home.styles.ts
│   │   ├── Login/
│   │   │   ├── index.tsx
│   │   │   └── Login.styles.ts
│   │   └── Dashboard/
│   │       ├── index.tsx
│   │       └── Dashboard.styles.ts
│   │
│   ├── common/               # 🔧 공통 리소스
│   │   ├── components/       # 재사용 가능한 컴포넌트
│   │   │   ├── Button/
│   │   │   │   ├── index.tsx
│   │   │   │   └── Button.styles.ts
│   │   │   ├── Input/
│   │   │   └── Modal/
│   │   └── constants/        # 상수 정의
│   │       ├── api.ts
│   │       └── routes.ts
│   │
│   ├── layout/               # 🎨 레이아웃 컴포넌트
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── Sidebar.tsx
│   │   └── MainLayout.tsx
│   │
│   ├── store/                # 📦 전역 상태 관리 (Zustand)
│   │   ├── userStore.ts
│   │   ├── authStore.ts
│   │   └── themeStore.ts
│   │
│   ├── hooks/                # 🪝 커스텀 훅
│   │   ├── useAuth.ts
│   │   ├── useUser.ts
│   │   └── useFetch.ts
│   │
│   ├── routes/               # 🛣️ 라우팅 설정
│   │   ├── index.ts
│   │   ├── PrivateRoute.tsx
│   │   └── PublicRoute.tsx
│   │
│   ├── assets/               # 📁 정적 파일
│   │   ├── images/           # 이미지 파일
│   │   │   ├── logo.png
│   │   │   └── banner.jpg
│   │   └── icons/            # 아이콘 파일
│   │       ├── user.svg
│   │       └── home.svg
│   │
│   ├── styles/               # 🎨 스타일 관련
│   │   ├── GlobalStyle.ts    # 전역 스타일
│   │   ├── theme.ts          # 테마 설정
│   │   └── reset.css         # CSS 리셋
│   │
│   ├── types/                # 📝 TypeScript 타입 정의
│   │   ├── api.ts
│   │   ├── user.ts
│   │   └── common.ts
│   │
│   ├── utils/                # 🛠️ 유틸리티 함수
│   │   ├── format.ts         # 포맷 함수
│   │   ├── validation.ts     # 검증 함수
│   │   └── storage.ts        # 로컬스토리지 관리
│   │
│   ├── electron/             # ⚡ Electron 관련 (필요시)
│   │   └── main.ts
│   │
│   ├── App.tsx               # 메인 앱 컴포넌트
│   ├── main.tsx              # 엔트리 포인트
│   ├── Routers.tsx           # 라우터 설정
│   └── vite-env.d.ts         # Vite 타입 정의
│
├── plop-templates/           # 🎯 Plop 템플릿 파일
│   ├── feature/
│   ├── page/
│   ├── hook/
│   ├── store/
│   └── init/
│
├── .gitignore                # Git 무시 파일 목록
├── index.html                # HTML 엔트리
├── package.json              # 프로젝트 설정 및 의존성
├── plopfile.js               # Plop 설정 파일
├── tsconfig.json             # TypeScript 설정
├── vite.config.ts            # Vite 설정
├── SETUP-GUIDE.md            # 상세 설정 가이드
├── QUICK-START.md            # 빠른 시작 가이드
└── README.md                 # 프로젝트 소개
```

---

## 📊 폴더별 역할 및 사용법

### 1. 🌟 features/ - 기능 모듈 (Feature-based Architecture)

**목적:** 도메인/기능별로 관련된 코드를 한 곳에 모아 관리

**구조:**
```
features/
└── user/
    ├── index.ts           # Export 파일
    ├── User.tsx          # 메인 컴포넌트
    ├── User.test.tsx     # 테스트 파일
    └── User.styles.ts    # 스타일 파일
```

**사용 시기:**
- 독립적인 기능 단위 (예: 사용자 관리, 인증, 결제 등)
- 여러 페이지에서 재사용되는 비즈니스 로직

**생성 방법:**
```bash
npm run generate:feature
```

**예시:**
- `user`: 사용자 프로필, 사용자 목록
- `auth`: 로그인, 회원가입, 비밀번호 재설정
- `payment`: 결제 처리, 결제 이력
- `notification`: 알림 시스템

---

### 2. 🌐 pages/ - 페이지 컴포넌트

**목적:** 각 라우트에 매핑되는 페이지 레벨 컴포넌트

**구조:**
```
pages/
└── Home/
    ├── index.tsx         # 페이지 컴포넌트
    └── Home.styles.ts    # 페이지 스타일
```

**사용 시기:**
- URL 경로와 1:1 매핑되는 페이지
- 여러 feature를 조합하여 사용

**생성 방법:**
```bash
npm run generate:page
```

**예시:**
- `Home`: 홈 페이지 (/)
- `Dashboard`: 대시보드 (/dashboard)
- `UserProfile`: 사용자 프로필 (/profile)
- `Settings`: 설정 페이지 (/settings)

**페이지 vs Feature:**
```typescript
// ❌ 잘못된 예
pages/UserList/   // 이건 feature여야 함

// ✅ 올바른 예
features/user/UserList/
pages/UsersPage/  // UserList feature를 사용하는 페이지
```

---

### 3. 🔧 common/ - 공통 리소스

**목적:** 프로젝트 전체에서 공통으로 사용되는 컴포넌트와 상수

#### 3-1. common/components/ - 재사용 컴포넌트

**예시:**
```
common/components/
├── Button/
│   ├── index.tsx
│   ├── Button.styles.ts
│   └── Button.test.tsx
├── Input/
├── Modal/
├── Loading/
└── ErrorBoundary/
```

**특징:**
- UI 중심
- 비즈니스 로직 최소화
- 높은 재사용성

#### 3-2. common/constants/ - 상수

**예시:**
```typescript
// api.ts
export const API_BASE_URL = 'https://api.example.com';
export const API_TIMEOUT = 5000;

// routes.ts
export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
} as const;

// messages.ts
export const ERROR_MESSAGES = {
  NETWORK_ERROR: '네트워크 오류가 발생했습니다.',
  UNAUTHORIZED: '로그인이 필요합니다.',
};
```

---

### 4. 🎨 layout/ - 레이아웃 컴포넌트

**목적:** 페이지의 공통 레이아웃 구조

**예시:**
```typescript
// MainLayout.tsx
import { Header } from './Header';
import { Footer } from './Footer';
import { Sidebar } from './Sidebar';

export const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Sidebar />
      <main>{children}</main>
      <Footer />
    </>
  );
};
```

**사용 예시:**
```typescript
// App.tsx
<MainLayout>
  <Routes>
    <Route path="/" element={<HomePage />} />
  </Routes>
</MainLayout>
```

---

### 5. 📦 store/ - 전역 상태 관리 (Zustand)

**목적:** 전역으로 관리해야 하는 상태

**생성 방법:**
```bash
npm run generate:store
```

**예시:**
```typescript
// userStore.ts
import { create } from 'zustand';

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
  clearUser: () => set({ user: null }),
}));
```

**사용:**
```typescript
// 컴포넌트에서 사용
import { useUserStore } from '@/store/userStore';

const MyComponent = () => {
  const { user, setUser } = useUserStore();
  
  return <div>{user?.name}</div>;
};
```

**언제 Store를 사용할까?**
- ✅ 여러 컴포넌트에서 공유되는 상태
- ✅ 전역으로 관리해야 하는 사용자 정보, 인증 상태
- ✅ 테마, 언어 설정 등
- ❌ 단일 컴포넌트 내부 상태 (useState 사용)
- ❌ 서버 데이터 (React Query 사용)

---

### 6. 🪝 hooks/ - 커스텀 훅

**목적:** 재사용 가능한 로직 캡슐화

**생성 방법:**
```bash
npm run generate:hook
```

**예시:**
```typescript
// useAuth.ts
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  
  const login = async (credentials) => {
    // 로그인 로직
  };
  
  const logout = () => {
    // 로그아웃 로직
  };
  
  return { isAuthenticated, login, logout };
};
```

**Hook 종류:**
- **데이터 Fetch**: `useFetchUser`, `useProducts`
- **비즈니스 로직**: `useAuth`, `useCart`
- **UI 상태**: `useModal`, `useToast`
- **유틸리티**: `useDebounce`, `useLocalStorage`

---

### 7. 🛣️ routes/ - 라우팅 설정

**예시:**
```typescript
// PrivateRoute.tsx
export const PrivateRoute: React.FC = ({ children }) => {
  const { isAuthenticated } = useAuth();
  
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  
  return children;
};
```

**사용:**
```typescript
// Routers.tsx
<Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/login" element={<LoginPage />} />
  <Route
    path="/dashboard"
    element={
      <PrivateRoute>
        <DashboardPage />
      </PrivateRoute>
    }
  />
</Routes>
```

---

### 8. 📁 assets/ - 정적 파일

**구조:**
```
assets/
├── images/
│   ├── logo.png          # 로고
│   ├── banner.jpg        # 배너 이미지
│   └── avatar/           # 사용자 아바타
├── icons/
│   ├── home.svg          # 홈 아이콘
│   └── user.svg          # 사용자 아이콘
└── fonts/                # 커스텀 폰트 (필요시)
```

**사용:**
```typescript
import logo from '@/assets/images/logo.png';
import HomeIcon from '@/assets/icons/home.svg';

<img src={logo} alt="Logo" />
<HomeIcon />
```

---

### 9. 🎨 styles/ - 스타일 관련

**예시:**
```typescript
// GlobalStyle.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
    background-color: ${(props) => props.theme.colors.background};
  }
`;

// theme.ts
export const theme = {
  colors: {
    primary: '#007bff',
    secondary: '#6c757d',
    background: '#ffffff',
    text: '#212529',
  },
  spacing: {
    xs: '4px',
    sm: '8px',
    md: '16px',
    lg: '24px',
    xl: '32px',
  },
};
```

---

### 10. 📝 types/ - TypeScript 타입

**예시:**
```typescript
// user.ts
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

// api.ts
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

// common.ts
export type Status = 'idle' | 'loading' | 'success' | 'error';
```

---

### 11. 🛠️ utils/ - 유틸리티 함수

**예시:**
```typescript
// format.ts
export const formatDate = (date: Date): string => {
  return new Intl.DateTimeFormat('ko-KR').format(date);
};

export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('ko-KR', {
    style: 'currency',
    currency: 'KRW',
  }).format(amount);
};

// validation.ts
export const isValidEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

// storage.ts
export const storage = {
  get: (key: string) => localStorage.getItem(key),
  set: (key: string, value: string) => localStorage.setItem(key, value),
  remove: (key: string) => localStorage.removeItem(key),
};
```

---

## 🎯 실전 워크플로우

### 시나리오: "사용자 관리 기능" 추가하기

#### 1단계: 타입 정의
```bash
# types/user.ts 수동 생성
```

#### 2단계: Store 생성
```bash
npm run generate:store
# 입력: user
```

#### 3단계: API Hook 생성
```bash
npm run generate:hook
# 입력: User
```

#### 4단계: Feature 생성
```bash
npm run generate:feature
# 입력: user
```

#### 5단계: Page 생성
```bash
npm run generate:page
# 입력: UserManagement
```

#### 6단계: 라우트 연결
```typescript
// Routers.tsx에 추가
<Route path="/users" element={<UserManagementPage />} />
```

---

## 📏 베스트 프랙티스

### ✅ DO (해야 할 것)

1. **기능별로 폴더 구조화**
   ```
   features/user/
   ├── components/      # Feature 내부 컴포넌트
   ├── hooks/          # Feature 전용 훅
   ├── types/          # Feature 전용 타입
   └── index.ts        # Public API
   ```

2. **명확한 네이밍**
   - 컴포넌트: `PascalCase` (UserProfile.tsx)
   - 훅: `camelCase`, use 접두사 (useAuth.ts)
   - 유틸: `camelCase` (formatDate.ts)
   - 상수: `UPPER_SNAKE_CASE` (API_URL)

3. **index.ts로 Export 관리**
   ```typescript
   // features/user/index.ts
   export { User } from './User';
   export { UserList } from './UserList';
   export type { UserProps } from './types';
   ```

### ❌ DON'T (하지 말아야 할 것)

1. **너무 깊은 폴더 구조**
   ```
   ❌ src/features/user/components/forms/inputs/text/...
   ✅ src/features/user/components/TextInput.tsx
   ```

2. **기능과 무관한 파일 혼재**
   ```
   ❌ features/user/SomeRandomComponent.tsx
   ✅ common/components/SomeRandomComponent.tsx
   ```

3. **순환 의존성**
   ```
   ❌ features/user 에서 features/auth import
      features/auth 에서 features/user import
   ✅ 공통 로직은 common/ 이나 hooks/로 분리
   ```

---

## 🔄 Import 경로 설정

**tsconfig.json에 Path Alias 추가:**
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"],
      "@/components/*": ["src/common/components/*"],
      "@/features/*": ["src/features/*"],
      "@/hooks/*": ["src/hooks/*"],
      "@/store/*": ["src/store/*"],
      "@/types/*": ["src/types/*"],
      "@/utils/*": ["src/utils/*"]
    }
  }
}
```

**vite.config.ts에도 추가:**
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
```

**사용 예시:**
```typescript
// ❌ 상대 경로 (복잡함)
import { Button } from '../../../common/components/Button';

// ✅ Alias 사용 (깔끔함)
import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';
import { User } from '@/features/user';
```

---

## 📚 추가 리소스

- [SETUP-GUIDE.md](./SETUP-GUIDE.md) - 자세한 설정 가이드
- [QUICK-START.md](./QUICK-START.md) - 빠른 시작 가이드

---

**이제 체계적인 프로젝트 구조를 유지하며 개발하세요! 🎉**

