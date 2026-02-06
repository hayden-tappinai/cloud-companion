import { useRef, useEffect } from "react";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";
import { WelcomeScreen } from "./WelcomeScreen";
import { ChatInput } from "./ChatInput";
import type { Message } from "@/hooks/useChat";

interface ChatAreaProps {
  messages: Message[];
  isLoading: boolean;
  onSend: (message: string) => void;
}

export function ChatArea({ messages, isLoading, onSend }: ChatAreaProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  return (
    <div className="flex flex-1 flex-col min-h-0">
      <div ref={scrollRef} className="flex flex-1 flex-col overflow-y-auto scrollbar-thin">
        {messages.length === 0 ? (
          <WelcomeScreen onSuggestionClick={onSend} />
        ) : (
          <div className="pb-4 pt-8">
            {messages.map((m, i) => (
              <ChatMessage key={m.id} message={m} isLast={i === messages.length - 1} />
            ))}
            {isLoading && messages[messages.length - 1]?.role === "user" && (
              <TypingIndicator />
            )}
          </div>
        )}
      </div>
      <ChatInput onSend={onSend} isLoading={isLoading} />
    </div>
  );
}
