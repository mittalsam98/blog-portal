import { BlogInterface, BlogCommentInterface } from "../interface/blogInterface";

export class BlogService {
    static getBlogList = () => {
        let BlogData: BlogInterface[] = [
            {
                "id": 1,
                "uId": "bcaa3141-227f-4660-876e-6373ec828fe4",
                "bloggerId": "@JohnSnow",
                "title": "Extreme Movie",
                "text": "Suspendisse potenti. In eleifend quam a odio. In hac habitasse platea dictumst.",
                "details": "Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti.\n\nNullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
                "image": "http://dummyimage.com/119x214.jpg/dddddd/000000",
                "createDateTime": "7/26/2019",
                "updateDateTime": "2/28/2019",
                "deleteDateTime": "7/17/2019",
                "status": 0
            }, {
                "id": 2,
                "uId": "8f0617e1-3987-45a8-b46a-aa668a0d3f32",
                "bloggerId": "@DaenerysTargaryen",
                "title": "Deconstructing Harry",
                "text": "Nulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
                "details": "Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.\n\nMorbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.\n\nFusce consequat. Nulla nisl. Nunc nisl.\n\nDuis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum.",
                "image": "",
                "createDateTime": "4/21/2019",
                "updateDateTime": "9/18/2019",
                "deleteDateTime": "10/22/2019",
                "status": 1
            }, {
                "id": 3,
                "uId": "6b9a6381-6489-478c-9341-71645553ee1f",
                "bloggerId": "@TyrionLanister",
                "title": "Eastwood on Eastwood",
                "text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
                "details": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
                "image": "http://dummyimage.com/208x158.jpg/cc0000/ffffff",
                "createDateTime": "5/19/2019",
                "updateDateTime": "8/6/2019",
                "deleteDateTime": "6/19/2019",
                "status": 1
            }, {
                "id": 4,
                "uId": "b3a75e29-9856-4c03-9660-075085ea00ff",
                "bloggerId": "@AryaStark",
                "title": "Big Girls Don't Cry (Große Mädchen weinen nicht)",
                "text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
                "details": "Proin interdum mauris non ligula pellentesque ultrices. Phasellus id sapien in sapien iaculis congue. Vivamus metus arcu, adipiscing molestie, hendrerit at, vulputate vitae, nisl.",
                "image": "http://dummyimage.com/181x128.jpg/ff4444/ffffff",
                "createDateTime": "4/5/2019",
                "updateDateTime": "3/24/2019",
                "deleteDateTime": "2/4/2019",
                "status": 1
            }, {
                "id": 5,
                "uId": "c4da92a6-73ea-4232-8359-c1808743a3d9",
                "bloggerId": "@SansaStark",
                "title": "Crocodile Dundee II",
                "text": "Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui.",
                "details": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.\n\nSed ante. Vivamus tortor. Duis mattis egestas metus.\n\nAenean fermentum. Donec ut mauris eget massa tempor convallis. Nulla neque libero, convallis eget, eleifend luctus, ultricies eu, nibh.\n\nQuisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.\n\nVestibulum ac est lacinia nisi venenatis tristique. Fusce congue, diam id ornare imperdiet, sapien urna pretium nisl, ut volutpat sapien arcu sed augue. Aliquam erat volutpat.\n\nIn congue. Etiam justo. Etiam pretium iaculis justo.\n\nIn hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.",
                "image": "http://dummyimage.com/151x211.jpg/dddddd/000000",
                "createDateTime": "4/17/2019",
                "updateDateTime": "8/2/2019",
                "deleteDateTime": "3/28/2019",
                "status": 1
            }
        ];
        return BlogData;
    }
    static getCommentList = () => {
        let CommentData: BlogCommentInterface[] = [{
            "id": 1,
            "uniqueId": "cd7fabbf-cfd3-49e9-95e7-b23e851a7ff2",
            "blogId": "e68b376d-8059-436a-aba7-f4f8bba470cc",
            "blogUId": "93699538-f4cd-4128-b1ef-59ee64e187c9",
            "comment": "ante vel ipsum praesent blandit lacinia erat vestibulum sed",
            "createDateTime": "3/18/2019",
            "updateDateTime": "7/13/2019",
            "deleteDateTime": "1/30/2019",
            "commenterId": "ly.ow.Viva",
            "commenterName": "Alphazap"
        }, {
            "id": 2,
            "uniqueId": "f3ecf685-c5ef-4cd3-91c2-e5bd71c6b864",
            "blogId": "94cfc024-7936-4f0f-a957-08b49dd9bfe9",
            "blogUId": "f1eb0071-dbd2-4f31-a566-251bd6fa0283",
            "comment": "fermentum donec ut",
            "createDateTime": "9/11/2019",
            "updateDateTime": "9/18/2019",
            "deleteDateTime": "11/12/2019",
            "commenterId": "com.mysql.Rank",
            "commenterName": "Alphazap"
        }, {
            "id": 3,
            "uniqueId": "674653c5-a3d7-47d5-9d22-c0b13cf5b89e",
            "blogId": "e1bedf44-f03a-43fd-983e-cb3cdccbb364",
            "blogUId": "bfaa9841-e693-47ec-a4f8-f7fc7f6cfea6",
            "comment": "eros vestibulum ac est",
            "createDateTime": "12/9/2019",
            "updateDateTime": "12/6/2019",
            "deleteDateTime": "11/28/2019",
            "commenterId": "com.example.Home Ing",
            "commenterName": "Temp"
        }, {
            "id": 4,
            "uniqueId": "f04f9e21-4051-447a-af6f-bad12d2de759",
            "blogId": "5ed4b18f-8815-449f-ab1e-a1877840f906",
            "blogUId": "7bda3230-2127-4ca5-842e-11534e61a8fa",
            "comment": "accumsan odio curabitur convallis duis consequat dui nec",
            "createDateTime": "7/22/2019",
            "updateDateTime": "2/9/2019",
            "deleteDateTime": "7/8/2019",
            "commenterId": "co.g.Hatity",
            "commenterName": "Voltsillam"
        }, {
            "id": 5,
            "uniqueId": "f57a9bf2-69dc-48ad-954b-92b600a58700",
            "blogId": "e563daaa-cdc2-47a4-9de9-394f7c562f3a",
            "blogUId": "41c510a0-518c-4d3a-ba26-e74952211be8",
            "comment": "lacinia eget tincidunt eget",
            "createDateTime": "6/4/2019",
            "updateDateTime": "3/8/2019",
            "deleteDateTime": "2/17/2019",
            "commenterId": "com.csmonitor.Pannier",
            "commenterName": "Keylex"
        }];
        return CommentData;
    }
}


