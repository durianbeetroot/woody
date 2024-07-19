'use client'

import Header from '@/components/Header';
import Hero from '@/components/Hero';
import { Container,Row,Col } from 'react-bootstrap';
import Footer from '@/components/Footer';
import { useEffect, useState } from 'react';

import { db } from '@/utils/firebaseConfig';
import { collection, addDoc, getDocs, where, limit, orderBy, startAfter } from 'firebase/firestore';

export default function Page(){

    const Sentiment = require('sentiment');
    const sentiment = new Sentiment();

    const analyzeSentiment = (statement) => {
    const result = sentiment.analyze(statement);
    if (result.score > 0) {
        return 'Good';
    } else if (result.score < 0) {
        return 'Bad';
    } else {
        return 'Neutral';
    }
    };

    const [name, setName] = useState('');
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [review, setReview] = useState(null);

    useEffect(() => {
        const fetchRandomReview = async () => {
          try {
            const randomIndex = Math.random();

            const querySnapshot = await getDocs(
                collection(db, 'reviews'), 
                where('sentiment','==','Good'),
                limit(1)
            )
            
            querySnapshot.forEach((doc) => {
              setReview({ id: doc.id, ...doc.data() });
            });
    
          } catch (error) {
            console.error("Error fetching reviews: ", error);
          }
        };
    
        fetchRandomReview();
      }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
          await addDoc(collection(db, 'reviews'), {
            name: name,
            title: title,
            description: desc,
            sentiment: analyzeSentiment(desc),
            random: Math.random(),
          });

        alert("Review has been added"); 
        window.location.reload(); 
          
        } catch (e) {
          console.error("Error adding review: ", e);
        }
      };

    return (
        <div className="bg-1">
            <Header />
            <Hero 
                backgroundImage="/img/img3.png" 
                text1="Reviews" 
                text2="Welcome to the Customer Reviews section of Woody-App. Here, you can read authentic feedback from our users. Their experiences and insights help us continuously improve and provide the best service possible. Explore what our customers have to say about Woody-App." 
            />
            <Container fluid className='py-12'>
                <Row className='px-16'>
                    <Col md={12} className='review-border pt-8 pb-2'>
                        <h1 className="f-2 text-5xl txt-2 font-semibold text-center">
                            {review ? review.title : null}
                        </h1>
                        <h1 className="f-1 w-5/6 text-sm text-white text-center pt-12 mx-auto">
                            {review ? review.description : null}
                        </h1>
                        <h1 className="f-2 text-4xl text-white font-semibold text-center pt-16 mx-auto">
                            {review ? review.name : null}
                        </h1>
                    </Col>
                </Row>
            </Container>
            <Container fluid className='py-12 bg-3'>
                <Row className='px-16'>
                    <Col md={12}>
                        <h1 className="f-2 text-5xl text-white font-semibold">
                            Wants to  Provide Us Testimony?
                        </h1>
                    </Col>
                </Row>
                <form onSubmit={handleSubmit}>
                    <Row className='pt-6 px-16'>
                        <Col md={6} className='py-2'>
                            <input placeholder="Your Name" className='f-2 bg-1 rounded txt-2 text-2xl p-3 w-full'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            ></input>
                        </Col>
                        <Col md={6} className='py-2'>
                            <input placeholder="Review Title" className='f-2 bg-1 rounded txt-2 text-2xl p-3 w-full'
                                value={title}
                                onChange={(e) => setTitle(e.target.value)}
                                required
                            ></input>
                        </Col>
                        <Col md={12} className='py-2'>
                            <textarea placeholder="Full Review" className='f-2 bg-1 rounded txt-2 text-2xl p-3 w-full h-96'
                                value={desc}
                                onChange={(e) => setDesc(e.target.value)}
                                required
                            ></textarea>
                        </Col>
                    </Row>
                    <div className='px-16 pt-2 flex justify-end'>
                        <button className='f-2 p-2 px-4 text-2xl font-semibold btn-review duration-300' type='submit'> Submit </button>
                    </div>
                </form>
            </Container>
            <Footer/>
        </div>
    )
}