
// exports.handler = async () => {
//     return {
//         statusCode: 200,
//         body: JSON.stringify({ secret: process.env.SECRET_VALUE || "No secret found" }),
//     };
// };

exports.handler = async () => {
    try {
        const publicKey = process.env.EMAILJS_PUBLIC_KEY;
        console.log("EmailJS Public Key:", publicKey);  // ✅ Logs the key to Netlify logs

        return {
            statusCode: 200,
            body: JSON.stringify({ publicKey }),
        };
    } catch (error) {
        console.error("Error retrieving EmailJS public key:", error);

        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to load email config" }),
        };
    }
};
