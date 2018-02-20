import { HoverProvider, TextDocument, Position, CancellationToken, Hover, ProviderResult, MarkdownString } from "vscode";

import { Utils, MatchKind } from ".";

export class CfnHoverProvider implements HoverProvider {
    provideHover(document: TextDocument, position: Position, token: CancellationToken): ProviderResult<Hover> {

        const match = Utils.findWord(document, position);
        const test = Utils.resourceObject;
        let resource: any;
        switch (match.type) {
            case MatchKind.Property:
                //todo: find a way to reference file in location specific to extension
                resource = test['PropertyTypes'][match.word];
                return new Hover(this._parseResource(resource, match.type, match.word));
            case MatchKind.Resource:
                resource = test['ResourceTypes'][match.word];
                return new Hover(this._parseResource(resource, match.type, match.word));
            case MatchKind.LongFunction:
            case MatchKind.ShortFunction:
                //todo: find the object type and return documentation for it
                return new Hover(match.word);
            case MatchKind.PsuedoParameter:
                //todo: find the parameter and return documentation for it
                return new Hover(match.word);
            default:
                console.log('No hover information found for: ', JSON.stringify(match));
                return;
        }
    }

    private _parseResource(resource: any, resourceType: MatchKind, resourceName: string): MarkdownString {
        let result: MarkdownString = new MarkdownString();

        result.appendText(`(${resourceType}) ${resourceName}\n\n`);
        result.appendMarkdown('---\n');

        result.appendText('Properties\n\n');
        for (const key in resource['Properties']) {
            if (resource['Properties'].hasOwnProperty(key)) {
                const element = resource['Properties'][key];
                result.appendMarkdown(`**${key}**\n\n`);
                result.appendMarkdown(`  Required: ${element.Required}\n\n`);
                result.appendMarkdown(`  Type: ${element.PrimitiveType}\n\n`);
                result.appendMarkdown(`  Documentation: [here](${element.Documentation})\n\n`);
                result.appendMarkdown(`  UpdateType: ${element.UpdateType}\n\n`);
                result.appendMarkdown('---\n');
            }
        }

        result.appendMarkdown(`Click [here](${resource.Documentation}) for more information.`);

        return result;
    }
}
