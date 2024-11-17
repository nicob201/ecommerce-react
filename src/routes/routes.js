import ItemListContainer from "../components/pages/itemListContainer/ItemListContainer";
import CartContainer from "../components/pages/cart/CartContainer";
import Checkout from "../components/pages/checkout/Checkout";
import ItemDetailContainer from "../components/pages/itemDetail/ItemDetailContainer";
import NotFound from "../components/pages/notFound/NotFound";

export const appRoutes = [
    {
        id: 1,
        path: "/",
        Element: ItemListContainer
    },
    {
        id: 2,
        path: "/category/:name",
        Element: ItemListContainer
    },
    {
        id: 3,
        path: "/cart",
        Element: CartContainer
    },
    {
        id: 4,
        path: "/itemDetail/:id",
        Element: ItemDetailContainer
    },
    {
        id: 5,
        path: "/checkout",
        Element: Checkout
    },
    {
        id: 6,
        path: "*",
        Element: NotFound
    },
];
