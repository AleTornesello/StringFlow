export class ObjectUtils {
  public static parseFormValues<T extends object>(
    data: T,
    predicate: (param: any) => any
  ) {
    const dt = data;

    Object.keys(data as object).forEach((key) => {
      (dt as T)[key as keyof T] = predicate((data as T)[key as keyof T]);
    });

    return dt as T;
  }

  public static formEveryEqualsTo<T extends object>(changed: T, initial: T) {
    return Object.keys(changed).every(
      (key) => (changed as T)[key as keyof T] == (initial as T)[key as keyof T]
    );
  }
}
