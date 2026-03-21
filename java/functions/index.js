import { addDirectory, addParentDirectory, enlistSections } from '../../base/index.js';


export function setupHook() {
  addParentDirectory("../../");
  addDirectory("Introduction");
  addDirectory("Arrays");
  addDirectory("Functions");

  document.querySelector("#directoryNavigation-introduction").addEventListener(
    "click", (_) => window.open('../', "_self")
  )

  enlistSections(document.querySelector("#content"), 0);
}