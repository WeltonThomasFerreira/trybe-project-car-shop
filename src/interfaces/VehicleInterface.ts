export interface Vehicle {
  model: string; // min(3)
  year: number; // >= 1900 && <= 2022
  color: string; // min(3)
  status?: boolean;
  buyValue: number; // only INT
}
