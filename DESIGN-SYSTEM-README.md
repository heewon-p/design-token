# 🎨 Design System Playground

> **10년차 시니어가 설계한 Token-First Design System**

디자인 기획 단계에서 사용할 수 있는 UI Design System Playground입니다.
버튼, 컬러, 폰트, 애니메이션, 입력창 등 공통 UI 요소를 **선택 가능한 옵션** 형태로 제공합니다.

---

## ✨ 핵심 특징

### 🎯 Token-First Architecture

- 모든 스타일은 토큰에서 시작
- 디자인 변경 시 tokens/ 파일 1개만 수정
- 일관된 디자인 언어 자동 유지

### 🎭 Behavior-Style Separation

- 로직과 스타일 완전 분리
- 스타일 변경이 로직에 영향 없음
- 테스트하기 쉬운 구조

### 📋 Props as Contract

- Props = 디자이너와 개발자 간 계약서
- 정확히 정의된 옵션만 허용
- 오용 가능성 제로

### 🎮 Interactive Playground

- 실시간 미리보기
- Props 코드 자동 생성
- 살아있는 문서

---

## 🚀 Quick Start

### 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

### 브라우저에서 확인

```
http://localhost:5173
```

---

## 📁 프로젝트 구조

```
src/
├── tokens/                  # 🎯 Design Tokens (단일 진실 공급원)
│   ├── colors.ts           # 컬러 토큰
│   ├── typography.ts       # 타이포그래피 토큰
│   ├── spacing.ts          # 간격 토큰
│   ├── motion.ts           # 애니메이션 토큰
│   ├── shadows.ts          # 그림자 토큰
│   ├── radii.ts            # 모서리 토큰
│   └── index.ts            # 통합 export
│
├── design-system/          # 🧩 실제 컴포넌트
│   ├── Button/
│   │   ├── Button.tsx      # 로직 (headless)
│   │   ├── Button.styles.ts # 스타일 매핑
│   │   └── Button.types.ts # Props 정의
│   ├── Input/              # Headless Input
│   └── Text/
│
├── playground/             # 🎮 Playground 페이지
│   ├── common/             # 공통 컴포넌트
│   │   ├── PlaygroundLayout.tsx
│   │   ├── OptionPanel.tsx
│   │   ├── PreviewPanel.tsx
│   │   └── OptionGroup.tsx
│   ├── ButtonPlayground/
│   ├── ColorPlayground/
│   ├── TypographyPlayground/
│   ├── MotionPlayground/
│   └── InputPlayground/
│
├── layout/
│   ├── Navigation.tsx      # 좌측 네비게이션
│   └── MainLayout.tsx
│
└── pages/
    └── HomePage.tsx        # 랜딩 페이지
```

---

## 🎮 Playground 목록

### 1. 🔘 Button Playground

- **옵션:** Variant (primary, secondary, danger), Size (sm, md, lg), Shape (sharp, round, pill), Interaction (hover-scale, hover-glow 등)
- **특징:** 로직과 스타일 완전 분리

### 2. 🎨 Color Playground

- **옵션:** Semantic Colors (primary, danger 등), Gray Scale (50-900)
- **특징:** 토큰 기반, hex 직접 수정 불가

### 3. 📝 Typography Playground

- **옵션:** Font Size (xs~2xl), Weight (regular, medium, bold), Line Height (tight~loose)
- **특징:** 타이포 토큰 구조 제공

### 4. 🎬 Motion Playground

- **옵션:** Duration (fast, normal, slow), Easing (linear, easeIn, easeOut 등), Animation (fade, scale, slide)
- **특징:** 실시간 애니메이션 체험

### 5. ✏️ Input Playground

- **옵션:** Size, State (default, error, disabled), Prefix/Suffix Icon
- **특징:** Headless 구조로 설계

---

## 💻 사용 예시

### Button 사용

```typescript
import { Button } from "@/design-system/Button";

<Button variant="primary" size="lg" shape="pill" interaction="hover-scale">
  Click Me
</Button>;
```

### Input 사용

```typescript
import { Input } from "@/design-system/Input";

<Input
  label="Email"
  error={hasError}
  errorMessage="Invalid email"
  prefix="📧"
  helperText="Enter your email"
/>;
```

### Token 사용

```typescript
import { tokens } from "@/tokens";

const StyledDiv = styled.div`
  background: ${tokens.colors.primary[500]};
  padding: ${tokens.spacing.md};
  border-radius: ${tokens.radii.lg};
  box-shadow: ${tokens.shadows.md};
`;
```

---

## 🎯 핵심 원칙

### 1. 토큰 기반 디자인

```typescript
// ❌ Bad
background: "#3B82F6";

// ✅ Good
background: tokens.colors.primary[500];
```

### 2. Props로 소통

```typescript
// ❌ Bad (디자이너 → 개발자)
"파란색 큰 버튼 만들어주세요"

// ✅ Good
<Button variant="primary" size="lg" />
```

### 3. 제약 기반 선택

```typescript
// ❌ Bad: 자유로운 커스터마이징
<Button style={{ background: '#FF5733' }} />

// ✅ Good: 허용된 옵션만
<Button variant="danger" />
```

---

## 📊 성능 지표

### 디자인 변경 시

- **Before:** 20-30개 파일 수정, 2-3시간
- **After:** 1-2개 파일 수정, 5-10분 ⚡

### 새 컴포넌트 추가 시

- **Before:** 1-2시간, 일관성 낮음
- **After:** 30-40분, 일관성 높음 ⚡

### 디자이너-개발자 소통

- **Before:** 복잡한 설명, 오해 가능성
- **After:** Props 코드 공유, 명확함 ⚡

---

## 📚 문서

- **[아키텍처 설계](./DESIGN-SYSTEM-ARCHITECTURE.md)** - 전체 구조 및 핵심 개념
- **[사용 가이드](./DESIGN-SYSTEM-GUIDE.md)** - 팀 규칙 및 확장 방법

---

## 🛠️ 기술 스택

- **React** 19 + **TypeScript**
- **styled-components** - CSS-in-JS
- **Vite** - 빠른 개발 환경
- **Token-First Architecture** - 디자인 시스템 패턴

---

## 🎓 학습 리소스

### 이 프로젝트에서 배울 수 있는 것

1. **Token-First 디자인 시스템 구축**
2. **Behavior-Style Separation 패턴**
3. **Headless Component 설계**
4. **Props as API 개념**
5. **일관된 디자인 언어 유지**

---

## 🚦 다음 단계

### Phase 2 계획

- [ ] Card, Modal, Tooltip, Badge 추가
- [ ] Light/Dark Mode 테마 지원
- [ ] Figma Plugin 연동
- [ ] Storybook 통합

---

## 💡 철학

> **"자유가 아닌, 제약이 일관성을 만든다"**

> **"Props는 디자이너와 개발자가 사용하는 공통 언어다"**

> **"Playground는 살아있는 문서이자 진실의 유일한 공급원이다"**

---

## 🤝 기여

이 프로젝트는 **10년차 시니어 프론트엔드 개발자의 실전 경험**을 바탕으로 설계되었습니다.

---

## 📝 라이선스

MIT License

---

**Made with ❤️ and 10 years of Frontend Experience**

🎨 Design System Playground - Where Designers and Developers Speak the Same Language
