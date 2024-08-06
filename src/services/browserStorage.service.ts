class BrowserStorageService {
  public setLocalStorage(key: string, value: unknown): void {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Error saving to local storage', error);
    }
  }

  public getLocalStorage<T>(key: string): T | null {
    try {
      const value = localStorage.getItem(key);
      return value ? (JSON.parse(value) as T) : null;
    } catch (error) {
      console.error('Error reading from local storage', error);
      return null;
    }
  }
}

export default BrowserStorageService;
