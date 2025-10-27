import React, { useEffect, useRef } from "react";

// Match the same list as used in the editor
const fontMap = {
  arial: "Arial, sans-serif",
  "times-new-roman": '"Times New Roman", serif',
  "courier-new": '"Courier New", monospace',
  calibri: "Calibri, sans-serif",
  "comic-sans": '"Comic Sans MS", cursive, sans-serif',
  georgia: "Georgia, serif",
  impact: "Impact, Charcoal, sans-serif",
  lucida: '"Lucida Sans Unicode", "Lucida Grande", sans-serif',
  tahoma: "Tahoma, Geneva, sans-serif",
  roboto: "'Roboto', sans-serif",
};

const ShadowWrapper = ({ htmlContent }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current && !containerRef.current.shadowRoot) {
      const shadowRoot = containerRef.current.attachShadow({ mode: "open" });

      const wrapper = document.createElement("div");
      wrapper.innerHTML = htmlContent || "";

      // wrapper.style.minHeight = "100px";

      // Build dynamic CSS
      const style = document.createElement("style");
      const dynamicFontStyles = Object.entries(fontMap)
        .map(
          ([key, font]) => `
          .ql-font-${key} {
            font-family: ${font};
          }
          .ql-snow .ql-picker.ql-font .ql-picker-label[data-value="${key}"]::before,
          .ql-snow .ql-picker.ql-font .ql-picker-item[data-value="${key}"]::before {
            content: "${key.replace(/-/g, " ")}";
            font-family: ${font};
          }
        `
        )
        .join("");

      style.textContent = `
        body, div, p {
          color: #333;
          line-height: 1.5;
        }
        h1, h2, h3, h4, p {
          margin: 0;
        }
        ul, ol {
          margin: 0;
          padding-left: 20px;
        }
        ${dynamicFontStyles}
      `;

      shadowRoot.appendChild(style);
      shadowRoot.appendChild(wrapper);
    }
  }, [htmlContent]);

  return <div ref={containerRef} />;
};

export default ShadowWrapper;
