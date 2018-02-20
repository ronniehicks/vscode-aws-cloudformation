'use strict';
import * as vscode from 'vscode';
import * as fs from 'fs';

import { CfnHoverProvider, CfnCompletionItemProvider, CfnSignatureHelpProvider, Utils } from '.';

const CFN_SELECTOR: vscode.DocumentFilter = { language: 'yaml' };
let diagnosticCollection: vscode.DiagnosticCollection;

export function activate(context: vscode.ExtensionContext) {

    fs.readFile(Utils.resourceFile, 'utf8', (err, data) => {
        if (err) { throw err; }
        Utils.resourceObject = JSON.parse(data);
    });

    diagnosticCollection = vscode.languages.createDiagnosticCollection('yaml');

    // todo: pull from settings
    const triggerCharacters: string[] = ['!', '$'];

    context.subscriptions.push(
        vscode.languages.registerHoverProvider(CFN_SELECTOR, new CfnHoverProvider()),
        vscode.languages.registerCompletionItemProvider(CFN_SELECTOR, new CfnCompletionItemProvider(), ...triggerCharacters),
        vscode.languages.registerSignatureHelpProvider(CFN_SELECTOR, new CfnSignatureHelpProvider(), ...triggerCharacters),
        vscode.workspace.onDidChangeTextDocument(documentChanged),
        diagnosticCollection
    );
    console.log('Congratulations, your extension "vscode-aws-cfn" is now active!');

    // future wishes
    // Go To Definition: https://code.visualstudio.com/docs/extensionAPI/language-support#_show-definitions-of-a-symbol
    // Find all References: https://code.visualstudio.com/docs/extensionAPI/language-support#_show-definitions-of-a-symbol
    // rename: https://code.visualstudio.com/docs/extensionAPI/language-support#_rename-symbols
    // correct actions: https://code.visualstudio.com/docs/extensionAPI/language-support#_possible-actions-on-errors-or-warnings
}

function documentChanged(event: vscode.TextDocumentChangeEvent) {
}

// this method is called when your extension is deactivated
export function deactivate() {
}
