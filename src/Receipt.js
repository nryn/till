var cafe = {
              "shopName": "The Coffee Connection",
              "address": "123 Lakeside Way",
              "phone": "16503600708",
              "prices": {
                "Cafe Latte": 4.75,
                "Flat White": 4.75,
                "Cappucino": 3.85,
                "Single Espresso": 2.05,
                "Double Espresso": 3.75,
                "Americano": 3.75,
                "Cortado": 4.55,
                "Tea": 3.65,
                "Choc Mudcake": 6.40,
                "Choc Mousse": 8.20,
                "Affogato": 14.80,
                "Tiramisu": 11.40,
                "Blueberry Muffin": 4.05,
                "Chocolate Chip Muffin": 4.05,
                "Muffin Of The Day": 4.55
              }
            }

function Receipt(order) {
  this.orders = order.getItems();
};

Receipt.prototype.subtotal = function() {
  var subtotal = 0.0;
  for (var item in this.orders) {
    var quantity = this.orders[item];
    var itemPrice = cafe.prices[item];
    subtotal += (itemPrice * quantity);
  }
  return subtotal;
};

Receipt.prototype.tax = function (rate = 0.08) {
  return this.subtotal() * rate;
};

Receipt.prototype.total = function () {
  return this.subtotal() + this.tax();
};

Receipt.prototype.print = function () {
  var string = "";
  for (var item in this.orders) { string += item + " x " + this.orders[item] + " = " + cafe.prices[item] + "\n" }
  string += "Subtotal = " + this.subtotal();
  string += "\nTax = " + this.tax();
  string += "\nTotal = " + this.total();
  return string;
};
