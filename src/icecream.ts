enum IceCreamSize {
  Small = "small",
  Big = "big",
}

const calcIcecreamPrice = () => {
  const size: string | null = prompt("1 - великий стаканчик \n 2 - малий", "2");
  const icecreamBuilder: IceCreamBuilder = new IceCreamBuilder();
  if (size === "1") {
    icecreamBuilder.changeSize(IceCreamSize.Big);
  } else {
    icecreamBuilder.changeSize(IceCreamSize.Small);
  }
  const chocolate: string | null = prompt("Додати шоколад Так/Ні", "Так");
  const caramel: string | null = prompt("Додати карамель Так/Ні", "Так");
  const berries: string | null = prompt("Додати ягоди Так/Ні", "Так");

  if (chocolate !== "Так" && caramel !== "Так" && berries !== "Так") {
    alert("Потрібно мінімум 1 добавка");
    return;
  }
  const marshmello: string | null = prompt("Додати маршмелоу Так/Ні", "Так");

  if (chocolate === "Так") {
    icecreamBuilder.addChocolate();
  }
  if (berries === "Так") {
    icecreamBuilder.addBerries();
  }
  if (caramel === "Так") {
    icecreamBuilder.addCaramel();
  }
  if (marshmello === "Так") {
    icecreamBuilder.addMarshmello();
  }

  const iceream = icecreamBuilder.cook();
  alert(iceream.checkout());
};
class IceCreamBuilder {
  private size: IceCreamSize = IceCreamSize.Small;
  private chocolate: boolean = false;
  private caramel: boolean = false;
  private marshmello: boolean = false;
  private berries: boolean = false;

  addChocolate(): void {
    this.chocolate = true;
  }
  addCaramel(): void {
    this.caramel = true;
  }
  addBerries(): void {
    this.berries = true;
  }
  addMarshmello(): void {
    this.marshmello = true;
  }
  changeSize(size: IceCreamSize): void {
    this.size = size;
  }
  cook() {
    return new IceCream(
      this.size,
      this.chocolate,
      this.caramel,
      this.berries,
      this.marshmello
    );
  }
}

class IceCream {
  private price = 0;
  private size: IceCreamSize = IceCreamSize.Small;
  private chocolate: boolean = false;
  private caramel: boolean = false;
  private marshmello: boolean = false;
  private berries: boolean = false;
  constructor(
    size: IceCreamSize,
    chocolate: boolean,
    caramel: boolean,
    berries: boolean,
    marshmello: boolean
  ) {
    this.size = size;
    this.caramel = caramel;
    this.chocolate = chocolate;
    this.berries = berries;
    this.marshmello = marshmello;
  }

  checkout(): number {
    if (this.size === IceCreamSize.Big) {
      this.price += 25;
    }
    if (this.size === IceCreamSize.Small) {
      this.price += 10;
    }
    if (this.berries) {
      this.price += 10;
    }
    if (this.chocolate) {
      this.price += 5;
    }
    if (this.caramel) {
      this.price += 6;
    }
    return this.price;
  }
}
calcIcecreamPrice();
