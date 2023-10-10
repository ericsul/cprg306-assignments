import Image from 'next/image'
import StudentInfo from './StudentInfo'
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <StudentInfo/>
      <p><Link href="/week2">week2</Link></p>
      <Link href="/week3">week 3</Link>
      <Link href="/week4">week 4</Link>
    </main>
  )
}
