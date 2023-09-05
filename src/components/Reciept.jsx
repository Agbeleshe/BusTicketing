import React from "react";

const Receipt = ({ formData, isSubmitted, setIsSubmitted }) => {
  // Debugging formData values
  console.log("Form Data:", formData.toState);

  return (
    <div className="mt-10 text-center">
      {isSubmitted ? (
        <div className="bg-blue-200 p-2">
          <h1>
            Dear {formData.fullName}, You have successfully booked a bus with
            the id number: {Math.ceil(Math.random() * 10029)}P.LL2. Your bus
            will take off on {formData.date}. Call our agent at 090000000000 to
            find out more about your booking. you can meet us at Number{" "}
            {Math.ceil(Math.random())} , {formData.fromState} Road.
          </h1>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Receipt;
