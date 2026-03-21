export function addDirectory(directoryName) {
  const directoryNavigationContainer = document.querySelector("#directoryNavigation").querySelector("main");

  const element = document.createElement("div");
  element.setAttribute("id", `directoryNavigation-${directoryName.toLowerCase().replace(" ", "-")}`);
  element.classList.add("navigation-item");

  const elementName = document.createElement("span");
  elementName.classList.add("navigation-item-name");
  elementName.textContent = directoryName;
  element.appendChild(elementName);

  directoryNavigationContainer.appendChild(element);
}


export function addParentDirectory(path) {
  const directoryNavigationContainer = document.querySelector("#directoryNavigation").querySelector("main");

  const element = document.createElement("div");
  element.setAttribute("id", "directoryNavigation--parent");
  element.classList.add("navigation-item");
  element.addEventListener("click", (_) => window.open(path, "_self"));

  const elementName = document.createElement("span");
  elementName.classList.add("navigation-item-name");
  elementName.textContent = "../";
  element.appendChild(elementName);

  directoryNavigationContainer.appendChild(element);
}


export function enlistSections(parent, level) {
  const navigationColumnContainer = document.querySelector("#display-navigationColumn");

  for (const child of parent.children) {
    if (child.tagName.toLowerCase() !== "section") continue;
    const navigationItem = document.createElement("div");
    navigationItem.classList.add("tableOfContents-item");
    navigationItem.setAttribute("data-level", level);
    if (0 < level) navigationItem.style.paddingLeft = `calc(1em * ${level})`;
    navigationItem.textContent = child.getAttribute("name");
    navigationItem.addEventListener(
      "click", (_) => child.scrollIntoView({
        behavior: "smooth",
        block: "start"
      })
    )
    navigationColumnContainer.appendChild(navigationItem);
    enlistSections(child, level + 1);
  }
}


export async function fetchDatabase() {
  const database = fetch('db.json').then(response => response.json());
  return await database;
}