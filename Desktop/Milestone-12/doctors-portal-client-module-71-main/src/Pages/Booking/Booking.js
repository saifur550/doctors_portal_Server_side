import React from "react";
import { toast } from 'react-toastify';
import { format } from 'date-fns';
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const Booking = ({date, treatment, setTreatment, refetch}) => {
    const {_id, name , slots} = treatment;
    const [user] = useAuthState(auth);
    
    const formateDate = format(date ,'PP')
    // console.log(user);


    const handleForm = e =>{
      e.preventDefault()
      const slot = e.target.slot.value
      // data collection 
        const booking ={
          treatmentId : _id,
          treatment:name,
          date : formateDate,
          slot,
          patient:user.email,
          patientName:user.displayName,
          phone:e.target.phone.value,

        }

        fetch('https://shrouded-sea-42586.herokuapp.com/booking', {
          method:'POST',
          headers: {
            'content-type': 'application/json'
          },

          body:JSON.stringify(booking)

        })

        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.success){
            toast(`appointment is set, ${formateDate} at ${slot}`)
          }
          else{
            toast.error(`Already have and appointment on ${data.booking?.date} at ${data.booking?.slot}`)
          }
        //to close the modal
           setTreatment(null);
           refetch();
        })

    }



  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <label htmlFor="my-modal-6" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="font-bold text-secondary mb-4 text-center text-lg">
           Booking For : {name}
          </h3>
        <form onSubmit={handleForm} className="grid gap-5 grid-cols-1 justify-items-center">
        <input type="text" disabled value={format(date, 'PP')} className="input input-bordered w-full max-w-xs" />
        <select name ="slot" className="select select-bordered w-full max-w-xs">
       {
         slots.map((slot,index) =><option
         key={index}
           value={slot}>{slot}</option>)
       }
      
       </select>
        <input type="text" name ="name" disabled  value ={user?.displayName || ''} className="input input-bordered w-full max-w-xs" />
        <input type="text" name = "email" disabled value={user?.email || ''} className="input input-bordered w-full max-w-xs" />
        <input type="number" name="phone" placeholder="Number" className="input input-bordered w-full max-w-xs" />
        <input type="submit" value="Submit" className="btn btn-secondary w-full max-w-xs" />
        </form>
          <div className="modal-action">
            <label htmlFor="my-modal-6" className="btn">
              Yay!
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
