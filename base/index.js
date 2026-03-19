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


export function addParentDirectory() {
  const directoryNavigationContainer = document.querySelector("#directoryNavigation").querySelector("main");

  const element = document.createElement("div");
  element.setAttribute("id", "directoryNavigation--parent");
  element.classList.add("navigation-item");
  element.addEventListener("click", (_) => window.open('../', "_self"));

  const elementName = document.createElement("span");
  elementName.classList.add("navigation-item-name");
  elementName.textContent = "../";
  element.appendChild(elementName);

  directoryNavigationContainer.appendChild(element);
}


export async function fetchDatabase() {
  const database = fetch('db.json').then(response => response.json());
  return await database;
}