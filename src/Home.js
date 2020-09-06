import React from 'react'
import './Home.css';
import Product from './Product';
function Home() {
    return (
        <div className="home">
           
           <img 
                className="home__image" 
                src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" 
                alt="" 
           />

            <div className="home__products">
                <Product
                    id="232131"
                    title="Iphone 11"
                    price={1000}
                    rate={5}
                    img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-black-select-2019?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1566956144418"
                />
                <Product 
                    id="232222131"
                    title="Iphone se"
                    price={500}
                    rate={3}
                    img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-se-family-select-2020?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1586794486444"
                />
                <Product
                    id="232113431"
                    title="Iphone 11 pro"
                    price={2000}
                    rate={5}
                    img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-11-pro-select-2019-family?wid=441&amp;hei=529&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1586586488946"
                />
                <Product
                    id="2321312223" 
                    title="Ipad air"
                    price={700}
                    rate={4}
                    img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-air-select-201911?wid=443&amp;hei=535&amp;fmt=jpeg&amp;qlt=95&amp;op_usm=0.5,0.5&amp;.v=1584056222886"
                />
                <Product 
                    id="885232131"
                    title="apple tv hd"
                    price={1500}
                    rate={2}
                    img="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/apple-tv-hero-select-201510?wid=538&amp;amp;hei=535&amp;amp;fmt=jpeg&amp;amp;qlt=95&amp;amp;op_usm=0.5,0.5&amp;amp;.v=1503607253099"
                />
            </div>

        </div>
    )
} 

export default Home
