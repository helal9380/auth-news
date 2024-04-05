import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const LeftSide = () => {
    const [categories, setCategories] = useState([])

    useEffect( () => {
        fetch('categories.json')
        .then(res => res.json())
        .then(data => setCategories(data))
    },[])
    console.log(categories)
    return (
        <div>
            <h3 className="text-3xl font-semibold">All Cateroy</h3>
            <div className="p-4 border rounded-lg">
                {
                    categories.map(category => <Link className="mb-2 block text-lg font-semibold" key={category.id}>{category.name}</Link>)
                }
            </div>
        </div>
    );
};

export default LeftSide;