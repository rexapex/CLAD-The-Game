import {Dialog} from "./Dialog"

// conversation between the player and an NPC
export class Conversation
{
    constructor(private firstDialog: Dialog) {}

    public getFirstDialog(): Dialog {
        return this.firstDialog;
    }
}
