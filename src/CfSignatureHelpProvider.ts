import { SignatureHelpProvider, TextDocument, Position, CancellationToken, SignatureHelp } from "vscode";

export class CfnSignatureHelpProvider implements SignatureHelpProvider {
    provideSignatureHelp(document: TextDocument, position: Position, token: CancellationToken): Thenable<SignatureHelp> {
        throw new Error("Method not implemented.");

        //todo: add CFN function reference documentation
    }
}
