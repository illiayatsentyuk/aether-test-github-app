/**
 * Strategy — swap algorithms at runtime behind one interface.
 * Demo: shipping cost calculators.
 */
export interface ShippingStrategy {
  readonly name: string;
  calculate(weightKg: number): number;
}

export class StandardShipping implements ShippingStrategy {
  readonly name = "Standard";

  calculate(weightKg: number): number {
    return 5 + weightKg * 1.2;
  }
}

export class ExpressShipping implements ShippingStrategy {
  readonly name = "Express";

  calculate(weightKg: number): number {
    return 12 + weightKg * 2.5;
  }
}

export class PickupShipping implements ShippingStrategy {
  readonly name = "Store pickup";

  calculate(_weightKg: number): number {
    return 0;
  }
}

export class ShippingContext {
  constructor(private strategy: ShippingStrategy) {}

  setStrategy(strategy: ShippingStrategy): void {
    this.strategy = strategy;
  }

  quote(weightKg: number): { method: string; cost: number } {
    return {
      method: this.strategy.name,
      cost: Number(this.strategy.calculate(weightKg).toFixed(2)),
    };
  }
}
