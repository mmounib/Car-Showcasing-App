const Card = ({cars}: any) => {
    return (
        <div className="bg-gray-800 rounded-[10px]">
            <div className="m-6">
                <h1 className="font-bold text-xl text-white capitalize">{cars.make} {cars.model}</h1>

            </div>
        </div>
    );
};

export default Card;