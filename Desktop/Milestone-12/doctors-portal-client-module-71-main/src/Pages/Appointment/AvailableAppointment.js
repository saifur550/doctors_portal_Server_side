import { format } from 'date-fns';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Booking from '../Booking/Booking';
import AppointmentService from './AppointmentService';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';

const AvailableAppointment = ({date}) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null)
    const formattedDate = format(date, 'PP');


/*     useEffect(() => {
        fetch(`https://shrouded-sea-42586.herokuapp.com/available?date=${formattedDate}`)
            .then(res => res.json())
            .then(data => setServices(data));
    }, [formattedDate]) */


    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://shrouded-sea-42586.herokuapp.com/available?date=${formattedDate}`)
    .then(res => res.json()))

if(isLoading){
    return <Loading></Loading>
}





    return (
        <div>
           <h4 className='text-xl text-secondary text-center my-12'>Available Appointments on {format(date, 'PP')}</h4>

           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                   services.map( service => <AppointmentService
                   
                   key={service._id}
                   service={service}
                   setTreatment={setTreatment}
                   >
                   </AppointmentService>)
               }
           </div>
           {
               treatment && <Booking
               date={date}
                treatment={treatment}
                setTreatment={setTreatment}
                refetch = {refetch}
                 ></Booking>
           }
        </div>
    );
};

export default AvailableAppointment;