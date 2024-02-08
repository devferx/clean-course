interface Bird {
  fly(): void;
  eat(): void;
  run(): void;
  swim(): void;
}

class Tucan implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  // Tucan can not swim
  public swim() {}
}

class Hummingbird implements Bird {
  public fly() {}
  public eat() {}
  public run() {}
  // Hummingbird can not swim
  public swim() {}
}

class Ostrich implements Bird {
  public fly() {
    throw new Error('Ostrich can not fly');
  }

  public eat() {}
  public run() {}
  public swim() {}
}

class Peguin implements Bird {
  public fly() {
    throw new Error('Ostrich can not fly');
  }

  public eat() {}
  public run() {}
  public swim() {}
}
