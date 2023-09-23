import React from 'react';
interface FooterProps {
  titles: { title: string }[]; // An array of objects with a 'title' property of type string
  links: { link: string }[][]; // A two-dimensional array of objects with a 'link' property of type string
}
const Footer: React.FC<FooterProps> = ({ titles, links }) => {
  return (
    <div>
      <footer className="bg-theme pt-7 pb-5 ">
        <div className="nike-container text-slate-200 ">
          <div className=" grid items-start grid-cols-3 max-w-2xl w-full m-auto md:max-w-none md:gap-5">
            {titles.map((val, i) => {
              return (
                <div key={i} className="grid items-center">
                  <h1 className="text-lg lg:text-base md:text-sm uppercase font-semibold">
                    {val.title}
                  </h1>
                </div>
              );
            })}
            {links.map((linklist, i) => {
              return (
                <ul key={i} className="grid items-center gap-1">
                  {linklist.map((link, i) => {
                    return (
                      <li key={i} className="text-sm sm:text-xs">
                        {link.link}
                      </li>
                    );
                  })}
                </ul>
              );
            })}
          </div>
          <div className="mt-5 text-center">
            <p className="text-sm md:text-center">
              Copyright<sup className="text-base font-bold">&copy;</sup> All
              Rights Reserved 2023{' '}
              <span className="font-semibold"> ShadowIT Developers</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
