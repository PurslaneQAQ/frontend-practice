import React from 'react';

export type ClientProps = {
  avatar: string;
  desc: string;
  clientName: string;
  role: string;
}

const Clients:React.FC<{clients: ClientProps[]}> = ({ clients }) => (
  <>
    <h2 className="mt-24 md:mt-36 lg:mt-48 mb-16 lg:mb-24 sa-text-dark-quaternary text-ml">
      CLIENT TESTIMONIALS
    </h2>
    <div className="mx-12 lg:mx-20 xl:mx-40 flex flex-col md:flex-row space-between">
      {
        clients.map(({
          avatar, desc, clientName, role,
        }) => (
          <div className="mx-4 text-center mb-20 md:mb-40" key={clientName}>
            <img className="mx-auto mb-8 md:mb-16 h-20 rounded-full " alt="name" src={avatar} />
            <p className="mb-8 md:mb-16 sa-text-dark-secondary">{desc}</p>
            <div className="sa-text-dark-primary sa-font-serif">{clientName}</div>
            <div className="sa-text-dark-quaternary lg:text-base text-mini">{role}</div>
          </div>
        ))
      }
    </div>
  </>
);

export default Clients;
