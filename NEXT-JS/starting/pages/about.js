import Link from 'next/link'
export const About = () => {
    return (<>
        <Link href="/" ><button style={{ fontSize: '20px', border: '3px solid red', backgroundColor: 'black', color: 'white' }} >BACK TO HOME</button></Link>
        <div style={{ fontSize: '40px', color: "red", textAlign: 'center' }}>
            welcome to About page
            This is vani
            A Full-Stack Web Developer

        </div>

    </>)
}

export default About