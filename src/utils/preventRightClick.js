// Prevent right click across the entire website
export const preventRightClick = () => {
  document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
  });

  // Prevent keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Prevent Ctrl+C, Ctrl+V, Ctrl+S, Ctrl+U, F12
    if (
      (e.ctrlKey && (e.key === 'c' || e.key === 'v' || e.key === 's' || e.key === 'u')) ||
      e.key === 'F12'
    ) {
      e.preventDefault();
      return false;
    }
  });

  // Prevent drag and drop
  document.addEventListener('dragstart', (e) => {
    e.preventDefault();
    return false;
  });

  // Prevent text selection via double click
  document.addEventListener('selectstart', (e) => {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
      e.preventDefault();
      return false;
    }
  });
}; 