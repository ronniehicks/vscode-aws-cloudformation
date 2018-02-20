import { SignatureHelpProvider, TextDocument, Position, CancellationToken, SignatureHelp } from "vscode";

import { Utils } from ".";

export class CfnSignatureHelpProvider implements SignatureHelpProvider {
    provideSignatureHelp(document: TextDocument, position: Position, token: CancellationToken): Thenable<SignatureHelp> {

        const word = Utils.findWord(document, position);

        throw new Error("Method not implemented.");

        //todo: add CFN function reference documentation
    }
}
