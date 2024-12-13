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
            return res.send({gatewayPageURL : info.GatewayPageURL})
        }
        else {
            return res.status(400).json({
                message: "SSL session was not successful"
            })
        }
    })

    // res.status(200).send({ productInfo })
});

export const paymentController = {
    paymentIntent,
};

