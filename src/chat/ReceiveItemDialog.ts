import {ContinueDialog} from "./ContinueDialog"
import {Dialog} from "./Dialog"
import {Item} from "../items/Item"

export class ReceiveItemDialog extends ContinueDialog
{
    constructor(text: string, speaker: string, nextDialog: Dialog, protected itemsLost: Array<Item>, protected itemsReceived: Array<Item>)
    {
        super(text, speaker, nextDialog);
    }
}
