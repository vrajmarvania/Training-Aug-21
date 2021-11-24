export  interface Product {
    Product_Data: [
            Product_Id: number,
            Product_Name: string,
            Product_Price: number,
            Product_Qty: number
        ][];
        Get_Product(): object;
        Set_Product(product): string;
        Update_Product_Qty(Product_Id: number, P_Q: number): number;
        Check_Product_Qty(Product_Id: number): number;
    }

export interface purchase {
    purchase_Data: [
        Purchase_Id: number,
        Purchase_Data: number[],
        Purchase_Total_Price: number,
        Product_Qty: number
    ][];
    purchase_Product();
    Get_purchase(): object;
}