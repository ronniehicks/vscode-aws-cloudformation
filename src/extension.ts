'use strict';
import * as vscode from 'vscode';
import { CfnHoverProvider, CfnCompletionItemProvider, CfnSignatureHelpProvider } from '.';

const CFN_SELECTOR: vscode.DocumentFilter = { language: 'yaml' };
let diagnosticCollection: vscode.DiagnosticCollection;

export function activate(context: vscode.ExtensionContext) {

    console.log('Congratulations, your extension "vscode-aws-cfn" is now active!');
    diagnosticCollection = vscode.languages.createDiagnosticCollection('yaml');

    // todo: pull from settings
    const triggerProviders: string[] = ['::', '!', '$'];

    context.subscriptions.push(
        vscode.languages.registerHoverProvider(CFN_SELECTOR, new CfnHoverProvider()),
        vscode.languages.registerCompletionItemProvider(CFN_SELECTOR, new CfnCompletionItemProvider(), ...triggerProviders),
        vscode.languages.registerSignatureHelpProvider(CFN_SELECTOR, new CfnSignatureHelpProvider()),
        vscode.workspace.onDidChangeTextDocument(documentChanged),
        diagnosticCollection
    );

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
