(() => {
  type Gender = 'M' | 'F';

  // No aplicando el principio de responsabilidad única

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ birthdate, gender, name }: PersonProps) {
      this.birthdate = birthdate;
      this.gender = gender;
      this.name = name;
    }
  }

  interface UserProps extends PersonProps {
    email: string;
    role: string;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({ email, role, name, gender, birthdate }: UserProps) {
      super({ name, gender, birthdate });

      this.email = email;
      this.lastAccess = new Date();
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;

    constructor({
      lastOpenFolder,
      workingDirectory,
      birthdate,
      email,
      gender,
      name,
      role,
    }: UserSettingsProps) {
      super({ email, role, name, gender, birthdate });

      this.lastOpenFolder = lastOpenFolder;
      this.workingDirectory = workingDirectory;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: '/usr/home',
    lastOpenFolder: '/home',
    email: 'fer@gmail.com',
    role: 'admin',
    name: 'Fernando',
    gender: 'M',
    birthdate: new Date(2002, 5, 8),
  });

  console.log({
    userSettings,
    areaCredentialsValid: userSettings.checkCredentials(),
  });
})();
