/*
The Builder pattern separates the construction of complex objects from their representation, 
allowing the same construction process to create different representations.
*/

class Product {
    private partA: string = '';
    private partB: string = '';

    public setPartA(partA: string): void {
        this.partA = partA;
    }

    public setPartB(partB: string): void {
        this.partB = partB;
    }
}

class Builder {
    private product: Product;

    public constructor() {
        this.product = new Product();
    }

    public buildPartA(partA: string): Builder {
        this.product.setPartA(partA);
        return this;
    }

    public buildPartB(partB: string): Builder {
        this.product.setPartB(partB);
        return this;
    }

    public getProduct(): Product {
        return this.product;
    }
}

const builder = new Builder();
builder.buildPartA('Part A').buildPartB('Part B').getProduct();
