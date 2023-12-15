"use client";
import { useSelector } from "react-redux";

const HomePage = () => {
  const data = useSelector((state: any) => state.posts);

  return (
    <ul className="flex flex-col justify-center items-center mt-10">
      {data.map((list: any, index: any) => (
        <li key={index} className="w-[600px] my-1 rounded-sm">
          <div className="w-full py-2 px-4 text-sm bg-slate-300">
            {list?.title}
          </div>
          <div className="w-full py-2 px-4 bg-slate-400">{list?.post}</div>
        </li>
      ))}
    </ul>
  );
};

export default HomePage;
