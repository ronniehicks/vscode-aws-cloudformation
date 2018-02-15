import { Ref } from ".";

export interface GetAtt {
    name: "Fn::GetAtt";
    shortName: "!GetAtt";
    parameters: [
        { name: 'logicalNameOfResource', type: string },
        { name: 'attributeName', type: string, canUse: Ref }
    ];
    returnType: any;
}
