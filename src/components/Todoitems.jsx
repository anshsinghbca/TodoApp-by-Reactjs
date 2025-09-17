import Items from "./Items";

function Todoitems({ items, onDelete }) {
  return (
    <>
      {items.map((item, index) => (
        <Items
          key={index}
          todoname={item.name}
          tododate={item.duedate}
          onDelete={() => onDelete(index)}
        />
      ))}
    </>
  );
}

export default Todoitems;
