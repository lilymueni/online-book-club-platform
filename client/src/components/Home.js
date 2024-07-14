import React, { useState } from "react";
import styled from "styled-components";
// import NavBar from "../components/NavBar"; // Adjust the import according to your file structure

const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const bookClubs = [
    "Social Justice Book Club",
    "Romance Readers Group",
    "Fantasy and Mythology Enthusiasts",
    "Adventure and Travel Book Club",
    "Cultural Identity Book Club",
    "Biographies and Memoirs Club",
    "Contemporary Fiction Circle",
    "Dystopian and Sci-Fi Club",
    "Mental Health and Well-being Book Club",
    "Youth Entrepreneurship Club",
    "Technology and Social Media Group",
    "Environmental Sustainability Book Club",
    "Political Activism Readers",
    "Socio-Economic Issues Book Club"
  ];

  const trendingBooks = [
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/51d4G0sFMzL._SX331_BO1,204,203,200_.jpg",
      title: "The Great Gatsby",
      description: "A novel by F. Scott Fitzgerald.",
      rating: 4.5,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/51Z0nLAfLmL._SX320_BO1,204,203,200_.jpg",
      title: "1984",
      description: "A novel by George Orwell.",
      rating: 4.7,
    },
    {
      cover: "https://i.pinimg.com/736x/25/ff/e8/25ffe8edc47beb595f36401a7589ae1e.jpg",
      title: "To Kill a Mockingbird",
      description: "A novel by Harper Lee.",
      rating: 4.8,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81gepf1eMqL.jpg",
      title: "The Catcher in the Rye",
      description: "A novel by J.D. Salinger.",
      rating: 4.3,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/81a4kCNuH+L.jpg",
      title: "Pride and Prejudice",
      description: "A novel by Jane Austen.",
      rating: 4.6,
    },
    {
      cover: "https://images-na.ssl-images-amazon.com/images/I/71aG+xDKSYL.jpg",
      title: "The Hobbit",
      description: "A novel by J.R.R. Tolkien.",
      rating: 4.9,
    },
  ];

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);
    if (value.length > 0) {
      const filteredSuggestions = bookClubs.filter(club =>
        club.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <Wrapper>
      <Content>
        <SearchBar
          type="text"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search for books or clubs..."
        />
        {suggestions.length > 0 && (
          <SuggestionsList>
            {suggestions.map((suggestion, index) => (
              <SuggestionItem key={index}>{suggestion}</SuggestionItem>
            ))}
          </SuggestionsList>
        )}
        <Banner>
          <img
            src="https://www.shutterstock.com/image-vector/bookcrossing-concept-happy-people-exchanging-600nw-2031737963.jpg"
            alt="Book Club Banner"
          />
        </Banner>
        <CenteredSection>
          <SubTitle>Welcome to the GenZ Book Club</SubTitle>
          <Description>
            What began as a small blog for book reviews and a cozy gathering among friends has evolved into a multifaceted destination for book enthusiasts. Today, we are a bookstore, a welcoming book café, a personalized book box service, and a vibrant book club community. Reflecting the recent surge of interest among Gen Z in democracy, human rights, and the abuse of power, our offerings now cater to those eager to explore these critical issues. Our curated selections, lively café discussions, and thought-provoking book club meetings provide platforms for learning and engagement, fostering a deeper understanding of political theory, social justice movements, and the narratives shaping today's world.
          </Description>
        </CenteredSection>
        <CenteredSection>
          <SubTitle>About Our Book Club</SubTitle>
          <Description>
            Our book club is dedicated to nurturing a passion for reading among GenZ members. Join us for engaging meetups, curated book recommendations, and a welcoming community of like-minded readers. We offer a supportive environment where members can explore diverse literary works, share insights, and participate in lively discussions that deepen their appreciation for literature and expand their perspectives on the world around them.
          </Description>
        </CenteredSection>
        <TrendingSection>
          <SubTitle>Trending Books</SubTitle>
          <BooksContainer>
            {trendingBooks.map((book, index) => (
              <BookCard key={index}>
                <BookImage src={book.cover} alt={book.title} />
                <BookInfo>
                  <BookTitle>{book.title}</BookTitle>
                  <BookDescription>{book.description}</BookDescription>
                  <BookRating>Rating: {book.rating}</BookRating>
                </BookInfo>
              </BookCard>
            ))}
          </BooksContainer>
        </TrendingSection>
      </Content>
      <Footer>
        <p>©GenZ Book Club.</p>
      </Footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgba(245, 245, 245, 0.858); /* Change background color */
`;

const Content = styled.div`
  width: 80%;
  margin: 20px auto;
  display: flex;
  flex-direction: column;
  align-items: center; /* Centering the content */
`;

const SearchBar = styled.input`
  width: 300px;
  padding: 10px;
  margin: 20px 0;
  font-size: 16px;
`;

const SuggestionsList = styled.ul`
  width: 300px;
  padding: 0;
  margin: 0;
  list-style: none;
  border: 1px solid #ccc;
  border-top: none;
  border-radius: 0 0 4px 4px;
  max-height: 150px;
  overflow-y: auto;
`;

const SuggestionItem = styled.li`
  padding: 10px;
  background-color: white;
  border-bottom: 1px solid #ccc;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }

  &:last-child {
    border-bottom: none;
  }
`;

const Banner = styled.div`
  width: 110%;
  margin: 40px 0;
  overflow: hidden;
  img {
    width: 100%;
    height: auto;
    max-height: 400px;
    object-fit: cover;
  }
`;

const CenteredSection = styled.div`
  text-align: center; /* Centering text within each section */
  margin-bottom: 20px;
`;

const SubTitle = styled.h2`
  font-size: 24px;
  color: #333;
`;

const Description = styled.p`
  font-size: 16px;
  color: #666;
`;

const TrendingSection = styled.div`
  text-align: center;
  margin: 20px 0;
  width: 100%;
`;

const BooksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Wrap items to the next line if they don't fit in one line */
`;

const BookCard = styled.div`
  width: 150px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin: 10px;
  padding: 10px;
  text-align: center;
`;

const BookImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 4px;
`;

const BookInfo = styled.div`
  margin-top: 10px;
`;

const BookTitle = styled.h3`
  font-size: 18px;
  color: #333;
`;

const BookDescription = styled.p`
  font-size: 14px;
  color: #666;
  margin: 5px 0;
`;

const BookRating = styled.p`
  font-size: 14px;
  color: #666;
`;

const Footer = styled.footer`
  width: 100%;
  text-align: center;
  padding: 10px 0;
  background-color: #f5f5f5;
  color: #666;
  margin-top: 20px;
`;

export default Home;
