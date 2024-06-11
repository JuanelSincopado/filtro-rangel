export abstract class UseCase<Type, Param> {
  abstract call(params?: Param): Promise<Type>;
}
