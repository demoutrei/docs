import { addDirectory, addParentDirectory } from '../../base/index.js';


export function setupHook() {
  addParentDirectory();
  addDirectory("Introduction");
  addDirectory("Arrays");
  addDirectory("Functions");
}