import { useEffect, useState } from "react";
import Footer from "../components/Footer";

function ProductPage() {

    useEffect(() => {
        // Using useEffect to set the background color
        document.body.style.backgroundColor = '#AE445A';
        
        // Clean up function to restore the original background color when the component is unmounted
        return () => {
            document.body.style.backgroundColor = ''; // Restore the original background color
        };
    }, []); // Empty dependency array ensures it runs only once when the component mounts

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            // Fetching data from Jikan API
            const response = await fetch("https://api.jikan.moe/v4/top/anime");
            const data = await response.json();
            setProducts(data.data);
        };

        fetchProducts();
    }, []);

    return (
        <div className="fade-in-up">
            <h1 className="text-white text-2xl font-bold mb-4 text-center pt-4">Top Anime Picks</h1>
            <div className="grid grid-cols-4 gap-6 mx-10 pb-4 fade-in-up">
                {products.map((product) => {
                    return (
                        <div key={product.mal_id} className="bg-black bg-opacity-60 rounded-lg shadow-2xl relative">
                            {/* Image */}
                            <img 
                                src={product.images.jpg.image_url} 
                                className="rounded-t-lg h-[280px] w-full" 
                                alt={product.title} 
                            />
                            
                            {/* Hd at the top-left corner */}
                            <div className="absolute top-2 left-2 bg-white text-black text-sm px-2 py-1 rounded-lg">
                                Hd
                            </div>
                            
                            {/* Ep1 at the bottom-right corner */}
                            <div className="absolute bottom-14 right-2 bg-white text-black text-sm px-2 py-1 rounded-lg">
                                Ep1
                            </div>

                            {/* Product Title */}
                            <div className="truncate p-3 text-white text-md">{product.title}</div>
                        </div>
                    );
                })}
            </div>

            {/* Footer Component */}
            <Footer />
        </div>
    );
}

export default ProductPage;

