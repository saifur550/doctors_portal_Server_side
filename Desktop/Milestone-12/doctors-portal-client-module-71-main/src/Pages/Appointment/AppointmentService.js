import React from "react";

const AppointmentService = ({ service, setTreatment }) => {
  const { name, slots } = service;
  return (
    <div>
      <div className="card lg:max-w-lg  bg-base-100 shadow-xl">
        <div className="card-body text-center">
          <h2 className=" text-secondary">{name}</h2>
          <p>
            {slots.length} {slots.length > 1 ? "spaces" : "space"} available
          </p>
          <p>
            {" "}
            {slots.length > 0 ? (
              <span>{slots[0]}</span>
            ) : (
              <span className="text-red-500 font-bold">No slots available</span>
            )}
          </p>
          <div className="card-actions justify-center my-5">
            <label
             htmlFor="my-modal-6"
             disabled={slots.length === 0}
             onClick={() => setTreatment(service)}
              className="btn btn-sm modal-button text-white bg-gradient-to-r from-secondary to-primary">
                 BOOK APPOINTMENT
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentService;
