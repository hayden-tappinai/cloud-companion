import { useState, useRef, useEffect } from "react";
import { ArrowUp, Paperclip, ChevronDown, Globe } from "lucide-react";

interface ChatInputProps {
  onSend: (message: string) => void;
  isLoading: boolean;
}

export function ChatInput({ onSend, isLoading }: ChatInputProps) {
  const [input, setInput] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 200) + "px";
    }
  }, [input]);

  const handleSubmit = () => {
    if (!input.trim() || isLoading) return;
    onSend(input.trim());
    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="border-t border-border bg-background px-4 py-4">
      <div className="mx-auto max-w-3xl">
        <div className="relative rounded-2xl border border-border bg-card shadow-lg">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Message me.com..."
            rows={1}
            className="w-full resize-none bg-transparent px-4 pt-4 pb-12 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none scrollbar-thin"
          />
          <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between">
            <div className="flex items-center gap-1">
              <button className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                <Paperclip className="h-4 w-4" />
              </button>
              <button className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                <Globe className="h-4 w-4" />
              </button>
              <button className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                me.com Pro
                <ChevronDown className="h-3 w-3" />
              </button>
            </div>
            <button
              onClick={handleSubmit}
              disabled={!input.trim() || isLoading}
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
        <p className="mt-2 text-center text-[11px] text-muted-foreground">
          me.com can make mistakes. Consider checking important information.
        </p>
      </div>
    </div>
  );
}
