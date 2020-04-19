class Dog {
  name: string;
  history: any[];
  constructor() {
    this.name = "";
    this.history = [];
  }

  executeCommand(command) {
    this.name = command.execute(this.name);
    this.history.push(command);
  }
  undoCommand() {
    const command = this.history.pop();
    this.name = command.undo(this.name);
  }
}

// Command will let you 'do' and 'undo'
// It is usefull in editors

class ChangeNameCommand {
  newName: string;
  constructor(newName: string) {
    this.newName = newName;
  }

  execute(currentName: string) {
    return currentName;
  }

  undo() {
    return this.newName;
  }
}

const myDog = new Dog();
myDog.executeCommand(new ChangeNameCommand("Pios"));
console.log(myDog.name);
myDog.undoCommand();
console.log(myDog.name);
