import {ContinueDialog} from "./ContinueDialog"
import {Dialog} from "./Dialog"
import {Item} from "../items/Item"

export class ReceiveItemDialog extends ContinueDialog
{
    constructor(text: string, speaker: string, nextDialog: Dialog, protected itemsLost: Array<Item>, protected itemsReceived: Array<Item>)
    {
        super(text, speaker, nextDialog);
    }

    public createGUIElement(div: HTMLDivElement): Promise<Dialog>
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

            // add text element to div
            div.appendChild(txt);

            if(this.itemsLost != null && this.itemsLost.length > 0) {
                let itemsLostLbl = document.createElement("label");
                itemsLostLbl.classList.add("chatimgheader");
                itemsLostLbl.innerHTML = "You Lost";
                div.appendChild(itemsLostLbl);

                // add an image for each item lost
                for(let item of this.itemsLost) {
                    let img = document.createElement("img");
                    img.classList.add("chatimg");
                    img.src = item.getImagePath();
                    div.appendChild(img);
                }
            }

            if(this.itemsReceived != null && this.itemsReceived.length > 0) {
                let itemsReceivedLbl = document.createElement("label");
                itemsReceivedLbl.classList.add("chatimgheader");
                itemsReceivedLbl.innerHTML = "You Gained";
                div.appendChild(itemsReceivedLbl);

                // add an image for each item received
                for(let item of this.itemsReceived) {
                    let img = document.createElement("img");
                    img.classList.add("chatimg");
                    img.src = item.getImagePath();
                    div.appendChild(img);
                }
            }

            div.appendChild(btn);

            // add a callback for the continue button
            btn.onclick = (evnt) => {
                resolve(this.nextDialog);
            };
        });
    }

    public getItemsLost(): Array<Item>
    {
        return this.itemsLost;
    }

    public getItemsReceived(): Array<Item>
    {
        return this.itemsReceived;
    }
}
