import { Base64, FindInMap, If, Join, Select, Split, Sub, Ref } from ".";

export interface ImportValue {
    name: "Fn::ImportValue";
    shortName: "!ImportValue";
    parameters: [
        { name: 'sharedValueToImport', type: string, canUse: Base64 | FindInMap | If | Join | Select | Split | Sub | Ref }
    ];
    returnType: any;
}
