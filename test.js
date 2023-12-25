// test.js
const chai = require('chai');
const expect = chai.expect;

const { tambahkan, kali } = require('./app');

describe('Pengujian Fungsi Matematika', () => {
  describe('Fungsi Penambahan', () => {
    it('Harus mengembalikan hasil penambahan yang benar', () => {
      const hasil = tambahkan(2, 3);
      expect(hasil).to.equal(5);
    });

    it('Harus mengembalikan hasil penambahan yang benar untuk nilai negatif', () => {
      const hasil = tambahkan(-2, 3);
      expect(hasil).to.equal(1);
    });
  });

  describe('Fungsi Perkalian', () => {
    it('Harus mengembalikan hasil perkalian yang benar', () => {
      const hasil = kali(2, 3);
      expect(hasil).to.equal(6);
    });

    it('Harus mengembalikan hasil perkalian yang benar untuk nilai nol', () => {
      const hasil = kali(5, 0);
      expect(hasil).to.equal(0);
    });
  });
});
