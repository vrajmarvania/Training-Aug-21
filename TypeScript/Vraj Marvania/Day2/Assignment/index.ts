// There is a retail shop which need to manage the Product, whenever some purchase is being made product quantity should be reduced, if quanity is less than 5 reorder request should be raised.
// Design an interface and classes for the same.

// import interface
import { Product, purchase } from "./interfaces";


class Product implements Product {

    // var------
    Product_Data: [
        Product_Id: number,
        Product_Name: string,
        Product_Price: number,
        Product_Qty: number
    ][] = [];

    // constructor----
    constructor(Product_Data) {
        this.Product_Data = Product_Data;
    }

    // functions------
    // get all product-------->
    Get_Product = (): object => {
        console.log("_________get all product______________");

        return this.Product_Data;
    };

    // set  product-------->
    Set_Product = (product): string => {
        console.log("_________set Product product______________");
        this.Product_Data.push(product);
        return 'product data is submited';
    };

    // Update_Product_Qty -------->
    Update_Product_Qty = (Product_Id: number, P_Q: number): number => {
        // console.log("_________update qty of products______________");
        var Update_Product_Qty_temp: object = this.Product_Data.filter((i) => {
            return i.Product_Id == Product_Id;
        });
        console.log((Update_Product_Qty_temp[0].Product_Qty = P_Q));
        return (Update_Product_Qty_temp[0].Product_Qty = P_Q);
    };

    // Check Product Qty-------->
    Check_Product_Qty = (Product_Id: number): number => {
        // console.log("_________check product qty______________");
        var temp: object = this.Product_Data.filter((i) => {
            return i.Product_Id == Product_Id;
        });
        return temp[0].Product_Qty;
    };
}

class purchase implements purchase {
    // var------
    purchase_Data: [
        Purchase_Id: number,
        Purchase_Data: number[],
        Purchase_Total_Price: number,
        Product_Qty: number
    ][];

    // constructor-----
    constructor() {
        this.purchase_Data = [];
    }


    // functions------
    // purchase Product-------
    purchase_Product = (inv, order): string => {
        console.log("_________purchase products______________");

        var Purchase_Total_Price_temp: number = 0;
        for (var i in order.Purchase_Data) {
            var temp = inv.Product_Data.filter((p) => {
                return p.Product_Id == order.Purchase_Data[i];
            });
            if (temp != "") {
                // check product qty is greater than order Product_Qty

                if (inv.Check_Product_Qty(temp[0].Product_Id) >= order.Product_Qty[i]) {

                    // check order product qty is greater than 5
                    if (order.Product_Qty[i] < 5) {
                        return ("Product Qty is less then 5");
                    }
                    else {
                        Purchase_Total_Price_temp += (temp[0].Product_Price * order.Product_Qty[i]);
                        inv.Update_Product_Qty(temp[0].Product_Id, temp[0].Product_Qty - order.Product_Qty[i]);
                    }
                } else {
                    return temp[0].Product_Name + "  Product Qty Not Found";
                }
            }
            else {
                return "Product Not Found";
            }
        }
        order.Purchase_Total_Price = Purchase_Total_Price_temp;
        this.purchase_Data.push(order);
        return 'Order successful';
    };

    // get orders data-------->
    Get_purchase = (): object => {
        console.log('____________Order details______________')
        return this.purchase_Data;
    };
}

// //Product Data-------->
var Product_D = [
    {
        Product_Id: 1,
        Product_Name: 'phone',
        Product_Price: 1212,
        Product_Qty: 30,
    },
    {
        Product_Id: 2,
        Product_Name: 'Laptop',
        Product_Price: 1212,
        Product_Qty: 11,
    },
    {
        Product_Id: 10,
        Product_Name: 'earphone',
        Product_Price: 1212,
        Product_Qty: 16,
    },
];

// // create Product object-------->
var inv = new Product(Product_D);

// // set Product product-------->

var products = {
    Product_Id: 1,
    Product_Name: 'charger',
    Product_Price: 1212,
    Product_Qty: 11,
};
inv.Set_Product(products);

// // get all product-------->

console.log(inv.Get_Product());

// check  product qty-------->

console.log(inv.Check_Product_Qty(10));

// update qty of products-------->

inv.Update_Product_Qty(10, 13);
console.log(inv.Get_Product());

// purchase products-------->

var order = {
    Purchase_Id: 1,
    Purchase_Data: [10, 1, 2],
    Product_Qty: [6, 6, 8],
};
var o1 = new purchase();
console.log(o1.purchase_Product(inv, order));
// console.log(o1.Get_purchase());

console.log(o1.Get_purchase());
// console.log(inv.Get_Product());
