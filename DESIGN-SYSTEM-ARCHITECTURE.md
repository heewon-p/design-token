# 🎨 Design System Playground Architecture

## 핵심 철학

### ❌ 자유로운 커스터마이징

- 임의의 hex 값 입력
- 픽셀 단위 조정
- 인라인 스타일 작성

### ✅ 제약 기반 선택

- 사전 정의된 토큰만 사용
- 의미 기반 네이밍 (primary, danger, soft)
- 컴포넌트 props와 1:1 매핑

---

## 📁 폴더 구조

```
src/
├── tokens/                          # 🎯 Design Tokens (단일 진실 공급원)
│   ├── colors.ts                   # 컬러 토큰
│   ├── typography.ts               # 타이포그래피 토큰
│   ├── spacing.ts                  # 간격 토큰
│   ├── interaction.ts                   # 애니메이션 토큰
│   ├── shadows.ts                  # 그림자 토큰
│   └── index.ts                    # 통합 export
│
├── design-system/                   # 🧩 실제 컴포넌트 (재사용)
│   ├── Button/
│   │   ├── Button.tsx              # 컴포넌트 로직 (headless 개념)
│   │   ├── Button.styles.ts        # 스타일 매핑 (토큰 기반)
│   │   ├── Button.types.ts         # Props 타입 정의
│   │   └── index.ts
│   │
│   ├── Input/
│   │   ├── Input.tsx               # Headless Input
│   │   ├── Input.styles.ts
│   │   ├── Input.types.ts
│   │   └── index.ts
│   │
│   ├── Text/
│   │   ├── Text.tsx
│   │   ├── Text.styles.ts
│   │   └── index.ts
│   │
│   └── Card/
│       ├── Card.tsx
│       ├── Card.styles.ts
│       └── index.ts
│
├── playground/                      # 🎮 Playground 페이지
│   ├── common/                     # 공통 Playground 컴포넌트
│   │   ├── PlaygroundLayout.tsx   # 좌우 분할 레이아웃
│   │   ├── OptionPanel.tsx        # 왼쪽 옵션 선택 패널
│   │   ├── PreviewPanel.tsx       # 오른쪽 미리보기 영역
│   │   ├── OptionGroup.tsx        # 옵션 그룹 (Radio/Select)
│   │   └── CodePreview.tsx        # Props 코드 미리보기
│   │
│   ├── ButtonPlayground/
│   │   ├── index.tsx
│   │   └── buttonOptions.ts       # Button 옵션 정의
│   │
│   ├── ColorPlayground/
│   │   ├── index.tsx
│   │   ├── ColorPalette.tsx
│   │   └── ColorExample.tsx
│   │
│   ├── TypographyPlayground/
│   │   ├── index.tsx
│   │   └── TypographyPreview.tsx
│   │
│   ├── interactionPlayground/
│   │   ├── index.tsx
│   │   └── interactionDemo.tsx
│   │
│   └── InputPlayground/
│       ├── index.tsx
│       └── inputOptions.ts
│
├── pages/                           # 📄 라우팅 페이지
│   ├── HomePage.tsx                # 랜딩 페이지
│   └── PlaygroundPage.tsx          # Playground 통합
│
├── layout/
│   ├── MainLayout.tsx              # 전체 레이아웃
│   └── Navigation.tsx              # 좌측 네비게이션
│
├── hooks/
│   ├── usePlaygroundState.ts      # Playground 상태 관리
│   └── useTokenPreview.ts         # 토큰 미리보기
│
├── utils/
│   ├── tokenMapper.ts             # 토큰 → 스타일 변환
│   └── propsGenerator.ts          # Props 코드 생성
│
└── App.tsx
```

---

## 🧠 핵심 설계 개념

### 1. Token-First Architecture

**모든 스타일은 토큰에서 시작**

```typescript
// ❌ Bad: 직접 값 사용
const Button = styled.button`
  background: #3b82f6;
  padding: 8px 16px;
`;

// ✅ Good: 토큰 사용
const Button = styled.button`
  background: ${tokens.colors.primary[500]};
  padding: ${tokens.spacing.sm} ${tokens.spacing.md};
`;
```

### 2. Behavior-Style Separation

**로직과 스타일 완전 분리**

```typescript
// Button.tsx - 로직만
export const Button = ({ variant, size, onClick }) => {
  const styles = getButtonStyles(variant, size);
  return <StyledButton $styles={styles} onClick={onClick} />;
};

// Button.styles.ts - 스타일만
export const styleMap = {
  variant: {
    primary: { bg: colors.primary, color: colors.white },
    danger: { bg: colors.danger, color: colors.white },
  },
  size: {
    sm: { padding: spacing.sm, fontSize: typography.sm },
    md: { padding: spacing.md, fontSize: typography.md },
  },
};
```

### 3. Props as Contract

**Props = 디자이너와 개발자 간 계약서**

```typescript
// Button.types.ts
export interface ButtonProps {
  variant: "primary" | "secondary" | "danger"; // 정확히 3개만
  size: "sm" | "md" | "lg"; // 정확히 3개만
  shape: "sharp" | "round" | "pill"; // 정확히 3개만
  // ❌ color?: string  (자유 입력 불가)
}
```

### 4. Playground as Documentation

**Playground = 살아있는 문서**

```typescript
// 디자이너: "primary 버튼 어떻게 생겼어?"
// → Playground에서 primary 선택하면 바로 확인

// 개발자: "이 버튼 props 뭐야?"
// → Playground가 코드 자동 생성
// <Button variant="primary" size="md" shape="pill" />
```

---

## 🎯 데이터 플로우

```
Design Tokens (tokens/)
    ↓
Style Maps (*.styles.ts)
    ↓
Components (design-system/)
    ↓
Playground Options (playground/*/options.ts)
    ↓
User Selection
    ↓
Real-time Preview
```

---

## 🔑 핵심 컴포넌트 구조

### PlaygroundLayout (공통)

```typescript
<PlaygroundLayout>
  <OptionPanel>
    <OptionGroup label="Variant">
      <Radio value="primary" />
      <Radio value="secondary" />
    </OptionGroup>
  </OptionPanel>

  <PreviewPanel>
    <Button {...selectedOptions} />
    <CodePreview code={generatePropsCode(selectedOptions)} />
  </PreviewPanel>
</PlaygroundLayout>
```

### OptionPanel 구조

```typescript
- Section: "Appearance"
  - OptionGroup: "Variant"
    - Radio: primary / secondary / danger
  - OptionGroup: "Size"
    - Radio: sm / md / lg

- Section: "Behavior"
  - OptionGroup: "Interaction"
    - Select: none / hover-scale / hover-glow
  - Toggle: disabled
  - Toggle: loading
```

---

## 🎨 스타일 매핑 전략

### Object-based Style Mapping

```typescript
// Button.styles.ts
export const variantStyles = {
  primary: {
    background: tokens.colors.primary[500],
    color: tokens.colors.white,
    border: "none",
    "&:hover": {
      background: tokens.colors.primary[600],
    },
  },
  danger: {
    background: tokens.colors.danger[500],
    color: tokens.colors.white,
    border: "none",
    "&:hover": {
      background: tokens.colors.danger[600],
    },
  },
};

// 사용
const StyledButton = styled.button<{ $variant: Variant }>`
  ${(props) => variantStyles[props.$variant]}
`;
```

---

## 🚀 확장 시나리오

### 새로운 Playground 추가

1. **토큰 정의** (`tokens/`)
2. **컴포넌트 구현** (`design-system/`)
3. **옵션 정의** (`playground/*/options.ts`)
4. **Playground 페이지** (`playground/*/index.tsx`)
5. **네비게이션 추가**

---

## 📊 성공 지표

### 디자인 변경 시

```
❌ Before: 모든 컴포넌트 파일 수정
✅ After: tokens/ 파일 1개만 수정
```

### 새 컴포넌트 추가 시

```
❌ Before: 스타일 처음부터 작성
✅ After: 토큰 조합으로 5분 완성
```

### 디자이너-개발자 소통

```
❌ Before: "이 버튼 코드 어떻게 써?"
✅ After: "Playground에서 primary-md-pill 선택했어"
```

---

이 구조를 기반으로 이제 구현을 시작하겠습니다! 🎉
