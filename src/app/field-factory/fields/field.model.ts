export interface Field {
  validate: () => boolean;
  value: number | string;
}
