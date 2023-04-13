import React from 'react';

const HeadlineCard = () => {
  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6">
      {/* card */}
      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">Sun's Out, BDGO's Out</p>
          <p className="px-2">Through 8/26</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px]  w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">New restauratnts</p>
          <p className="px-2">Added daily</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px]  w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>

      <div className="rounded-xl relative">
        {/* overlay */}
        <div className="absolute w-full h-full bg-black/50 rounded-xl text-white ">
          <p className="font-bold text-2xl px-2 pt-4">we Deliver Desserts</p>
          <p className="px-2">Tasty Treats</p>
          <button className="border-white bg-white text-black mx-2 absolute bottom-4 ">
            Order Now
          </button>
        </div>
        <img
          className="max-h-[160px] md:max-h-[200px]  w-full object-cover rounded-xl"
          src="https://images.pexels.com/photos/1410235/pexels-photo-1410235.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="/"
        />
      </div>
    </div>
  );
};

export default HeadlineCard;
