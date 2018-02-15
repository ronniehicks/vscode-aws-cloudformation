import { Base64, FindInMap, GetAtt, GetAZs, If, Join, Select, Ref } from ".";

export interface Split {
    name: "Fn::Split";
    shortName: "!Split";
    parameters: [
        { name: 'delimiter', type: string },
        { name: 'source string', type: string, canUse: Base64 | FindInMap | GetAtt | GetAZs | If | Join | Select | Ref }
    ];
    returnType: string[];
}
