export const useSiteSettings = () => {
  return useState("design-tokens", () => ({
    fonts: {
      bodyFont: {
        name: '' // Ensure this default value is suitable
      },
      headingFont: {
        name: ''
      }
    }
  }));
};