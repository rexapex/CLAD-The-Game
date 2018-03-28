import {Dialog} from "./Dialog"

export class OptionDialog extends Dialog
{
    constructor(text: string, speaker: string, protected options: {text: string, dialog: Dialog})
    {
        super(text, speaker);
    }

    public createGUIElement(div: HTMLDivElement): Promise<Dialog>
    {
        return new Promise<any>((resolve, reject) => {
            // add the dialog text
            let txt = document.createElement("label");
            txt.classList.add("chatmsg");
            txt.innerHTML = this.text;

            // add text element to div
            div.appendChild(txt);

            // add a button for each dialog option
            for(let option in this.options) {
                let btn = document.createElement("button");
                btn.classList.add("chatbtn");
                btn.innerHTML = option;
                div.appendChild(btn);

                // add a callback for the option button
                btn.onclick = (evnt) => {
                    resolve(this.options[option]);
                };
            }
        });
    }
}
