import * as estree from 'estree';
import Scope from '../scope';
export declare function Literal(node: estree.Literal, scope: Scope): Generator<never, string | number | bigint | boolean | RegExp, unknown>;
