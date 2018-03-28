import {Dialog} from "./Dialog"

export class ContinueDialog extends Dialog
{
    constructor(text: string, speaker: string, protected nextDialog: Dialog)
    {
        super(text, speaker);
    }

    public createGUIElement(div: HTMLDivElement): void
    {
        let txt = document.createElement("label");
        txt.classList.add("chatmsg");
        txt.innerHTML = this.text;

        // add all new elements to div
        div.appendChild(txt);
    }
}
