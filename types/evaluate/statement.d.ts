import * as estree from 'estree';
import Scope from '../scope';
export declare function ExpressionStatement(node: estree.ExpressionStatement, scope: Scope): Generator<any, void, any>;
export interface BlockOptions {
    invasived?: boolean;
    hoisted?: boolean;
}
export declare function BlockStatement(block: estree.BlockStatement, scope: Scope, options?: BlockOptions): Generator<any, any, any>;
export declare function EmptyStatement(): IterableIterator<any>;
export declare function DebuggerStatement(): IterableIterator<any>;
export declare function ReturnStatement(node: estree.ReturnStatement, scope: Scope): Generator<any, {
    RES: any;
}, any>;
export declare function BreakStatement(): Generator<never, string, unknown>;
export declare function ContinueStatement(): Generator<never, string, unknown>;
export declare function IfStatement(node: estree.IfStatement, scope: Scope): Generator<any, any, any>;
export declare function SwitchStatement(node: estree.SwitchStatement, scope: Scope): Generator<any, any, any>;
export declare function SwitchCase(node: estree.SwitchCase, scope: Scope): Generator<any, any, any>;
export declare function ThrowStatement(node: estree.ThrowStatement, scope: Scope): Generator<any, void, any>;
export declare function TryStatement(node: estree.TryStatement, scope: Scope): Generator<any, any, any>;
export declare function CatchClause(node: estree.CatchClause, scope: Scope): Generator<any, any, any>;
export declare function WhileStatement(node: estree.WhileStatement, scope: Scope): Generator<any, any, any>;
export declare function DoWhileStatement(node: estree.DoWhileStatement, scope: Scope): Generator<any, any, any>;
export declare function ForStatement(node: estree.ForStatement, scope: Scope): Generator<any, any, any>;
export declare function ForInStatement(node: estree.ForInStatement, scope: Scope): Generator<any, any, any>;
export declare function ForOfStatement(node: estree.ForOfStatement, scope: Scope): Generator<any, any, any>;
