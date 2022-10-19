import axios from "axios";


export class ProductsApi{
    private static urlBase:string = 'https://api.escuelajs.co/api/v1/'

    public static getCategoriesAndProductsForId(id:any){
          const ApiElements= {
              category: axios.get(`${this.urlBase}categories/${id}/products`),
              products: axios.get(`${this.urlBase}products/${id}`)
          }

          return ApiElements
    }
}