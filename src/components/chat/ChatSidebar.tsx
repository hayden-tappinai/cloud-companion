import {
  MessageSquarePlus,
  Star,
  FolderKanban,
  Settings,
  Search,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const mockConversations = [
  { id: "1", title: "How to build a REST API", time: "2m ago" },
  { id: "2", title: "React performance optimization", time: "1h ago" },
  { id: "3", title: "Database schema design tips", time: "3h ago" },
  { id: "4", title: "TypeScript generics explained", time: "Yesterday" },
  { id: "5", title: "CSS Grid vs Flexbox", time: "Yesterday" },
  { id: "6", title: "Auth best practices 2026", time: "2 days ago" },
  { id: "7", title: "Docker compose setup", time: "3 days ago" },
  { id: "8", title: "GraphQL vs REST comparison", time: "Last week" },
];

interface ChatSidebarProps {
  onNewChat: () => void;
}

export function ChatSidebar({ onNewChat }: ChatSidebarProps) {
  return (
    <div className="flex h-full w-64 flex-col bg-sidebar border-r border-sidebar-border">
      {/* Brand */}
      <div className="flex items-center px-4 py-5">
        <img src={logo} alt="me.com" className="h-8" />
      </div>

      {/* New Chat */}
      <div className="px-3 pb-2">
        <Button
          onClick={onNewChat}
          variant="outline"
          className="w-full justify-start gap-2 border-sidebar-border bg-transparent text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground"
        >
          <MessageSquarePlus className="h-4 w-4" />
          New chat
        </Button>
      </div>

      {/* Search */}
      <div className="px-3 pb-3">
        <button className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent transition-colors">
          <Search className="h-3.5 w-3.5" />
          Search conversations...
        </button>
      </div>

      {/* Nav items */}
      <div className="px-3 pb-2 space-y-0.5">
        <button className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
          <Star className="h-4 w-4" />
          Starred
        </button>
        <button className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
          <FolderKanban className="h-4 w-4" />
          Projects
        </button>
      </div>

      {/* Conversations */}
      <div className="flex-1 overflow-y-auto scrollbar-thin px-3">
        <div className="flex items-center justify-between px-3 py-2">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Recent</span>
        </div>
        <div className="space-y-0.5">
          {mockConversations.map((c) => (
            <button
              key={c.id}
              className="flex w-full items-center rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors group"
            >
              <span className="truncate flex-1 text-left">{c.title}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Bottom user area */}
      <div className="border-t border-sidebar-border p-3">
        <button className="flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm text-sidebar-foreground hover:bg-sidebar-accent transition-colors">
          <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/20 text-primary text-xs font-semibold">
            U
          </div>
          <span className="flex-1 text-left truncate">user@me.com</span>
          <ChevronDown className="h-3.5 w-3.5 text-muted-foreground" />
        </button>
        <button className="mt-1 flex w-full items-center gap-2.5 rounded-md px-3 py-2 text-sm text-muted-foreground hover:bg-sidebar-accent hover:text-sidebar-foreground transition-colors">
          <Settings className="h-4 w-4" />
          Settings
        </button>
      </div>
    </div>
  );
}
