import Link from 'next/link'
export const Contactus = () => {
    return (<>
        <Link href="/" ><button style={{ fontSize: '20px', border: '3px solid red', backgroundColor: 'black', color: 'white' }} >BACK TO HOME</button></Link>
        <div style={{ fontSize: '40px', color: "blue", textAlign: 'center', border: '5px solid black', borderStyle: 'inset' }}>
            Welcome to Contact Page
            You can contact me by this email
            <a href="mailto:vani80743@gmail.com" >vani80743@gmail.com</a>
        </div>
    </>)
}

export default Contactus