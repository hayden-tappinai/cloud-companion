import { useState } from "react";
import { Menu, X } from "lucide-react";
import { ChatSidebar } from "@/components/chat/ChatSidebar";
import { ChatArea } from "@/components/chat/ChatArea";
import { useChat } from "@/hooks/useChat";

const Index = () => {
  const { messages, isLoading, sendMessage, clearMessages } = useChat();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full overflow-hidden bg-background">
      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 transform transition-transform duration-200 ease-in-out md:relative md:translate-x-0 ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <ChatSidebar onNewChat={clearMessages} />
      </div>

      {/* Main */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Top bar */}
        <div className="flex h-12 items-center border-b border-border px-4">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="rounded-md p-2 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors md:mr-2"
          >
            {sidebarOpen ? <X className="h-5 w-5 md:hidden" /> : <Menu className="h-5 w-5" />}
            <Menu className="hidden h-5 w-5 md:block" />
          </button>
          <span className="text-sm font-medium text-muted-foreground">me.com</span>
        </div>

        <ChatArea messages={messages} isLoading={isLoading} onSend={sendMessage} />
      </div>
    </div>
  );
};

export default Index;
