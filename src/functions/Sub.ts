import { Base64, FindInMap, GetAtt, GetAZs, If, ImportValue, Join, Select, Ref } from ".";

export interface Sub {
    name: "Fn::Sub";
    shortName: "!Sub";
    parameters: [
        { name: 'String', type: string, canUse: Base64 | FindInMap | GetAtt | GetAZs | If | ImportValue | Join | Select | Ref },
        { name: 'VarName', type: string, canUse: Base64 | FindInMap | GetAtt | GetAZs | If | ImportValue | Join | Select | Ref },
        { name: 'VarValue', type: string, canUse: Base64 | FindInMap | GetAtt | GetAZs | If | ImportValue | Join | Select | Ref }
    ];
    returnType: string;
}
