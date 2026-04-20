// cspell:ignore rapidapi

type Definition = {
  word: string;
  phonetic: string;
  phonetics: unknown[];
  meanings: unknown[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
};

export async function lookup(word: string): Promise<string | undefined> {
  return fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${encodeURIComponent(word)}`, {
    headers: {
      'x-rapidapi-host': 'lingua-robot.p.rapidapi.com',
      'x-rapidapi-key': process.env.RAPID_API_KEY!,
    },
  }).then(async (response) => {
    if (response.ok) {
      const json = (await response.json()) as Definition[];
      console.log(word, json);
      return json[0].phonetic;
    }

    console.log(word, response.statusText);
    return undefined;
  });
}

if (import.meta.main) {
  console.log(await lookup(process.argv[2] || 'example'));
}
