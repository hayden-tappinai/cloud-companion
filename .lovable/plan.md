

# Switch to Light Mode

Update the CSS theme variables in `src/index.css` to use a light color palette while keeping the same structure and design.

## Changes

### 1. `src/index.css` -- Update CSS variables
Replace the dark theme values with light equivalents:

- **background**: White/light gray (e.g., `0 0% 100%` or `220 20% 98%`)
- **foreground**: Dark text (e.g., `228 14% 10%`)
- **card**: Slightly off-white (e.g., `0 0% 100%`)
- **card-foreground**: Dark text
- **primary**: Keep the purple accent (`245 58% 64%`)
- **secondary**: Light gray (`220 14% 94%`)
- **muted**: Light gray tones
- **border**: Light gray borders (`220 12% 88%`)
- **sidebar**: Light sidebar background with appropriate foreground colors
- **chat variables**: Light chat bubble colors
- **scrollbar colors**: Update to light gray tones

### 2. `src/components/chat/ChatMessage.tsx`
- Change `prose-invert` to `prose` for proper light-mode markdown rendering

No other files need changes since everything uses CSS variables.

