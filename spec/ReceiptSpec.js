describe("Receipt", function() {

  beforeEach(function() {
    order = {
      getItems: function(){return {"Cafe Latte": 1}}
    }
    receipt = new Receipt(order);
  });

  describe("subtotal", function() {
    it("should be able to add up the prices of the items", function() {
      expect(receipt.subtotal()).toEqual(4.75);
    });
  });

  describe("tax", function() {
    it("should be able to calculate 8% tax", function() {
      expect(receipt.tax()).toEqual(0.38);
    });
  });

  describe("total", function() {
    it("should be able to calculate the total with tax included", function() {
      expect(receipt.total()).toEqual(5.13);
    });
  });

  describe("print", function() {
    it("should give a string with the receipt items", function() {
      expect(receipt.print()).toEqual("Cafe Latte x 1 = 4.75\nSubtotal = 4.75\nTax = 0.38\nTotal = 5.13");
    });
  });

});
