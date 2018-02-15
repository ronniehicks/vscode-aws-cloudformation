import { Base64, FindInMap, GetAtt, GetAZs, If, Join, Select, Ref } from ".";

export interface If {
    name: "Fn::If";
    shortName: "!If";
    parameters: [
        { name: 'condition_name', type: string },
        { name: 'value_if_true', type: any },
        { name: 'value_if_false', type: any }
    ];
    canUse: [Base64, FindInMap, GetAtt, GetAZs, If, Join, Select, Ref];
}
