import {
  Container,
  Description,
  DescriptionContainer,
  Header,
  PaintPicture,
  PictureContainer,
  Price,
  Text,
} from "./styles";

export const PaintCard = ({ paint }) => {
  const {
    category,
    path,
    images: { products },
    purchase,
    productsPage: { title, text },
  } = paint;

  return (
    <Container to={`/products/${category.at(0)}/${path}`}>
      <PictureContainer>
        <PaintPicture src={products} />
      </PictureContainer>

      <DescriptionContainer>
        <Header>{title}</Header>

        {purchase.map(({ price, amount }) => {
          return (
            <Text key={`products_price_${price}`}>
              От <Price>{price}</Price> руб {amount}.
            </Text>
          );
        })}

        <Description>{text}</Description>
      </DescriptionContainer>
    </Container>
  );
};
