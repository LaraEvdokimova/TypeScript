Input::
//// [/lib/lib.d.ts]
/// <reference no-default-lib="true"/>
interface Boolean {}
interface Function {}
interface CallableFunction {}
interface NewableFunction {}
interface IArguments {}
interface Number { toExponential: any; }
interface Object {}
interface RegExp {}
interface String { charAt: any; }
interface Array<T> { length: number; [n: number]: T; }
interface ReadonlyArray<T> {}
declare const console: { log(msg: any): void; };

//// [/src/solution/src/common/nominal.ts]
/// <reference path="./types.d.ts" />
export declare type Nominal<T, Name extends string> = MyNominal<T, Name>;

//// [/src/solution/src/common/tsconfig.json]


//// [/src/solution/src/common/types.d.ts]
declare type MyNominal<T, Name extends string> = T & {
    specialKey: Name;
};

//// [/src/solution/src/subProject/index.ts]
import { Nominal } from '../common/nominal';
export type MyNominal = Nominal<string, 'MyNominal'>;

//// [/src/solution/src/subProject/tsconfig.json]


//// [/src/solution/src/subProject2/index.ts]
import { MyNominal } from '../subProject/index';
const variable = {
    key: 'value' as MyNominal,
};
export function getVar(): keyof typeof variable {
    return 'key';
}

//// [/src/solution/src/subProject2/tsconfig.json]


//// [/src/solution/src/tsconfig.json]


//// [/src/solution/tsconfig.base.json]
{"compilerOptions":{"rootDir":"./","outDir":"lib"}}

//// [/src/solution/tsconfig.json]
{"extends":"./tsconfig.base.json","compilerOptions":{"composite":true},"include":["./src/**/*.ts"]}



Output::
/lib/tsc --b /src/solution/tsconfig.json --verbose
[[90m12:00:00 AM[0m] Projects in this build: 
    * src/solution/tsconfig.json

[[90m12:00:00 AM[0m] Project 'src/solution/tsconfig.json' is out of date because output file 'src/solution/lib/src/common/nominal.js' does not exist

[[90m12:00:00 AM[0m] Building project '/src/solution/tsconfig.json'...

exitCode:: ExitStatus.Success


//// [/src/solution/lib/src/common/nominal.d.ts]
/// <reference path="../../../src/common/types.d.ts" />
export declare type Nominal<T, Name extends string> = MyNominal<T, Name>;


//// [/src/solution/lib/src/common/nominal.js]
"use strict";
exports.__esModule = true;
/// <reference path="./types.d.ts" />


//// [/src/solution/lib/src/subProject/index.d.ts]
import { Nominal } from '../common/nominal';
export declare type MyNominal = Nominal<string, 'MyNominal'>;


//// [/src/solution/lib/src/subProject/index.js]
"use strict";
exports.__esModule = true;


//// [/src/solution/lib/src/subProject2/index.d.ts]
declare const variable: {
    key: globalThis.MyNominal<string, "MyNominal">;
};
export declare function getVar(): keyof typeof variable;
export {};


//// [/src/solution/lib/src/subProject2/index.js]
"use strict";
exports.__esModule = true;
exports.getVar = void 0;
var variable = {
    key: 'value'
};
function getVar() {
    return 'key';
}
exports.getVar = getVar;


//// [/src/solution/lib/tsconfig.tsbuildinfo]
{
  "program": {
    "fileInfos": {
      "../../../lib/lib.d.ts": {
        "version": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "signature": "3858781397-/// <reference no-default-lib=\"true\"/>\ninterface Boolean {}\ninterface Function {}\ninterface CallableFunction {}\ninterface NewableFunction {}\ninterface IArguments {}\ninterface Number { toExponential: any; }\ninterface Object {}\ninterface RegExp {}\ninterface String { charAt: any; }\ninterface Array<T> { length: number; [n: number]: T; }\ninterface ReadonlyArray<T> {}\ndeclare const console: { log(msg: any): void; };",
        "affectsGlobalScope": true
      },
      "../src/common/types.d.ts": {
        "version": "23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};",
        "signature": "23815050294-declare type MyNominal<T, Name extends string> = T & {\n    specialKey: Name;\n};",
        "affectsGlobalScope": true
      },
      "../src/common/nominal.ts": {
        "version": "4107369137-/// <reference path=\"./types.d.ts\" />\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;",
        "signature": "-18894149496-/// <reference path=\"../../../src/common/types.d.ts\" />\r\nexport declare type Nominal<T, Name extends string> = MyNominal<T, Name>;\r\n",
        "affectsGlobalScope": false
      },
      "../src/subproject/index.ts": {
        "version": "-25117049605-import { Nominal } from '../common/nominal';\nexport type MyNominal = Nominal<string, 'MyNominal'>;",
        "signature": "-21416888433-import { Nominal } from '../common/nominal';\r\nexport declare type MyNominal = Nominal<string, 'MyNominal'>;\r\n",
        "affectsGlobalScope": false
      },
      "../src/subproject2/index.ts": {
        "version": "2747033208-import { MyNominal } from '../subProject/index';\nconst variable = {\n    key: 'value' as MyNominal,\n};\nexport function getVar(): keyof typeof variable {\n    return 'key';\n}",
        "signature": "-448645961-declare const variable: {\r\n    key: globalThis.MyNominal<string, \"MyNominal\">;\r\n};\r\nexport declare function getVar(): keyof typeof variable;\r\nexport {};\r\n",
        "affectsGlobalScope": false
      }
    },
    "options": {
      "rootDir": "..",
      "outDir": "./",
      "composite": true,
      "configFilePath": "../tsconfig.json"
    },
    "referencedMap": {
      "../src/common/nominal.ts": [
        "../src/common/types.d.ts"
      ],
      "../src/subproject/index.ts": [
        "../src/common/nominal.ts"
      ],
      "../src/subproject2/index.ts": [
        "../src/subproject/index.ts"
      ]
    },
    "exportedModulesMap": {
      "../src/subproject/index.ts": [
        "../src/common/nominal.ts"
      ]
    },
    "semanticDiagnosticsPerFile": [
      "../../../lib/lib.d.ts",
      "../src/common/nominal.ts",
      "../src/common/types.d.ts",
      "../src/subproject/index.ts",
      "../src/subproject2/index.ts"
    ]
  },
  "version": "FakeTSVersion"
}

