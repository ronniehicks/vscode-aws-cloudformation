import { TextDocument, Position } from "vscode";

import { MatchKind } from ".";

export class Utils {
    static cfProperty = new RegExp('\\bAWS::\\w+::\\w+\\.\\w+\\b');
    static cfResource = new RegExp('\\bAWS::\\w+::\\w+\\b');
    static cfPsuedoParameter = new RegExp('\\bAWS::\\w+\\b');
    static cfLongFunction = new RegExp('\\bFn::\\w+\\b');
    static cfShortFunction = new RegExp('!\\w+\\b');

    static findWord(document: TextDocument, position: Position): { word: string, type: MatchKind } {
        let type: MatchKind = MatchKind.Property;
        let range = document.getWordRangeAtPosition(position, this.cfProperty);
        if (!range) {
            [range, type] = [range || document.getWordRangeAtPosition(position, this.cfResource), MatchKind.Resource];
        }
        if (!range) {
            [range, type] = [range || document.getWordRangeAtPosition(position, this.cfPsuedoParameter), MatchKind.PsuedoParameter];
        }
        if (!range) {
            [range, type] = [range || document.getWordRangeAtPosition(position, this.cfLongFunction), MatchKind.LongFunction];
        }
        if (!range) {
            [range, type] = [range || document.getWordRangeAtPosition(position, this.cfShortFunction), MatchKind.ShortFunction];
        }

        if (!range) {
            console.log('No token found, falling back to default');
            [range, type] = [document.getWordRangeAtPosition(position), MatchKind.Other];
        }

        const match = { word: document.getText(range), type };
        console.log('Word found: ', JSON.stringify(match));
        return match;
    }
}
