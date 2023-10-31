/**
 * Created By Ryuu
 * Telnyx - MD
 * Thanks To Kaze
 */

const fs = require('fs')
const chalk = require('chalk')
const util = require('util');
const path = require('path')

exports.insertText = async (textToInsert) => {
const teksReferensi = 'switch (command) {';
fs.readFile('./message/seika.js', 'utf8', (err, data) => {
	if (err) {
		console.error(err);
		return;
	}
	const posisiReferensi = data.indexOf('switch (command) {');
	if (posisiReferensi === -1) {
		console.error('Teks referensi tidak ditemukan dalam file.');
		return;
	}
	const newData = data.slice(0, posisiReferensi + teksReferensi.length) + '\n' + textToInsert + data.slice(posisiReferensi + teksReferensi.length);
	fs.writeFile('./message/seika.js', newData, 'utf8', (err) => {
		if (err) {
			console.error(err);
		} else {
			console.log('Teks berhasil dimasukkan ke dalam file.');
		}
	});
});
}

exports.totalCase = async () => {
	const filePath = "./message/seika.js"
	const readFileAsync = util.promisify(fs.readFile);
	try {
		const data = await readFileAsync(filePath, 'utf8');
		const regex = /case\s+['"]([^'"]+)['"]:/g;
		const matches = data.match(regex);
		if (matches) {
			const caseCount = matches.length;
			console.log(`Jumlah "case" dalam file: ${caseCount}`);
			return caseCount;
		} else {
			console.log('Tidak ada "case" yang ditemukan dalam file.');
		}
	} catch (err) {
		console.error('Terjadi kesalahan:', err);
	}
}

exports.totalFitur = async () => {
	const filePath = "./message/seika.js"
	const readFileAsync = util.promisify(fs.readFile);
	try {
		const data = await readFileAsync(filePath, 'utf8');
		const regex = /break/g;
		const matches = data.match(regex);
		if (matches) {
			const caseCounts = matches.length;
			console.log(`Jumlah "case" dalam file: ${caseCounts}`);
			return caseCounts;
		} else {
			console.log('Tidak ada "case" yang ditemukan dalam file.');
		}
	} catch (err) {
		console.error('Terjadi kesalahan:', err);
	}
}

exports.dellCase = async (caseNameToRemove) => {
	const filePath = "./message/seika.js"
	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			console.error('Terjadi kesalahan:', err);
			return;
		}
		const regex = new RegExp(`case\\s+'${caseNameToRemove}':[\\s\\S]*?break;`, 'g');
		const modifiedData = data.replace(regex, '');
		fs.writeFile(filePath, modifiedData, 'utf8', (err) => {
			if (err) {
				console.error('Terjadi kesalahan saat menulis file:', err);
			return;
		}
		console.log(`Teks dari case '${caseNameToRemove}' telah dihapus dari file.`);
		});
	});
}

  let file = require.resolve(__filename)
  fs.watchFile(file, () => {
      fs.unwatchFile(file)
      console.log(chalk.redBright(`Update ${__filename}`))
      delete require.cache[file]
      require(file)
  })