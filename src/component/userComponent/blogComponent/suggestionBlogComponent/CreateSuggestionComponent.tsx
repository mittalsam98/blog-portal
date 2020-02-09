import React from 'react';

interface Props { }

const CreateSuggestionComponent: React.FC<Props> = () => {
    return (
        <div className="pt-3">
            <div className="card">
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-2">
                            <h5>Suggestion 1</h5>
                        </div>
                        <div className="col-7">
                            <input type="text" className="form-control" />
                        </div>
                        <div className="col-lg-2 btn-group">
                            <button className="btn btn-info">Comment</button>
                            <button className="btn btn-success">Resolve</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateSuggestionComponent;