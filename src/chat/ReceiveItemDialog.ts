import {ContinueDialog} from "./ContinueDialog"
import {Dialog} from "./Dialog"
import {Item} from "../items/Item"
import {Inventory} from "../items/Inventory"

export class ReceiveItemDialog extends ContinueDialog
{
    private replaced: boolean = false;  // true iff the player has already exchanged items before

    constructor(text: string, speaker: string, audio: HTMLAudioElement, nextDialog: Dialog, protected itemsLost: Array<Item>, protected itemsReceived: Array<Item>, protected replacementDialog: Dialog)
    {
        super(text, speaker, audio, nextDialog);
    }

    private inventContainsAllItems(invent: Inventory): boolean
    {
        let containsAllItems: boolean = true;
        for(const item of this.itemsLost) {
            // if the invent doesn't contain any required item, then exit
            if(!invent.containsItem(item)) {
                containsAllItems = false;
                break;
            }
        }
        return containsAllItems;
    }

    private updateInventory(invent: Inventory): void
    {
        // remove all items to be removed
        for(const item of this.itemsLost) {
            invent.removeItem(item);
        }

        // add all items to be added
        for(const item of this.itemsReceived) {
            invent.addItem(item);
        }
    }

    public createGUIElement(div: HTMLDivElement, invent: Inventory): Promise<Dialog>
    {
        if(this.replaced) {
            if(this.replacementDialog != null) {
                return this.replacementDialog.createGUIElement(div, invent);
            }
            return Promise.resolve(null);
        }

        return new Promise<Dialog>((resolve, reject) => {
            const containsAllItems: boolean = this.inventContainsAllItems(invent);
            if(containsAllItems)
            {
                // remove itemsLost and add itemsReceived from/to player's inventory
                this.updateInventory(invent);

                // add the dialog text
                let txt = document.createElement("label");
                txt.classList.add("chatmsg");
                txt.innerHTML = this.text;
                div.appendChild(txt);   // add text element to div

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

                // player has made exchange so replace dialog with replacement dialog
                this.replaceDialog();
            }
            else
            {
                // player inventory does not contains all required items, therefore, display fail text
                // add the dialog text
                let txt = document.createElement("label");
                txt.classList.add("chatmsg");
                txt.innerHTML = "YOU DO NOT HAVE THE REQUIRED ITEMS";
                div.appendChild(txt);   // add text element to div
            }

            // add a button to advance to the next dialog
            let btn = document.createElement("button");
            btn.classList.add("chatbtn");
            btn.innerHTML = "Continue";

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

    public replaceDialog(): void
    {
        this.replaced = true;
    }
}
