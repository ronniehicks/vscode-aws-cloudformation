import { HoverProvider, TextDocument, Position, CancellationToken, Hover } from "vscode";

import { Utils } from ".";

export class CfnHoverProvider implements HoverProvider {
    provideHover(document: TextDocument, position: Position, token: CancellationToken): Thenable<Hover> {

        const word = Utils.findWord(document, position);

        //todo: detect the currently selected word and parse the documentation from the provided resource spec
        throw new Error("Method not implemented.");
    }
}
