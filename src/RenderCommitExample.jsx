import React from "react";

// Before your components are displayed on screen, they must be rendered by React. Understanding the steps in this process will help you think about how your code executes and explain its behavior

// Step 1: Trigger a render
// Step 2: React renders your components
// Step 3: React commits changes to the DOM

// из-за того что при перерисовке какого-то компонента реакт вынужден перерисовать всех его потомков рекурсивно
// изменение на вершине DOM дерева может привести к проблемам с производительностью

// также важно понимать что лишний раз реакт не будет менять компоненты в DOM дереве, т.е. если рендер компонента возвращает то же значение,
// что находится в DOM дереве на данный момент, DOM дерево изменено не будет

export default function RenderCommitExample() {
  return <div></div>;
}
