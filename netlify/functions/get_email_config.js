// exports.handler = async () => {
//     return {
//         statusCode: 200,
//         body: JSON.stringify({ secret: process.env.SECRET_VALUE || "No secret found" }),
//     };
// };


exports.handler = async () => {
    return {
        stausCode: 200,
        body: JSON.stringify({
            publicKey : process.env.EMAILJS_PUBLIC_KEY
        }),
    };

};  