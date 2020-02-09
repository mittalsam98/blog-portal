import { BlogInterface, BlogStatus } from "../interface/blogInterface";

const data: BlogInterface[] = [
    {
        uId: "dgdghjkghjdksgkdhx34739875",
        id: 1,
        bloggerId: "1",
        title: "bloge title 1",
        text: "this is test 01",
        details: "",
        "createDateTime": "7/26/2019",
        "updateDateTime": "2/28/2019",
        "deleteDateTime": "7/17/2019",
        status: BlogStatus.Approved,
        "image": "http://dummyimage.com/119x214.jpg/dddddd/000000",
    },
    {
        uId: "dgdghjghjdksgkdhx34739875f",
        id: 2,
        bloggerId: "1",
        title: "bloge title 2",
        text: "this is test 02",
        details: "",
        "createDateTime": "4/21/2019",
        "updateDateTime": "9/18/2019",
        "deleteDateTime": "10/22/2019",
        status: BlogStatus.Approved,
        image: "",
    },
    {
        uId: "dgdghjkghjdksgkdhx34739875",
        id: 3,
        bloggerId: "1",
        title: "bloge title 3",
        text: "this is test 03",
        details: "",
        "createDateTime": "4/21/2019",
        "updateDateTime": "9/18/2019",
        "deleteDateTime": "10/22/2019",
        status: BlogStatus.PendingForApproval,
        image: "https://i.imgur.com/ksyQDUc.jpg"
    },
    {
        uId: "dgdghjkghjdksgkdhx34739875",
        id: 1,
        bloggerId: "1",
        title: "bloge title 4",
        text: "this is test 04",
        details: "",
        "createDateTime": "4/21/2019",
        "updateDateTime": "9/18/2019",
        "deleteDateTime": "10/22/2019",
        status: BlogStatus.Rejected,
        image: '',
    },
    {
        uId: "dgdghjkghjdksgkdhx34739875",
        id: 1,
        bloggerId: "1",
        title: "bloge title 5",
        text: "this is test 05",
        details: "",
        "createDateTime": "4/21/2019",
        "updateDateTime": "9/18/2019",
        "deleteDateTime": "10/22/2019",
        status: BlogStatus.PendingForCorrection,
        image: "https://i.imgur.com/ksyQDUc.jpg"
    }
];
export class CreateBlogService {
    static getBlogs = new Promise<BlogInterface[]>((resolve, reject) => {
        if (data.length > 0) {
            resolve(data);
        } else {
            reject("no data!");
        }
    });
    static getBlogsByStatus = (blogStatus: BlogStatus): BlogInterface[] => {
        return data.filter(x => x.status === blogStatus);
    };
}
export default CreateBlogService;
