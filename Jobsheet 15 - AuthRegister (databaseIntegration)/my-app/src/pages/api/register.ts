import { signUp } from "@/utils/db/servicefirebase";
import { NextApiRequest, NextApiResponse } from "next";

type Data = {
  name: string;
  alamat: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === "POST") {
    const { email, password } = req.body;
    if (!email) {
      res.status(400).json({ name: "Email wajib diisi!" });
    }
    if (!password || password.length < 6) {
      return res.status(400).json({ name: "Password minimal 6 karakter" });
    }
    await signUp(req.body, (result: { status: string; message: string }) => {
      if (result.status === "success") {
        res.status(200).json({ name: result.message, alamat: "" });
      } else {
        res.status(400).json({ name: result.message, alamat: "" });
      }
    });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
