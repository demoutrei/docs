export async function addParentDirectory() {
  const directoryNavigationContainer = document.querySelector("#directoryNavigation").querySelector("main");

  const element = document.createElement("div");
  element.setAttribute("id", "directoryNavigation--parent");
  element.classList.add("navigation-item");
  element.addEventListener("click", (_) => window.open('../', "_self"));

  const elementName = document.querySelector("span");
  elementName.classList.add("navigation-item-name");
  elementName.textContent = "../";
  element.appendChild(elementName);

  directoryNavigationContainer.appendChild(element);
}


export async function fetchDatabase() {
  const database = fetch('db.json').then(response => response.json());
  return await database;
}