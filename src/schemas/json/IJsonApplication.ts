import type { OpenApi, OpenApiV3 } from "@samchon/openapi";

declare const tag: unique symbol;

export type IJsonApplication<Version extends "3.0" | "3.1" = "3.1", Types = unknown[]> =
  Version extends "3.0" ? IJsonApplication.IV3_0<Types> : IJsonApplication.IV3_1<Types>;
export namespace IJsonApplication {
  export interface IV3_0<Types> {
    [tag]: Types;
    version: "3.0";
    schemas: OpenApiV3.IJsonSchema[];
    components: OpenApiV3.IComponents;
  }
  export interface IV3_1<Types> {
    [tag]: Types;
    version: "3.1";
    components: OpenApi.IComponents;
    schemas: OpenApi.IJsonSchema[];
  }
}
