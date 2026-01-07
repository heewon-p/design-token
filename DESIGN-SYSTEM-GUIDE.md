# 🎨 Design System Playground - 설계 및 사용 가이드

> **10년차 시니어 프론트엔드 개발자가 설계한 Token-First Design System**

---

## 📌 프로젝트 개요

### 목표

디자인 기획 단계에서 사용할 수 있는 "UI Design System Playground" 웹사이트를 구축하여, 버튼, 컬러, 폰트, 애니메이션, 입력창 등 공통 UI 요소를 **선택 가능한 옵션** 형태로 제공합니다.

### 핵심 철학

#### ❌ 자유로운 커스터마이징

- 임의의 hex 값 입력
- 픽셀 단위 조정
- 인라인 스타일 작성

#### ✅ 제약 기반 선택

- 사전 정의된 토큰만 사용
- 의미 기반 네이밍 (primary, danger, soft)
- **컴포넌트 props와 1:1 매핑**

---

## 🏗️ 아키텍처 설계

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

**장점:**

- 디자인 변경 시 `tokens/` 파일만 수정
- 일관된 디자인 언어 유지
- 디자이너-개발자 소통 단순화

---

### 2. Behavior-Style Separation

**로직과 스타일 완전 분리**

```typescript
// Button.tsx - 로직만
export const Button = ({ variant, size, onClick }) => {
  const styles = getButtonStyles(variant, size);
  return <StyledButton $styles={styles} onClick={onClick} />;
};

// Button.styles.ts - 스타일만
export const variantStyles = {
  primary: {
    bg: colors.primary[500],
    color: colors.white,
  },
  danger: {
    bg: colors.danger[500],
    color: colors.white,
  },
};
```

**장점:**

- 스타일 변경이 로직에 영향 없음
- 테스트하기 쉬움
- 새로운 variant 추가가 간단함

---

### 3. Props as Contract

**Props = 디자이너와 개발자 간 계약서**

```typescript
export interface ButtonProps {
  variant: "primary" | "secondary" | "danger"; // 정확히 3개만
  size: "sm" | "md" | "lg"; // 정확히 3개만
  shape: "sharp" | "round" | "pill"; // 정확히 3개만
  // ❌ color?: string  (자유 입력 불가)
}
```

**장점:**

- 디자이너: "이 옵션들만 사용 가능해요"
- 개발자: "이 props만 전달하면 됩니다"
- 오용 가능성 제로

---

### 4. Headless Component Pattern (Input)

**스타일과 로직이 철저히 분리된 Input**

```typescript
// Input.tsx - 로직과 구조
export const Input = ({ size, error, label, prefix, suffix }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputWrapper $error={error}>
        {prefix && <Icon>{prefix}</Icon>}
        <StyledInput onFocus={() => setIsFocused(true)} />
        {suffix && <Icon>{suffix}</Icon>}
      </InputWrapper>
    </Container>
  );
};

// Input.styles.ts - 스타일만
export const sizeStyles: Record<InputSize, any> = {
  sm: { height: "32px", padding: "4px 8px" },
  md: { height: "40px", padding: "8px 16px" },
  lg: { height: "48px", padding: "16px 24px" },
};
```

**장점:**

- 스타일 완전 교체 가능
- 테스트 시 로직만 테스트
- 디자인 시스템 마이그레이션 용이

---

## 🎯 디자인 변경에 대한 강인함

### 시나리오 1: Primary 컬러 변경

**변경 전:**

```typescript
// tokens/colors.ts
primary: {
  500: '#3B82F6',  // 파랑
}
```

**변경 후:**

```typescript
primary: {
  500: '#10B981',  // 초록
}
```

**영향:**

- 수정 파일: `tokens/colors.ts` **1개**
- 영향받는 컴포넌트: Button, Input 등 **자동 반영**
- 작업 시간: **10초**

---

### 시나리오 2: Button Size 변경

**변경 전:**

```typescript
// Button.styles.ts
md: {
  padding: `${tokens.spacing.sm} ${tokens.spacing.md}`,
  fontSize: tokens.typography.fontSize.md,
  height: '40px',
}
```

**변경 후:**

```typescript
md: {
  padding: `${tokens.spacing.md} ${tokens.spacing.lg}`,
  fontSize: tokens.typography.fontSize.lg,
  height: '48px',
}
```

**영향:**

- 수정 파일: `Button.styles.ts` **1개**
- 영향받는 컴포넌트: Button만
- 작업 시간: **30초**

---

### 시나리오 3: 새로운 Variant 추가

**요구사항:** "info" variant 추가

```typescript
// 1. tokens/colors.ts에 info 색상 추가
info: {
  500: '#0EA5E9',
  // ...
}

// 2. Button.types.ts에 타입 추가
export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'info';

// 3. Button.styles.ts에 스타일 맵 추가
export const variantStyles = {
  // ... 기존 variant들
  info: {
    background: tokens.colors.info[500],
    color: tokens.colors.white,
    // ...
  },
};

// 4. ButtonPlayground/buttonOptions.ts에 옵션 추가
export const variantOptions = [
  // ... 기존 옵션들
  { value: 'info', label: 'Info', description: '정보 전달' },
];
```

**영향:**

- 수정 파일: **4개**
- 작업 시간: **5분**
- 컴포넌트 로직 변경: **0개**

---

## 📚 공통 컴포넌트 확장 가이드

### 새로운 Playground 추가 (예: Card Playground)

#### 1단계: 토큰 정의 (필요시)

```typescript
// tokens/shadows.ts에 카드용 shadow 추가 (이미 있음)
```

#### 2단계: 컴포넌트 구현

```typescript
// design-system/Card/Card.types.ts
export type CardVariant = "elevated" | "outlined" | "filled";
export type CardSize = "sm" | "md" | "lg";

export interface CardProps {
  variant?: CardVariant;
  size?: CardSize;
  children: React.ReactNode;
}

// design-system/Card/Card.styles.ts
export const variantStyles: Record<CardVariant, any> = {
  elevated: {
    background: tokens.colors.white,
    boxShadow: tokens.shadows.lg,
    border: "none",
  },
  outlined: {
    background: tokens.colors.white,
    boxShadow: "none",
    border: `1px solid ${tokens.semanticColors.border.default}`,
  },
  filled: {
    background: tokens.semanticColors.bg.secondary,
    boxShadow: "none",
    border: "none",
  },
};

// design-system/Card/Card.tsx
export const Card: React.FC<CardProps> = ({
  variant = "elevated",
  size = "md",
  children,
}) => {
  return (
    <StyledCard $variant={variant} $size={size}>
      {children}
    </StyledCard>
  );
};
```

#### 3단계: Playground 옵션 정의

```typescript
// playground/CardPlayground/cardOptions.ts
export const variantOptions = [
  { value: "elevated", label: "Elevated", description: "그림자 있는 카드" },
  { value: "outlined", label: "Outlined", description: "테두리 카드" },
  { value: "filled", label: "Filled", description: "배경색 카드" },
];

export const sizeOptions = [
  { value: "sm", label: "Small" },
  { value: "md", label: "Medium" },
  { value: "lg", label: "Large" },
];
```

#### 4단계: Playground 페이지

```typescript
// playground/CardPlayground/index.tsx
export const CardPlayground: React.FC = () => {
  const [variant, setVariant] = useState<CardVariant>("elevated");
  const [size, setSize] = useState<CardSize>("md");

  return (
    <PlaygroundLayout>
      <OptionPanel title="Card Options">
        <Section title="Variant">
          <OptionGroup label="Variant">
            {variantOptions.map((option) => (
              <RadioOption
                key={option.value}
                label={option.label}
                value={option.value}
                checked={variant === option.value}
                onChange={(value) => setVariant(value as CardVariant)}
                description={option.description}
              />
            ))}
          </OptionGroup>
        </Section>
        {/* Size 옵션도 동일하게 추가 */}
      </OptionPanel>

      <PreviewPanel>
        <Card variant={variant} size={size}>
          <h3>Card Title</h3>
          <p>Card content goes here...</p>
        </Card>
        <CodePreview componentName="Card" props={{ variant, size }} />
      </PreviewPanel>
    </PlaygroundLayout>
  );
};
```

#### 5단계: 라우팅 추가

```typescript
// layout/Navigation.tsx
const navItems = [
  // ... 기존 항목들
  { path: "/card", label: "Card", icon: "🃏" },
];

// App.tsx
const renderPage = () => {
  switch (currentPath) {
    // ... 기존 case들
    case "/card":
      return <CardPlayground />;
    // ...
  }
};
```

**소요 시간:** 약 30-40분

---

## 🎓 팀 규칙 가이드

### 디자이너를 위한 가이드

#### 1. 토큰 기반 디자인

```
✅ "primary-500 색상 사용"
❌ "#3B82F6 색상 사용"

✅ "spacing-md (16px) 간격"
❌ "15px 간격"

✅ "Button variant=primary, size=lg"
❌ "파란색 큰 버튼"
```

#### 2. Playground 활용

```
1. Playground에서 원하는 조합 선택
2. 자동 생성된 Props 코드 복사
3. 개발자에게 전달:
   "이 버튼 써주세요: <Button variant="primary" size="lg" shape="pill" />"
```

#### 3. 새로운 옵션 요청 시

```
❌ "이 버튼 색상을 #FF5733으로 해주세요"
✅ "danger variant를 더 밝게 조정해주세요 (danger-400)"
```

---

### 개발자를 위한 가이드

#### 1. 컴포넌트 사용

```typescript
// ✅ Good: Props 사용
<Button variant="primary" size="md" shape="pill">
  Click Me
</Button>

// ❌ Bad: 인라인 스타일
<button style={{ background: '#3B82F6', padding: '8px 16px' }}>
  Click Me
</button>

// ❌ Bad: className으로 덮어쓰기
<Button className="custom-blue-button">
  Click Me
</Button>
```

#### 2. 스타일 변경이 필요한 경우

```typescript
// ❌ Bad: 컴포넌트 직접 수정
<Button style={{ marginTop: '20px' }}>

// ✅ Good: 래퍼 사용
<ButtonWrapper>
  <Button variant="primary">Click Me</Button>
</ButtonWrapper>

const ButtonWrapper = styled.div`
  margin-top: ${tokens.spacing.lg};
`;
```

#### 3. 새로운 Variant 추가 프로세스

```
1. 디자이너와 협의 (이 variant가 정말 필요한가?)
2. tokens/colors.ts에 색상 추가
3. Button.types.ts에 타입 추가
4. Button.styles.ts에 스타일 맵 추가
5. ButtonPlayground/buttonOptions.ts에 옵션 추가
6. PR 생성 및 리뷰
```

---

## 🚀 성공 지표

### Before (기존 방식)

```
디자인 변경 시:
- 수정 파일: 20-30개
- 작업 시간: 2-3시간
- 누락 가능성: 높음

새 컴포넌트 추가 시:
- 스타일 일관성: 낮음
- 작업 시간: 1-2시간
- 디자이너 소통: 복잡함
```

### After (Design System Playground)

```
디자인 변경 시:
- 수정 파일: 1-2개
- 작업 시간: 5-10분
- 누락 가능성: 없음

새 컴포넌트 추가 시:
- 스타일 일관성: 높음
- 작업 시간: 30-40분
- 디자이너 소통: Props 코드 공유로 끝
```

---

## 📖 핵심 원칙 요약

### 1. Token-First

> "모든 스타일은 토큰에서 시작한다"

### 2. Constraint-Based

> "자유가 아닌 선택지를 제공한다"

### 3. Props as API

> "Props는 디자이너와 개발자의 공통 언어다"

### 4. Separation of Concerns

> "로직과 스타일은 분리한다"

### 5. Living Documentation

> "Playground는 살아있는 문서다"

---

## 🎯 다음 단계

### Phase 2 계획

1. **더 많은 컴포넌트**

   - Card, Modal, Tooltip, Badge, etc.

2. **테마 지원**

   - Light/Dark Mode
   - 브랜드별 테마

3. **토큰 Export**

   - Figma Plugin 연동
   - JSON/CSS Variables Export

4. **문서화 자동화**
   - Storybook 통합
   - 컴포넌트 문서 자동 생성

---

## 💡 FAQ

### Q: 왜 styled-components에 `$` prefix를 사용하나요?

A: React props와 DOM attributes를 구분하기 위한 styled-components v6의 권장사항입니다.

### Q: 왜 Headless 패턴을 사용하나요?

A: 스타일을 완전히 교체 가능하게 하여 디자인 시스템 마이그레이션을 쉽게 만듭니다.

### Q: 토큰만으로 부족한 경우는?

A: 토큰을 먼저 추가하고, 그 다음에 컴포넌트에 적용합니다. 예외 없이 토큰부터!

### Q: 기존 프로젝트에 적용하려면?

A:

1. tokens/ 폴더 복사
2. 한 컴포넌트씩 점진적 마이그레이션
3. Playground로 검증

---

**이 Design System은 디자이너와 개발자가 같은 언어로 소통할 수 있게 만듭니다.** 🎨 ↔️ 💻

**Made with ❤️ by 10년차 시니어 프론트엔드 개발자**
