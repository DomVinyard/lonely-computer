import React, { ReactNode } from 'react';

import Link from 'next/link';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700 px-3 md:px-0">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        <div className="pt-16 pb-8">
          {/* <div className="font-semibold text-3xl text-gray-900">{Config.title}</div>
          <div className="text-xl">{Config.description}</div> */}
          <Link href="/">
            <div style={{ height: 59 }}>
              <img
                style={{
                  width: 260,
                  height: 59,
                  margin: '0 auto 16px auto',
                  cursor: 'pointer',
                }}
                src="/assets/images/computer_face.png"
                alt="Lonely Computer"
              />
            </div>
          </Link>
        </div>
      </div>

      <div className="text-xl py-5">{props.children}</div>
    </div>
  </div>
);

export { Main };
