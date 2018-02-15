import { Ref, FindInMap, GetAtt, GetAZs, If, Split } from ".";

export interface Select {
    name: "Fn::Select";
    shortName: "!Select";
    parameters: [
        { name: 'index', type: number, canUse: Ref | FindInMap },
        { name: 'listOfObjects', type: any[], canUse: FindInMap | GetAtt | GetAZs | If | Split | Ref }
    ];
    returnType: any;
}
