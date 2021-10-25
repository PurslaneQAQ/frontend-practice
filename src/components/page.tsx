import React, { useEffect } from 'react';

export type PageProps = {
  title: string,
  bodyStyle?: Record<string, string>;
  Comp?: React.FC,
  children?: React.ReactElement[]
}
const Page:React.FC<PageProps> = ({
  title, bodyStyle, Comp, children,
}) => {
  useEffect(() => {
    document.title = title || '';
  }, [title]);
  return (
    <>
      {bodyStyle && <style>{`body{ background-color: ${bodyStyle.BGPrimary}; color: ${bodyStyle.TextPrimary}}`}</style>}
      {Comp && <Comp />}
      {children}
    </>
  );
};

export default Page;
