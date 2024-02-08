/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/ZbbvCFPEM1F
 */
// import Link from "next/link"
<<<<<<< HEAD
import { Link, useParams } from "react-router-dom";

export default function Instructionpage({ assessments }) {
  const { assessment } = useParams();

  return (
    <main className="flex flex-col h-screen  bg-[#040404] text-[#A8ABBA] relative justify-center items-center">
      <div className="flex flex-col h-[700px] justify-center relative">
        <header className="w-full mb-10">
          <h1 className="text-6xl font-bold text-[#fff]">
            Assessment Instructions
          </h1>
        </header>
        <ol className="space-y-2 text-2xl leading-7 list-decimal list-inside w-full text-[#A8ABBA]">
          <li>Read each question carefully before answering.</li>
          <li>Choose the best answer for each question.</li>
          <li>There is a "TIMER" for assessment.</li>
          <li>Each question has "ONE MINUTE" to submit their answer.</li>
          <li>
            Click the "SUBMIT" button to submit your answer for next question.
          </li>
        </ol>
        <div className="flex items-center justify-between w-full mt-10 space-x-60">
          <Link to="/studentui">
            <button
              className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-[#B3CCC2] rounded-md shadow text-[#040404] hover:bg-gray-900  hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Back
            </button>
          </Link>
          <Link to={`/assessmentpage/${assessment}`}>
            <button
              className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-[#B3CCC2] rounded-md shadow text-[#040404] hover:bg-gray-900 hover:text-gray-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="#"
            >
              Start Quiz
            </button>
          </Link>
        </div>
      </div>
    </main>
=======
import { Link } from "react-router-dom";

export default function Instructionpage() {
  return (
    (<main className="flex flex-col items-center justify-center min-h-screen py-2">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-center">Assessment Instructions</h1>
      </header>
      <ol className="space-y-2 text-lg leading-7 list-decimal list-inside">
        <li>Read each question carefully before answering.</li>
        <li>Choose the best answer for each question.</li>
        <li>There is a "TIMER" for assessment.</li>
        <li>Each question has "ONE MINUTE" to submit their answer.</li>
        <li>Click the "SUBMIT" button to submit your answer for next question.</li>
      </ol>
      <div className="mt-10 space-x-60">
      <Link to='/studentui'><button
      className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
      href="#">
      Back
    </button></Link>
        <Link to='/assessmentpage'><button
        className="inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors bg-gray-900 rounded-md shadow text-gray-50 hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
        href="#">
        Start Quiz
      </button></Link>
      
      </div>
    </main>)
>>>>>>> 7838443ae18e078f9ce1879dd21e40befd838f28
  );
}
