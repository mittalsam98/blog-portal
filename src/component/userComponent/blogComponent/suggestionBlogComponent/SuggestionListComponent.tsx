import React from 'react';


interface Props { }

const SuggestionListComponent: React.FC<Props> = () => {
    return (
        <div className="pt-3">
            <div className="card">
                <div className="card-body">
                    <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default SuggestionListComponent;