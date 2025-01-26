export type Item = {
  name: string;
  slug: string;
};

export const menus: { name: string; items: Item[] }[] = [
  {
    name: "리액트 컴포넌트와 속성",
    items: [
      { name: "서버/클라이언트 컴포넌트", slug: "server-component" },
      { name: "이펙트 훅", slug: "effect" },
      { name: "컴포지션", slug: "composition" },
    ],
  },
  {
    name: "리액트 사용자 상호 작용과 상태 관리",
    items: [
      { name: "이벤트처리", slug: "event" },
      { name: "버튼 이벤트", slug: "button" },
      { name: "폼 입력 기본", slug: "input" },
      { name: "폼 입력 최신 기법", slug: "form-state" },
      { name: "리듀서", slug: "reducer" },
      { name: "컨텍스트", slug: "context" },
    ],
  },
  {
    name: "리액트의 고객 개념과 패턴",
    items: [
        { name: "Ref 생성/사용", slug: "ref" },
        { name: "Ref 전달하기", slug: "ref-forward" },
        { name: "조건부 랜더링", slug: "conditional-rendering" },
        { name: "리스트 랜더링", slug: "list-rendering" },
        { name: "메모 훅: 과도한 재랜더링 방지", slug: "memo" },
        { name: "콜백 훅: 큰 리스트 재랜더링 방지", slug: "list-rendering-callback" },
        { name: "사용자 정의 훅", slug: "custom-hook" },

    ],
  },
];
