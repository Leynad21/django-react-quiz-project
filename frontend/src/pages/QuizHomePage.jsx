import React from 'react'
import { Link } from 'react-router-dom'
import quizImg from '../assets/img/quizImage.jpg'

const QuizHomePage = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='container bg-white rounded-xl mt-12 flex flex-col items-center'>
                    <figure className='mt-8'><img src={quizImg} alt="quiz" className='rounded-xl h-96' /></figure>
                    <div>
                        <div className='mt-12 flex gap-8'>
                            <div>
                                <Link to="/play" className="btn btn-lg btn-active btn-primary">Play</Link>
                            </div>
                            <Link to="/quiz/me" className="btn btn-lg btn-active btn-accent">My Quizzes</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default QuizHomePage
