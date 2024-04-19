 import { useState } from "react";
export default function Index() {
    const productList = [
  
        {
          id: 1,
          title: "Iphone 15",
          category:"Electronic",
          img:"/src/img/Iphone-15.jpg",
          price: 25000,
          stock: 30
        },
        {
          id: 2,
          title: "Saat",
          category:"Electronic",
          img: "/src/img/Saat.jpg",
          price: 250,
          stock: 20
     
        },
        {
          id: 3,
          title: "Ayakkabı",
          category:"Tekstil",
          img: "/src/img/ayakkabı.jpg",
          price: 300,
          stock: 40
        },
        {
          id: 4,
          title: "Tshort",
          category:"Tekstil",
          img: "/src/img/T-shirt.jpg",
          price: 250,
          stock: 12,
     
        },
        {
          id: 5,
          title: "Top",
          category:"Spors",
          img:"/src/img/top_2.jpg",
          price: 100,
          stock: 5
        },
        {
          id: 6,
          title: "Bot",
          category:"Spors",
          img: "/src/img/bot.jpg",
          price: 350,
          stock: 15
        },
        {
          id: 7,
          title: "Bilgisayar",
          category:"Electronic",
          img: "/src/img/bilgisayar.jpg",
          price: 40000,
          stock: 50,
     
        },
        {
          id: 8,
          title: "Pantolon",
          category:"Tekstil",
          img: "/src/img/pantolon.jpg",
          price: 350,
          stock: 15
        },
        {
          id: 9,
          title: "Gözlük",
          category:"Spors",
          img:"/src/img/pexels-donald-tong-39716.jpg",
          price: 300,
          stock: 5
     
        },
        {
          id: 10,
          title: "Iphone 12",
          category:"Electronic",
          img:"/src/img/Iphone12.jpg",
          price: 30000,
          stock: 30
        },
        
      ];
      const [productLists, setProductLists] = useState(productList);
      const [category, setCategories] = useState("all");
      const [basket, setBasket] = useState(false);
      const [showbasket, setShowBasket] = useState([]);
      const [inputSearch, setInputSearch] = useState("");

      console.log(productLists);

      const filterCategorys = productLists.filter(x => {
        if(category === "all") return x
        return x.category === category
      })

    const renderProducts = filterCategorys.map(x => {
        return(
            <li className="listItem" key={x.id}>
                <img className="stock-img" src={x.img} alt="" />
                <div className="product-all">
                <div className="filter-product">
                  <h4 className="title"><strong>Ürünler: </strong>{x.title}</h4>
                  <span className="category"><strong>Kategorileri: </strong>{x.category}</span>
                  <span className="price"> <strong> Fiyatlar: </strong>{x.price}$</span>
                  <span className="stock"><strong>STOK: </strong>{x.stock}</span>
                </div>
                  <div className="circle-basket">
                    <img src="/src/img/add-circle.svg" alt=""  onClick={() =>{addToBasket(x)}}/>
                  </div>
                </div>
                {/* <button className="Store-click" onClick={() => {addToBasket(x), handleTotal()}})>Sepet Ekle</button> */}
                {/* <button className={admin ? "admin-delete": "admin-delete deactive"} id={x.id} onClick={listItemRemove}>x</button> */}
           </li>
        )
    })

    function addToBasket(x) {
      if(x.stock > 0) {
        setShowBasket([...showbasket, x])
        x.stock -=1
      }else {
        console.log(x.stock);
      }
    }

    const oneCategories = []
    productList.forEach(products => {
        if(oneCategories.includes(products.category)) return
        oneCategories.push(products.category)
    })

    function changeCategories(e) {
        setCategories(e.target.innerText)
    }

    const renderCategory = oneCategories.map(x => {
        return <li key={x} onClick={changeCategories}>{x}</li>
    })

    function showAllProducts() {
        setCategories("all");    
    }


    function handleClick() {
      setBasket(!basket)
    }

      function handleTotal() {
        let totalprice = 0
        showbasket.forEach(x => {
          totalprice += x.price
        })
        return totalprice
    }

    const removeBasket = (product) => {
      const updateBasket = showbasket.filter((x ,productItem) => productItem !== product);
      setShowBasket(updateBasket);
    };

    console.log(showbasket);
    
      function removeAll() {
        setShowBasket([])
        showbasket.forEach( x=> {
          x.stock +=1
        })
      }

      const handleSearch = (e) => {
        const inputSearch = e.target.value
        setInputSearch(inputSearch)
        console.log(inputSearch);

        const filterProducts = productList.filter((x) => 
          x.title.toLowerCase().includes(inputSearch.toLowerCase())
        )
  
        if(inputSearch === "") {
          
        }
        setProductLists(filterProducts)
      }
  

    return(

       <div className="container">
           <div className="main">
                <div className="cateGories">
                  {/* <h2 className="header-font">E-Web</h2> */}
                  <img className="header-logo" src="/src/img/header-logo.jpg" alt="" />
                  <div className="render-category"><ul key={"all"} onClick={showAllProducts}>Tüm Ürünler</ul> {renderCategory}
                  <input className="input-search" type="text"  placeholder="Arama" onChange={handleSearch} /></div>
                  
                  <img className="shopping" src="/src/img/Satin-al.svg" alt=""  onClick={() => handleClick()}/>
                </div>
                <div className="list">
                        <ul className="list-render">{renderProducts}</ul>
                        <div className={basket ? "shopping-basket active": "shopping-basket"}>
                            <img className="close-img" src="/src/img/Close.svg"  onClick={() =>handleClick()}></img>
                          <div className="in-basket">
                            <div className="basket-product">
                                  <h3>Satın Alıncak Ürünler</h3>
                                  {showbasket.map((x, product) =>(
                                    <div className="show-product" key={product}>
                                      <img className="basket-img" src={x.img} alt="" />
                                      <div className="side-filter">
                                        <span className="basket-title">ÜrünAdı: {x.title}</span>
                                        <span className="basket-category"> Kategori: {x.category}</span>
                                        <span className="basket-price">Fiyat: {x.price}$</span>
                                        <img src="/src/img/delete.svg" alt=""  id={x.id} className="onedelete-basket" onClick={() => {removeBasket(product)}}></img> 
                                      </div>
                                    </div>
                                    
                                  ))}
                                   <div>
                                          <span>Toplam:{handleTotal()}</span>
                                  </div>
                            </div>
                          </div>
                          <span className="all-remove" onClick={() =>{removeAll()}}>Tümünü Sil</span>
                        </div>
                </div>
            </div>
       </div>
    )
}
