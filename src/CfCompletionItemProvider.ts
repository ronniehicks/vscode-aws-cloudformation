import { CompletionItemProvider, ProviderResult, CompletionItem, CompletionList, CompletionContext, CancellationToken, Position, TextDocument } from 'vscode';

export class CfnCompletionItemProvider implements CompletionItemProvider {
    provideCompletionItems(document: TextDocument, position: Position, token: CancellationToken, context: CompletionContext): ProviderResult<CompletionItem[] | CompletionList> {
        throw new Error("Method not implemented.");

        //todo: parse the current location in the document and, after parsing resource specification, provide intelligent suggestions
    }
}
