import React from 'react'
import {Link} from 'react-router-dom';

export default function Nav() {
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li>
                        <Link
                            to="/chart">
                            Grafikler
                        </Link>
                    </li>
                </ul>
            </nav>
    </div>
    )
}
