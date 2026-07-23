import {
  CaramelDecorator,
  MilkDecorator,
  SimpleCoffee,
  WhipDecorator,
} from "./patterns/decorator";
import { AppLogger } from "./patterns/singleton";
import {
  ExpressShipping,
  PickupShipping,
  ShippingContext,
  StandardShipping,
} from "./patterns/strategy";

function demoSingleton(): void {
  console.log("\n=== Singleton ===");

  const a = AppLogger.getInstance();
  const b = AppLogger.getInstance();

  a.info("Logger ready");
  b.info("Same instance writing again");

  console.log("Same instance?", a === b);
  console.log("Log count:", a.getLogs().length);
}

function demoStrategy(): void {
  console.log("\n=== Strategy ===");

  const logger = AppLogger.getInstance();
  const shipping = new ShippingContext(new StandardShipping());
  const weightKg = 2.5;

  for (const strategy of [
    new StandardShipping(),
    new ExpressShipping(),
    new PickupShipping(),
  ]) {
    shipping.setStrategy(strategy);
    const quote = shipping.quote(weightKg);
    logger.info(
      `${quote.method} for ${weightKg}kg → $${quote.cost.toFixed(2)}`,
    );
  }
}

function demoDecorator(): void {
  console.log("\n=== Decorator ===");

  const logger = AppLogger.getInstance();

  let drink = new SimpleCoffee();
  logger.info(`${drink.description()} → $${drink.cost().toFixed(2)}`);

  drink = new MilkDecorator(drink);
  logger.info(`${drink.description()} → $${drink.cost().toFixed(2)}`);

  drink = new WhipDecorator(drink);
  logger.info(`${drink.description()} → $${drink.cost().toFixed(2)}`);

  drink = new CaramelDecorator(drink);
  logger.info(`${drink.description()} → $${drink.cost().toFixed(2)}`);
}

function main(): void {
  console.log("Design patterns mini demo (Singleton · Strategy · Decorator)");
  demoSingleton();
  demoStrategy();
  demoDecorator();
}

main();
