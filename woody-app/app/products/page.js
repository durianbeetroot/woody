import Header from '@/components/Header';
import Hero from '@/components/Hero';

export default function Page(){
    return (
        <div className="bg-1">
            <Header />
            <Hero 
                backgroundImage="/img/img1.png" 
                text1="Professional Wood Furniture" 
                text2="Woody has been a leading provider of wood furniture craftsmanship for many years. From custom-built pieces to beautifully crafted solid oak furniture, we have all your wood furniture needs covered. " 
            />
        </div>
    )
}