const PDFDocument = require('pdfkit');

exports.gerarAta = (sessao, votos) => {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    let filename = `ata-sessao-${sessao._id}.pdf`;
    let chunks = [];

    doc.fontSize(18).text(`Ata de Votação - ${sessao.titulo}`, 100, 100);
    doc.moveDown(2);
    doc.fontSize(12).text(`Data: ${sessao.data.toLocaleDateString()}`, 100);
    doc.moveDown(1);
    doc.text(`Total de Votos: ${votos.length}`);

    votos.forEach((voto, index) => {
      doc.text(`${index + 1}. Usuário ${voto.usuarioId} votou: ${voto.opcao}`);
    });

    doc.pipe(
      require('fs').createWriteStream(`atas/${filename}`)
    ).on('finish', () => resolve(filename));

    doc.end();
  });
};
