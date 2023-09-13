import React, { useState } from 'react';
import { db } from './firebase';
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { Box } from '@chakra-ui/react';
import layerStyle from './theme'

const Form = () => {
  const [name, setName] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [agree, setAgree] = useState(false);
  const userCollectionRef = collection(db,"users")
  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    const selectedCategory = e.target.value;
    //todo filtering
    setSelectedCategories([...selectedCategories, selectedCategory]);
  };

  const handleAgreeChange = (e) => {
    setAgree(e.target.checked);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform validation here
    if (name.trim() === '' || selectedCategories.length === 0 || !agree) {
      alert('Please fill in all fields and agree to the terms.');
      return;
    }
    console.log(name,selectedCategories,agree)

    try {
      // Store data in the database
      await addDoc(userCollectionRef,{
        name:name,
        catagory:selectedCategories,
        agree:agree,
      });

      // Clear form fields
      setName('');
      setSelectedCategories([]);
      setAgree(false);

      alert('Form data saved successfully!');
    } catch (error) {
      console.error('Error saving form data:', error);
      alert('An error occurred while saving the form data. Please try again.');
    }
  };

  return (
    <div className="flex">
      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Input Section</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-600">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={handleNameChange}
              required
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="categories" className="block text-gray-600">Select Categories:</label>
            <select
              id="categories"
              value={selectedCategories}
              onChange={handleCategoryChange}
              required
              multiple
              className="border border-gray-300 rounded-md p-2 w-full"
            >
              <option value="Category 1">Category 1</option>
              <option value="Category 2">Category 2</option>
              <option value="Category 3">Category 3</option>
              <option value="Manufacturing">Manufacturing</option>
              <option value="Construction materials">Construction materials</option>
              <option value="Electronics and Optics">Electronics and Optics</option>
              <option value="Food and Beverage">Food and Beverage</option>
              <option value="Bakery & confectionery products">Bakery & confectionery products</option>
              <option value="Beverages">Beverages</option>
              <option value="Fish & fish products">Fish & fish products</option>
              <option value="Meat & meat products">Meat & meat products</option>
              <option value="Milk & dairy products">Milk & dairy products</option>
              <option value="Other">Other</option>
              <option value="Sweets & snack food">Sweets & snack food</option>
              <option value="Furniture">Furniture</option>
              <option value="Bathroom/sauna">Bathroom/sauna</option>
              <option value="Bedroom">Bedroom</option>
              <option value="Childrenâ€™s room">Childrenâ€™s room</option>
              <option value="Kitchen">Kitchen</option>
              <option value="Living room">Living room</option>
              <option value="Office">Office</option>
              <option value="Other (Furniture)">Other (Furniture)</option>
              <option value="Outdoor">Outdoor</option>
              <option value="Project furniture">Project furniture</option>
              <option value="Machinery">Machinery</option>
              <option value="Machinery components">Machinery components</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="selectedCategories" className="block text-gray-600">Selected Categories:</label>
            <input
              type="text"
              id="selectedCategories"
              value={selectedCategories.join(', ')}
              readOnly
              className="border border-gray-300 rounded-md p-2 w-full"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="agree" className="block text-gray-600">Agree to Terms:</label>
            <input
              type="checkbox"
              id="agree"
              checked={agree}
              onChange={handleAgreeChange}
              required
              className="mr-2"
            />
            <span className="text-gray-600">I agree to the terms</span>
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Save
          </button>
        </form>
      </div>

      <div className="w-1/2 p-4">
        <h1 className="text-2xl font-bold mb-4">Output Section</h1>
        {/* <Box bg={'red'} layerStyle='selected'>This is a box</Box> */}
        {/* Display other output data here */}
      </div>
    </div>
  );
};

export default Form;
