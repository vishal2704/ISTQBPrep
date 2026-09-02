import { StorageService } from "./storageService";

export const RevisionService = {
  size() {
    return StorageService.loadWrongPool().length;
  },
  add(questionId) {
    const pool = new Set(StorageService.loadWrongPool());
    pool.add(questionId);
    StorageService.saveWrongPool([...pool]);
  },
  remove(questionId) {
    const pool = StorageService.loadWrongPool().filter((id) => id !== questionId);
    StorageService.saveWrongPool(pool);
  },
};
