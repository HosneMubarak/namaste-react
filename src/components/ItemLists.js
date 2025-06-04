import { CDN_URL } from "../utils/constants";

const ItemLists = ({ items }) => {
  console.log("items", items);

  return (
    <div className="m-2 p-2 border-b-emerald-100 border">
      {items.map((item) => (
        <div key={item.card.info.id} className="flex mb-4">
          <div className="w-8/12">
            <p className="m-2 p-2">
              {item.card.info.name} ₹
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </p>
            <p className="m-2 p-2">{item.card.info.description}</p>
          </div>
          <div className="w-3/12 p-2">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
            />
            <button className="mt-2 bg-black rounded-lg text-white px-4 py-1">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemLists;
