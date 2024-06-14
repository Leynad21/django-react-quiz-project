import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar bg-base-200">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">Quiz Master</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to="/play">Play</Link></li>
                    <li><Link to="/quiz/me">My Quizzes</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
