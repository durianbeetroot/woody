"use client"

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import {Col,Container,Row} from'react-bootstrap';
import { useState,useEffect } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import Footer from '@/components/Footer';

import { db } from '@/utils/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

import { Canvas } from '@react-three/fiber';
import ThreeLoader from '@/components/ThreeLoader';

import dummyProd from '@/dummy/dummyProducts';

export default function Page(){

    const [prodList, setProdList] = useState([]);

    const [items, setItems] = useState(prodList);
    const [activePage, setActivePage] = useState(1);
    const [category, setCategory] = useState('all');
    const [modelKey, setModelKey] = useState(Date.now());
    const ITEMS_PER_PAGE = 3;

    const totalPages = Math.ceil(
        (category === 'all' ? prodList : prodList.filter(item => item.type == category)).length / ITEMS_PER_PAGE
    );

    useEffect(() => {

        const fetchProducts = async () => {
            try {
              
              const querySnapshot = await getDocs(collection(db, 'products'));
              const productList = [];
      
              querySnapshot.forEach((doc) => {
                productList.push({ id: doc.id, ...doc.data() });
              });
      
              setProdList(productList);
            } catch (error) {
              console.error("Error fetching products: ", error);
            }
          };
        
        fetchProducts();
        handleChange();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [activePage, category, prodList]);

    const handleChange = () => {
        let filteredList = prodList;

        if (category !== 'all') {
        filteredList = prodList.filter(item => item.type === category);
        }

        const displayedItems = filteredList.slice(
        (activePage - 1) * ITEMS_PER_PAGE,
        activePage * ITEMS_PER_PAGE
        );

        setItems(displayedItems);
        setModelKey(Date.now());
    };

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setCategory(category);
        setActivePage(1);
    };

    const dummyDataChange = () =>{
        const dum = new dummyProd();
        setProdList(dum.getData());
    };

    return (
        <div className="bg-1">
            <Header />
            <Hero 
                backgroundImage="/img/img2.png" 
                text1="Our Products" 
                text2="Woody offers top-quality wood furniture craftsmanship, with years of experience.From custom-built pieces to beautifully crafted solid oak furniture, we meet all your wood furniture needs."
            />
            <Container fluid className='pb-24'>
                <Row className='pt-24 px-16'>
                    <Col md={12}>
                        <h1 className="f-2 text-3xl md:text-6xl text-white font-semibold">
                            CATEGORIES
                        </h1>
                    </Col>
                </Row>
                <Row className='pt-4 px-16'>
                    <Col md={12}>
                        <div className="space-x-4 md:space-x-16">
                            <button className="f-1 font-semibold txt-2 hover:text-white duration-300" onClick={() => handleCategoryChange('all')}>All</button>
                            <button className="f-1 font-semibold txt-2 hover:text-white duration-300" onClick={() => handleCategoryChange('chair')}>Chairs</button>
                            <button className="f-1 font-semibold txt-2 hover:text-white duration-300" onClick={() => handleCategoryChange('table')}>Tables</button>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-4 px-16'>
                    {items.map((item, index)=>(
                    <Col key={index} md={4} className='pb-4'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                        <div className="px-6 py-4">
                            <div className="relative w-full h-[25vh] flex items-start overflow-hidden">
                                <div className="w-full h-full">
                                    <Canvas key={modelKey} style={{ width: '100%', height: '40vh' }}>
                                    <ambientLight intensity={0.5} />
                                    <directionalLight position={[10, 10, 5]} intensity={1} />
                                    <ThreeLoader path={`/models/${item.type}1.glb`} />
                                    {/* {item.type === 'chair'? <ThreeLoader path="/models/chair1.glb" /> : <ThreeLoader path="/models/table1.glb" />} */}
                                    </Canvas>
                                </div>
                            </div>
                            <div className="font-bold text-xl mb-2">{item.name}</div>
                                <p className="text-gray-700 text-base">
                                    {item.description}
                                </p>
                        </div>
                    </div>
                    </Col>
                    ))}
                </Row>
                <Row className='px-16'>
                    <Col>
                        <Pagination className="custom-pagination">
                            <Pagination.Prev onClick={() => handlePageChange(activePage > 1 ? activePage - 1 : 1)} />
                            {[...Array(totalPages)].map((_, index) => (
                                <Pagination.Item
                                    key={index}
                                    active={index + 1 === activePage}
                                    onClick={() => handlePageChange(index + 1)}
                                >
                                    {index + 1}
                                </Pagination.Item>
                                ))}              
                            <Pagination.Next onClick={() => handlePageChange(activePage < totalPages ? activePage + 1 : totalPages)} />
                        </Pagination>
                    </Col>
                </Row>
                <div className='px-16 pt-2 flex justify-end'>
                    <button className='f-2 p-2 px-4 text-2xl font-semibold btn-review duration-300' onClick={dummyDataChange}> Dummy Data </button>
                </div>
            </Container>
            <Footer/>
        </div>
    )
}