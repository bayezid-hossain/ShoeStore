import React from 'react';
interface TitleTextProps {
  title: string;
}
const TitleText: React.FC<TitleTextProps> = ({ title }) => {
  return (
    <div>
      <div className="grid items-center">
        <h1 className="text-5xl lg:text-4xl md:text-3xl font-bold text-slate-900 filter drop-shadow-lg">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleText;
