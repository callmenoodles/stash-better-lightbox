function initObserver() {
  const observer = new MutationObserver(() => {
    const buttons = document.querySelectorAll(".Lightbox-navbutton");
    
    if (buttons) {
      buttons.forEach(button => {
        button.classList.remove('d-none');
      });
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
}

initObserver();
