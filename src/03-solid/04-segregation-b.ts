(() => {
  interface Bird {
    eat(): void;
  }

  interface FlyingBird {
    fly(): number;
  }
  interface RunningBird {
    run(): void;
  }
  interface SwimmingBird {
    swim(): void;
  }

  class Tucan implements Bird, FlyingBird {
    eat(): void {}
    fly() {
      return 100;
    }
  }

  class Hummingbird implements Bird, FlyingBird {
    eat(): void {}
    fly() {
      return 200;
    }
  }

  class Ostrich implements Bird, RunningBird {
    eat(): void {}
    run(): void {}
  }

  class Peguin implements Bird, SwimmingBird {
    swim(): void {}
    eat(): void {}
  }
})();
