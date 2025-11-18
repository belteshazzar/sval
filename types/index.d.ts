import { ArrayExpression } from 'estree';
import { ArrayPattern } from 'estree';
import { ArrowFunctionExpression } from 'estree';
import { AssignmentExpression } from 'estree';
import { AssignmentPattern } from 'estree';
import { AwaitExpression } from 'estree';
import { BigIntLiteral } from 'estree';
import { BinaryExpression } from 'estree';
import { BlockStatement } from 'estree';
import { BreakStatement } from 'estree';
import { CatchClause } from 'estree';
import { ChainExpression } from 'estree';
import { ClassBody } from 'estree';
import { ClassDeclaration } from 'estree';
import { ClassExpression } from 'estree';
import { ConditionalExpression } from 'estree';
import { ContinueStatement } from 'estree';
import { DebuggerStatement } from 'estree';
import { DoWhileStatement } from 'estree';
import { EmptyStatement } from 'estree';
import { ExportAllDeclaration } from 'estree';
import { ExportDefaultDeclaration } from 'estree';
import { ExportNamedDeclaration } from 'estree';
import { ExportSpecifier } from 'estree';
import { ExpressionStatement } from 'estree';
import { ForInStatement } from 'estree';
import { ForOfStatement } from 'estree';
import { ForStatement } from 'estree';
import { FunctionDeclaration } from 'estree';
import { FunctionExpression } from 'estree';
import { Identifier } from 'estree';
import { IfStatement } from 'estree';
import { ImportDeclaration } from 'estree';
import { ImportDefaultSpecifier } from 'estree';
import { ImportExpression } from 'estree';
import { ImportNamespaceSpecifier } from 'estree';
import { ImportSpecifier } from 'estree';
import { LabeledStatement } from 'estree';
import { LogicalExpression } from 'estree';
import { MemberExpression } from 'estree';
import { MetaProperty } from 'estree';
import { MethodDefinition } from 'estree';
import { NewExpression } from 'estree';
import { Node as Node_2 } from 'estree';
import { ObjectExpression } from 'estree';
import { ObjectPattern } from 'estree';
import { PrivateIdentifier } from 'estree';
import { Program } from 'acorn';
import { Program as Program_2 } from 'estree';
import { Property } from 'estree';
import { PropertyDefinition as PropertyDefinition_2 } from 'estree';
import { RegExpLiteral } from 'estree';
import { RestElement } from 'estree';
import { ReturnStatement } from 'estree';
import { SequenceExpression } from 'estree';
import { SimpleCallExpression } from 'estree';
import { SimpleLiteral } from 'estree';
import { SpreadElement } from 'estree';
import { StaticBlock } from 'estree';
import { Super } from 'estree';
import { SwitchCase } from 'estree';
import { SwitchStatement } from 'estree';
import { TaggedTemplateExpression } from 'estree';
import { TemplateElement } from 'estree';
import { TemplateLiteral } from 'estree';
import { ThisExpression } from 'estree';
import { ThrowStatement } from 'estree';
import { TryStatement } from 'estree';
import { UnaryExpression } from 'estree';
import { UpdateExpression } from 'estree';
import { VariableDeclaration } from 'estree';
import { VariableDeclarator } from 'estree';
import { WhileStatement } from 'estree';
import { WithStatement } from 'estree';
import { YieldExpression } from 'estree';

declare class Sval {
    static version: string;
    private options;
    private scope;
    exports: {
        [name: string]: any;
    };
    constructor(options?: SvalOptions);
    import(nameOrModules: string | {
        [name: string]: any;
    }, mod?: any): void;
    parse(code: string, parser?: (code: string, options: any) => Node_2): Program | Property | CatchClause | ClassDeclaration | ClassExpression | ClassBody | Identifier | SimpleLiteral | RegExpLiteral | BigIntLiteral | ThisExpression | ArrayExpression | ObjectExpression | FunctionExpression | UnaryExpression | UpdateExpression | BinaryExpression | AssignmentExpression | LogicalExpression | MemberExpression | ConditionalExpression | SimpleCallExpression | NewExpression | SequenceExpression | ArrowFunctionExpression | YieldExpression | TemplateLiteral | TaggedTemplateExpression | MetaProperty | AwaitExpression | ChainExpression | ImportExpression | FunctionDeclaration | MethodDefinition | ImportDeclaration | ExportNamedDeclaration | ExportDefaultDeclaration | ExportAllDeclaration | ImportSpecifier | ImportDefaultSpecifier | ImportNamespaceSpecifier | ExportSpecifier | ObjectPattern | ArrayPattern | RestElement | AssignmentPattern | PrivateIdentifier | Program_2 | PropertyDefinition_2 | SpreadElement | ExpressionStatement | BlockStatement | StaticBlock | EmptyStatement | DebuggerStatement | WithStatement | ReturnStatement | LabeledStatement | BreakStatement | ContinueStatement | IfStatement | SwitchStatement | ThrowStatement | TryStatement | WhileStatement | DoWhileStatement | ForStatement | ForInStatement | ForOfStatement | VariableDeclaration | Super | SwitchCase | TemplateElement | VariableDeclarator;
    run(code: string | Node_2): void;
}
export default Sval;

export declare interface SvalOptions {
    ecmaVer?: 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 'latest';
    sandBox?: boolean;
}

export { }
