"use client";

import { useState } from "react";
import ButtonStyled from "./button-component";

export function DefaultButton() {
  const [clicked, setClicked] = useState(false);

  return (
    <ButtonStyled kind="default" onClick={() => setClicked(true)}>
      {clicked ? "Default 클릭됨" : "Default 버튼"}
    </ButtonStyled>
  );
}
export function ImportantButton() {
  const handleMouseOver = () => {
    window.alert("마우스 오버 이벤트 처리");
  };
  return (
    <ButtonStyled kind="important" onMouseOver={() => handleMouseOver()}>
      {"Important 버튼"}
    </ButtonStyled>
  );
}
export function ReferenceButton() {
  const handleDoubleClick = () => {
    window.alert("더블클릭 이벤트 처리");
  };
  return (
    <ButtonStyled kind="reference" onDoubleClick={() => handleDoubleClick()}>
      {"Reference 버튼"}
    </ButtonStyled>
  );
}
