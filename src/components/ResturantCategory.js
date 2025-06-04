import ItemLists from "./ItemLists";

const ResturantCategory = ({ data, showItem, setShowIndex }) => {
  const handleItem = () => {
    setShowIndex();
  };

  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
      <div className="flex justify-between">
        <span className="font-bold text-lg cursor-pointer" onClick={handleItem}>
          {data.title} ({data?.itemCards?.length})
        </span>
        <span>⬇️</span>
      </div>
      <div>{showItem && <ItemLists items={data?.itemCards} />}</div>
    </div>
  );
};

export default ResturantCategory;
