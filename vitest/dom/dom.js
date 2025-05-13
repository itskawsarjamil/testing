export function renderTitle() {
  const titleContainer =
    document.getElementById("title") || document.createElement("div");
  const titleElement = document.createElement("p");
  titleElement.textContent = "testing the dom with vitest";
  titleContainer.append(titleElement);
}

renderTitle();
