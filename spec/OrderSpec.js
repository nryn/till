describe("Order", function() {

  beforeEach(function() {
    order = new Order();
  });

  describe("add", function() {
    it("adds items to the order", function() {
      order.add("Cafe Latte");
      expect(Object.keys(order.items).length).toBeGreaterThan(0);
    });
  });

  describe("getList", function() {
    it("gets the list of items in the order", function() {
      order.add("Cafe Latte");
      expect(order.getItems()).toEqual({"Cafe Latte": 1});
    });
  });

});
