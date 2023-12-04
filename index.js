import OpenAI from "openai";
import * as dotenv from "dotenv";

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// const assistant = await openai.beta.assistants.create({
//   name: "Economics Tutor",
//   instructions: "This assistant will help you understand economics.",
//   tools: [{ type: "code_interpreter" }],
//   model: "gpt-3.5-turbo-1106",
// });

// async function main() {
//     const stream = await openai.chat.completions.create({
//         model: "gpt-4",
//         messages: [{ role: "user", content: "Say this is a test" }],
//         stream: true,
//     });
//     for await (const chunk of stream) {
//         process.stdout.write(chunk.choices[0]?.delta?.content || "");
//     }
// }

// main();
