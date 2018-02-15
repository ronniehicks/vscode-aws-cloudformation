import { Base64, FindInMap, GetAtt, GetAZs, If, ImportValue, Split, Select, Sub, Ref } from ".";

export interface Join {
    name: "Fn::Join";
    shortName: "!Join";
    parameters: [
        { name: 'delimiter', type: string },
        { name: 'ListOfValues', type: string[], canUse: Base64 | FindInMap | GetAtt | GetAZs | If | ImportValue | Join | Split | Select | Sub | Ref }
    ];
    returnType: string;
}
