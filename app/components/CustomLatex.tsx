import { useEffect, useRef } from "react";
import katex from "katex";

const CustomLatex = ({
  latex,
  block = true,
}: {
  latex: string;
  block?: boolean;
}) => {
  const elementRef = block
    ? useRef<HTMLDivElement | null>(null)
    : useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (elementRef.current) {
      try {
        katex.render(latex, elementRef.current, {
          throwOnError: false,
          displayMode: block,
        });
      } catch (err) {
        elementRef.current.innerHTML = `<span style="color:red;">${err}</span>`;
      }
    }
  }, [elementRef.current]);
  return <span ref={elementRef} />;
};

export default CustomLatex;
