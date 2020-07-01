const { Movie, Sentence, Music } = require('./classic');
class Art {
  static async getData(art_id, type, useScope = true) {
    const finder = {
      where: {
        id: art_id,
      },
    };
    let art = null;
    const scope = useScope ? 'bh' : null;
    switch (type) {
      case 100:
        art = await Movie.scope(scope).findOne(finder);
        break;
      case 200:
        art = await Music.scope(scope).findOne(finder);
        break;
      case 300:
        art = await Sentence.scope(scope).findOne(finder);
        break;
      case 400:
        break;
      default:
        break;
    }
    return art;
  }
}
module.exports = { Art };
