function Item({ image }) {
  return (
    <div>
      <img
        className="image-list-img"
        src={image.urls.small}
        alt={image.alt_description}
      />
    </div>
  );
}

export default Item;
