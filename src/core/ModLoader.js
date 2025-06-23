export default class ModLoader {
  constructor(modPath = '/mods') {
    this.modPath = modPath;
    this.mods = [];
  }

  async load() {
    try {
      const resp = await fetch(`${this.modPath}/index.json`);
      if (!resp.ok) return;
      const list = await resp.json();
      for (const mod of list) {
        const module = await import(`${this.modPath}/${mod.entry}`);
        if (module.default) this.mods.push(module.default);
      }
    } catch (e) {
      console.warn('Mod loading failed', e);
    }
  }
}
