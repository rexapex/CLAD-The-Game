import {Dialog} from "./Dialog"
import {Inventory} from "../items/Inventory"

export class ContinueDialog extends Dialog
{
    constructor(text: string, speaker: string, audio: HTMLAudioElement, protected nextDialog: Dialog)
    {
        super(text, speaker, audio);
    }

    public createGUIElement(div: HTMLDivElement, invent: Inventory): Promise<Dialog>
    {
        return new Promise<Dialog>((resolve, reject) => {
            // add the dialog text
            let txt = document.createElement("label");
            txt.classList.add("chatmsg");
            txt.innerHTML = this.text;

            // add a button to advance to the next dialog
            let btn = document.createElement("button");
            btn.classList.add("chatbtn");
            btn.innerHTML = "Continue";

            // add all new elements to div
            div.appendChild(txt);
            div.appendChild(btn);

            // add a callback for the continue button
            btn.onclick = (evnt) => {
                resolve(this.nextDialog);
            };
        });
    }
}
