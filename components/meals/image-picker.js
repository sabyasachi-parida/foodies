'use client'

import { useRef, useState } from 'react'
import classes from './image-picker.module.css'
import Image from 'next/image';

export default function ImagePicker({label,name}){
    const[pickedImage,setPickedImage]=useState();
    const imageInput=useRef(null);
  
    function handleClick (){
      imageInput.current.click();
    }
    function handleImageChange(e){
   const file = e.target.files[0];
   if(file){
     const fileReader = new FileReader();
     fileReader.onload=()=>{
        setPickedImage(fileReader.result);
     };
     fileReader.readAsDataURL(file);
   }     
  
    }
   
    
return (
    <div className={classes.picker}>
        <label htmlFor={name} >{label}</label>
        <div className={classes.controls}>
            <div className={classes.preview}>

                {!pickedImage && <p>no images selected yet</p>}
                {pickedImage && <Image src={pickedImage} alt='the image selected by user ' fill />}

            </div>
        <input type='file' id={name} accept='image/png , image/jpeg' name={name}
         className={classes.input} ref={imageInput}
        onChange={handleImageChange}/>
       
        <button type='button' className={classes.button} onClick={handleClick}>
         Pick An Image </button>
        </div>
    </div>
)
}