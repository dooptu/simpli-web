
export class ProductModule {
    product_id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    attribute: number;
    created_at: number;
    updated_at: number;
    ratings?: RatingModule[] = [];
    toppings?: ToppingModule[] = [];

    constructor(
        name: string,
        description: string,
        price: number,
        image: string,
    ) {
        this.product_id = '';
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
        this.attribute = 1;
        this.created_at = 1707523200;
        this.updated_at = 1707523200;
    }

    addRating(rating: RatingModule) {
        this.ratings?.push(rating);
    }

    addTopping(topping: ToppingModule) {
        this.toppings?.push(topping);
    }
}


export class CategoryModule {
    category_id: string;
    name: string;
    created_at: number;
    updated_at: number;
    products: ProductModule[] = [];

    constructor(name: string) {
        this.category_id = '';
        this.name = name;
        this.products = [];
        this.created_at = 1707523200;
        this.updated_at = 1707523200;
    }

    addProduct(product: ProductModule) {
        this.products.push(product);
    }
}

export class ToppingModule {
    topping_id: string;
    name: string;
    price: number;
    attribute: number;
    created_at: number;
    updated_at: number;

    constructor(name: string, price: number) {
        this.topping_id = '';
        this.name = name;
        this.price = price;
        this.attribute = 1;
        this.created_at = 1707523200;
        this.updated_at = 1707523200;
    }
}

export class ProductTopping {
    product_topping_id: string;
    topping: ToppingModule;

    constructor(topping: ToppingModule) {
        this.product_topping_id = '';
        this.topping = topping;
    }
}

export class RatingModule {
    rating_id: string;
    user_id: string;
    created_at: number;
    updated_at: number;

    constructor(user_id: string) {
        this.rating_id = '';
        this.user_id = user_id;
        this.created_at = 1707523200;
        this.updated_at = 1707523200;
    }
}
