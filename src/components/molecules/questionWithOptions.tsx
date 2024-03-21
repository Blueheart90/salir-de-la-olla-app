'use client';
import Question from '@/components/atoms/question';
import Options from '@/components/molecules/options';
import { useState } from 'react';

type Option = {
  id: string;
  text: string;
};
type Question = {
  id: string;
  question: string;
  options: Option[];
  answer: string;
};

type QuestionWithOptionsProps = {
  dataQuestion: Question;
};

export default function QuestionWithOptions({
  dataQuestion,
}: QuestionWithOptionsProps) {
  const { question, options, answer } = dataQuestion;
  const [answerQ, setAnswerQ] = useState('');
  return (
    <div className='flex w-full flex-col gap-10 '>
      <Question>{question}</Question>
      <Options options={options} />
    </div>
  );
}
