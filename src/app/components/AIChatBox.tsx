"use client";

import { Message, useChat } from "@ai-sdk/react";
import {
  Bot,
  Trash,
  SendHorizonal,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import ReactMarkDown from "react-markdown";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

export default function AIChatBox() {
  const {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    setMessages,
    status,
    error,
  } = useChat({ streamProtocol: "text" });
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (open) {
      inputRef.current?.focus();
    }
  }, [open]);

  const lastMessageIsUser = messages[messages.length - 1]?.role === "user";

  return (
    <div className={"aichatbox " + (open ? "slide-up" : "slide-down")}>
      <div className="chat-box">
        <button
          onClick={() => {
            setOpen(!open);
          }}
          className="chat-toggle-button"
        >
          {open ? <ChevronDown /> : <ChevronUp />}
        </button>
        <div className="messages" ref={scrollRef}>
          {messages.map((message) => (
            <ChatMessage message={message} key={message.id} />
          ))}
          {status == "submitted" && lastMessageIsUser && (
            <ChatMessage
              message={{
                id: "loading",
                role: "assistant",
                content: "Thinking...",
              }}
            />
          )}
          {error && (
            <ChatMessage
              message={{
                id: "error",
                role: "assistant",
                content: "Something went wrong. Please try again.",
              }}
            />
          )}
          {!error && messages.length === 0 && (
            <div className="initial-prompt">
              <Bot size={28} />
              <p>Send a message to learn more about me!</p>
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className="chat-form">
          <button
            title="Clear Chat"
            type="button"
            className="chat-clear"
            onClick={() => setMessages([])}
          >
            <Trash size={24} />
          </button>
          <input
            name="prompt"
            value={input}
            onChange={handleInputChange}
            placeholder="Say something..."
            className="chat-input"
            ref={inputRef}
            autoComplete="off"
          />
          <button
            title="Submit message"
            type="submit"
            className="chat-submit"
            disabled={status == "submitted" || input.length === 0}
          >
            <SendHorizonal size={24} />
          </button>
        </form>
      </div>
    </div>
  );
}

interface ChatMessageProps {
  message: Message;
}

function ChatMessage({ message: { role, content } }: ChatMessageProps) {
  const isAiMessage = role === "assistant";

  return (
    <div className={"message " + (isAiMessage ? "ai-message" : "user-message")}>
      {isAiMessage && <Bot className="ai-message-pic" />}
      <div className={"bubble " + (isAiMessage ? "ai-bubble" : "user-bubble")}>
        <ReactMarkDown
          components={{
            a: ({ node, ref, ...props }) => (
              <Link {...props} href={props.href ?? ""} className="highlight" />
            ),
            p: ({ node, ...props }) => <p {...props} className="p-style" />,
            ul: ({ node, ...props }) => (
              <ul {...props} className="list-style" />
            ),
            li: ({ node, ...props }) => <li {...props} className="mt-1" />,
          }}
        >
          {content}
        </ReactMarkDown>
      </div>
    </div>
  );
}
