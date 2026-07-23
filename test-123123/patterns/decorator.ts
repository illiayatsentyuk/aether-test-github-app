/**
 * Decorator — wrap an object to add behavior without changing its class.
 * Demo: a drink order with optional add-ons.
 */
export interface Drink {
  description(): string;
  cost(): number;
}

export class SimpleCoffee implements Drink {
  description(): string {
    return "Coffee";
  }

  cost(): number {
    return 3;
  }
}

abstract class DrinkDecorator implements Drink {
  constructor(protected readonly wrappee: Drink) {}

  abstract description(): string;
  abstract cost(): number;
}

export class MilkDecorator extends DrinkDecorator {
  description(): string {
    return `${this.wrappee.description()}, milk`;
  }

  cost(): number {
    return this.wrappee.cost() + 0.5;
  }
}

export class WhipDecorator extends DrinkDecorator {
  description(): string {
    return `${this.wrappee.description()}, whip`;
  }

  cost(): number {
    return this.wrappee.cost() + 0.7;
  }
}

export class CaramelDecorator extends DrinkDecorator {
  description(): string {
    return `${this.wrappee.description()}, caramel`;
  }

  cost(): number {
    return this.wrappee.cost() + 0.8;
  }
}
