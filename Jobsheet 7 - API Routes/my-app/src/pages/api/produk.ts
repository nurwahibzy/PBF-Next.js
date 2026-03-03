import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  status: string;
  status_code: number;
  data: {
    id: number;
    nama: string;
    harga: number;
    ukuran: string;
    warna: string;
  }[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {
  const data = [
    {
      id: 1,
      nama: "Kaos Polos",
      harga: 50000,
      ukuran: "M",
      warna: "Putih",
    },
    {
      id: 2,
      nama: "Kemeja Flanel",
      harga: 150000,
      ukuran: "L",
      warna: "Merah",
    },
  ];
  res.status(200).json({
    status: "success",
    status_code: 200,
    data: data,
  });
}
