import katex from "katex";

const CustomLatex = ({
  latex,
  block = true,
}: {
  latex: string;
  block?: boolean;
}) => {
  const renderedLatex = katex.renderToString(latex, { throwOnError: false })
  
  return block ? <div className="bg-(--menu-color-medium) border-l-4 border-(--accent) pl-4 py-2" dangerouslySetInnerHTML={{ __html: renderedLatex }} /> : <span dangerouslySetInnerHTML={{ __html: renderedLatex }} />;
};

export default CustomLatex;
