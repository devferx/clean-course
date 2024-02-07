import { Tesla, Audi, Toyota, Honda, Volvo, Vehicle } from './03-liskov-b';

(() => {
  const printCarSeats = (cars: Vehicle[]) => {
    cars.forEach((car) => {
      const carName = car.constructor.name;
      const numberOfSeats = car.getNumberOfSeats();
      console.log({ carName, numberOfSeats });
    });
  };

  const cars = [new Tesla(7), new Audi(2), new Toyota(5), new Honda(5)];

  printCarSeats(cars);
})();
