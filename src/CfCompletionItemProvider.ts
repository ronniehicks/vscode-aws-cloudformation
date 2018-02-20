import { CompletionItemProvider, ProviderResult, CompletionItem, CompletionList, CompletionContext, CancellationToken, Position, TextDocument } from 'vscode';
import { Utils } from '.';

export class CfnCompletionItemProvider implements CompletionItemProvider {
    provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList> {
        let items: ProviderResult<CompletionItem[]> = [];

        if (token.isCancellationRequested) {
            return items;
        }

        const word = Utils.findWord(document, position);
        if (!word) {
            return items;
        }

        //todo: parse the current location in the document and, after parsing resource specification, provide intelligent suggestions
        throw new Error("Method not implemented.");
    }
}
