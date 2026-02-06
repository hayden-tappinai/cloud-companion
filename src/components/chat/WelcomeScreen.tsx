import { Code, Lightbulb, FileText, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

interface WelcomeScreenProps {
  onSuggestionClick: (text: string) => void;
}

const suggestions = [
  { icon: Code, text: "Help me write a React component", color: "text-blue-400" },
  { icon: Lightbulb, text: "Explain how async/await works", color: "text-yellow-400" },
  { icon: FileText, text: "Write a professional email for me", color: "text-green-400" },
  { icon: Sparkles, text: "Generate ideas for my project", color: "text-purple-400" },
];

export function WelcomeScreen({ onSuggestionClick }: WelcomeScreenProps) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center px-4 animate-fade-in">
      <img src={logo} alt="me.com" className="h-14 mb-6" />
      <h1 className="text-2xl font-semibold text-foreground mb-2">How can I help you today?</h1>
      <p className="text-muted-foreground text-sm mb-10 max-w-md text-center">
        I can help you write, analyze, code, and more. Just ask me anything.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
        {suggestions.map((s) => (
          <button
            key={s.text}
            onClick={() => onSuggestionClick(s.text)}
            className="flex items-center gap-3 rounded-xl border border-border bg-card p-4 text-left text-sm text-foreground hover:bg-chat-hover transition-colors group"
          >
            <s.icon className={`h-5 w-5 ${s.color} shrink-0`} />
            <span className="group-hover:text-foreground">{s.text}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
