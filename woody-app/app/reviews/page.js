import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Page(){
    return (
        <div className="bg-1">
            <Header />
            <Hero 
                backgroundImage="/img/img3.png" 
                text1="Reviews" 
                text2="Welcome to the Customer Reviews section of Woody-App. Here, you can read authentic feedback from our users. Their experiences and insights help us continuously improve and provide the best service possible. Explore what our customers have to say about Woody-App." 
            />
        </div>
    )
}