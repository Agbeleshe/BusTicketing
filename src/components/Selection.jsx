import React, { useState } from "react";
import Reciept from "./Reciept";
import Modal from "react-modal";
import UssdSimulatorModal from "./UssdSimulatorModal";

Modal.setAppElement("#root");

const Selection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    date: "",
    phoneNumber: "",
    fromState: "",
    toState: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      fullName: "",
      date: "",
      phoneNumber: "",
      fromState: "",
      toState: "",
    });
    setIsSubmitted(true);
  };

  const handleFromToClick = () => {
    console.log("From:", formData.fromState);
    console.log("To:", formData.toState);
  };


  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-[80%] mx-auto md:max-w-xl">
      <div>
        <h1 className="text-2xl font-bold my-5 w-full text-center underline">
          ONLINE BOOKINGS
        </h1>
        <div className="">
          <form
            className="flex flex-col md:flex-row-2 gap-5 w-full justify-center"
            onSubmit={handleSubmit}
          >
            <div className=" items-center h-auto inline-block">
              <h1 className="my-4 text-lg font-bold">Full Name</h1>
              <input
                required
                type="text"
                className="input input-primary  min-w-full "
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Enter your full name"
              />
            </div>
            <div className=" items-center h-auto inline-block">
              <h1 className="my-4 text-lg font-bold">Date</h1>
              <input
                required
                type="date"
                className="input input-primary min-w-full "
                name="date"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className=" items-center h-auto inline-block">
              <h1 className="my-4 text-lg font-bold">Phone Number</h1>
              <input
                required
                type="tel"
                className="input input-primary min-w-full "
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <div className="inline-block">
                <h1
                  className="my-4 text-lg font-bold"
                  onClick={handleFromToClick}
                >
                  From
                </h1>
                <select
                  required
                  type="text"
                  className="select select-primary min-w-[300px] "
                  name="fromState"
                  value={formData.fromState}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Which state do you currently reside?
                  </option>
                  <option>Abia</option>
                  <option>Adamawa</option>
                  <option>Akwa Ibom</option>
                  <option>Anambra</option>
                  <option>Bauchi</option>
                  <option>Bayelsa</option>
                  <option>Benue</option>
                  <option>Borno</option>
                  <option>Cross River</option>
                  <option>Delta</option>
                  <option>Ebonyi</option>
                  <option>Edo</option>
                  <option>Ekiti</option>
                  <option>Enugu</option>
                  <option>Gombe</option>
                  <option>Imo</option>
                  <option>Jigawa</option>
                  <option>Kaduna</option>
                  <option>Kano</option>
                  <option>Katsina</option>
                  <option>Kebbi</option>
                  <option>Kogi</option>
                  <option>Kwara</option>
                  <option>Lagos</option>
                  <option>Nasarawa</option>
                  <option>Niger</option>
                  <option>Ogun</option>
                  <option>Ondo</option>
                  <option>Osun</option>
                  <option>Oyo</option>
                  <option>Plateau</option>
                  <option>Rivers</option>
                  <option>Sokoto</option>
                  <option>Taraba</option>
                  <option>Yobe</option>
                  <option>Zamfara</option>
                </select>
              </div>
            </div>
            <div>
              <div className="inline-block">
                <h1
                  className="my-4 text-lg font-bold"
                  onClick={handleFromToClick}
                >
                  To
                </h1>
                <select
                  required
                  type="text"
                  className="select select-primary min-w-[300px] "
                  name="toState"
                  value={formData.toState}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Which state do you want to go?
                  </option>
                  <option>Abia</option>
                  <option>Adamawa</option>
                  <option>Akwa Ibom</option>
                  <option>Anambra</option>
                  <option>Bauchi</option>
                  <option>Bayelsa</option>
                  <option>Benue</option>
                  <option>Borno</option>
                  <option>Cross River</option>
                  <option>Delta</option>
                  <option>Ebonyi</option>
                  <option>Edo</option>
                  <option>Ekiti</option>
                  <option>Enugu</option>
                  <option>Gombe</option>
                  <option>Imo</option>
                  <option>Jigawa</option>
                  <option>Kaduna</option>
                  <option>Kano</option>
                  <option>Katsina</option>
                  <option>Kebbi</option>
                  <option>Kogi</option>
                  <option>Kwara</option>
                  <option>Lagos</option>
                  <option>Nasarawa</option>
                  <option>Niger</option>
                  <option>Ogun</option>
                  <option>Ondo</option>
                  <option>Osun</option>
                  <option>Oyo</option>
                  <option>Plateau</option>
                  <option>Rivers</option>
                  <option>Sokoto</option>
                  <option>Taraba</option>
                  <option>Yobe</option>
                  <option>Zamfara</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Submit
            </button>
          </form>
        </div>
      </div>
      <Reciept
        formData={formData}
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
      />

      <div className="mt-20">
        <h1 className="text-2xl font-bold my-5 w-full text-center underline">
          USSD BOOKING
        </h1>
        <button className="btn btn-primary w-full" onClick={openModal}>
          USSD
        </button>
        <UssdSimulatorModal isOpen={isModalOpen} closeModal={closeModal} />
      </div>
    </div>
  );
};

export default Selection;
