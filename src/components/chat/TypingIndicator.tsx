import { Sparkles } from "lucide-react";

export function TypingIndicator() {
  return (
    <div className="py-5 animate-fade-in">
      <div className="mx-auto flex max-w-3xl gap-4 px-4">
        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/15">
          <Sparkles className="h-4 w-4 text-primary" />
        </div>
        <div className="flex-1">
          <div className="mb-1 text-xs font-medium text-muted-foreground">me.com</div>
          <div className="flex items-center gap-1.5 pt-1">
            <span className="typing-dot h-2 w-2 rounded-full bg-primary/60" />
            <span className="typing-dot h-2 w-2 rounded-full bg-primary/60" />
            <span className="typing-dot h-2 w-2 rounded-full bg-primary/60" />
          </div>
        </div>
      </div>
    </div>
  );
}
