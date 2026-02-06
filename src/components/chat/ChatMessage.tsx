import { Sparkles, User, Copy, ThumbsUp, ThumbsDown } from "lucide-react";
import ReactMarkdown from "react-markdown";
import type { Message } from "@/hooks/useChat";

interface ChatMessageProps {
  message: Message;
  isLast?: boolean;
}

export function ChatMessage({ message, isLast }: ChatMessageProps) {
  const isUser = message.role === "user";

  return (
    <div className={`group animate-fade-in py-5 ${isUser ? "" : ""}`}>
      <div className="mx-auto flex max-w-3xl gap-4 px-4">
        <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg ${
          isUser ? "bg-secondary" : "bg-primary/15"
        }`}>
          {isUser ? (
            <User className="h-4 w-4 text-secondary-foreground" />
          ) : (
            <Sparkles className="h-4 w-4 text-primary" />
          )}
        </div>
        <div className="flex-1 min-w-0">
          <div className="mb-1 text-xs font-medium text-muted-foreground">
            {isUser ? "You" : "me.com"}
          </div>
          <div className={`text-sm leading-relaxed ${isUser ? "text-foreground" : "text-foreground"}`}>
            {isUser ? (
              <p className="whitespace-pre-wrap">{message.content}</p>
            ) : (
              <div className="prose prose-sm max-w-none prose-p:my-2 prose-pre:bg-secondary prose-pre:border prose-pre:border-border prose-code:text-primary prose-code:font-mono prose-headings:text-foreground prose-a:text-primary">
                <ReactMarkdown>{message.content}</ReactMarkdown>
              </div>
            )}
          </div>
          {/* Action bar for assistant messages */}
          {!isUser && message.content && (
            <div className="mt-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                <Copy className="h-3.5 w-3.5" />
              </button>
              <button className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                <ThumbsUp className="h-3.5 w-3.5" />
              </button>
              <button className="rounded-md p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                <ThumbsDown className="h-3.5 w-3.5" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
