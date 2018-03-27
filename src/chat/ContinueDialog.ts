import {Dialog} from "./Dialog"

export class ContinueDialog extends Dialog
{
    constructor(text: string, speaker: string, protected nextDialog: Dialog)
    {
        super(text, speaker);
    }
}
