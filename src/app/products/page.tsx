import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductPage = () => {
    return ( 
    <div className="p-5 border-x-red-700 rounded-xl">
        <h1 className="text-red-500">Products Page</h1>
        <Button>FSW 7.0</Button>
        <Input type="text" placeholder="Seu Texto Aqui:"/>
    </div>
    );
}
 
export default ProductPage;