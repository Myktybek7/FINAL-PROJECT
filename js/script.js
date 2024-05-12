function smoothScroll(event, targetId) {
  event.preventDefault();
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const offsetTop = targetElement.offsetTop;
    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  }
}
