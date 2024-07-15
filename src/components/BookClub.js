import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; //for navigating to a new page

import DiscussionModal from "./DiscussionModal"; // Assuming DiscussionModal is correctly implemented

//instead of this, fetch data from api

const initialFormData = {
  id: "",
  name: "",
  cover_image: "",
  description: "",
  genre: "",
  members: 0,
};

const BookClub = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookClubs, setBookClubs] = useState([]); // Initialize with [] data
  const [formData, setFormData] = useState(initialFormData);
  const [selectedClub, setSelectedClub] = useState(null);

  const navigate = useNavigate(); //define useNavigate to navigate to a blog page

  useEffect(() => {
    fetchBookClubs();
  }, []);

  const fetchBookClubs = async () => {
    const response = await fetch(
      "https://backend-bookclub-y5fd.onrender.com/book_clubs"
    );
    const data = await response.json();
    setBookClubs(data);
  };

  const handleExploreClick = (club) => {
    navigate(`/book_clubs/${club.id}`);
    setSelectedClub(club);
    console.log(selectedClub);
  }; //function to handle the explore button

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newClub = {
      ...formData,
      members: Math.floor(Math.random() * 100) + 1,
      comments: [], // Initialize with an empty array for comments
    };
    setBookClubs((prevClubs) => [...prevClubs, newClub]);
    setFormData(initialFormData);
    setShowForm(false);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setFormData(initialFormData);
  };

  const closeDiscussionModal = () => {
    setSelectedClub(null);
  };

  const addComment = (newComment) => {
    const updatedClubs = bookClubs.map((club) => {
      if (club.name === selectedClub.name) {
        return {
          ...club,
          comments: [...club.comments, newComment],
        };
      }
      return club;
    });
    setBookClubs(updatedClubs);
  };

  return (
    <Wrapper>
      <NavBar>
        <Title>Book Clubs</Title>
        <AddButton onClick={() => setShowForm(true)}>Add a new Book Club</AddButton>
      </NavBar>
      {showForm && (
        <FormContainer>
          <Form onSubmit={handleFormSubmit}>
            <FormLabel>Name</FormLabel>
            <FormInput
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
            <FormLabel>cover_image Image URL</FormLabel>
            <FormInput
              type="text"
              name="cover_image"
              value={formData.cover_image}
              onChange={handleInputChange}
              required
            />
            <FormLabel>Description</FormLabel>
            <FormTextArea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
            <FormLabel>Genre</FormLabel>
            <FormInput
              type="text"
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
              required
            />
            <FormButton type="submit">Create Book Club</FormButton>
            <CancelButton type="button" onClick={handleFormClose}>Cancel</CancelButton>
          </Form>
        </FormContainer>
      )}

      <CardContainer>
        {bookClubs.length > 0 ? (
          bookClubs.map((club, index) => (
            <Card key={index}>
              <Image src={club.cover_image} alt={club.name} />
              <ClubName>{club.name}</ClubName>
              <Description>{club.description}</Description>
              <Members>{club.members_count} members</Members>
              {/* Changed to open discussion modal */}
              <ExploreButton onClick={() => handleExploreClick(club)}>
                Explore club...
              </ExploreButton>
            </Card>
          ))
        ) : (
          <p>No book clubs available</p>
        )}
      </CardContainer>

      {/* Discussion modal */}
      {selectedClub && (
        <DiscussionModal
          isOpen={!!selectedClub}
          onClose={closeDiscussionModal}
          club={selectedClub}
          addComment={addComment}
        />
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
  position: relative;
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin: 0;
`;

const AddButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background-color: #7e76f9;
  color: white;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;
`;

const FormContainer = styled.div`
  margin-top: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 400px;
  margin: 0 auto;
`;

const FormLabel = styled.label`
  font-size: 1rem;
`;

const FormInput = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const FormTextArea = styled.textarea`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  min-height: 100px;
`;

const FormButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background-color: #7e76f9;
  color: white;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  outline: none;
`;

const CancelButton = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background-color: #ccc;
  color: #333;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 10px;
  outline: none;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 250px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const Image = styled.img`
  width: 100%;
  max-height: 200px;
  border-radius: 8px;
  object-fit: cover;
`;

const ClubName = styled.h3`
  margin: 15px 0 5px;
  font-size: 1.5rem;
  color: #333;
`;

const Description = styled.p`
  font-size: 1rem;
  text-align: center;
  color: #666;
  margin-bottom: 10px;
`;

const ExploreButton = styled.button`
  background-color: #007bff;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  margin-right: 10px;
  cursor: pointer;
  transition: 0.3s ease-in-out;

  &:hover {
    background-color: #0069d9;
  }
`;

const Members = styled.p`
  font-size: 0.9rem;
  color: #888;
  margin-top: auto;
`;

export default BookClub;
