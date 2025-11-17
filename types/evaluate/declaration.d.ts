import { VarKind } from '../scope/variable';
import * as estree from 'estree';
import Scope from '../scope';
export declare function FunctionDeclaration(node: estree.FunctionDeclaration, scope: Scope): IterableIterator<any>;
export interface VariableDeclarationOptions {
    hoist?: boolean;
    onlyBlock?: boolean;
    feed?: any;
}
export declare function VariableDeclaration(node: estree.VariableDeclaration, scope: Scope, options?: VariableDeclarationOptions): Generator<any, void, any>;
export interface VariableDeclaratorOptions {
    kind?: VarKind;
}
export declare function VariableDeclarator(node: estree.VariableDeclarator, scope: Scope, options?: VariableDeclaratorOptions & VariableDeclarationOptions): Generator<any, void, any>;
export declare function ClassDeclaration(node: estree.ClassDeclaration, scope: Scope): IterableIterator<any>;
export interface ClassOptions {
    klass?: (...args: any[]) => void;
    superClass?: (...args: any[]) => void;
}
export declare function ClassBody(node: estree.ClassBody, scope: Scope, options?: ClassOptions): Generator<any, void, any>;
export declare function MethodDefinition(node: estree.MethodDefinition, scope: Scope, options?: ClassOptions): Generator<any, void, any>;
