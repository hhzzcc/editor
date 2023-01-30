export class History {
    constructor() {
        this.history = [];
        this.index = -1;
    }

    add(v) {
        this.history.push(v);
        this.index++;
    }

    do() {
        this.history[this.index]();
    }

    undo() {
        if (this.index === -1) return;
        this.do();
        this.index--;
    }

    redo() {
        if (this.index === this.history.length - 1) return;
        this.index++;
        this.do();
    }
}
