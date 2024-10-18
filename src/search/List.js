import Item from './Item';

function List({ imagesPlaceholder }) {
  return (
    <div className="image-list">
      {imagesPlaceholder.map((image, index) => {
        return <Item key={index} image={image} />;
      })}
    </div>
  );
}

export default List;
