

# me.com — AI Chatbot Interface

A polished, Claude-inspired AI chatbot with a dark cool aesthetic, powered by Lovable Cloud for real AI responses.

## Design
- **Dark background** with blue/purple accent tones
- Sleek, modern interface that looks like a premium AI product
- "me.com" branding in the sidebar and header

## Pages & Layout

### 1. Sidebar
- **me.com** logo/brand at the top
- "New Chat" button
- List of recent conversations (hardcoded/mock titles to look full)
- Bottom section: fake user profile area, settings icon, theme toggle — all cosmetic

### 2. Chat Area
- Clean message thread with distinct user/assistant bubbles
- Markdown-rendered AI responses
- Typing indicator animation while waiting for response
- Welcome screen with suggested prompts when no conversation is active

### 3. Input Bar
- Large text input with a send button at the bottom of the chat
- Cosmetic attachment icon and model selector dropdown (non-functional, just for looks)

## Backend (Lovable Cloud)
- A Supabase edge function that calls an AI model to generate real responses
- Conversation history sent with each request for context
- No authentication — anyone can chat immediately

## Polished Details
- Smooth animations on message appear
- Auto-scroll to latest message
- Responsive layout (sidebar collapses on mobile)
- A few fake menu items like "Projects", "Starred", "Settings" in the sidebar to make it look feature-rich

