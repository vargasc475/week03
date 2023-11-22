import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import type { NextApiRequest, NextApiResponse } from 'next'
 
type Data = {
  name: string
}
 
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}
 
export const getStaticProps = (async (context) => {
  // ...
}) satisfies GetStaticProps
 
export const getStaticPaths = (async () => {
  // ...
}) satisfies GetStaticPaths
 
export const getServerSideProps = (async (context) => {
  // ...
}) satisfies GetServerSideProps