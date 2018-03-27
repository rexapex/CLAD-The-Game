import {Dialog} from "./Dialog"

export class OptionDialog extends Dialog
{
    constructor(text: string, speaker: string, protected options: {text: string, dialog: Dialog})
    {
        super(text, speaker);
    }
}
