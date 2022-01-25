import Link from 'next/link'

export default function Home() {
  return (
    <>
      <div style={{ color: "green", fontSize: "60px" }} >
        Starting NEXT JS App
        Hello world!! This is Vani
      </div>
      < div style={{ display: "flex", justifyContent: "space-around", fontSize: '20px', color: "blue", textDecoration: "underline" }}>
        <h1> <Link href="/about" > About</Link></h1>
        <h1> <Link href="/contactus" > Contact Us</Link></h1>
        <h1> <Link href="/other" > Other Details</Link></h1>
      </div>
    </>
  )
}
