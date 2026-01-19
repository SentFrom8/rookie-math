import { useEffect, useRef } from "react";
import katex from "katex";

const renderBlock = (
  latex: string,
  container: HTMLElement,
  displayMode: boolean = true,
) => {
  try {
    katex.render(latex, container, {
      throwOnError: false,
      displayMode: displayMode,
    });
  } catch (err) {
    container.innerHTML = `<span style="color:red;">${err}</span>`;
  }
};

const LatexRenderer = ({
  latex,
  displayMode = true,
}: {
  latex: string;
  displayMode?: boolean;
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current && latex) {
      const blocks = latex
        .split(/\n\s*\n/) // split on empty lines (paragraph breaks)
        .map((b) => b.trim())
        .filter((b) => b);

      containerRef.current.innerHTML = ""; // clear previous

      blocks.forEach((block) => {
        const isMathBlock =
          block.startsWith("\\[") ||
          block.startsWith("\\(") ||
          block.startsWith("\\begin") ||
          block.includes("&=") ||
          block.includes("^") ||
          displayMode;

        const el = isMathBlock
          ? document.createElement("div")
          : document.createElement("span");

        el.className = "Test";

        containerRef.current!.appendChild(el);

        const cleanBlock = block.replace(/^\\\[|\\\]$/g, "");
        renderBlock(cleanBlock, el, isMathBlock);
      });
    }
  }, [latex, displayMode]);

  return <div ref={containerRef} />;
};

export default LatexRenderer;
