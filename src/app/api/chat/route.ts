import { openai } from "@ai-sdk/openai";
import { streamText, UIMessage } from "ai";

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const result = streamText({
      model: openai("gpt-4o-mini"),
      system: "You are a helpful assistant.",
      messages,
      onError({ error }) {
        console.error(error); // Implement your error logging logic here
      },
    });
    return result.toTextStreamResponse();
  } catch (error) {
    console.log(error);
    return new Response("Error processing request", { status: 500 });
  }
}
