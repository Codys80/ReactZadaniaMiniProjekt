import React from "react"; 
import { z } from "zod"; 
import './App.css'
import { useState } from "react";
import { useForm } from "react-hook-form"; 
import { zodResolver } from "@hookform/resolvers/zod"; 

function Tracker (){
    const [product, setProduct] = useState([{ productName: "", price: 0, category: "dupa"}]);
    const [selectBarValue, setSelectBarValue] = useState("");
    
    function delt(index){
        console.log(selectBarValue);
        setProduct((prevCartItems) => {
            const newCartItems = [...prevCartItems]; 
            newCartItems.splice(index, 1); 
            console.log("usunięto!")
            return newCartItems;
        })
        }
    function Display(){
            let overallPrice = 0;
            
            function sumOverallPrice(newPrice){
                overallPrice += newPrice;
            }
            function clearOverallPrice(){
                overallPrice =0;
        }

        function isSelected2(index){
            let productMap = product.map(  (products, index) => ([index, products.category]   ));
            let value = selectBarValue;
            if('Wszystkie' == value || 'wszystkie' == value){
                return(true);
            }     
            else if(productMap[index][1] === value){
                return(true);
            }
            else{
                return(false);
            }
        }
        function CategoryBar(){
            function handleSelectBar (){
                let productMap = product.map(  (products, index) => ([index, products.category]   ));
                if(document.getElementById("categoryBar").value === "Wszystkie" || document.getElementById("categoryBar").value === "wszystkie")
                    {setSelectBarValue(document.getElementById("categoryBar").value);}
                for(var i = 0; i<productMap.length; i++){
                    if(productMap[i][1] === document.getElementById("categoryBar").value){
                        setSelectBarValue(document.getElementById("categoryBar").value);
                    }
                }
                
            }
            return(<>
                Wybierz kategorie <br/>
                <input  id="categoryBar" className="categoryBar" type="text" placeholder="Wprowadź" 
                        defaultValue={selectBarValue} onChange={handleSelectBar}
                        onfocus={() => setSelectBarValue('')} 
                />
            </>);
        }
        
        return(
            <section className="displaySection">
                <ol>
                    {product.map(  (products, index) => ( 
                    <li key={index} className={ isSelected2(index) ? "active" : "inactive"}> 
                                <p>Nazwa produktu: {products.productName} &nbsp;
                                Cena: {products.price} zł&nbsp;
                                {isSelected2(index) ? sumOverallPrice(products.price) : clearOverallPrice()} &nbsp;
                                Kategoria: {products.category} </p>

                                <button onClick={() => delt(index)}>Usuń</button>  
                    </li> 
                    ))} 
                </ol>
                    <p>Łączna cena wybranych produktów: {overallPrice} zł</p>
                <article>
                    <CategoryBar/>
                </article>
            </section>);
        }
    function DodawanieForm(){
            const schema = z.object({ 
            productName: z.string().min(1,  { message: "Podaj prawidłowo produkt" }), 
            price: z.coerce.number().min(1, { message: "Nieprawidłowa cena" }), 
            category: z.string().min(1,     { message: "Nieprawidłowa kategoria"}),  
            });  
            const { 
                    register, 
                    handleSubmit, 
                    formState: { errors}, 
                } = useForm({ resolver: zodResolver(schema) }); 
            function onSubmit(data) {
                var newProduct = { productName: data.productName, price: data.price, category: data.category};
                setProduct(product => [...product, newProduct]);
            }
        return ( 
        <section className="formSection">
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div className="mb-3"> 
                    <label htmlFor="productName" className="form-label">Produkt: </label> 
                    <input 
                    type="text" 
                    id="productName" 
                    className="form-control" 
                    {...register("productName")} 
                    /> 
                    {errors.productName && <p className="text-danger">{errors.productName.message}</p>} 
                </div>
                    
                <div className="mb-3"> 
                    <label htmlFor="price" className="form-label">Cena: </label> 
                    <input 
                        type="number" 
                        id="price" 
                        className="form-control" 
                        {...register("price")} 
                    /> 
                    {errors.price && <p className="text-danger">{errors.price.message}</p>} 
                </div>
        
                <div className="mb-3"> 
                    <label htmlFor="category" className="form-label">Kategoria: </label> 
                    <input 
                        type="text" 
                        id="category" 
                        className="form-control" 
                        {...register("category")} 
                    /> 
                    {errors.category && <p className="text-danger">{errors.category.message}</p>} 
                </div>
                
                <div className="mb-3"> 
                    <button type="submit" className="btn btn-primary">Zamów</button> 
                </div> 
            </form>
        </section>);
        }
        
    return(
        <>
            <DodawanieForm/>
            <Display/>
        </>);}
export default Tracker;