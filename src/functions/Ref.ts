import { } from ".";

export interface Ref {
    name: "Ref";
    shortName: "!Ref";
    parameters: [
        { name: 'logicalName', type: string }
    ];
    returnType: string;
}
