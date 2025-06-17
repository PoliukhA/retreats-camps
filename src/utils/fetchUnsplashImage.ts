const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;


export async function fetchUnsplashImage(query: string): Promise<string | null> {
  try {
    const res = await fetch(
      `https://api.unsplash.com/photos/random?query=${query}&orientation=landscape&client_id=${accessKey}`,
    );

    if (!res.ok) throw new Error('Unsplash error');
    const data = await res.json();
    return data.urls.small; // или full/thumb/raw
  } catch (err) {
    console.error(err);
    return null;
  }
}
