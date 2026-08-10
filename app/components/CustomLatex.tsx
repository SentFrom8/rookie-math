import katex from "katex";
import React from "react";

interface CustomLatexProps extends React.HTMLAttributes<HTMLElement> {
    latex: string,
    block?: boolean
}

const CustomLatex = ({
  latex,
  block = true,
  ...props
}: CustomLatexProps) => {
  const renderedLatex = katex.renderToString(latex, { throwOnError: false })
  
  return block ? <div {...props} className="bg-(--menu-color-medium) border-l-4 border-(--accent) pl-4 py-2" dangerouslySetInnerHTML={{ __html: renderedLatex }} /> : <span {...props} dangerouslySetInnerHTML={{ __html: renderedLatex }} />;
};

export default CustomLatex;
