export default class SaveManager {
  constructor(slot = 'autosave') {
    this.slot = slot;
  }

  save(data) {
    const json = JSON.stringify(data);
    try {
      localStorage.setItem(this.slot, json);
    } catch (e) {
      document.cookie = `${this.slot}=` + encodeURIComponent(json);
    }
  }

  load() {
    let json = localStorage.getItem(this.slot);
    if (!json) {
      const match = document.cookie.match('(?:^|; )' + this.slot + '=([^;]*)');
      if (match) json = decodeURIComponent(match[1]);
    }
    return json ? JSON.parse(json) : null;
  }
}
