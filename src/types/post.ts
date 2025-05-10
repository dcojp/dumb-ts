export type Post = {
  author: string
  content: string
  id: number
  timestamp: Date
}

export type PostInput = Pick<Post, "author" | "content">