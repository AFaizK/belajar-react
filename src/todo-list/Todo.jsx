// export default function Todo({ text, isCompleted, isDeleted = false }) {
//     if (isDeleted) {
//         return null
//     }
//     if (isCompleted) {
//         return (
//             <li>
//                 <del>{text}</del>
//             </li>
//         )
//     }
//     else {
//         return (
//             <li>{text}</li>
//         )

//     }
// }

export default function Todo({ text, isCompleted, isDeleted = false }) {
    if (isDeleted) {
        return null
    }
    else {
        return (
            <li>
                {/*  ternary operator */}

                {isCompleted ? <p>{text} ✔️</p> : text}
            </li>
        )
    }

    // gunakan && operator
    //   else {
    //     return (
    //         <li>
    //             {text} {isCompleted && "✔️"}
    //         </li>
    //     )
    // }
}