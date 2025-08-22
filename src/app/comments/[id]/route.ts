import { comments } from "../data";

// GET a single comment by id
export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const comment = comments.find((comment) => comment.id === parseInt(id));
  return Response.json(comment);
}


export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const body = await request.json();
  const { text } = body;

  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index === -1) {
    return new Response(JSON.stringify({ error: "Comment not found" }), { status: 404 });
  }
  comments[index].text = text;
  return Response.json(comments[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  const index = comments.findIndex((comment) => comment.id === parseInt(id));
  if (index === -1) {
    return new Response(JSON.stringify({ error: "Comment not found" }), { status: 404 });
  }
  comments.splice(index, 1);
  return new Response(null, { status: 204 });
}