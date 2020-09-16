export class Gimage {
  constructor(giphyResponse) {
    try {
      this.url = giphyResponse.images.original.url
    } catch (e) {
      this.url = '//placehold.it/200x200'
    }
  }
}