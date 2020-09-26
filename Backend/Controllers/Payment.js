const Razorpay = require('razorpay');

exports.payMoney = async(req, res, next) => {

    console.log("Inside payment");
    let instance = new Razorpay({
        key_id: 'rzp_test_BmH3Ojs7ejXYQS',
        key_secret: 'u5fgBbzxuvlR6HwR53zIwxX6'
    });
    const amount = "300";
    const currency = "INR";
    const receipt = "5u001";
    const payment_capture = '1';
    instance.orders.create({ amount, currency, receipt, payment_capture }).then(data => {
        console.log(data);
        next();
    }).catch(err => {
        console.log(err);
        next();
    })
};