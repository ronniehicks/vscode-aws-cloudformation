import { HoverProvider, TextDocument, Position, CancellationToken, Hover } from "vscode";

export class CfnHoverProvider implements HoverProvider {
    provideHover(document: TextDocument, position: Position, token: CancellationToken): Thenable<Hover> {
        throw new Error("Method not implemented.");

        //todo: detect the currently selected word and parse the documentation from the provided resource spec
    }
}
