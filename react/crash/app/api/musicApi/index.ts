const url = "http://localhost:4000";

export type SearchParams = {
  keywords?: string;
  limit?: number;
  offset?: number;
  type?: string;
};
export enum SearchType {
  "signalsong" = "1", //单曲
  "zhuanji" = "10", //专辑
  "singer" = "100", //歌手
  "songlist" = "1000", //歌单
  "user" = "1002", //用户
  "MV" = "1004", //mv
  "songbook" = "1006", //歌词
  "diantai" = "1009", //电台
  "video" = "1014", //视频
  "zhonghe" = "1018", //综合
  "voice" = "2000", //声音，返回格式不一样
}
export async function defaultSearch():Promise<string|undefined> {
  try {
    const data = await fetch(`${url}/search/default`).then((response) =>
      response.json()
    );
    return data?.data?.realkeyword;
  } catch (error) {
    console.log(error, "err");
  }
  return undefined
}

export async function search(params?: SearchParams) {
  try {
    if (!params) {
      const data = await fetch(`${url}/search/default`).then((response) =>
        response.json()
      );

      params = { keywords: data?.data?.realkeyword };
    }
    const paramsStr = params.limit
      ? `&limit=${params.limit}`
      : params.offset
      ? `&offset=${params.offset}`
      : params.type
      ? `&type=${params.type}`
      : "";
      console.log(params,'1111111')
    return fetch(`${url}/search?keywords=${params.keywords}${paramsStr}`).then(
      (response) => response.json()
    );
  } catch (error) {
    console.log(error, "err");
  }
  return undefined;
}

export async function songDetail(ids:string){
  try {
    const data = await fetch(`${url}/song/detail?ids=${ids}`).then((response) =>
      response.json()
    );
    return data;
  } catch (error) {
    console.log(error, "err");
  }
  return undefined
}