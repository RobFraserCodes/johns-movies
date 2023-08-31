import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
    const token = process.env.NEXT_PUBLIC_TMDB_TOKEN;
    const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
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
        return new Response(JSON.stringify(data));
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

