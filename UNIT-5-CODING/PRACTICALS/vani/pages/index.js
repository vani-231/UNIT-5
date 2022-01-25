import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div style={{ fontSize: '40px', color: "blue", textAlign: 'center', textDecoration: "underline" }} >
        <Link href="/profiles">Home</Link>

      </div>
    </>
  )
}
