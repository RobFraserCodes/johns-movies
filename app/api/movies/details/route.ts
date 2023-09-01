import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    let movieId = req.nextUrl.searchParams.get('id');
    const token = process.env.NEXT_PUBLIC_TMDB_TOKEN;
    const url = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
    const auth = `Bearer ${token}`;
    
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: auth
      }
    };

    try {
        const response = await fetch(url, options);
        if(!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        return new Response(JSON.stringify(data));
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

