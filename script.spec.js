describe('funcsions', () => {
  describe('forEach', () => {
      it('should equal mathod forEach', () => {
          const q = [1, 2, 3, 4, 5];
          
          expect(forEach(q, sum)).to.equal(q.forEach(sum));
      });
  });
  describe('map', () => {
      it('should equal mathod map', () => {
          const q = [1, 2, 3, 4, 5];
          const e = map(q, sum);
          const b = q.map(sum);
          const ret = (value, i) => {
              return value;
          };

          expect(e.forEach(ret)).to.equal(b.forEach(ret));
      });
  });
  describe('filter', () => {
      it('should equal mathod filter', () => {
          const q = [1, 2, 3, 4, 5];
          const e = filter(q, multiple);
          const b = q.filter(multiple);
          const ret = (value, i) => {
              return value;
          };
          expect(e.forEach(ret)).to.equal(b.forEach(ret));
      });
  });
  describe('some', () => {
      it('should equal mathod some', () => {
          const q = [1, 2, 3, 4, 5];
          const ret = (value, i) => {
              return value > 3;
          };
          expect(some(q, ret)).to.equal(q.some(ret));
      });
  });
  describe('every', () => {
      it('should equal mathod every', () => {
          const q = [1, 2, 3, 4, 5];
          const ret = (value, i) => {
              return value > 3;
          };
          expect(every(q, ret)).to.equal(q.every(ret));
      });
  });
  describe('reduce', () => {
      it('should equal mathod reduce', () => {
          const q = [1, 2, 3, 4, 5];
          const ret = (value, num) => {
              return value + num;
          };
          expect(reduce(q, ret, 0)).to.equal(q.reduce(ret, 0));
      });
  });
  describe('find', () => {
      it('should equal mathod find', () => {
          const q = [1, 2, 3, 4, 5];
          const ret = (value, i) => {
              return value > 3;
          };
          expect(find(q, ret)).to.equal(q.find(ret));
      });
  });
})    
