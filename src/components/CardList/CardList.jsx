import { ImageList, ImageListItem } from "@mui/material"

const CardList = ({ cards }) => {

  return <ImageList variant='quilted' cols={3} rowHeight={124} gap={2}>
    {cards.map(card => (
      <ImageListItem key={card._id}>
        <img
          src={card.link}
          alt='Card'
          loading="lazy"
        />
      </ImageListItem>
    ))}
  </ImageList>
}

export default CardList