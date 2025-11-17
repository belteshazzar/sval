import { Node, Program } from 'estree';
export interface SvalOptions {
    ecmaVer?: 3 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 2015 | 2016 | 2017 | 2018 | 2019 | 2020 | 2021 | 2022 | 2023 | 2024 | 2025 | 'latest';
    sandBox?: boolean;
}
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
    parse(code: string, parser?: (code: string, options: any) => Node): import("acorn").Program | import("estree").Property | import("estree").CatchClause | import("estree").ClassDeclaration | import("estree").ClassExpression | import("estree").ClassBody | import("estree").Identifier | import("estree").SimpleLiteral | import("estree").RegExpLiteral | import("estree").BigIntLiteral | import("estree").ThisExpression | import("estree").ArrayExpression | import("estree").ObjectExpression | import("estree").FunctionExpression | import("estree").UnaryExpression | import("estree").UpdateExpression | import("estree").BinaryExpression | import("estree").AssignmentExpression | import("estree").LogicalExpression | import("estree").MemberExpression | import("estree").ConditionalExpression | import("estree").SimpleCallExpression | import("estree").NewExpression | import("estree").SequenceExpression | import("estree").ArrowFunctionExpression | import("estree").YieldExpression | import("estree").TemplateLiteral | import("estree").TaggedTemplateExpression | import("estree").MetaProperty | import("estree").AwaitExpression | import("estree").ChainExpression | import("estree").ImportExpression | import("estree").FunctionDeclaration | import("estree").MethodDefinition | import("estree").ImportDeclaration | import("estree").ExportNamedDeclaration | import("estree").ExportDefaultDeclaration | import("estree").ExportAllDeclaration | import("estree").ImportSpecifier | import("estree").ImportDefaultSpecifier | import("estree").ImportNamespaceSpecifier | import("estree").ExportSpecifier | import("estree").ObjectPattern | import("estree").ArrayPattern | import("estree").RestElement | import("estree").AssignmentPattern | import("estree").PrivateIdentifier | Program | import("estree").PropertyDefinition | import("estree").SpreadElement | import("estree").ExpressionStatement | import("estree").BlockStatement | import("estree").StaticBlock | import("estree").EmptyStatement | import("estree").DebuggerStatement | import("estree").WithStatement | import("estree").ReturnStatement | import("estree").LabeledStatement | import("estree").BreakStatement | import("estree").ContinueStatement | import("estree").IfStatement | import("estree").SwitchStatement | import("estree").ThrowStatement | import("estree").TryStatement | import("estree").WhileStatement | import("estree").DoWhileStatement | import("estree").ForStatement | import("estree").ForInStatement | import("estree").ForOfStatement | import("estree").VariableDeclaration | import("estree").Super | import("estree").SwitchCase | import("estree").TemplateElement | import("estree").VariableDeclarator;
    run(code: string | Node): void;
}
export default Sval;
