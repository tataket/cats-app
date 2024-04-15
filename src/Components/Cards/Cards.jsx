import { Container, StyledButton , ImagePaw, ImageCat, StyledLink, Text } from "./styled.js";
import CatImg from "./../../assets/Images/cat.png";

function CardsCats({ image, name }) {
  return (
    <>
      <Container>
        <ImageCat src={image} alt={name} />
        <Text>{name}</Text>
        <StyledLink to={`/info/${name}`}>
          <StyledButton>
            <ImagePaw src={CatImg}/>
          </StyledButton>
        </StyledLink>
      </Container>
    </>
  );
}
export default CardsCats;
