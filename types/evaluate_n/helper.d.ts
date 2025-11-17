import * as estree from 'estree';
import Scope from '../scope';
import { PatternOptions } from './pattern';
export interface hoistOptions {
    onlyBlock?: boolean;
}
export declare function hoist(block: estree.Program | estree.BlockStatement, scope: Scope, options?: hoistOptions): void;
export declare function pattern(node: estree.Pattern, scope: Scope, options?: PatternOptions): any;
export interface CtorOptions {
    superClass?: (...args: any[]) => any;
    isCtor?: boolean;
}
export declare function createFunc(node: estree.FunctionDeclaration | estree.FunctionExpression | estree.ArrowFunctionExpression, scope: Scope, options?: CtorOptions): any;
export declare function createClass(node: estree.ClassDeclaration | estree.ClassExpression, scope: Scope): () => void;
export interface ForXHandlerOptions {
    value: any;
}
export declare function ForXHandler(node: estree.ForInStatement | estree.ForOfStatement, scope: Scope, options: ForXHandlerOptions): any;
