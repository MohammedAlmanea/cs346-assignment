class Vehicle {
  constructor(name, componyName, vehicleId) {
    this.name = name;
    this.componyName = componyName;
    this.vehicleId = vehicleId;
  }
}

class Car extends Vehicle {
  constructor(name, componyName, vehicleId, carType) {
    super(name, componyName, vehicleId);
    this.carType = carType;
  }
}

class Plane extends Vehicle {
  constructor(name, componyName, vehicleId, PlaneType) {
    super(name, componyName, vehicleId);
    this.PlaneType = PlaneType;
  }
}

class Employee {
  constructor(name, BOD, ID) {
    this.name = name;
    this.BOD = BOD;
    this.ID = ID;
  }
}

class Driver extends Employee {
  constructor(name, BOD, ID, licenseID) {
    super(name, BOD, ID);
    this.licenseID = licenseID;
  }
}

class pilot extends Employee {
  constructor(name, BOD, ID, licenseID) {
    super(name, BOD, ID);
    this.licenseID = licenseID;
  }
}

class Reservation {
  constructor(reservationID, reservationDate, vehiclesId, employeeId) {
    this.reservationID = reservationID;
    this.reservationDate = reservationDate;
    this.vehiclesId = vehiclesId;
    this.employeeId = employeeId;
  }
}

let c1 = new Car('camry', 'toyota', 1111, 'gas');
let c2 = new Car('taurus', 'ford', 1112, 'gas');
let c3 = new Car('Model X ', 'Tesla', 1113, 'electric');

let p1 = new Plane('Airbus Beluga', 'Airbus', 1122, 'Outsize cargo');
let p2 = new Plane('Antonov An-124	', 'bureau', 1133, 'Transport');

let pilot1 = new pilot('Ali', '1/2/1988', 2111, 999);
let pilot2 = new pilot('seed', '11/2/1918', 9991, 119);

let Driver1 = new Driver('Hassen', '22/10/1998', 3333, 929);

function checkingPilot(employee, vehicle) {
  let reservedArray = [];

  if (!(employee instanceof pilot)) {
    console.log('incompatibility');
    return;
  }
  r = new Reservation(
    `${Math.floor(Math.random() * 10) + 1} ${
      Math.floor(Math.random() * 10) + 1
    }`,
    new Date(),
    vehicle.vehicleId,
    employee.ID
  );
  reservedArray.push(r);
  const Array = reservedArray.map((Item) => {
    return Item;
  });

  console.log(Array);
}

checkingPilot(pilot1, p1);
console.log('***********');
checkingPilot(Driver1, c1);
console.log('***********');
checkingPilot(pilot2, p1);
console.log('***********');
checkingPilot(Driver1, p1);
