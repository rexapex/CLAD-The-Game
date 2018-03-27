import {Item} from "./Item"

export class Inventory
{
    private items = new Array<Item>(9); // MAX_NUM_ITEMS = 9

    public addItem(item: Item): boolean
    {
        if(item != null) {
            // add the item to the first available slot
            for(let index = 0; index < this.items.length; index ++)
            {
                if(this.items[index] == null) {
                    this.items[index] = item;
                    return true;
                }
            }
        }
        return false;
    }

    public removeItem(item: Item): Item
    {
        for(let index = 0; index < this.items.length; index ++)
        {
            if(this.items[index] === item) {
                console.log("removed " + item.getName());
                this.items[index] = null;
                return this.items[index];
            }
        }
        return null;
    }

    public removeItemByIndex(index: number): Item
    {
        if(index != null && index < this.items.length)
        {
            const item = this.items[index];
            this.items[index] = null;
            return item;
        }
        return null;
    }

    public moveItem(item: Item, index: number): void
    {
        if(this.items[index] == null) { // if new itemslot is free
            let x = this.removeItem(item);
            if(x != null) { // check the player actually had the item
                this.items[index] = item;
            }
        }
    }

    public clear(): void
    {
        for(let index = 0; index < this.items.length; index ++)
        {
            this.items[index] = null;
        }
    }

    public getItems(): Array<Item>
    {
        return this.items;
    }
}
