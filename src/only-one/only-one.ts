/*
 * Przeprogramowani.ts - https://przeprogramowani.pl/typescript/
 *
 * Only one
 * ------------------
 *
 * Goal: Make sure that both `eatBanana` and `eatMouse` can be called inside `eatSomething`.
 *
 * Hint: https://www.typescriptlang.org/docs/handbook/advanced-types.html#type-guards-and-differentiating-types
 */

class Monkey {
  eatBanana() {
    return 'Eating banana!';
  }
}

class Snake {
  eatMouse() {
    return 'Eating mouse!';
  }
}

const monkey = new Monkey();
const snake = new Snake();

type AnimalInZoo = Monkey | Snake;

function isMonkey(animal: AnimalInZoo): animal is Monkey {
  return (animal as Monkey).eatBanana !== undefined;
}

function isSnake(animal: AnimalInZoo): animal is Snake {
  return (animal as Snake).eatMouse !== undefined;
}

function eatSomething(animal: AnimalInZoo) {
  //   the IN operator
  //   if('eatBanana' in animal) return animal.eatBanana();
  //   if('eatMouse' in animal) return animal.eatMouse();

  //   type asertions
  //   if ((animal as Monkey).eatBanana) return (animal as Monkey).eatBanana();
  //   if ((animal as Snake).eatMouse) return (animal as Snake).eatMouse();

  //   user defined Type Guards
  if (isMonkey(animal)) return animal.eatBanana();
  if (isSnake(animal)) return animal.eatMouse();
}

console.log(eatSomething(monkey));

/* Do not modify tests */

test('should eat banana', () => {
  expect(eatSomething(monkey)).toBe('Eating banana!');
});

test('should eat mouse', () => {
  expect(eatSomething(snake)).toBe('Eating mouse!');
});
