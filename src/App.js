import {useState} from 'react';

import ImageCard from 'components/imageCard/ImageCard';
import Pagination from 'components/pagination/Pagination';

import IMAGES_DATA from 'data/ImagesData';

import './App.css';

function App() {
  const imagesPerPage=8; //一頁有幾張圖片
  const totalPages=Math.ceil(IMAGES_DATA.length/imagesPerPage); //總共頁數
  const pageNumbersArray=Array(totalPages).fill().map((_,index)=>index+1);
  const [currentImagePage,setCurrentImagePage]=useState(1); //目前在哪一頁  
  const [currentImages,setCurrentImages]=useState(IMAGES_DATA.slice(0,imagesPerPage));

  const clickHandler=(number)=>{
    let indexOfLastImage=0;
    let indexOfFirstImage=0;
    if(number<1){
      setCurrentImagePage(1);
      setCurrentImages(IMAGES_DATA.slice(0,imagesPerPage));
    }
    else if(number>totalPages){
      indexOfLastImage=totalPages*imagesPerPage;
      indexOfFirstImage=indexOfLastImage-imagesPerPage;
      setCurrentImagePage(totalPages);
      setCurrentImages(IMAGES_DATA.slice(indexOfFirstImage,indexOfLastImage));
    }
    else{
      indexOfLastImage=number*imagesPerPage;
      indexOfFirstImage=indexOfLastImage-imagesPerPage;
      setCurrentImagePage(number);
      setCurrentImages(IMAGES_DATA.slice(indexOfFirstImage,indexOfLastImage));
    }
  };
  
  return (
    <section className="section-padding bg-height">
      <div className="container container-padding">
        <div className="image-box">
          <div className="image-grid">
            {currentImages.map(image=>(
              <ImageCard key={image.id} image={image} />
            ))}
          </div>
        </div>
        <Pagination currentImagePage={currentImagePage} totalPages={totalPages} pageNumbersArray={pageNumbersArray} clickHandler={clickHandler} />
        <h1 className="text">圖片來源: Unsplash</h1>
      </div>
    </section>
  );
}

export default App;