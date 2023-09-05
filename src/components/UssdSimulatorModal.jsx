import React, { useState } from "react";
import Modal from "react-modal";

Modal.setAppElement("#root"); // Set the root element for accessibility

const UssdSimulatorModal = ({ isOpen, closeModal }) => {
  const [userInput, setUserInput] = useState(""); // Store user input

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSendUssd = () => {
    // Handle USSD request with the user's input here
    // You can make an API request to a backend for processing
    // Update the modal content with the response
  };

  return (
    <Modal
    className=""
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="USSD Simulator Modal"
    >
      <div className="">
        <h1 className="text-2xl font-bold my-5 w-full text-center underline">
          USSD BOOKING
        </h1>

        <p className="mb-5">Hello and welcome to the USSD simulator. dail in the require USSD code</p>
        <div className="h-screen ">
          <input
          className="w-full p-5 mb-20"
            type="text"
            value={userInput}
            onChange={handleInputChange}
            placeholder="Enter USSD code..."
          />
          <button className="btn w-full bg-secondary " onClick={handleSendUssd}>Send</button>
        </div>
       
      </div>
    </Modal>
  );
};

export default UssdSimulatorModal;
