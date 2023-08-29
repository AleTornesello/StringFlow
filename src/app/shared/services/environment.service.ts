import { Inject, Injectable } from '@angular/core';
import { Environment } from "../../core/models/environment";

@Injectable({
  providedIn: 'root'
})
export class EnvironmentService {
  private readonly _environment: Environment;

  constructor(@Inject('environment') environment: Environment) {
    this._environment = environment;
  }

  public get environment(): Environment {
    return this._environment;
  }
}
