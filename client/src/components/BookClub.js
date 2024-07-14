import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom"; //for navigating to a new page

import DiscussionModal from "./DiscussionModal"; // Assuming DiscussionModal is correctly implemented

const initialFormData = {
  id: "",
  name: "",
  cover: "",
  description: "",
  genre: "",
  members: 0,
};

const initialBookClubs = [
  {
    id: 1,
    name: "Social Justice",
    cover:
      "https://i.pinimg.com/736x/28/8d/e3/288de3c1d0b35cc50bc018acb879573c.jpg",
    description: "Books focusing on social issues and activism.",
    genre: "Social Justice",
    members: 52,
    comments: [
      {
        id: 1,
        username: "User1",
        body: "Great club!",
        created_at: "2024-07-12T10:30:00Z",
      },
      {
        id: 2,
        username: "User2",
        body: "I love the discussions here.",
        created_at: "2024-07-12T11:15:00Z",
      },
    ],
  },
  {
    id: 2,
    name: "Romance",
    cover:
      "https://i.pinimg.com/736x/00/21/b5/0021b5139b25e0d9633c60cbf6d5e23c.jpg",
    description: "Love stories and romantic novels.",
    genre: "Romance",
    members: 76,
    comments: [
      {
        id: 1,
        username: "User3",
        body: "This club has the best romance picks.",
        created_at: "2024-07-12T09:45:00Z",
      },
      {
        id: 2,
        username: "User4",
        body: "Excited for the next book!",
        created_at: "2024-07-12T12:00:00Z",
      },
    ],
  },
  {
    id: 3,
    name: "Fantasy and Mythology",
    cover:
      "https://i.pinimg.com/736x/26/c9/52/26c9526963119cb7437e6dd8cbdd7f6f.jpg",
    description: "Books featuring fantastical worlds and mythological themes.",
    genre: "Fantasy and Mythology",
    members: 63,
    comments: [],
  },
  {
    name: "Adventure and Travel",
    cover:
      "https://i.pinimg.com/736x/e0/84/d6/e084d6df52e1c4ffa7dd2a8528393a21.jpg",
    description: "Travel guides and adventure stories.",
    genre: "Adventure and Travel",
    members: 41,
    comments: [],
  },
  {
    id: 4,
    name: "Cultural Identity",
    cover:
      "https://i.pinimg.com/736x/84/fa/16/84fa16af03cabbe487e9b87f3e724963.jpg",
    description: "Books exploring cultural heritage and identity.",
    genre: "Cultural Identity",
    members: 57,
    comments: [],
  },
];

const BookClub = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookClubs, setBookClubs] = useState(initialBookClubs); // Initialize with initialBookClubs data
  const [formData, setFormData] = useState(initialFormData);
  const [selectedClub, setSelectedClub] = useState(null);

  const navigate = useNavigate(); //define useNavigate to navigate to a blog page

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
        <AddButton onClick={() => setShowForm(true)}>
          Add a new Book Club
        </AddButton>
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
            <FormLabel>Cover Image URL</FormLabel>
            <FormInput
              type="text"
              name="cover"
              value={formData.cover}
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
            <CancelButton type="button" onClick={handleFormClose}>
              Cancel
            </CancelButton>
          </Form>
        </FormContainer>
      )}

      <CardContainer>
        {bookClubs.length > 0 ? (
          bookClubs.map((club, index) => (
            <Card key={index}>
              <Image src={club.cover} alt={club.name} />
              <ClubName>{club.name}</ClubName>
              <Description>{club.description}</Description>
              <Members>{club.members} members</Members>
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
