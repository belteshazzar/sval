import * as estree from 'estree';
import Scope from '../scope';
export declare function ExpressionStatement(node: estree.ExpressionStatement, scope: Scope): void;
export interface BlockOptions {
    invasived?: boolean;
    hoisted?: boolean;
}
export declare function BlockStatement(block: estree.BlockStatement, scope: Scope, options?: BlockOptions): any;
export declare function EmptyStatement(): any;
export declare function DebuggerStatement(): any;
export declare function ReturnStatement(node: estree.ReturnStatement, scope: Scope): {
    RES: any;
};
export declare function BreakStatement(): string;
export declare function ContinueStatement(): string;
export declare function IfStatement(node: estree.IfStatement, scope: Scope): any;
export declare function SwitchStatement(node: estree.SwitchStatement, scope: Scope): any;
export declare function SwitchCase(node: estree.SwitchCase, scope: Scope): any;
export declare function ThrowStatement(node: estree.ThrowStatement, scope: Scope): void;
export declare function TryStatement(node: estree.TryStatement, scope: Scope): any;
export declare function CatchClause(node: estree.CatchClause, scope: Scope): any;
export declare function WhileStatement(node: estree.WhileStatement, scope: Scope): any;
export declare function DoWhileStatement(node: estree.DoWhileStatement, scope: Scope): any;
export declare function ForStatement(node: estree.ForStatement, scope: Scope): any;
export declare function ForInStatement(node: estree.ForInStatement, scope: Scope): any;
export declare function ForOfStatement(node: estree.ForOfStatement, scope: Scope): any;
