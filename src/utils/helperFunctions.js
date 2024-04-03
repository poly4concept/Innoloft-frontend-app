import DOMPurify from "dompurify";

export const sanitizeData = (data) => {
  return {
    __html: DOMPurify.sanitize(data),
  };
};

export const applyTheme = (theme) => {
  const root = document.documentElement;
  Object.keys(theme).forEach((cssVar) => {
    root.style.setProperty(cssVar, theme[cssVar]);
  });
};
