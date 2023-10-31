const axios = require("axios")
const cheerio = require("cheerio")
const { pickRandom } = require('../function/myfunc')

exports.CerpenHorror = async () => {
 try {
    const getUrl = async () => {
      const randomNumber = Math.floor(Math.random() * 127)
      const { data } = await axios.get(`https://cerpenmu.com/category/cerpen-horor-hantu/page/${randomNumber}`)
      const $ = cheerio.load(data)
      let result = []
      $("div#wrap > #content > article > article").each(function () {
        result.push($(this).find("h2 > a").attr("href"))
      })
      return pickRandom(result)
    }
    const url = await getUrl()
    const { data } = await axios.get(url)
    let $ = cheerio.load(data)
    const result = {
      status: true,
      title: $("#content > article > h1").text(),
      creator: $("#content > article > a:nth-child(2)").text(),
      category: $("#content > article > a:nth-child(4)").text(),
      story: $("#content > article > p").text().split("Cerpen Karangan")[0]
    }
    return result
  } catch (err) {
    const result = {
      status: false,
      message: String(err)
    }
  }
}


exports.CerpenSearch = async (category) => {
    return new Promise(async (resolve, reject) => {
        try {
            let title = category.toLowerCase().replace(/[()*]/g, "");
            let judul = title.replace(/\s/g, "-");
            let page = Math.floor(Math.random() * 3);
            const response = await axios.get('http://cerpenmu.com/category/cerpen-' + judul + '/page/' + page);
            const $ = cheerio.load(response.data);
            let link = [];
            $('article.post').each(function (a, b) {
                link.push($(b).find('a').attr('href'));
            });
            let random = link[Math.floor(Math.random() * link.length)];
            const res = await axios.get(random);
            const $$ = cheerio.load(res.data);
            let hasil = {
                title: $$('#content > article > h1').text(),
                author: $$('#content > article').text().split('Cerpen Karangan: ')[1].split('Kategori: ')[0],
                kategori: $$('#content > article').text().split('Kategori: ')[1].split('\n')[0],
                lolos: $$('#content > article').text().split('Lolos moderasi pada: ')[1].split('\n')[0],
                cerita: $$('#content > article > p').text()
            };
            resolve(hasil);
        } catch (error) {
            reject(error);
        }
    });
};