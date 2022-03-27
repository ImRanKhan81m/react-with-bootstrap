import React from 'react';
import Card from '../Card/Card';

const CardGroup = () => {
    const products = [
        {id: 1, name:'Laptop G85 Pro', price:175000},
        {id: 2, name:'iPhone 13 Pro', price:145000},
        {id: 3, name:'Samsung Note 10 Pro', price:25000},
    ]
    return (
        <div>
            <h2>This is my cards</h2>
            <div className="card-group">
                {
                    products.map(product=> <Card 
                        key={product.id} 
                        product={product}
                        ></Card>)
                }
            </div>



        </div>


    );
};

export default CardGroup;