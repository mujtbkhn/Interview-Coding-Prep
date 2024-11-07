import React, { useEffect, useState } from 'react'

// const Product = () => {

//     const [searchedText, setSearchedText] = useState('')
//     const [filteredProducts, setFilteredProducts] = useState([])
//     const [category, setCategory] = useState('all')


//     const products = [
//         { "id": 1, "name": "Laptop", "category": "Electronics", "price": 999, "stock": 50 },
//         { "id": 2, "name": "Smartphone", "category": "Electronics", "price": 699, "stock": 100 },
//         { "id": 3, "name": "Headphones", "category": "Audio", "price": 199, "stock": 200 },
//         { "id": 4, "name": "Book", "category": "Literature", "price": 15, "stock": 1000 },
//         { "id": 5, "name": "Desk Chair", "category": "Furniture", "price": 250, "stock": 30 },
//         { "id": 6, "name": "Coffee Maker", "category": "Appliances", "price": 89, "stock": 75 },
//         { "id": 7, "name": "Running Shoes", "category": "Sports", "price": 120, "stock": 150 },
//         { "id": 8, "name": "Tablet", "category": "Electronics", "price": 349, "stock": 80 },
//         { "id": 9, "name": "Backpack", "category": "Accessories", "price": 59, "stock": 200 },
//         { "id": 10, "name": "Smart Watch", "category": "Electronics", "price": 199, "stock": 100 }
//     ]

//     useEffect(() => {
//         setFilteredProducts(products.filter(product => product.name.toLowerCase().includes(searchedText.toLowerCase())))
//     }, [searchedText])

//     useEffect(() => {
//         setFilteredProducts(products.filter(product => product.category === category) )
//     }, [category])

//     const handleSort = (type) => {
//         setFilteredProducts(products.sort((a, b) => a[type].localeCompare(b[type]) || a.type - b.type))
//     }

//     return (
//         <div>
//             <input type="text" onChange={(e) => setSearchedText(e.target.value)} />
//             <select name="categories" id="" onChange={(e) => setCategory(e.target.value)}>
//                 <option value="Electronics">Electronics</option>
//                 <option value="Audio">Audio</option>
//                 <option value="Literature">Literature</option>
//                 <option value="Furniture">Furniture</option>
//                 <option value="Appliances">Appliances</option>
//                 <option value="Sports">Sports</option>
//             </select>
//             <table>
//                 <thead>
//                     <tr>
//                         <th>ID</th>
//                         <th onClick={() => handleSort("name")}>Name</th>
//                         <th onClick={() => handleSort("category")}>Category</th>
//                         <th onClick={() => handleSort("price")}>Price</th>
//                         <th onClick={() => handleSort("stock")}>Stock</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {filteredProducts.map((product, i) => (
//                         <tr key={i}>
//                             <td>{product.id}</td>
//                             <td>{product.name}</td>
//                             <td>{product.category}</td>
//                             <td>{product.price}</td>
//                             <td>{product.stock}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     )
// }

// export default Product

// const Product = () => {
//     const [search, setSearch] = useState('')
//     const [products, setProducts] = useState([])
//     const [category, setCategory] = useState('all')
//     const [sorting, setSorting] = useState('asc')

//     const initialProducts = [
//         { id: 1, name: 'Laptop', category: 'Electronics', price: 999 },
//         { id: 2, name: 'Smartphone', category: 'Electronics', price: 699 },
//         { id: 3, name: 'Desk Chair', category: 'Furniture', price: 199 },
//         { id: 4, name: 'Coffee Maker', category: 'Appliances', price: 89 },
//         { id: 5, name: 'Bookshelf', category: 'Furniture', price: 149 },
//     ];

//     useEffect(() => {
//         setProducts(initialProducts)
//     }, [])

//     const filteredProducts = products.filter(product =>
//         (
//             product.name.toLowerCase().includes(search.toLowerCase()) ||
//             product.category.toLowerCase().includes(search.toLowerCase())) && (
//             category === 'all' || product.category === category
//         )
//     )

//     const sortedProducts = [...filteredProducts].sort((a, b) => {
//         if (sorting === 'asc') {
//             return a.price - b.price
//         } else if (sorting === 'desc') {
//             return b.price - a.price
//         }
//     })
//     return (
//         <div>
//             <input type="text"
//                 value={search}
//                 onChange={(e) => setSearch(e.target.value)}
//                 placeholder='search for names, categories'
//             />

//             <select onChange={(e) => setCategory(e.target.value)} name="options" id="">
//                 <option value="all">All Categories</option>
//                 <option value="Electronics">Electronics</option>
//                 <option value="Furniture">Furniture</option>
//                 <option value="Appliances">Appliances</option>
//             </select>

//             <select onChange={(e) => setSorting(e.target.value)} name="sort" id="">
//                 <option value="asc">Low to High</option>
//                 <option value="desc">High to Low</option>
//             </select>

//             {sortedProducts.map((product) => (
//                 <div key={product.id}>
//                     <h2>{product.name} {product.category} {product.price}</h2>
//                 </div>
//             ))}

//         </div>

//     )
// }

// export default Product

const Product = () => {

    const [data, setData] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const [roles, setRoles] = useState('All')
    const [isStatus, setIsStatus] = useState('')

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = async () => {
        try {
            const res = await fetch('https://jsonplaceholder.typicode.com/users')
            if (!res.ok) {
                throw new Error("Error fetching response from api")
            }
            const json = await res.json()
            const getRandomRole = () => Math.random() > 0.5 ? 'Admin' : 'Employee';
            const getRandomStatus = () => Math.random() > 0.5 ? 'Active' : 'In-Active';
            const updatedUsers = json.map(user => ({
                ...user,
                role: getRandomRole(),
                status: getRandomStatus()
            })
            )
            setData(updatedUsers)
            console.log(updatedUsers)
        } catch (error) {
            console.log("error fetching users api:", error)
        }
    }
    const filteredData = data.filter(item =>
        (item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            item.email.toLowerCase().includes(searchTerm.toLowerCase()))
        && (roles === 'All' || item.role === roles)
        && (isStatus === '' || item.status === isStatus)
    )

    const handleSort = () => {
        const sortedData = [...filteredData].sort((a, b) => a.name.localeCompare(b.name))
        setData(sortedData)
    }
    return (
        <div>
            <input type="text"
                placeholder='search name or email'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button onClick={handleSort}>Sort By Name</button>

            <select onChange={(e) => setRoles(e.target.value)} name="roles" id="">
                <option value="All">all</option>
                <option value="Employee">Employee</option>
                <option value="Admin">Admin</option>
            </select>

            <select onChange={(e) => setIsStatus(e.target.value)} name="status" id="">
                <option value="">Status</option>
                <option value="Active">Active</option>
                <option value="In-Active">In-Active</option>
            </select>

            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((item, i) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.role}</td>
                            <td>{item.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Product