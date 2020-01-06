# typescript

## 제네릭 함수 / 화살표 함수

### 선언 방식

함수

```ts
  function getFirstElem<T>(arr: T[]) : T { ... }
```

화살표 함수

```ts
const filter = <T>(list: T[],predi : (arg : T) => boolean) => : T { ... }
```
