import React, { useState } from 'react';
import Modal from './Modal';
import { data } from '../../../data';

// The Index component
const Index = () => {
  // State to manage the name input
  const [name, setName] = useState('');
  // State to manage the list of people
  const [people, setPeople] = useState(data);
  // State to manage the visibility of the modal
  const [showModal, setShowModal] = useState(false);

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (name) { // Check if name is not empty
      setShowModal(true); // Show modal
      // Add new person to the people array
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName(''); // Reset the name input
    } else {
      setShowModal(true); // Show modal if name is empty
    }
  };

  return (
    <>
      {/* Conditionally render the Modal component */}
      {showModal && <Modal />}
      {/* Form to add a new person */}
      <form onSubmit={handleSubmit}>
        <div>
          <input 
            type='text'
            value={name}
            onChange={(e) => { setName(e.target.value) }} // Update name state on input change
          />
        </div>
        <button type='submit'>add</button>
      </form>
      {/* Render the list of people */}
      {people.map((person) => {
        return (
          <div key={person.id}>
            <h4>{person.name}</h4>
          </div>
        );
      })}
    </>
  );
};

export default Index;
