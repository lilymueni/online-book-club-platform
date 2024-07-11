// import React, { useState, useEffect } from "react";
// import BookClubCard from "./BookClubCard";

// const BookClub = () => {
//   const [bookClubs, setBookClubs] = useState([]);

//   useEffect(() => {
//     fetch("/bookclubs")
//       .then((response) => response.json())
//       .then((data) => setBookClubs(data));
//   }, []);

//   return (
//     <div className="book-club-list">
//       {bookClubs.map((bookClub) => (
//         <BookClubCard key={bookClub.id} bookClub={bookClub} />
//       ))}
//     </div>
//   );
// };

// export default BookClub;


import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const initialFormData = {
  name: "",
  cover: "",
  description: "",
  genre: "",
  members: 0, // Initialize members count
};

const BookClub = () => {
  const [showForm, setShowForm] = useState(false);
  const [bookClubs, setBookClubs] = useState([
    { name: "Social Justice", cover: "https://i.pinimg.com/736x/28/8d/e3/288de3c1d0b35cc50bc018acb879573c.jpg", description: "Books focusing on social issues and activism.", genre: "Social Justice", members: 52 },
    { name: "Romance", cover: "https://i.pinimg.com/736x/00/21/b5/0021b5139b25e0d9633c60cbf6d5e23c.jpg", description: "Love stories and romantic novels.", genre: "Romance", members: 76 },
    { name: "Fantasy and Mythology", cover: "https://i.pinimg.com/736x/26/c9/52/26c9526963119cb7437e6dd8cbdd7f6f.jpg", description: "Books featuring fantastical worlds and mythological themes.", genre: "Fantasy and Mythology", members: 63 },
    { name: "Adventure and Travel", cover: "https://i.pinimg.com/736x/e0/84/d6/e084d6df52e1c4ffa7dd2a8528393a21.jpg", description: "Travel guides and adventure stories.", genre: "Adventure and Travel", members: 41 },
    { name: "Cultural Identity", cover: "https://i.pinimg.com/736x/84/fa/16/84fa16af03cabbe487e9b87f3e724963.jpg", description: "Books exploring cultural heritage and identity.", genre: "Cultural Identity", members: 57 },
    { name: "Biographies and Memoirs", cover: "https://i.pinimg.com/736x/1c/70/c4/1c70c468e12564ab632a54ae16c0f64e.jpg", description: "Life stories and personal memoirs.", genre: "Biographies and Memoirs", members: 84 },
    { name: "Contemporary Fiction", cover: "https://i.pinimg.com/736x/31/75/4d/31754d005eeb099692fbd79353d0150b.jpg", description: "Modern novels and contemporary literature.", genre: "Contemporary Fiction", members: 62 },
    { name: "Dystopian and Sci-Fi", cover: "https://i.pinimg.com/736x/03/f7/8b/03f78bdba40713433abb4ee05bdb2d52.jpg", description: "Sci-fi adventures and dystopian futures.", genre: "Dystopian and Sci-Fi", members: 73 },
    { name: "Mental Health and Well-being", cover: "https://i.pinimg.com/736x/9a/dd/21/9add211e51cd8479adc235b7eed6baf6.jpg", description: "Books on mental health and personal growth.", genre: "Mental Health and Well-being", members: 49 },
    { name: "Youth Entrepreneurship", cover: "https://i.pinimg.com/736x/f9/9f/ed/f99fedd92b0c724bc9753003905efbdc.jpg", description: "Guides for young entrepreneurs and startups.", genre: "Youth Entrepreneurship", members: 37 },
    { name: "Technology and Social Media", cover: "https://i.pinimg.com/736x/92/38/85/92388517cef60893ac8c682d8e4a31f9.jpg", description: "Books on technology trends and social media impact.", genre: "Technology and Social Media", members: 68 },
    { name: "Environmental Sustainability", cover: "https://i.pinimg.com/736x/78/bc/48/78bc48871fc974547cf27225529e3759.jpg", description: "Environmental activism and sustainability.", genre: "Environmental Sustainability", members: 55 },
    { name: "Political Activism", cover: "https://i.pinimg.com/474x/0b/8a/75/0b8a758e63857fbafd362412eb723b89.jpg", description: "Books on political movements and activism.", genre: "Political Activism", members: 61 },
    { name: "Socio-Economic Issues", cover: "https://i.pinimg.com/736x/21/42/97/214297ee57f21ad2bcd06e0743aaddbc.jpg", description: "Exploring socio-economic challenges and solutions.", genre: "Socio-Economic Issues", members: 79 },
    { name: "Literary Classics", cover: "https://i.pinimg.com/736x/a3/b4/58/a3b4583f59a835e80a0e8cd58b35570c.jpg", description: "Classic novels and timeless literature.", genre: "Literary Classics", members: 88 },
    { name: "Health and Fitness", cover: "https://i.pinimg.com/736x/a4/ee/c8/a4eec858747bc4a724197d1253d725c2.jpg", description: "Health guides and fitness routines.", genre: "Health and Fitness", members: 45 },
    { name: "Science and Nature", cover: "https://i.pinimg.com/736x/92/f0/ff/92f0ff29a7f663c4175d19197c1c2d93.jpg", description: "Books exploring scientific discoveries and natural wonders.", genre: "Science and Nature", members: 59 },
    { name: "Philosophy and Ethics", cover: "https://i.pinimg.com/736x/a5/d7/c9/a5d7c9bfd76cf128f316862bf5255bbe.jpg", description: "Philosophical ideas and ethical dilemmas.", genre: "Philosophy and Ethics", members: 53 },
    { name: "Art and Creativity", cover: "https://i.pinimg.com/736x/b3/b2/74/b3b274d2e0a304a20b57b94eef5ac88e.jpg", description: "Creative inspirations and artistic expressions.", genre: "Art and Creativity", members: 67 },
  ]);

  const [formData, setFormData] = useState(initialFormData);

  const bookClubRefs = useRef({});

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
      members: Math.floor(Math.random() * 100) + 1, // Simulate random number of members
    };
    setBookClubs([...bookClubs, newClub]);
    setFormData(initialFormData);
    setShowForm(false);
  };

  const handleFormClose = () => {
    setShowForm(false);
    setFormData(initialFormData);
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
            <CancelButton type="button" onClick={handleFormClose}>Cancel</CancelButton>
          </Form>
        </FormContainer>
      )}
      <CardContainer>
        {bookClubs.map((club, index) => (
          <Card key={index} ref={(el) => (bookClubRefs.current[index] = el)}>
            <Image src={club.cover} alt={club.name} />
            <ClubName>{club.name}</ClubName>
            <Description>{club.description}</Description>
            <Members>{club.members} members</Members>
            <DiscussionButton to={`/discussion/${club.name}`}>Discussion</DiscussionButton>
          </Card>
        ))}
      </CardContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 20px;
  background-color: #f0f0f0;
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

  &:hover {
    background-color: #5b57d9;
  }
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

  &:hover {
    background-color: #5b57d9;
  }
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

  &:hover {
    background-color: #bbb;
  }
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

const Members = styled.p`
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 15px;
`;

const DiscussionButton = styled(Link)`
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  background-color: #7e76f9;
  color: white;
  text-decoration: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #5b57d9;
  }
`;

export default BookClub;
