export interface Base64 {
    name: "Fn::Base64";
    shortName: "!Base64";
    parameters: [{ name: 'valueToEncode', type: string }];
    returnType: string;
}
