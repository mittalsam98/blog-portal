export interface BlogInterface {
  id: number;
  uId: string;
  bloggerId: string;
  image: string;
  title: string;
  text: string;
  details: string;
  createDateTime: string;
  updateDateTime: string;
  deleteDateTime: string;
  status: number;
}
export interface BlogReactionInterface {
  id: number;
  blogId: number;
  blogUId: string;
  reaction: boolean;
  reacterId: number;
  reacterName: string;
}
export interface BlogCommentInterface {
  id: number;
  uniqueId: string;
  blogId: string;
  blogUId: string;
  comment: string;
  createDateTime: string;
  updateDateTime: string;
  deleteDateTime: string;
  commenterId: string;
  commenterName: string;
}
export enum BlogStatus {
  Draft,
  PendingForApproval,
  PendingForCorrection,
  Approved,
  Rejected
}