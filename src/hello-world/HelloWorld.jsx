import './HelloWorld.css'
// export default function HelloWorld() {
//     return (
//         // bisa menggunakan div atau fragment <> 
//         <>
//             <h1>Hello world cooc</h1>
//             <p>selamat datang di react js</p>
//         </>
//     )
// }


// bisa dbuat beberapa component dalam satu file
// export default function HelloWorld() {
//     return (
//         // bisa menggunakan div atau fragment <> 
//         <>
//             <HeaderHelloWorld />
//             <ParagraphHelloWorld />
//         </>
//     )
// }
// function HeaderHelloWorld() {
//     return (

//         <h1>Hello world cooc</h1>
//     )
// }
// function ParagraphHelloWorld() {
//     return (
//         <p>Welcome gessss</p>
//     )
// }

// untuk memanggil 
export default function HelloWorld() {
    const props = {
        text: "kwokoa hellow world",
    }
    return (
        // bisa menggunakan div atau fragment <> 
        <>
            {/* <HeaderHelloWorld text={props.text} /> */}
            <HeaderHelloWorld {...props} />
            <ParagraphHelloWorld />
        </>
    )
}
function HeaderHelloWorld({ text = "lupa cuy" }) {
    return (

        <h1 className="title">{text.toUpperCase()}</h1>
    )
}
function ParagraphHelloWorld() {
    const text = "Welcome oawkoakkwako"
    return (
        <p className="content">{text}</p>
    )
}





