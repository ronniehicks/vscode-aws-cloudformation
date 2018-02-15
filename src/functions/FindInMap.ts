import { Ref } from ".";

export interface FindInMap {
    name: "Fn::FindInMap";
    shortName: "!FindInMap";
    parameters: [
        { name: 'MapName', type: string, canUse: FindInMap | Ref },
        { name: 'TopLevelKey', type: string, canUse: FindInMap | Ref },
        { name: 'SecondLevelKey', type: string, canUse: FindInMap | Ref }
    ];
    returnValue: any;
}
