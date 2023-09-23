import Image from 'next/image';
import React from 'react';

interface SocialIconProp {
  icon: string;
}

const SocialIcons: React.FC<SocialIconProp> = ({ icon }) => {
  return (
    <div>
      <Image
        src={icon}
        alt="icon/social"
        width={60}
        height={60}
        className="w-8 h-8 flex items-center cursor-pointer md:w-6 md:h-6 sm:w-5 sm:h-5 transition-all duration-200 hover:scale-110"
      />
    </div>
  );
};

export default SocialIcons;
