import { WavePatternQuiz } from '@/components/quiz/wave-pattern-quiz';

export const metadata = {
  title: 'Hair Pattern Quiz - Wavy Hair Guide',
  description: 'Find your wavy hair pattern and get personalized recommendations',
};

export default function QuizPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">Find Your Wave Pattern</h1>
        <WavePatternQuiz />
      </div>
    </div>
  );
}