// // Download the helper library from https://www.twilio.com/docs/node/install
// import twilio from "twilio"
// import { envVars } from "./env";

// // Find your Account SID and Auth Token at twilio.com/console
// // and set the environment variables. See http://twil.io/secure
// const accountSid = envVars.TWILIO_ACCOUNT_SID;
// const authToken = envVars.TWILIO_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

// export const sendSMS = async (body: string, from: string, to: string) => {
//     const message = await client.messages.create({
//         body,
//         from,
//         to
//     });

//     console.log(message.body);
// }


// GreenWeb

// import axios from "axios";

// export const sendSMS = async () => {
//   try {
//     const response = await axios.post("https://api.greenweb.com.bd/api.php", null, {
//       params: {
//         token: "YOUR_GREENWEB_API_TOKEN",  // তোমার token
//         to: "016XXXXXXXX",                 // receiver number
//         message: "Hello! This is a test SMS from Node.js project." // message
//       }
//     });

//     console.log("SMS Response:", response.data);
//   } catch (error) {
//     console.error("Error sending SMS:", error);
//   }
// };

