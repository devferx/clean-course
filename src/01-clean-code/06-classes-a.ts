(() => {
  type Gender = 'M' | 'F';

  // No aplicando el principio de responsabilidad única

  class Person {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date,
    ) {}
  }

  class User extends Person {
    public lastAccess: Date;

    constructor(
      public email: string,
      public role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(name, gender, birthdate);
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      name: string,
      gender: Gender,
      birthdate: Date,
    ) {
      super(email, role, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    '/usr/home',
    '/home',
    'fer@gmail.com',
    'admin',
    'Fernando',
    'M',
    new Date(2002, 5, 8),
  );

  console.log({
    userSettings,
    areaCredentialsValid: userSettings.checkCredentials(),
  });
})();
