import { VarKind } from '../scope/variable';
import * as estree from 'estree';
import Scope from '../scope';
export interface PatternOptions {
    kind?: VarKind;
    hoist?: boolean;
    onlyBlock?: boolean;
    feed?: any;
}
export declare function ObjectPattern(node: estree.ObjectPattern, scope: Scope, options?: PatternOptions): Generator<any, void, any>;
export declare function ArrayPattern(node: estree.ArrayPattern, scope: Scope, options?: PatternOptions): Generator<any, any[], any>;
export declare function RestElement(node: estree.RestElement, scope: Scope, options?: PatternOptions): Generator<any, void, any>;
export declare function AssignmentPattern(node: estree.AssignmentPattern, scope: Scope, options?: PatternOptions): Generator<any, void, any>;
