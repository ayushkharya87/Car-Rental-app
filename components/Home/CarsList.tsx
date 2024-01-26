import React, { useEffect, useState } from 'react'
import CarCard from './CarCard'
import BookingModal from '../CarBooking/BookingModal';
import CarCardSkelton from './CarCardSkelton';

function CarsList(props:any) {

    const [isLoaded, setIsLoaded] = useState(true);
    const [selectedCar, setSelectedCar] = useState<any>([]);

    useEffect(() => {
        if(props.carLists) {
            setIsLoaded(false)
        }
    }, [props.carLists])
    
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {props.carsList.map((car:any, index:number) => (
            <div key={car.id} onClick={() => {(window as any).my_modal_4.showModal();
            setSelectedCar(car)}}>
                <CarCard car={car}/>
    
            </div>
        ))}

        <dialog id="my_modal_4" className="modal">
            <BookingModal car={selectedCar}/>
        </dialog>
    </div>


    // <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
    //     {!isLoaded && props.carsList.map ((car:any, index:number) => (
    //         <div key={index} onClick={() => {(window as any).my_modal_4.showModal();
    //         setSelectedCar(car)}}>

    //             <CarCard car={car} />
    //         </div>
    //     ))}
    //     {isLoaded? 
    //     [1,2,3,4,5].map((item) => (
    //         <CarCardSkelton />
    //     ))
    //     : null}

            
    //     <dialog id="my_modal_4" className="modal">
    //         <BookingModal car={selectedCar}/>
    //     </dialog>

    // </div>
  )
}

export default CarsList;