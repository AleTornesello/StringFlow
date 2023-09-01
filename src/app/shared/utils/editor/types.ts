import {ClassicPreset, GetSchemes} from "rete";
import {AngularArea2D} from "rete-angular-plugin/16";

export type Schemes = GetSchemes<
  ClassicPreset.Node,
  ClassicPreset.Connection<ClassicPreset.Node, ClassicPreset.Node>
>;

export type AreaExtra = AngularArea2D<Schemes>;
