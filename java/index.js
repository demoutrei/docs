import { addDirectory, addParentDirectory } from '../base/index.js';


export function setupHook() {
  addParentDirectory();
  addDirectory("Introduction");
  addDirectory("Arrays");
  addDirectory("Functions");

  document.querySelector("#directoryNavigation-functions").addEventListener(
    "click", (_) => window.open('./functions', "_self")
  )
}