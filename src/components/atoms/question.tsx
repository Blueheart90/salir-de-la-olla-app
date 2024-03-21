import React from 'react';
type QuestionProps = {
  children: JSX.Element | string;
};
export default function Question({ children }: QuestionProps) {
  return (
    <div>
      <h2 className=' border-2 border-dashed border-black px-6 py-10 text-center text-xl'>
        ¿En qué año comenzó la Primera Guerra Mundial?
      </h2>
    </div>
  );
}
