import useProducts from "@/hooks/use-product";
import Link from "next/link";

// client
const ProductPage = () => {
    const { data, error } = useProducts();
    if (error) return <div>failed to load</div>
    if (!data) return <div className="text-red-500 text-center">Loading...</div>
    return (
        <div>
            {data.map((item: any) => (
                <div key={item.id}>
                    <Link href={`/products/${item.id}`}>{item.name}</Link>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
