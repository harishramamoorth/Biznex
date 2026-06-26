import HowWeWork from '../components/process/HowWeWork';
import ScaleTrain from '../components/home/ScaleTrain';
import ProblemSolutions from '../components/home/ProblemSolutions';

export default function Process() {
  return (
    <main className="pt-20">
      <HowWeWork />
      <ScaleTrain />
      <ProblemSolutions />
    </main>
  );
}
