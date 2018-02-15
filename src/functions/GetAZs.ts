import { Ref } from ".";

export interface GetAZs {
    name: "Fn::GetAZs";
    shortName: "!GetAZs";
    parameters: [
        { name: 'region', type: string, canUse: Ref }
    ];
    returnType: any[];
}
