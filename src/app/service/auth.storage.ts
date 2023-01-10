export class LocalStorage<T> {
  constructor(private readonly key: string, private readonly defaultValue: T) {}

  load(): T {
    const storedValue = localStorage.getItem(this.key);
    if (storedValue) {
      return JSON.parse(storedValue);
    }
    return this.defaultValue;
  }
  save(item: T) {
    const valueToStore = JSON.stringify(item);
    localStorage.setItem(this.key, valueToStore);
  }
  remove() {
    localStorage.removeItem(this.key);
  }
}
