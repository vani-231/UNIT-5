import Link from 'next/link'
export const Other = () => {
    return (<>
        <Link href="/" ><button style={{ fontSize: '20px', border: '3px solid red', backgroundColor: 'black', color: 'white' }} >BACK TO HOME</button></Link>
        <div style={{ fontSize: '40px', color: "blue", textAlign: 'center', border: '5px solid yellow', borderStyle: 'dotted' }}>
            <h1>Living In Andhra Pradesh</h1>
            <div>A cool person and nice person vani.</div>
        </div>
    </>)
}

export default Other