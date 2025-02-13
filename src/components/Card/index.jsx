/* eslint-disable react/prop-types */

const Card = ({ icon, title, amount, className = "" }) => {
  const baseStyles =
    "flex flex-col gap-4 p-5 rounded-lg border-0.5 border-jet-black-200 bg-jet-black-50 text-white shadow-[0px_1.5px_2px_0px_rgba(16,24,40,0.10)]";

  return (
    <div className={`${baseStyles} ${className}`}>
      <span>{icon}</span>
      <div className="flex flex-col gap-2">
        <p className="font-medium">{title}</p>
        <p className="text-2xl font-bold">{amount}</p>
      </div>
    </div>
  );
};

export default Card;
