export const createCar = {
  request: {
    body: {
      model: 'Ferrari Maranello',
      year: 1963,
      color: 'red',
      buyValue: 3500000,
      seatsQty: 2,
      doorsQty: 2,
    },
  },
  created: {
    model: 'Ferrari Maranello',
    year: 1963,
    color: 'red',
    buyValue: 3500000,
    doorsQty: 2,
    seatsQty: 2,
    _id: '626ee005031614acad316ba6',
    __v: 0,
  },
};

export const readCar = [
  {
    _id: '626ee005031614acad316ba6',
    model: 'Ferrari Maranello',
    year: 1963,
    color: 'red',
    buyValue: 3500000,
    doorsQty: 2,
    seatsQty: 2,
    __v: 0,
  },
  {
    _id: '626ef334031614acad316ba8',
    model: 'Ferrari Maranello',
    year: 1963,
    color: 'red',
    buyValue: 3500000,
    doorsQty: 2,
    seatsQty: 2,
    __v: 0,
  },
];

export const readOneCar = {
  request: {
    params: {
      id: '626ef334031614acad316ba8'
    }
  },
  response:   {
    _id: '626ef334031614acad316ba8',
    model: 'Ferrari Maranello',
    year: 1963,
    color: 'red',
    buyValue: 3500000,
    doorsQty: 2,
    seatsQty: 2,
    __v: 0,
  },
}
