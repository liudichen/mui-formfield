interface optionType {
  value: any;
  label: any;
}
declare const fetchFieldOptions: (optionsProp?: any[] | undefined, request?: (() => any[]) | undefined, callback?: (<T>(value: T[]) => T[]) | undefined) => Promise<optionType[]>;
export default fetchFieldOptions;
