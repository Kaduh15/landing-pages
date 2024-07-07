if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  // dark mode
  const body = document.querySelector('body');
  if (body) {
    body.classList.add('dark');
  }
} else {
  // light mode
  const body = document.querySelector('body');
  if (body) {
    body.classList.remove('dark');
  }
}


