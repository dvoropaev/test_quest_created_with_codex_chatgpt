export default class ResourceManager {
  constructor() {
    this.cache = new Map();
  }

  loadImage(src) {
    if (this.cache.has(src)) return Promise.resolve(this.cache.get(src));
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        this.cache.set(src, img);
        resolve(img);
      };
      img.onerror = reject;
      img.src = src;
    });
  }
}
