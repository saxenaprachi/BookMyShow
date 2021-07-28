import React from 'react';
import HeroCarousel from '../components/HeroCarousel/HeroCarousel.component';
import Filter from '../components/plays/Fliter/Filter.component';
import Poster from '../components/Poster/Poster.component';


 const Plays= () => {
    return (
        <>
        <div>
        <HeroCarousel/>
            <div className="container mx-auto px-4 w-full lg:flex lg:flex-row-reverse">
              <div className="lg:w-3/4">
                  <h1 className="text-xl font-bold">Plays</h1>
                <div className="flex flex-wrap ">

                    <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:…F,oy-620,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                     title="Kanthamathi` (Sadarame) Surabhi Theatre Play" 
                     subtitle=" Telgu-> ₹100"/>
                    </div>
                   
                    

                    <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:…F,oy-620,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                     title="Kanthamathi` (Sadarame) Surabhi Theatre Play" 
                     subtitle=" Telgu-> ₹100"/>
                    </div>
                   
                    

                    <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:…F,oy-620,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                     title="Kanthamathi` (Sadarame) Surabhi Theatre Play" 
                     subtitle=" Telgu-> ₹100"/>
                    </div>
                   
                    

                    <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:…F,oy-620,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                     title="Kanthamathi` (Sadarame) Surabhi Theatre Play" 
                     subtitle=" Telgu-> ₹100"/>
                    </div>
                   
                    

                    <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:…F,oy-620,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                     title="Kanthamathi` (Sadarame) Surabhi Theatre Play" 
                     subtitle=" Telgu-> ₹100"/>
                    </div>
                   
                    

                    <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:…F,oy-620,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                     title="Kanthamathi` (Sadarame) Surabhi Theatre Play" 
                     subtitle=" Telgu-> ₹100"/>
                    </div>
                   
                    

                    <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:…F,oy-620,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                     title="Kanthamathi` (Sadarame) Surabhi Theatre Play" 
                     subtitle=" Telgu-> ₹100"/>
                    </div>
                   
                    

                    <div className="w-1/2 my-3 md:w-1/3 lg:w-1/4">
                    <Poster src="https://in.bmscdn.com/discovery-catalog/events/tr:…F,oy-620,ox-24/et00309696-fsqhgswrqc-portrait.jpg"
                     title="Kanthamathi` (Sadarame) Surabhi Theatre Play" 
                     subtitle=" Telgu-> ₹100"/>
                    </div>
                   
                    



                </div>
              </div>
              <div className=" hidden flex flex-col gap-3 items-start lg:block lg:w-1/4">
                <h1 className="text-xl font-bold">Filters</h1>
                <div className="">
                    <Filter title="Date" tags={["Today", "Tomorrow", "This Weekend"]}/>
                    <Filter title="Language" tags={["Tamil", "Telgu", "English"]}/>
                    <Filter title="Categories" tags={["Theatre", "Story Telling"]}/>
                    <Filter title="Genres" tags={["Drama", "Comedy", "Mythology", "Adaptation", "Historical"]}/>

                </div>
              </div>
            </div>
        </div>
        </>
    )
}
export default Plays;
