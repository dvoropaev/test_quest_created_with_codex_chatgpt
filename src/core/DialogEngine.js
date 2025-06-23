export default class DialogEngine {
  constructor(dialog) {
    this.dialog = dialog;
    this.index = dialog.start || 0;
  }

  current() {
    return this.dialog.nodes[this.index];
  }

  choose(option) {
    const node = this.current();
    if (!node || !node.choices) return;
    const choice = node.choices[option];
    if (choice && typeof choice.next !== 'undefined') {
      this.index = choice.next;
    }
    return choice;
  }
}
