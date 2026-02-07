import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";

describe("Dark Mode Theme", () => {
  it("should render ThemeToggle component", () => {
    render(
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <ThemeToggle />
      </ThemeProvider>
    );

    // Check if the toggle button is present
    const toggleButton = screen.getByRole("button");
    expect(toggleButton).toBeDefined();
  });

  it("should have theme provider wrapper", () => {
    const { container } = render(
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <div data-testid="test-content">Test Content</div>
      </ThemeProvider>
    );

    // Check if content is rendered
    const content = screen.getByTestId("test-content");
    expect(content).toBeDefined();
    expect(content.textContent).toBe("Test Content");
  });
});
