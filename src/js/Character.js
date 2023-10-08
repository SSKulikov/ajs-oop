export default class Character {
  constructor(name, type, health = 100, level = 1) {
    this.name = Character.checkName(name);
    this.type = Character.checkType(type);
    this.health = health;
    this.level = level;
    this.attack = undefined;
    this.defence = undefined;
  }

  static checkName(name) {
    if (name.length < 2 && name.length > 10) {
      throw new Error('Имя должно быть 2 - 10 символов!');
    }
    return name;
  }

  static checkType(type) {
    const listChildClass = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];
    if (!listChildClass.includes(type)) {
      throw new Error('Неверный тип!');
    }
    return type;
  }

  levelUp() {
    if (this.health < 0) {
      throw new Error('Можно повышать уровень только живого персонажа');
    } else {
      this.level += 1;
      this.attack += this.attack * 0.2;
      this.defence += this.defence * 0.2;
      this.health = 100;
    }
  }

  damage(points) {
    if ((this.health < 0)) {
      throw new Error('Можно атаковать только живого персонажа');
    } else {
      this.health -= points * (1 - this.defence / 100);
    }
  }
}
