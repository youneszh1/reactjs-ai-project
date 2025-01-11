import React, { useState } from "react";
import { usePollinationsChat } from "@pollinations/react";
import {
  Panel,
  Input,
  IconButton,
  Placeholder,
  Avatar,
} from "rsuite";
import { Send } from "@rsuite/icons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"; // Thème pour le code

const PollinationsChat = () => {
  const [input, setInput] = useState("");
  const [chatHistory, setChatHistory] = useState([]);

  const { sendUserMessage, messages, isLoading } = usePollinationsChat(
    [{ role: "system", content: "Hello! I'm here to help. How can I assist you today?" }],
    { seed: 42, jsonMode: false, model: "openai" }
  );

  React.useEffect(() => {
    setChatHistory(messages);
  }, [messages]);

  const handleSend = () => {
    if (input.trim()) {
      sendUserMessage(input);
      setInput("");
    }
  };

  return (
    <Panel className="p-4 pt-2 max-w-full bg-[var(--rs-bg-card)] rounded-lg shadow" style={{ height: "600px" }}>
      <h2 className="text-center text-4xl font-semibold text-[var(--rs-text-primary)] mb-5">AI Chat BOT</h2>

      {/* Chat Messages */}
      <div style={{ height: "400px" }} className="overflow-y-auto border border-gray-300 dark:border-gray-600 rounded-lg p-4 bg-[var(--rs-bg-card)]">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`flex items-start ${msg.role === "user" ? "justify-end" : "justify-start"} mb-3`}>
            {msg.role !== "user" && (
              <Avatar size="lg" className="mr-2" style={{ backgroundColor: "#ffbb33" }}>
                🤖
              </Avatar>
            )}
            <div
              className={`w-1/2 p-3 rounded-lg max-w-[80%] text-[var(--rs-text-primary)] shadow-md 
              ${msg.role === "user" ? "bg-blue-500 text-white" : "bg-green-500 text-white"}`}
            >
              <strong>{msg.role === "user" ? "You" : "AI"}:</strong>
              <ReactMarkdown
                children={msg.content}
                remarkPlugins={[remarkGfm]}
                components={{
                  code({ inline, className, children, ...props }) {
                    const match = /language-(\w+)/.exec(className || "");
                    return inline ? (
                      <code className={className}>{children}</code>
                    ) : match ? (
                      <SyntaxHighlighter style={oneDark} language={match[1]} PreTag="div" {...props}>
                        {String(children).replace(/\n$/, "")}
                      </SyntaxHighlighter>
                    ) : (
                      <pre className={className}><code>{children}</code></pre>
                    );
                  },
                }}
              />
            </div>
            {msg.role === "user" && (
              <Avatar size="lg" className="ml-2" style={{ backgroundColor: "#33bbff" }}>
                👤
              </Avatar>
            )}
          </div>
        ))}
        {isLoading && (
          <div className="flex items-center space-x-2 mt-2">
            <Avatar size="sm" style={{ backgroundColor: "#ffbb33" }}>
              🤖
            </Avatar>
            <Placeholder.Paragraph rows={1} active className="w-40" />
          </div>
        )}
      </div>

      {/* Input Field & Send Button */}
      <div className="flex items-center mt-4 space-x-3">
        <Input
          as="textarea"
          placeholder="Type a message..."
          value={input}
          onChange={setInput}
          rows={2}
          className="flex-1 p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-[var(--rs-bg-control)] text-[var(--rs-text-primary)]"
        />
        <IconButton
          appearance="primary"
          color="blue"
          icon={<Send />}
          onClick={handleSend}
          disabled={!input.trim()}
          className="p-4 rounded-lg"
        />
      </div>
    </Panel>
  );
};

export default PollinationsChat;
