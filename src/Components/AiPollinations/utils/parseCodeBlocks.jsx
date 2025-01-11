import React from "react";
import { Panel } from "rsuite";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const parseCodeBlocks = (text) => {
  const regex = /```(\w+)?\n([\s\S]+?)```/g; // Detects triple-backtick code blocks
  let match;
  const elements = [];
  let lastIndex = 0;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      elements.push(<p key={lastIndex}>{text.slice(lastIndex, match.index)}</p>);
    }

    const language = match[1] || "javascript"; // Default to JavaScript if no language is specified
    const code = match[2];

    elements.push(
      <Panel key={match.index} bordered style={{ marginBottom: 10 }}>
        <SyntaxHighlighter language={language} style={oneDark} showLineNumbers>
          {code}
        </SyntaxHighlighter>
      </Panel>
    );

    lastIndex = regex.lastIndex;
  }

  if (lastIndex < text.length) {
    elements.push(<p key={lastIndex}>{text.slice(lastIndex)}</p>);
  }

  return elements;
};
