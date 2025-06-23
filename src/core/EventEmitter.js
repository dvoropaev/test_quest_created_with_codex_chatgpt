export default class EventEmitter {
  constructor() {
    this.listeners = {};
  }
  on(event, handler) {
    if (!this.listeners[event]) {
      this.listeners[event] = [];
    }
    this.listeners[event].push(handler);
  }
  off(event, handler) {
    const list = this.listeners[event];
    if (!list) return;
    const idx = list.indexOf(handler);
    if (idx >= 0) list.splice(idx, 1);
  }
  emit(event, ...args) {
    const list = this.listeners[event];
    if (!list) return;
    for (const handler of list) handler(...args);
  }
}
