import { fetchDatabase } from './base/index.js';


const directoryNavigationContainer = document.querySelector("#directoryNavigation").querySelector("main");


function addDirectory(name) {
  const element = document.createElement("div");
  element.setAttribute("id", `directoryNavigation-${name.toLowerCase()}`);
  element.classList.add("navigation-item");

  const elementName = document.createElement("span");
  elementName.classList.add("navigation-item-name");
  elementName.textContent = name;
  element.appendChild(elementName);

  directoryNavigationContainer.appendChild(element);
}


export async function setupHook() {
  fetchDatabase().then(
    database => {
      for (const directoryIndex in database.directories) {
        const directory = database.directories[directoryIndex];
        addDirectory(directory);
      }
    }
  ).then(
    _ => {
      const pythonDirectoryNavigation = document.querySelector("#directoryNavigation-python");
      pythonDirectoryNavigation.addEventListener("click", (_) => window.open('./python', "_self"));

      const javaDirectoryNavigation = document.querySelector("#directoryNavigation-java");
      javaDirectoryNavigation.addEventListener("click", (_) => window.open('./java', "_self"));
      
      const pythonCategory = document.querySelector("#category-python");
      pythonCategory.addEventListener("click", (_) => window.open('./python', "_self"));
    }
  )
}