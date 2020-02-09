import React from 'react';
import TopBlogComponent from '../../../commonComponent/BlogComponent/TopBlogComponent';
import BlogDetailsComponent from '../../../commonComponent/BlogComponent/BlogDetailsComponent';
import CreateSuggestionComponent from './CreateSuggestionComponent';
import SuggestionListComponent from './SuggestionListComponent';

interface Props { }

const SuggestionBlogComponent: React.FC<Props> = () => {
    return (
        <div className="container pt-3">
            <div className="card">
                <div className="card-body">
                    <TopBlogComponent
                        title="Extreme Movie"
                        image={"http://dummyimage.com/119x214.jpg/dddddd/000000"}
                        text="Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst."
                        details="Love to have this"
                        bloggerId="@TonyStark"
                    />
                    <BlogDetailsComponent
                        detail="Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non"
                    />
                    <CreateSuggestionComponent />
                    <SuggestionListComponent />
                </div>
            </div>

        </div>
    )
}


export default SuggestionBlogComponent;