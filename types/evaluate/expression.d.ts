import * as estree from 'estree';
import Scope from '../scope';
export declare function ThisExpression(node: estree.ThisExpression, scope: Scope): Generator<never, any, unknown>;
export declare function ArrayExpression(node: estree.ArrayExpression, scope: Scope): Generator<any, any[], any>;
export declare function ObjectExpression(node: estree.ObjectExpression, scope: Scope): Generator<any, {
    [key: string]: any;
}, any>;
export declare function FunctionExpression(node: estree.FunctionExpression, scope: Scope): Generator<never, any, unknown>;
export declare function UnaryExpression(node: estree.UnaryExpression, scope: Scope): Generator<any, number | boolean | "string" | "number" | "bigint" | "boolean" | "symbol" | "undefined" | "object" | "function", any>;
export declare function UpdateExpression(node: estree.UpdateExpression, scope: Scope): Generator<any, any, any>;
export declare function BinaryExpression(node: estree.BinaryExpression, scope: Scope): Generator<any, any, any>;
export declare function AssignmentExpression(node: estree.AssignmentExpression, scope: Scope): Generator<any, any, any>;
export declare function LogicalExpression(node: estree.LogicalExpression, scope: Scope): Generator<any, any, any>;
export interface MemberExpressionOptions {
    getObj?: boolean;
    getVar?: boolean;
}
export declare function MemberExpression(node: estree.MemberExpression, scope: Scope, options?: MemberExpressionOptions): Generator<any, any, any>;
export declare function ConditionalExpression(node: estree.ConditionalExpression, scope: Scope): Generator<any, any, any>;
export declare function CallExpression(node: estree.CallExpression, scope: Scope): Generator<any, any, any>;
export declare function NewExpression(node: estree.NewExpression, scope: Scope): Generator<any, any, any>;
export declare function MetaProperty(node: estree.MetaProperty, scope: Scope): Generator<never, any, unknown>;
export declare function SequenceExpression(node: estree.SequenceExpression, scope: Scope): Generator<any, any, any>;
export declare function ArrowFunctionExpression(node: estree.ArrowFunctionExpression, scope: Scope): Generator<never, any, unknown>;
export declare function TemplateLiteral(node: estree.TemplateLiteral, scope: Scope): Generator<any, string, any>;
export declare function TaggedTemplateExpression(node: estree.TaggedTemplateExpression, scope: Scope): Generator<any, any, any>;
export declare function TemplateElement(node: estree.TemplateElement, scope: Scope): Generator<never, string, unknown>;
export declare function ClassExpression(node: estree.ClassExpression, scope: Scope): Generator<any, () => void, any>;
export interface SuperOptions {
    getProto?: boolean;
}
export declare function Super(node: estree.Super, scope: Scope, options?: SuperOptions): Generator<never, any, unknown>;
export declare function SpreadElement(node: estree.SpreadElement, scope: Scope): Generator<any, any, any>;
export declare function ChainExpression(node: any, scope: Scope): Generator<any, any, any>;
export declare function YieldExpression(node: estree.YieldExpression, scope: Scope): Generator<any, any, any>;
export declare function AwaitExpression(node: estree.AwaitExpression, scope: Scope): Generator<any, any, any>;
