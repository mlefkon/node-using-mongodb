import { addnewProduct,
        getProducts,
        getProductWithID,
        updateProduct,
        deleteProduct
} from "../controllers/controllers";

const routes = (app) => {
    app.route('/products')
        // get multiple products
        .get(getProducts)
         // POST endpoint
        .post(addnewProduct);
    app.route('/products/:ProductID')
        // get a specific product by ID
        .get(getProductWithID)
        .put(updateProduct)
        .delete(deleteProduct);
}
export default routes;