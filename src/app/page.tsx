'use client';
import Image from 'next/image';
import Option from '@/components/atoms/option';
import Question from '@/components/atoms/question';
import Options from '@/components/molecules/options';
import QuestionWithOptions from '@/components/molecules/questionWithOptions';
import { useQuestionsStore } from '@/store/questions';

export default function Home() {
  const questions = useQuestionsStore((state) => state.questions);
  console.log({ questions });

  const data = {
    id: '2222',
    question: '¿En qué año comenzó la Primera Guerra Mundial?',
    options: [
      { id: 'a', text: '1946' },
      { id: 'b', text: '1946' },
      { id: 'c', text: '1946' },
      { id: 'd', text: '1946' },
    ],
    answer: 'c',
  };
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <QuestionWithOptions dataQuestion={data} />
      </div>
    </main>
  );
}
