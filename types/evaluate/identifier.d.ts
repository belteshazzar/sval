import * as estree from 'estree';
import Scope from '../scope';
export interface IdentifierOptions {
    getVar?: boolean;
    throwErr?: boolean;
}
export declare function Identifier(node: estree.Identifier, scope: Scope, options?: IdentifierOptions): Generator<never, any, unknown>;
