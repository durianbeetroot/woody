"use client"

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Link from 'next/link';
import {Col,Container,Row} from'react-bootstrap';
import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';
import { useEffect } from 'react';

export default function Page(){

    const prodList = [
        {name:'test1', category: 'chair', desc: 'test'},
        {name:'test2', category: 'table', desc: 'test'},
        {name:'test3', category: 'table', desc: 'test'},
        {name:'test4', category: 'table', desc: 'test'},
        {name:'test5', category: 'table', desc: 'test'},
        {name:'test6', category: 'chair', desc: 'test'},
        {name:'test7', category: 'table', desc: 'test'},
        {name:'test8', category: 'table', desc: 'test'},
        {name:'test9', category: 'table', desc: 'test'},
    ]

    const [items, setItems] = useState(prodList);
    const [activePage, setActivePage] = useState(1);
    const [category, setCategory] = useState('all');
    const ITEMS_PER_PAGE = 6;

    const totalPages = Math.ceil(
        (category === 'all' ? prodList : prodList.filter(item => item.category === category)).length / ITEMS_PER_PAGE
    );

    useEffect(() => {
        handleChange();
    }, [activePage, category]);

    const handleChange = () => {
        let filteredList = prodList;

        if (category !== 'all') {
        filteredList = prodList.filter(item => item.category === category);
        }

        const displayedItems = filteredList.slice(
        (activePage - 1) * ITEMS_PER_PAGE,
        activePage * ITEMS_PER_PAGE
        );

        setItems(displayedItems);
    };

    const handlePageChange = (pageNumber) => {
        setActivePage(pageNumber);
    };

    const handleCategoryChange = (category) => {
        setCategory(category);
        setActivePage(1);
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
                        <h1 className="f-2 text-6xl text-white font-semibold">
                            CATEGORIES
                        </h1>
                    </Col>
                </Row>
                <Row className='pt-4 px-16'>
                    <Col md={12}>
                        <div className="space-x-16">
                            <button className="f-1 font-semibold txt-2 hover:text-white duration-300" onClick={() => handleCategoryChange('all')}>All</button>
                            <button className="f-1 font-semibold txt-2 hover:text-white duration-300" onClick={() => handleCategoryChange('chair')}>Chairs</button>
                            <button className="f-1 font-semibold txt-2 hover:text-white duration-300" onClick={() => handleCategoryChange('table')}>Tables</button>
                        </div>
                    </Col>
                </Row>
                <Row className='pt-4 px-16'>
                    {items.map((item)=>(
                    <Col md={4} className='pb-4'>
                    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
                    <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{item.name}</div>
                    <p className="text-gray-700 text-base">
                        {item.desc}
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
            </Container>
        </div>
    )
}