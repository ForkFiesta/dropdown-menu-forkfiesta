function createDropdown(buttonSelector, contentSelector) {
  const buttons = document.querySelectorAll(buttonSelector);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const content = button.nextElementSibling;
      content.style.display =
        content.style.display === "block" ? "none" : "block";
    });
  });

  window.addEventListener("click", (event) => {
    if (!event.target.matches(buttonSelector)) {
      const content = document.querySelectorAll(contentSelector);
      contentSelector.forEach((content) => {
        content.style.display = "none";
      });
    }
  });
}

export { createDropdown };
