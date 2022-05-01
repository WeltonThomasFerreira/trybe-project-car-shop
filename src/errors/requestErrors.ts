export const modelIsRequired = new Error(
  'Model is required with a minimum length of 3 characters.',
);

export const yearIsRequired = new Error(
  'Year is required with a value between 1900 and 2022',
);

export const colorIsRequired = new Error(
  'Color is required with a minimum length of 3 characters.',
);

export const statusShouldBeBool = new Error('Status should be a boolean type.');

export const buyValueIsRequired = new Error(
  'Buy value is required and should be a integer type.',
);

export const doorsQtyIsRequired = new Error(
  'Doors qunatity is required with a value between 2 and 4',
);

export const seatsQtyIsRequired = new Error(
  'Seats qunatity is required with a value between 2 and 7',
);

export const malformedId = new Error('Id must have 24 hexadecimal characters');

export const invalidId = new Error('Object not found');
