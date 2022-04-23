export const MODEL_IS_REQUIRED = new Error(
  'Model is required with a minimum length of 3 characters.',
);

export const YEAR_IS_REQUIRED = new Error(
  'Year is required with a value between 1900 and 2022',
);

export const COLOR_IS_REQUIRED = new Error(
  'Color is required with a minimum length of 3 characters.',
);

export const STATUS_SHOULD_BE_BOOL = new Error(
  'Status should be a boolean type.',
);

export const BUY_VALUE_IS_REQUIRED = new Error(
  'Buy value is required and should be a integer type.',
);

export const DOORS_QTY_IS_REQUIRED = new Error(
  'Doors qunatity is required with a value between 2 and 4',
);

export const SEATS_QTY_IS_REQUIRED = new Error(
  'Seats qunatity is required with a value between 2 and 7',
);
