import { SslCommerzPayment } from "sslcommerz";
import catchAsync from "../../Utils/catchAsync.global";
import { v4 as uuidv4 } from 'uuid';
import config from "../../config";
//init
const paymentIntent = catchAsync(async (req, res) => {
    const { amount } = req.body;
    const productInfo = {
        total_amount: amount,
        currency: 'BDT',
        tran_id: uuidv4(),
        success_url: 'http://localhost:5000/success',
        fail_url: 'http://localhost:5000/failure',
        cancel_url: 'http://localhost:5000/cancel',
        ipn_url: 'http://localhost:5000/ipn',
        paymentStatus: 'pending',
        shipping_method: 'Courier',
        product_name: req.body.product_name,
        product_category: 'Electronic',
        product_profile: req.body.product_profile,
        product_image: req.body.product_image,
        cus_name: req.body.cus_name,
        cus_email: req.body.cus_email,
        cus_add1: 'Dhaka',
        cus_add2: 'Dhaka',
        cus_city: 'Dhaka',
        cus_state: 'Dhaka',
        cus_postcode: '1000',
        cus_country: 'Bangladesh',
        cus_phone: '01711111111',
        cus_fax: '01711111111',
        ship_name: req.body.cus_name,
        ship_add1: 'Dhaka',
        ship_add2: 'Dhaka',
        ship_city: 'Dhaka',
        ship_state: 'Dhaka',
        ship_postcode: 1000,
        ship_country: 'Bangladesh',
        multi_card_name: 'mastercard',
        value_a: 'ref001_A',
        value_b: 'ref002_B',
        value_c: 'ref003_C',
        value_d: 'ref004_D'
    };

    console.log(config.storeId, config.storePassword)   
    const sslCommerz = new SslCommerzPayment(config.storeId, config.storePassword, false);
    sslCommerz.init(productInfo).then((data : any) => {
        const info = {...data, ...productInfo}
        // console.log(info)
        if (info.GatewayPageURL) {
             res.json(info.GatewayPageURL)
        }
        else {
            return res.status(400).json({
                message: "SSL session was not successful"
            })
        }
    })

    // res.status(200).send({ productInfo })
});

const success = catchAsync(async (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Payment Success</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f0f8f0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .success-container {
                    background-color: white;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                .success-icon {
                    color: #4CAF50;
                    font-size: 64px;
                    margin-bottom: 20px;
                }
                h1 {
                    color: #4CAF50;
                    margin-bottom: 15px;
                }
                p {
                    color: #666;
                    margin-bottom: 25px;
                }
                .home-button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 5px;
                    text-decoration: none;
                    font-weight: bold;
                    transition: background-color 0.3s;
                }
                .home-button:hover {
                    background-color: #45a049;
                }
            </style>
        </head>
        <body>
            <div class="success-container">
                <div class="success-icon">✓</div>
                <h1>Payment Successful!</h1>
                <p>Thank you for your purchase. Your transaction has been completed successfully.</p>
                <a href="/" class="home-button">Return to Home</a>
            </div>
        </body>
        </html>
    `)
})

const failure = catchAsync(async (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Payment Failed</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #fff0f0;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .failure-container {
                    background-color: white;
                    padding: 40px;
                    border-radius: 10px;
                    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    text-align: center;
                }
                .failure-icon {
                    color: #ff4444;
                    font-size: 64px;
                    margin-bottom: 20px;
                }
                h1 {
                    color: #ff4444;
                    margin-bottom: 15px;
                }
                p {
                    color: #666;
                    margin-bottom: 25px;
                }
                .retry-button {
                    background-color: #ff4444;
                    color: white;
                    padding: 12px 24px;
                    border: none;
                    border-radius: 5px;
                    text-decoration: none;
                    font-weight: bold;
                    margin-right: 10px;
                    transition: background-color 0.3s;
                }
                .retry-button:hover {
                    background-color: #ff3333;
                }
            </style>
        </head>
        <body>
            <div class="failure-container">
                <div class="failure-icon">✕</div>
                <h1>Payment Failed</h1>
                <p>We're sorry, but your payment could not be processed. Please try again.</p>
                <a href="/" class="retry-button">Try Again</a>
            </div>
        </body>
        </html>
    `)
})



export const paymentController = {
    paymentIntent,
    success,
    failure
};

